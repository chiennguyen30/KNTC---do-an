"use strict";(self.webpackChunkkkts=self.webpackChunkkkts||[]).push([[677,286],{44858:function(n,e,t){t.d(e,{c:function(){return s},Z:function(){return u}});var a,r=t(32014),i=t(17186),o=t(63463),c=t(15550),l=function(n){return(0,o.ZP)(n)(a||(a=(0,i.Z)(["\n  &.ant-checkbox-wrapper {\n    font-size: 13px;\n    color: ",";\n\n    .ant-checkbox {\n      top: inherit;\n    }\n\n    .ant-checkbox-checked .ant-checkbox-inner,\n    .ant-checkbox-indeterminate .ant-checkbox-inner {\n      background-color: ",";\n      border-color: ",";\n    }\n\n    .ant-checkbox:hover .ant-checkbox-inner,\n    .ant-checkbox-input:focus + .ant-checkbox-inner {\n      border-color: ",";\n    }\n\n    &:hover {\n      .ant-checkbox-inner {\n        border-color: ",";\n      }\n    }\n  }\n"])),(0,c.palette)("text",1),(0,c.palette)("primary",0),(0,c.palette)("primary",0),(0,c.palette)("primary",0),(0,c.palette)("primary",0))}(r.Z),s=r.Z.Group,u=l},71285:function(n,e,t){t.d(e,{Z:function(){return u}});t(72791);var a,r=t(17186),i=t(63463),o=t(17192),c=i.ZP.div(a||(a=(0,r.Z)(["\n    text-align: right;\n    display: inline-block;\n    flex: 1;\n    padding: 0 3px 0 0;\n    @media only screen and (max-width: 1336px) {\n        text-align: left;\n        display: block;\n        flex: none;\n        width: 100%;\n        padding: 0 0 10px 0;\n    }\n    button {\n        margin-right: 0px;\n        margin-left: 10px;\n        @media only screen and (max-width: 1336px) {\n            margin-left: 0px;\n            margin-right: 10px;\n        }\n    }\n"]))),l=(0,o.Z)(c),s=t(80184),u=function(n){return(0,s.jsx)(l,{children:n.children})}},41145:function(n,e,t){t.d(e,{z:function(){return i}});var a=t(50678),r=t(72791);function i(n){var e=(0,r.useState)(0),t=(0,a.Z)(e,2),i=t[0],o=t[1];return[i,function(){o(i+1)}]}},13677:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var a=t(18489),r=t(50678),i=t(57652),o=t(77027),c=t(71810),l=t(2778),s=t(72791),u=t(47375),d=t(52591),h=t(35667),f=t(71285),g=t(7111),Z=t(66914),x=t(36043),m=t(44858),p=t(35057),v=t(70297),T=t(55454),b=t(41145),P=t(4245),y=t(84739),j=(t(72426),t(33032)),k=t(84322),w=t.n(k),S=t(65331),B=t(10916),M=t(64422),L=(t(763),t(80184)),V=B.Z.Item,C=B.Z.useForm,z=function(n){var e=C(),t=(0,r.Z)(e,1)[0],i=(0,s.useState)(!0),o=(0,r.Z)(i,2),c=o[0],l=o[1],u=n.dataEdit,d=n.loading,h=n.visible,f=n.action;(0,s.useEffect)((function(){u&&u.LoaiVanBanID&&(console.log(u),t&&t.setFieldsValue((0,a.Z)((0,a.Z)({},u),{},{TrangThai:u.TrangThai?1:0})))}),[]);var g=function(){var e=(0,j.Z)(w().mark((function e(r){var i;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.next=3,t.validateFields();case 3:i=e.sent,n.onCreate((0,a.Z)((0,a.Z)({},i),{},{TrangThai:Boolean(i.TrangThai)}));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Z=function(){var n=(0,j.Z)(w().mark((function n(e,a){var r,i,o;return w().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.getFieldsValue();case 2:r=n.sent,i=r.MaVanBan,o=r.TenVanBan,l(!i||!o);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return(0,L.jsx)(v.u_,{title:"".concat("edit"===f?"S\u1eeda":"Th\xeam"," th\xf4ng tin lo\u1ea1i v\u0103n b\u1ea3n"),width:450,visible:h,onCancel:n.onCancel,footer:[(0,L.jsx)(v.zx,{onClick:n.onCancel,children:"H\u1ee7y"},"back"),(0,L.jsx)(v.zx,{htmlType:"submit",type:"primary",form:"formquoctich",loading:d,onClick:g,disabled:c,children:"L\u01b0u"},"submit")],children:(0,L.jsxs)(B.Z,{form:t,name:"formquoctich",initialValues:{TrangThai:1},onChange:Z,children:["edit"===f?(0,L.jsx)(V,{name:"LoaiVanBanID",hidden:!0}):"",(0,L.jsx)(V,(0,a.Z)((0,a.Z)({label:"M\xe3 V\u0103n B\u1ea3n",name:"MaVanBan"},S.ITEM_LAYOUT),{},{rules:[S.REQUIRED],children:(0,L.jsx)(v.PQ,{})})),(0,L.jsx)(V,(0,a.Z)((0,a.Z)({label:"T\xean V\u0103n B\u1ea3n",name:"TenVanBan"},S.ITEM_LAYOUT),{},{rules:[S.REQUIRED],children:(0,L.jsx)(v.II,{})})),(0,L.jsx)(V,(0,a.Z)((0,a.Z)({label:"Ghi Ch\xfa",name:"GhiChu"},S.ITEM_LAYOUT),{},{children:(0,L.jsx)(v.gx,{})})),(0,L.jsx)(V,(0,a.Z)((0,a.Z)({label:"\u0110ang s\u1eed d\u1ee5ng",name:"TrangThai"},S.ITEM_LAYOUT),{},{children:(0,L.jsxs)(M.ZP.Group,{name:"radiogroup",onChange:function(n){console.log("radio = ".concat(Boolean(n.target.value)))},children:[(0,L.jsx)(M.ZP,{value:1,children:"C\xf3"}),(0,L.jsx)(M.ZP,{value:0,children:"Kh\xf4ng"})]})}))]})})},I=t(31752),E=t(82622),D=t(79286);var N=(0,u.$j)((function(n){return console.log(n),(0,a.Z)((0,a.Z)({},n.DanhMucLoaiVanBanKemTheo),{},{role:(0,T.Ry)(n.Auth.role,"quan-ly-nam-hoc")})}),l.Z)((function(n){var e=(0,s.useState)(P.parse(n.location.search)),t=(0,r.Z)(e,2),l=t[0],u=t[1],j=(0,s.useState)({}),k=(0,r.Z)(j,2),w=k[0],S=k[1],B=(0,s.useState)(!1),M=(0,r.Z)(B,2),V=M[0],C=M[1],N=(0,s.useState)(""),q=(0,r.Z)(N,2),K=q[0],O=q[1],R=(0,b.z)(),H=(0,r.Z)(R,2),G=H[0],U=H[1],A=(0,s.useState)([]),_=(0,r.Z)(A,2),F=(_[0],_[1]),Y=(0,s.useState)(!1),Q=(0,r.Z)(Y,2),X=Q[0],$=Q[1];(0,s.useEffect)((function(){(0,T.ZZ)(l),n.getList(l)}),[l]),(0,s.useEffect)((function(){n.getList(l)}),[]);var J=function(n,e){var t=l,a={value:n,property:e},r=(0,T.mB)(t,a,null);u(r),F([])},W=function(){F([]),S({}),C(!1)},nn=function(e){return(0,L.jsxs)("div",{className:"action-btn",children:[(0,L.jsx)(c.Z,{title:"S\u1eeda",children:(0,L.jsx)(I.Z,{onClick:function(){return function(n){var e=n;console.log(n),O("edit"),y.Z.ChiTietLoaiVanBanKemTheo({VanBanID:e}).then((function(n){n.data.Status>0?(S(n.data.Data),U(),C(!0)):(o.ZP.destroy(),o.ZP.error(n.data.Message))})).catch((function(n){o.ZP.destroy(),o.ZP.error(n.toString())}))}(e.LoaiVanBanID)}})}),(0,L.jsx)(c.Z,{title:"X\xf3a",children:(0,L.jsx)(E.Z,{onClick:function(){return t=e.LoaiVanBanID,void i.Z.confirm({title:"X\xf3a D\u1eef Li\u1ec7u",content:"B\u1ea1n c\xf3 mu\u1ed1n x\xf3a lo\u1ea1i v\u0103n b\u1ea3n n\xe0y kh\xf4ng?",cancelText:"Kh\xf4ng",okText:"C\xf3",onOk:function(){$(!0),y.Z.XoaLoaiVanBanKemTheo({LoaiVanBanID:t}).then((function(e){e.data.Status>0?($(!1),n.getList((0,a.Z)((0,a.Z)({},l),{},{PageNumber:Math.ceil((tn-1)/l.PageSize)<l.PageNumber?Math.ceil((tn-1)/l.PageSize):l.PageNumber})),o.ZP.destroy(),o.ZP.success(e.data.Message),u((0,a.Z)((0,a.Z)({},l),{},{PageNumber:Math.ceil((tn-1)/l.PageSize)<l.PageNumber?Math.ceil((tn-1)/l.PageSize):l.PageNumber}))):(o.ZP.destroy(),o.ZP.error(e.data.Message))})).catch((function(n){o.ZP.destroy(),o.ZP.error(n.toString())}))}});var t}})})]})},en=n.DanhMucLoaiVanBanKemTheo,tn=n.TotalRow,an=(n.role,l.PageNumber?parseInt(l.PageNumber):1),rn=l.PageSize?parseInt(l.PageSize):(0,T.hL)(),on=[{title:"STT",width:"5%",align:"center",render:function(n,e,t){return(0,L.jsx)("span",{children:(an-1)*rn+(t+1)})}},{title:"M\xe3 v\u0103n b\u1ea3n",dataIndex:"MaVanBan",align:"left",width:"15%"},{title:"T\xean v\u0103n b\u1ea3n",dataIndex:"TenVanBan",align:"left",width:"25%"},{title:"Ghi ch\xfa",dataIndex:"GhiChu",align:"left",width:"35%"},{title:"\u0110ang s\u1eed d\u1ee5ng",dataIndex:"TrangThai",align:"center",width:"10%",render:function(n,e){return(0,L.jsx)(m.Z,{checked:e.TrangThai})}},{title:"Thao t\xe1c",width:"10%",align:"center",render:function(n,e){return nn(e)}}];return(0,L.jsxs)(d.Z,{children:[(0,L.jsx)(h.Z,{children:"Danh M\u1ee5c Lo\u1ea1i V\u0103n B\u1ea3n"}),(0,L.jsx)(f.Z,{children:(0,L.jsxs)(v.zx,{type:"primary",onClick:function(){O("add"),S({}),U(),C(!0)},children:[(0,L.jsx)(D.Z,{}),"Th\xeam m\u1edbi"]})}),(0,L.jsxs)(g.Z,{children:[(0,L.jsxs)(Z.Z,{children:[(0,L.jsxs)(p.ZP,{style:{width:"200px"},defaultValue:l.Status?"true"===l.Status?"\u0110ang s\u1eed d\u1ee5ng":"Kh\xf4ng s\u1eed d\u1ee5ng":void 0,placeholder:"Ch\u1ecdn tr\u1ea1ng th\xe1i",allowClear:!0,onChange:function(n){return J(n,"Status")},children:[(0,L.jsx)(Option,{value:!0,children:"\u0110ang s\u1eed d\u1ee5ng"}),(0,L.jsx)(Option,{value:!1,children:"Kh\xf4ng s\u1eed d\u1ee5ng"})]}),(0,L.jsx)(v.Vr,{allowClear:!0,defaultValue:l.Keyword,placeholder:"Nh\u1eadp m\xe3 ho\u1eb7c t\xean lo\u1ea1i v\u0103n b\u1ea3n ",style:{width:300},onSearch:function(n){return J(n,"keyword")}})]}),(0,L.jsx)(x.ZP,{columns:on,dataSource:en,onChange:function(n,e,t){var a=l,r={pagination:n,filters:e,sorter:t},i=(0,T.mB)(a,null,r);u(i),F([])},pagination:{showSizeChanger:!0,showTotal:function(n,e){return"T\u1eeb ".concat(e[0]," \u0111\u1ebfn ").concat(e[1]," tr\xean ").concat(n," k\u1ebft qu\u1ea3")},total:tn,current:an,pageSize:rn}})]}),(0,L.jsx)(z,{visible:V,dataEdit:w,action:K,loading:X,onCreate:function(e){$(!0),"add"===K&&y.Z.THemLoaiVanBanKemTheo(e).then((function(e){$(!1),e.data.Status>0?(o.ZP.destroy(),o.ZP.success(e.data.Message),W(),n.getList(l)):($(!1),o.ZP.destroy(),o.ZP.error(e.data.Message))})).catch((function(n){$(!1),o.ZP.destroy(),o.ZP.error(n.toString())})),"edit"===K&&y.Z.CapNhatLoaiVanBanKemTheo(e).then((function(e){e.data.Status>0?($(!1),o.ZP.destroy(),o.ZP.success(e.data.Message),W(),n.getList(l)):($(!1),o.ZP.destroy(),o.ZP.error(e.data.Message))})).catch((function(n){$(!1),o.ZP.destroy(),o.ZP.error(n.toString())}))},onCancel:W,DanhMucLoaiVanBanKemTheo:en},G)]})}))},82622:function(n,e,t){t.d(e,{Z:function(){return l}});var a=t(88428),r=t(72791),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},o=t(54963),c=function(n,e){return r.createElement(o.Z,(0,a.Z)((0,a.Z)({},n),{},{ref:e,icon:i}))};c.displayName="DeleteOutlined";var l=r.forwardRef(c)},31752:function(n,e,t){t.d(e,{Z:function(){return l}});var a=t(88428),r=t(72791),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},o=t(54963),c=function(n,e){return r.createElement(o.Z,(0,a.Z)((0,a.Z)({},n),{},{ref:e,icon:i}))};c.displayName="EditOutlined";var l=r.forwardRef(c)},79286:function(n,e,t){t.d(e,{Z:function(){return l}});var a=t(88428),r=t(72791),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},o=t(54963),c=function(n,e){return r.createElement(o.Z,(0,a.Z)((0,a.Z)({},n),{},{ref:e,icon:i}))};c.displayName="PlusOutlined";var l=r.forwardRef(c)}}]);
//# sourceMappingURL=677.fe523576.chunk.js.map