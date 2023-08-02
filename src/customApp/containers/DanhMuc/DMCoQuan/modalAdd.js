import React, { Component, useEffect, useState } from "react";
import actions from "../../../redux/DanhMuc/DMDiaGioi/actions";
import Constants, {
  MODAL_NORMAL,
  ITEM_LAYOUT,
  REQUIRED,
  ITEM_LAYOUT2,
  ITEM_LAYOUT_SMALL,
} from "../../../../settings/constants";
import { Form, Row, Col } from "antd";
import {
  Button,
  Modal,
  Input,
  Textarea,
} from "../../../../components/uielements/exportComponent";
import Checkbox from "../../../../components/uielements/checkbox";
import { InputFormatSpecific } from "../../../../components/uielements/exportComponent";

import TreeSelect from "../../../../components/uielements/treeSelect";
import Select, { Option } from "../../../../components/uielements/select";
import { _debounce } from "../../../../helpers/utility";
import api from "./config";
import apiDiaGioi from "../DMDiaGioi/config";
import layout, { StyledModalCoQuan } from "./styled";
const { Item, useForm } = Form;
// const { Item } = Form;

const ModalAdd = ({
  visible,
  onCancel,
  dataModalAdd,
  onCreate,
  DanhSachCoQuan,
}) => {
  const [form] = useForm();
  const [capDonVi, setCapDonVi] = useState([]);
  const [thamQuyen, setThamQuyen] = useState([]);
  const [tinhCha, setTinhCha] = useState();
  const [diaGioi, setDiaGioi] = useState({
    tinh: [],
    huyen: [],
    xa: [],
  });

  useEffect(() => {
    if (dataModalAdd) {
      const parentID = dataModalAdd.CoQuanChaID;
      let Parent;
      const findParentFromTree = (list, ParentID) => {
        list.forEach((item) => {
          if (item.Children) {
            if (item.ID === ParentID) {
              Parent = item.Ten;
            } else {
              findParentFromTree(item.Children, ParentID);
            }
          } else {
            if (item.ID === ParentID) {
              Parent = item.Ten;
            }
          }
        });
      };
      findParentFromTree(DanhSachCoQuan, parentID);
      console.log(Parent, ".......parent");
    }

    form.setFieldsValue({
      ...dataModalAdd,

      // CapID: dataModalAdd.CapID,
      TenCoQuanCha: dataModalAdd?.CoQuanChaID
        ? dataModalAdd.TenCoQuanCha
        : DanhSachCoQuan[0]?.Ten,
      TinhID: dataModalAdd?.Data?.TinhID ? dataModalAdd.Data.TinhID : null,
    });
    // let TinhID = JSON.parse(
    //   localStorage.getitem("data_config")
    // )?.coQuanThanhTraTinhID;
    // api.chiTietCoQuan(dataModalAdd?.CoQuanChaID).then((res) => res.data.Data);
    api.danhSachCacCapDonVi().then((res) => setCapDonVi(res.data.Data));
    api.danhSachThamQuyen().then((res) => setThamQuyen(res.data.Data));
    apiDiaGioi
      .danhSachDiaGioi()
      .then((res) => setDiaGioi({ ...diaGioi, tinh: res.data.Data }));
  }, []);

  const onOk = async (e) => {
    e.preventDefault();
    const value = await form.validateFields();
    // console.log(value);
    onCreate({
      ...value,
      CoQuanChaID: dataModalAdd?.CoQuanChaID
        ? dataModalAdd.CoQuanChaID
        : DanhSachCoQuan[0]?.ID,
    });
  };
  const onTinhChange = (value) => {
    apiDiaGioi
      .danhSachDiaGioi({ ID: value, Cap: 2 })
      .then((res) => setDiaGioi({ ...diaGioi, huyen: res.data.Data }));
  };
  const onHuyenChange = (value) => {
    apiDiaGioi
      .danhSachDiaGioi({ ID: value, Cap: 3 })
      .then((res) => setDiaGioi({ ...diaGioi, xa: res.data.Data }));
  };
  return (
    <>
      <Modal
        open={visible}
        title="Thêm cơ quan đơn vị"
        onCancel={onCancel}
        width="900px"
        footer={[
          <Button key="back" onClick={onCancel}>
            Hủy
          </Button>,
          <Button
            key="submit"
            type="primary"
            htmlType="submit"
            onClick={onOk}
            form="myForm"
          >
            Lưu
          </Button>,
        ]}
      >
        <Form
          form={form}
          id="myForm"
          initialValues={{
            TenCoQuanCha: DanhSachCoQuan[0]?.Ten || "",
            CQCoHieuLuc: false,
            QTVanThuTiepDan: false,
            CapUBND: false,
            QTVanThuTiepNhanDon: false,
            CapThanhTra: false,
            SuDungQuyTrinh: false,
            SuDungPM: false,
            SuDungQuyTrinhGQ: false,
            TinhID: null,
            HuyenID: null,
            XaID: null,
          }}
        >
          <Row justify="space-between" gutter={[32, 8]}>
            <Col {...layout.colFull}>
              <Item
                label="Cơ quan cha"
                name={"TenCoQuanCha"}
                rules={[REQUIRED]}
                {...layout.formItem1}
              >
                <Select disabled>
                  <Option>{dataModalAdd?.TenCoQuanCha}</Option>
                </Select>
              </Item>
            </Col>
            <Col {...layout.colHaft}>
              <Item
                label="Mã cơ quan"
                name={"MaCQ"}
                rules={[REQUIRED]}
                {...layout.formItem2}
              >
                <InputFormatSpecific />
              </Item>
            </Col>
            <Col {...layout.colHaft}>
              <Item
                label="Tên cơ quan"
                name={"TenCoQuan"}
                rules={[REQUIRED]}
                labelAlign="left"
                {...layout.formItem2}
              >
                <Input />
              </Item>
            </Col>
            <Col {...layout.colHaft}>
              <Item
                label="Cấp"
                name={"CapID"}
                rules={[REQUIRED]}
                {...layout.formItem2}
              >
                <Select>
                  {capDonVi.map((item, index) => (
                    <Option key={index} value={item.Cap}>
                      {item.TenCap}
                    </Option>
                  ))}
                </Select>
              </Item>
            </Col>
            <Col {...layout.colHaft}>
              <Item
                label="Thẩm quyền"
                name={"ThamQuyenID"}
                rules={[REQUIRED]}
                {...layout.formItem2}
              >
                <Select>
                  {thamQuyen.map((item, index) => (
                    <Option key={index} value={item.ThamQuyenID}>
                      {item.TenThamQuyen}
                    </Option>
                  ))}
                </Select>
              </Item>
            </Col>
          </Row>
          <Row justify="space-between" gutter={[10, 8]}>
            <Col {...layout.colThirt}>
              <Item
                label="Tỉnh"
                name={"TinhID"}
                labelAlign="left"
                {...layout.formItem3}
              >
                <Select onChange={onTinhChange} listHeight={100} allowClear>
                  {diaGioi.tinh.map((item, index) => (
                    <Option key={index} value={item.ID}>
                      {item.Ten}
                    </Option>
                  ))}
                </Select>
              </Item>
            </Col>
            <Col {...layout.colThirt}>
              <Item
                label="Huyện"
                name={"HuyenID"}
                labelAlign="right"
                {...layout.formItem3}
              >
                <Select
                  allowClear
                  name={"HuyenID"}
                  listHeight={100}
                  onChange={onHuyenChange}
                >
                  {diaGioi.huyen.map((item, index) => (
                    <Option key={index} value={item.ID}>
                      {item.Ten}
                    </Option>
                  ))}
                </Select>
              </Item>
            </Col>
            <Col {...layout.colThirt}>
              <Item
                label="Xã"
                name={"XaID"}
                labelAlign="right"
                {...layout.formItem3}
              >
                <Select listHeight={100} allowClear>
                  {diaGioi.xa.map((item, index) => (
                    <Option key={index} value={item.ID}>
                      {item.Ten}
                    </Option>
                  ))}
                </Select>
              </Item>
            </Col>
          </Row>
          <StyledModalCoQuan>
            <Row className="checkbox-coquan">
              <Col span={12}>
                <Item name="CQCoHieuLuc" valuePropName="checked" label="">
                  <Checkbox>Cơ quan có hiệu lực</Checkbox>
                </Item>
              </Col>
              <Col span={12}>
                <Item name="QTVanThuTiepDan" valuePropName="checked">
                  <Checkbox>Quy trình cán bộ tiếp dân</Checkbox>
                </Item>
              </Col>
              <Col span={12}>
                <Item name="CapUBND" valuePropName="checked">
                  <Checkbox>Cơ quan cấp UBND</Checkbox>
                </Item>
              </Col>
              <Col span={12}>
                <Item name="QTVanThuTiepNhanDon" valuePropName="checked">
                  <Checkbox>Quy trình văn thư tiếp nhận đơn</Checkbox>
                </Item>
              </Col>
              <Col span={12}>
                <Item name="CapThanhTra" valuePropName="checked">
                  <Checkbox>Cơ quan cấp thanh tra</Checkbox>
                </Item>
              </Col>
              <Col span={12}>
                <Item name="SuDungQuyTrinh" valuePropName="checked">
                  <Checkbox>
                    Sử dụng quy trình tiếp công dân, xử lí đơn phức tạp
                  </Checkbox>
                </Item>
              </Col>
              <Col span={12}>
                <Item name="SuDungPM" valuePropName="checked">
                  <Checkbox>Cơ quan thuộc hệ thống phần mềm</Checkbox>
                </Item>
              </Col>
              <Col span={12}>
                <Item name="SuDungQuyTrinhGQ" valuePropName="checked">
                  <Checkbox>Sử dụng quy trình giải quyết phức tạp</Checkbox>
                </Item>
              </Col>
            </Row>
          </StyledModalCoQuan>
        </Form>
      </Modal>
    </>
  );
};

export default React.memo(ModalAdd);
