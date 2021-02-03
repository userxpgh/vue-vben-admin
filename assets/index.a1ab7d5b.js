import{aV as e,aW as o,d as t,r as l,L as a,e as r,cp as s,cq as d,h as i,o as n,i as m,j as c,bw as u,m as p}from"./index.13aefb6f.js";import{a as f}from"./index.527ce582.js";import{_ as g}from"./index.28ae351f.js";import"./vendor.3b1829c7.js";import"./index.7726fdfd.js";import"./domUtils.9ad9e2d5.js";import"./_stringToArray.7cbaaf1a.js";import"./RightOutlined.6352f3be.js";/* empty css              */import"./useTimeout.e3e2a7dc.js";import"./useScrollTo.6e2b4a93.js";import"./animation.3a6b162f.js";import"./index.d1f698f3.js";import"./index.f32a4577.js";import"./EllipsisOutlined.9a8cdd6b.js";import"./types.b30def48.js";import"./isEqual.10a7398e.js";import"./toInteger.03d4fa11.js";import"./DownOutlined.fce9d8c3.js";import"./index.f3e0521d.js";import"./usePageContext.fb1fd52f.js";import"./transButton.02b1ac87.js";import"./ArrowLeftOutlined.745a5650.js";const b=e((()=>o((()=>import("./index.3f4c8033.js")),["/assets/index.3f4c8033.js","/assets/vendor.3b1829c7.js","/assets/vendor.4a5fa02d.css","/assets/index.13aefb6f.js","/assets/index.52403077.css","/assets/download.72bbbc17.js"])));var v=t({components:{CollapseContainer:f,QrCode:b,PageWrapper:g},setup(){const e=l(null);return{qrCodeUrl:"https://www.vvbin.cn",LogoImg:a,download:function(){const o=r(e);o&&o.download("文件名")},qrRef:e}}});const j=u("data-v-f8968a82");s("data-v-f8968a82");const x={class:"flex flex-wrap"},q=p(" 下载 "),C=c("div",{class:"msg"}," (在线logo会导致图片跨域，需要下载图片需要自行解决跨域问题) ",-1);d();const _=j(((e,o,t,l,a,r)=>{const s=i("QrCode"),d=i("CollapseContainer"),u=i("a-button"),p=i("PageWrapper");return n(),m(p,{title:"二维码组件使用示例"},{default:j((()=>[c("div",x,[c(d,{title:"基础示例",canExpan:!0,class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl},null,8,["value"])])),_:1}),c(d,{title:"渲染成img标签示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl,tag:"img"},null,8,["value"])])),_:1}),c(d,{title:"配置样式示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl,options:{color:{dark:"#55D187"}}},null,8,["value"])])),_:1}),c(d,{title:"本地logo示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl,logo:e.LogoImg},null,8,["value","logo"])])),_:1}),c(d,{title:"在线logo示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl,logo:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",options:{color:{dark:"#55D187"}}},null,8,["value"])])),_:1}),c(d,{title:"logo配置示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl,logo:{src:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",logoSize:.2,borderSize:.05,borderRadius:50,bgColor:"blue"}},null,8,["value","logo"])])),_:1}),c(d,{title:"下载示例",class:"text-center qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl,ref:"qrRef",logo:e.LogoImg},null,8,["value","logo"]),c(u,{class:"mb-2",type:"primary",onClick:e.download},{default:j((()=>[q])),_:1},8,["onClick"]),C])),_:1}),c(d,{title:"配置大小示例",class:"text-center qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl,width:300},null,8,["value"])])),_:1})])])),_:1})}));v.render=_,v.__scopeId="data-v-f8968a82";export default v;
