import{cT as e,b as i,d as s,g as o,h as t,o as r,i as a,w as p,j as n}from"./index.cf365317.js";import{A as d}from"./index.fbe41d70.js";import{h as m,_ as j}from"./index.b75404bd.js";import{_ as c}from"./index.9bd36aa1.js";import{u as l}from"./useForm.c2bcb6ec.js";import"./vendor.3b1829c7.js";import"./index.ce4dce0a.js";import"./index.a947876e.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.dfb4a59a.js";import"./isEqual.a74a7c19.js";import"./get.719a4219.js";import"./_baseProperty.74f89655.js";import"./toInteger.4b5728ae.js";import"./index.161c7f6b.js";import"./index.9e4baf11.js";import"./SearchOutlined.70021315.js";import"./EyeOutlined.37772c3d.js";import"./index.acfd6410.js";import"./CheckOutlined.e5d7bf16.js";import"./DownOutlined.a5bc93c0.js";import"./index.8749b4fc.js";import"./colors.31ba1fd6.js";import"./index.444ab33f.js";import"./UpOutlined.da4838f7.js";import"./index.fb5bb62b.js";import"./RightOutlined.dff2a05b.js";import"./RedoOutlined.f186bbf9.js";import"./index.0444d019.js";import"./EllipsisOutlined.45abe0a5.js";import"./types.d79f185c.js";import"./Tree.41dfced6.js";import"./util.2327827f.js";import"./useAttrs.ea7f6219.js";/* empty css              */import"./uuid.20e2b0e6.js";import"./index.1077fb7c.js";import"./DeleteOutlined.ce3d1c59.js";import"./index.5622acee.js";import"./useTimeout.cb6e36e1.js";import"./useWindowSizeFn.308a0bee.js";import"./index.eb3022f0.js";import"./index.0b90850f.js";import"./domUtils.fbaa4cd3.js";import"./_stringToArray.8266c95f.js";import"./useScrollTo.e29c35ef.js";import"./animation.5370f8e0.js";import"./FullscreenOutlined.d0ce88af.js";import"./index.607b19dc.js";import"./index.579d8600.js";import"./index.f96d6e91.js";import"./LeftOutlined.9278b1ed.js";import"./download.c885af96.js";import"./index.327c61a8.js";import"./index.a1bfa9a8.js";import"./usePageContext.1152815b.js";import"./transButton.43a89275.js";import"./ArrowLeftOutlined.949c5d9e.js";const{uploadUrl:f=""}=i();function u(i,s){return e.uploadFile({url:f,onUploadProgress:s},i)}const b=[{field:"field1",component:"Upload",label:"字段1",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:u}}];var x=s({components:{BasicUpload:m,BasicForm:j,PageWrapper:c,[d.name]:d},setup(){const{createMessage:e}=o(),[i]=l({labelWidth:120,schemas:b,actionColOptions:{span:16}});return{handleChange:i=>{e.info(`已上传文件${JSON.stringify(i)}`)},uploadApi:u,register:i}}});x.render=function(e,i,s,o,d,m){const j=t("a-alert"),c=t("BasicUpload"),l=t("BasicForm"),f=t("PageWrapper");return r(),a(f,{title:"上传组件示例"},{default:p((()=>[n(j,{message:"基础示例"}),n(c,{maxSize:20,maxNumber:10,onChange:e.handleChange,api:e.uploadApi,class:"my-5"},null,8,["onChange","api"]),n(j,{message:"嵌入表单,加入表单校验"}),n(l,{onRegister:e.register,class:"my-5"},null,8,["onRegister"])])),_:1})};export default x;