import{d as s,bt as a,ca as l,H as e,R as i,a as n,i as c,o,j as t,w as r,k as d,Q as p,S as f,l as m,n as u,m as x}from"./index.94b82568.js";import"./index.38c8e961.js";import"./index.58c2242a.js";import"./index.a0e9bc88.js";import"./index.fe1c21ca.js";import"./index.47fbc714.js";import"./index.27bb0464.js";import{applicationList as _}from"./data.7f736644.js";var j=s({components:{List:a,ListItem:a.Item,Card:l,Icon:e,[i.name]:i,[n.name]:n},setup:()=>({prefixCls:"account-center-application",list:_})});const C=u(" 活跃用户："),b=u(" 万 "),v=u(" 新增用户：");j.render=function(s,a,l,e,i,n){const _=c("Icon"),j=c("Card"),w=c("ListItem"),I=c("a-col"),$=c("a-row"),k=c("List");return o(),t(k,{class:s.prefixCls},{default:r((()=>[d($,{gutter:16},{default:r((()=>[(o(!0),t(p,null,f(s.list,((a,l)=>(o(),t(I,{key:l,span:6},{default:r((()=>[d(w,null,{default:r((()=>[d(j,{hoverable:!0,class:`${s.prefixCls}__card`},{default:r((()=>[d("div",{class:`${s.prefixCls}__card-title`},[a.icon?(o(),t(_,{key:0,class:"icon",icon:a.icon,color:a.color},null,8,["icon","color"])):m("",!0),u(" "+x(a.title),1)],2),d("div",{class:`${s.prefixCls}__card-num`},[C,d("span",null,x(a.active),1),b],2),d("div",{class:`${s.prefixCls}__card-num`},[v,d("span",null,x(a.new),1)],2),a.download?(o(),t(_,{key:0,class:`${s.prefixCls}__card-download`,icon:a.download},null,8,["class","icon"])):m("",!0)])),_:2},1032,["class"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1},8,["class"])};export default j;