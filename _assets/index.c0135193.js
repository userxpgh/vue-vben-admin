import{a as e,r as t,p as s,f as a,N as l,c0 as n,aD as o,Z as i,v as r}from"./index.29609d4f.js";import{s as p}from"./index.3f1351f0.js";import{D as d}from"./index.ebfa7903.js";import{g as c}from"./tsxHelper.9170d194.js";import{p as f}from"./propTypes.8c664f5d.js";var u={useCollapse:f.bool.def(!0),title:f.string.def(""),size:f.oneOf(["small","default","middle",void 0]).def("small"),bordered:f.bool.def(!0),column:{type:[Number,Object],default:()=>({xxl:4,xl:3,lg:3,md:3,sm:2,xs:1})},collapseOptions:{type:Object,default:null},schema:{type:Array,default:()=>[]},data:f.object};var m=e({name:"Description",props:u,emits:["register"],setup(e,{attrs:r,slots:f,emit:u}){const m=t(null),x=s((()=>({...e,...a(m)}))),b=s((()=>({...a(x),title:void 0}))),v=s((()=>!!a(x).title)),h=s((()=>({canExpand:!1,...a(b).collapseOptions}))),y=s((()=>({...r,...a(b)})));function j({label:e,labelMinWidth:t,labelStyle:s}){if(!s&&!t)return e;const a={...s,minWidth:`${t}px `};return l("div",{style:a},e)}const g=()=>l(d,{class:"description",...a(y)},(()=>function(){const{schema:e}=a(b);return a(e).map((e=>{const{render:t,field:s,span:n,show:o,contentMinWidth:r}=e,{data:p}=a(b);if(o&&i(o)&&!o(p))return null;const c=()=>i(t)?t(null==p?void 0:p[s],p):a(p)&&a(p)[s],f=r;return l(d.Item,{label:j(e),key:s,span:n},(()=>r?l("div",{style:{minWidth:`${f}px`}},c()):c()))}))}()));return u("register",{setDescProps:function(e){const t=n(a(m)||{},e);m.value=o(t)}}),()=>a(v)?(()=>{const t=e.useCollapse?g():l("div",null,g());if(!e.useCollapse)return t;const{canExpand:s,helpMessage:n}=a(h),{title:o}=a(x);return l(p,{title:o,canExpan:s,helpMessage:n},{default:()=>t,action:()=>c(f,"action")})})():g()}});r(m);export{m as D};