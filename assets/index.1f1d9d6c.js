import{u as e}from"./useContextMenu.515f8a3a.js";import{a as t}from"./index.527ce582.js";import{d as i,g as n,h as o,o as s,i as a,w as l,j as r,m as d}from"./index.13aefb6f.js";import{_ as p}from"./index.28ae351f.js";import"./index.f32a4577.js";import"./RightOutlined.6352f3be.js";import"./EllipsisOutlined.9a8cdd6b.js";import"./types.b30def48.js";import"./isEqual.10a7398e.js";import"./toInteger.03d4fa11.js";/* empty css              */import"./index.84b4f59b.js";import"./index.7726fdfd.js";import"./domUtils.9ad9e2d5.js";import"./_stringToArray.7cbaaf1a.js";import"./useTimeout.e3e2a7dc.js";import"./useScrollTo.6e2b4a93.js";import"./animation.3a6b162f.js";import"./vendor.3b1829c7.js";import"./index.d1f698f3.js";import"./DownOutlined.fce9d8c3.js";import"./index.f3e0521d.js";import"./usePageContext.fb1fd52f.js";import"./transButton.02b1ac87.js";import"./ArrowLeftOutlined.745a5650.js";var m=i({components:{CollapseContainer:t,PageWrapper:p},setup(){const[t]=e(),{createMessage:i}=n();return{handleContext:function(e){t({event:e,items:[{label:"New",icon:"bi:plus",handler:()=>{i.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{i.success("click open")}}]})},handleMultipleContext:function(e){t({event:e,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{i.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}}}});const c=d(" Right Click on me "),u=d(" Right Click on me ");m.render=function(e,t,i,n,d,p){const m=o("a-button"),f=o("CollapseContainer"),b=o("PageWrapper");return s(),a(b,{title:"右键菜单示例"},{default:l((()=>[r(f,{title:"Simple"},{default:l((()=>[r(m,{type:"primary",onContextmenu:e.handleContext},{default:l((()=>[c])),_:1},8,["onContextmenu"])])),_:1}),r(f,{title:"Multiple",class:"mt-4"},{default:l((()=>[r(m,{type:"primary",onContextmenu:e.handleMultipleContext},{default:l((()=>[u])),_:1},8,["onContextmenu"])])),_:1})])),_:1})};export default m;
