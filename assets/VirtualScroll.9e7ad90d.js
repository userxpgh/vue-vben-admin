import{aV as t,aW as e,d as i,cp as s,cq as a,h as r,o as d,i as o,j as l,l as m,bw as c,m as n}from"./index.5083dc91.js";import{D as p}from"./index.7cf3cb61.js";import{_ as u}from"./index.136e7d6e.js";import"./vendor.3b1829c7.js";import"./index.dcb73a74.js";import"./index.e7b0242c.js";import"./RightOutlined.e15855c8.js";import"./EllipsisOutlined.3b6bce0a.js";import"./types.7d0557e6.js";import"./isEqual.54d9b6d5.js";import"./toInteger.368318f3.js";import"./DownOutlined.ad3384b4.js";/* empty css              */import"./index.ec0ccb98.js";import"./usePageContext.d8053a7f.js";import"./transButton.8328ef76.js";import"./ArrowLeftOutlined.f35b6c77.js";const j=t((()=>e((()=>import("./index.22767d0e.js")),["/assets/index.22767d0e.js","/assets/index.5ddcb78c.css","/assets/index.5083dc91.js","/assets/index.52403077.css","/assets/vendor.3b1829c7.js","/assets/vendor.4a5fa02d.css"]))),f=(()=>{const t=[];for(let e=1;e<2e4;e++)t.push({title:"列表项"+e});return t})();var _=i({components:{VScroll:j,Divider:p,PageWrapper:u},setup:()=>({data:f})});const v=c("data-v-b4120884");s("data-v-b4120884");const b=n("基础滚动示例"),h={class:"virtual-scroll-demo-wrap"},x={class:"virtual-scroll-demo__item"},g=n("即使不可见，也预先加载50条数据，防止空白"),w={class:"virtual-scroll-demo-wrap"},D={class:"virtual-scroll-demo__item"};a();const O=v(((t,e,i,s,a,c)=>{const n=r("Divider"),p=r("VScroll"),u=r("PageWrapper");return d(),o(u,{class:"virtual-scroll-demo"},{default:v((()=>[l(n,null,{default:v((()=>[b])),_:1}),l("div",h,[l(p,{itemHeight:41,items:t.data,height:300,width:300},{default:v((({item:t})=>[l("div",x,m(t.title),1)])),_:1},8,["items"])]),l(n,null,{default:v((()=>[g])),_:1}),l("div",w,[l(p,{itemHeight:41,items:t.data,height:300,width:300,bench:50},{default:v((({item:t})=>[l("div",D,m(t.title),1)])),_:1},8,["items"])])])),_:1})}));_.render=O,_.__scopeId="data-v-b4120884";export default _;
