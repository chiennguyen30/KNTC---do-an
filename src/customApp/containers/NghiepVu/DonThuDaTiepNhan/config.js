import { apiGetAuth, apiPostAuth } from "../../../../api";
import server from "../../../../settings";
import { getDefaultPageSize } from "../../../../helpers/utility";

const apiUrl = {
  danhsachdonthu:
    "https://kntcv2internapi.gosol.com.vn/api/v2/XuLyDon/DonThuDaTiepNhan",
  chitietdonthu:
    "https://kntcv2internapi.gosol.com.vn/api/v2/TiepDan/KhieuToLan2ByDonID",
  // themloaiketqua: server.apiTemp + 'DanhMucLoaiKetQua/ThemMoiLoaiKetQua',
  // capnhatloaiketqua: server.apiTemp + 'DanhMucLoaiKetQua/CapNhatLoaiKetQua',
  xoadonthu:
    "https://kntcv2internapi.gosol.com.vn/api/v2/SoTiepNhan_GianTiep/Delete",
  danhSachLoaiKhieuToCha:
    server.apiTemp + "DanhMucLoaiKhieuTo/DanhSachLoaiKhieuToCha",
  huonggiaiquyet:
    "https://kntcv2internapi.gosol.com.vn/api/v2/DanhMucHuongGiaiQuyet/DanhSachHuongGiaiQuyet",
  trinhlanhdao: "https://kntcv2internapi.gosol.com.vn/api/v2/XuLyDon/TrinhLD",
};
const api = {
  DonThuDaTiepNhan: (param) => {
    return apiGetAuth(apiUrl.danhsachdonthu, {
      ...param,
      PageNumber: param.PageNumber ? param.PageNumber : 1,
      PageSize: param.PageSize ? param.PageSize : getDefaultPageSize(),
    });
  },
  ChiTietDonThu: (param) => {
    return apiGetAuth(apiUrl.chitietdonthu, {
      ...param,
    });
  },
  // ThemLoaiKetQua: (param) => {
  //   return apiPostAuth(apiUrl.themloaiketqua, {
  //     ...param,
  //   });
  // },
  // CapNhatLoaiKetQua: (param) => {
  //   return apiPostAuth(apiUrl.capnhatloaiketqua, {
  //     ...param,
  //   });
  // },
  XoaDonThu: (param) => {
    return apiPostAuth(apiUrl.xoadonthu, param);
  },
  DanhSachLoaiKhieuToCha: (param) => {
    return apiGetAuth(apiUrl.danhSachLoaiKhieuToCha, {
      ...param,
    });
  },
  DanhSachHuongGiaiQuyet: (param) => {
    return apiGetAuth(apiUrl.huonggiaiquyet, {
      ...param,
    });
  },
  TrinhLanhDao: (param) => {
    return apiPostAuth(apiUrl.trinhlanhdao, param);
  },
};

export default api;
