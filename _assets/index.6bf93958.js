import{a as e,h as t,i,o as n,j as s,k as o,w as l,p as a}from"./index.4a20657c.js";import"./xlsx.a48e520c.js";import"./Trigger.ac5d4b81.js";import"./_baseSlice.1123a25b.js";import"./index.735ab1e5.js";import"./types.3e415a39.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.7a5207ea.js";import"./index.a172b251.js";import"./index.76eb4ecf.js";import"./index.156d08e6.js";import{a as r}from"./index.92ed2934.js";import"./RightOutlined.204b1f99.js";import"./useTimeout.98476688.js";import"./tsxHelper.681cabc4.js";import"./index.d58e2269.js";import"./animation.89606e29.js";import"./useScrollTo.a7e7001a.js";import"./index.f8e54d62.js";import{u as p}from"./useContextMenu.084cecde.js";var c=e({components:{CollapseContainer:r},setup(){const[e]=p(),{createMessage:i}=t();return{handleContext:function(t){e({event:t,items:[{label:"New",icon:"bi:plus",handler:()=>{i.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{i.success("click open")}}]})},handleMultipleContext:function(t){e({event:t,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{i.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}}}});const m={class:"p-4"},d=a("Right Click on me"),u=a("Right Click on me");c.render=function(e,t,a,r,p,c){const b=i("a-button"),x=i("CollapseContainer");return n(),s("div",m,[o(x,{title:"Simple"},{default:l((()=>[o(b,{type:"primary",onContextmenu:e.handleContext},{default:l((()=>[d])),_:1},8,["onContextmenu"])])),_:1}),o(x,{title:"Multiple",class:"mt-4"},{default:l((()=>[o(b,{type:"primary",onContextmenu:e.handleMultipleContext},{default:l((()=>[u])),_:1},8,["onContextmenu"])])),_:1})])};export default c;