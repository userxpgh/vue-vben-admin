import{_ as s,a as t}from"./index.1c9a1d20.js";import{d as o,h as e,o as i,i as r,w as a,j as d,T as l,m as n}from"./index.2b0223a6.js";import"./useTimeout.cf1df41e.js";import"./useAttrs.c4906f5d.js";import"./useWindowSizeFn.85191285.js";import"./index.0438ed90.js";import"./index.91533b9d.js";import"./domUtils.3aeba9b0.js";import"./_stringToArray.415ab55d.js";import"./RightOutlined.533f9bac.js";import"./index.95c10fda.js";import"./useScrollTo.0326b6fc.js";import"./animation.b863c4a3.js";import"./FullscreenOutlined.6e44ab46.js";import"./isEqual.278dbd3b.js";import"./vendor.0d1494f4.js";var p=o({components:{BasicModal:s},setup(){const[s,{closeModal:o,setModalProps:e}]=t();return{register:s,closeModal:o,setModalProps:()=>{e({title:"Modal New Title"})}}}});const m=n("从内部关闭弹窗"),c=n("从内部修改title");p.render=function(s,t,o,n,p,u){const j=e("a-button"),f=e("BasicModal");return i(),r(f,l(s.$attrs,{onRegister:s.register,title:"Modal Title",helpMessage:["提示1","提示2"]}),{default:a((()=>[d(j,{type:"primary",onClick:s.closeModal,class:"mr-2"},{default:a((()=>[m])),_:1},8,["onClick"]),d(j,{type:"primary",onClick:s.setModalProps},{default:a((()=>[c])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default p;