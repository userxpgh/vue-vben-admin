import{d as e,aF as s,aK as t,$ as i,bR as a,h as r,o,i as p,j as n,w as m,b0 as d,aL as l,aM as c,T as u,bx as f}from"./index.2b0223a6.js";import{I as g}from"./index.94cbe5a2.js";import{_ as j}from"./index.2eb743af.js";import"./vendor.0d1494f4.js";import"./LeftOutlined.81d26ae1.js";import"./RightOutlined.533f9bac.js";import"./index.a32f4879.js";import"./index.b0a8084c.js";import"./EllipsisOutlined.abfccc6f.js";import"./types.c82b6381.js";import"./isEqual.278dbd3b.js";import"./toInteger.3a23a5d6.js";import"./DownOutlined.2647a59c.js";import"./index.95c10fda.js";import"./index.a0eacfb8.js";import"./usePageContext.4951455d.js";import"./transButton.9655cdf7.js";import"./ArrowLeftOutlined.668881e5.js";var b=e({name:"ImagePreview",components:{Image:g,PreviewGroup:g.PreviewGroup},props:{functional:s.bool,imageList:{type:Array}},setup(e){const{prefixCls:s}=t("image-preview");return{prefixCls:s,getImageList:i((()=>{const{imageList:s}=e;return s?s.map((e=>a(e)?{src:e,placeholder:!1}:e)):[]}))}}});b.render=function(e,s,t,i,a,g){const j=r("Image"),b=r("PreviewGroup");return o(),p("div",{class:e.prefixCls},[n(b,null,{default:m((()=>[!e.imageList||e.$slots.default?d(e.$slots,"default",{key:0}):(o(!0),p(l,{key:1},c(e.getImageList,(e=>(o(),p(j,u({key:e.src},e),f({_:2},[e.placeholder?{name:"placeholder",fn:m((()=>[n(j,u(e,{src:e.placeholder,preview:!1}),null,16,["src"])]))}:void 0]),1040)))),128))])),_:1})],2)};const v=["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216","https://picsum.photos/id/68/346/216"];var x=e({components:{PageWrapper:j,ImagePreview:b},setup:()=>({imgList:v})});x.render=function(e,s,t,i,a,d){const l=r("ImagePreview"),c=r("PageWrapper");return o(),p(c,{title:"图片预览示例"},{default:m((()=>[n(l,{imageList:e.imgList},null,8,["imageList"])])),_:1})};export default x;