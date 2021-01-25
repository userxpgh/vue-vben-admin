import{d as e,bb as s,bH as a,dy as o,dz as t,cp as r,cq as i,h as d,bA as n,o as c,i as m,bw as l,j as u,l as p,k as f,H as _,m as j}from"./index.2b0223a6.js";import{D as b}from"./index.0a4ee640.js";import{A as x}from"./index.febfd785.js";import y from"./CurrentPermissionMode.aa07a9ee.js";import{_ as P}from"./index.8debc0e1.js";import{_ as h}from"./index.2eb743af.js";import"./vendor.0d1494f4.js";import"./index.a32f4879.js";import"./index.b0a8084c.js";import"./RightOutlined.533f9bac.js";import"./EllipsisOutlined.abfccc6f.js";import"./types.c82b6381.js";import"./isEqual.278dbd3b.js";import"./toInteger.3a23a5d6.js";import"./DownOutlined.2647a59c.js";import"./index.95c10fda.js";import"./index.a0eacfb8.js";import"./usePageContext.4951455d.js";import"./transButton.9655cdf7.js";import"./ArrowLeftOutlined.668881e5.js";var g=e({components:{Alert:x,PageWrapper:h,CurrentPermissionMode:y,Divider:b,Authority:P},setup(){const{hasPermission:e}=o();async function r(e){const a=await t({userId:e});s.commitPermCodeListState(a)}return r("1"),{hasPermission:e,permissionStore:s,changePermissionCode:r,PermissionModeEnum:a}}});const C=l("data-v-beeadad6");r("data-v-beeadad6");const v=j(" 当前拥有的code列表: "),k=j(" 点击切换按钮权限(用户id为2) "),A=j(" 点击切换按钮权限(用户id为1,默认) "),w=j("组件方式判断权限"),D=j("拥有code ['1000']权限可见"),M=j("拥有code ['2000']权限可见"),O=j("拥有code ['1000','2000']角色权限可见"),S=j("函数方式方式判断权限"),E=j(" 拥有code ['1000']权限可见 "),I=j(" 拥有code ['2000']权限可见 "),L=j(" 拥有code ['1000','2000']角色权限可见 "),q=j("指令方式方式判断权限(该方式不能动态修改权限.)"),B=j(" 拥有code ['1000']权限可见 "),H=j(" 拥有code ['2000']权限可见 "),W=j(" 拥有code ['1000','2000']角色权限可见 ");i();const z=C(((e,s,a,o,t,r)=>{const i=d("Alert"),l=d("CurrentPermissionMode"),j=d("Divider"),b=d("a-button"),x=d("Authority"),y=d("PageWrapper"),P=n("auth");return c(),m(y,{contentBackground:"",title:"按钮权限控制",contentClass:"p-4"},{default:C((()=>[u(i,{message:"刷新后会还原","show-icon":""}),u(l),u("p",null,[v,u("a",null,p(e.permissionStore.getPermCodeListState),1)]),u(j),u(i,{class:"mt-4",type:"info",message:"点击后请查看按钮变化","show-icon":""}),u(j),u(b,{type:"primary",class:"mr-2",onClick:s[1]||(s[1]=s=>e.changePermissionCode("2"))},{default:C((()=>[k])),_:1}),u(b,{type:"primary",onClick:s[2]||(s[2]=s=>e.changePermissionCode("1"))},{default:C((()=>[A])),_:1}),u(j,null,{default:C((()=>[w])),_:1}),u(x,{value:"1000"},{default:C((()=>[u(b,{type:"primary",class:"mx-4"},{default:C((()=>[D])),_:1})])),_:1}),u(x,{value:"2000"},{default:C((()=>[u(b,{color:"success",class:"mx-4"},{default:C((()=>[M])),_:1})])),_:1}),u(x,{value:["1000","2000"]},{default:C((()=>[u(b,{color:"error",class:"mx-4"},{default:C((()=>[O])),_:1})])),_:1}),u(j,null,{default:C((()=>[S])),_:1}),e.hasPermission("1000")?(c(),m(b,{key:0,type:"primary",class:"mx-4"},{default:C((()=>[E])),_:1})):f("",!0),e.hasPermission("2000")?(c(),m(b,{key:1,color:"success",class:"mx-4"},{default:C((()=>[I])),_:1})):f("",!0),e.hasPermission(["1000","2000"])?(c(),m(b,{key:2,color:"error",class:"mx-4"},{default:C((()=>[L])),_:1})):f("",!0),u(j,null,{default:C((()=>[q])),_:1}),_(u(b,{type:"primary",class:"mx-4"},{default:C((()=>[B])),_:1},512),[[P,"1000"]]),_(u(b,{color:"success",class:"mx-4"},{default:C((()=>[H])),_:1},512),[[P,"2000"]]),_(u(b,{color:"error",class:"mx-4"},{default:C((()=>[W])),_:1},512),[[P,["1000","2000"]]])])),_:1})}));g.render=z,g.__scopeId="data-v-beeadad6";export default g;