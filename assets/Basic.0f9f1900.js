import{_ as e}from"./index.cbfbe92e.js";import{getBasicColumns as i,getBasicData as t}from"./tableData.7aa0192c.js";import{_ as o}from"./index.2eb743af.js";import{d as r,r as s,h as a,o as d,i as n,j as p,w as m,m as c,l}from"./index.2b0223a6.js";import"./index.42a936c1.js";import"./SearchOutlined.cd07db3b.js";import"./CheckOutlined.c235740e.js";import"./DownOutlined.2647a59c.js";import"./index.5cc00d52.js";import"./index.95b0d3ed.js";import"./responsiveObserve.c545f1cc.js";import"./index.e5ffe887.js";import"./vendor.0d1494f4.js";import"./findIndex.1c918bfa.js";import"./isEqual.278dbd3b.js";import"./_baseProperty.74f89655.js";import"./toInteger.3a23a5d6.js";import"./index.ba0a5ce4.js";import"./index.283b94b2.js";import"./index.193a18d3.js";import"./UpOutlined.3069b699.js";import"./index.427207d8.js";import"./EyeOutlined.c34fd344.js";import"./index.d959b37a.js";import"./colors.66ca87a3.js";import"./RightOutlined.533f9bac.js";import"./RedoOutlined.00629dbc.js";import"./index.b0a8084c.js";import"./EllipsisOutlined.abfccc6f.js";import"./types.c82b6381.js";import"./Tree.4124212e.js";import"./util.1c91d956.js";import"./useAttrs.c4906f5d.js";import"./index.95c10fda.js";import"./index.febfd785.js";import"./uuid.4f8dcc00.js";import"./index.a6163e31.js";import"./DeleteOutlined.8598f1b8.js";import"./index.1c9a1d20.js";import"./useTimeout.cf1df41e.js";import"./useWindowSizeFn.85191285.js";import"./index.0438ed90.js";import"./index.91533b9d.js";import"./domUtils.3aeba9b0.js";import"./_stringToArray.415ab55d.js";import"./useScrollTo.0326b6fc.js";import"./animation.b863c4a3.js";import"./FullscreenOutlined.6e44ab46.js";import"./index.0a4ee640.js";import"./index.320d0717.js";import"./index.94cbe5a2.js";import"./LeftOutlined.81d26ae1.js";import"./download.cd7652ef.js";import"./index.1706970f.js";import"./DoubleLeftOutlined.7daf16d3.js";import"./DoubleRightOutlined.a55f474b.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.9655cdf7.js";import"./CaretDownFilled.f3bd669d.js";import"./clickOutside.1adc0691.js";import"./useSortable.a748e96e.js";import"./SettingOutlined.4a907ccc.js";import"./useExpose.7c053ca8.js";import"./useForm.fcadc8c7.js";import"./index.a32f4879.js";import"./index.a0eacfb8.js";import"./usePageContext.4951455d.js";import"./ArrowLeftOutlined.668881e5.js";var j=r({components:{BasicTable:e,PageWrapper:o},setup(){const e=s(!1),o=s(!1),r=s(!0),a=s(!0),d=s(!1);return{columns:i(),data:t(),canResize:e,loading:o,striped:r,border:a,toggleStriped:function(){r.value=!r.value},toggleCanResize:function(){e.value=!e.value},toggleLoading:function(){o.value=!0,setTimeout((()=>{o.value=!1,d.value={pageSize:20}}),3e3)},toggleBorder:function(){a.value=!a.value},pagination:d}}});const u={class:"p-4"},f=c(" 开启loading ");j.render=function(e,i,t,o,r,s){const j=a("a-button"),b=a("BasicTable");return d(),n("div",u,[p(b,{title:"基础示例",titleHelpMessage:"温馨提醒",columns:e.columns,dataSource:e.data,canResize:e.canResize,loading:e.loading,striped:e.striped,bordered:e.border,showTableSetting:"",pagination:e.pagination},{toolbar:m((()=>[p(j,{type:"primary",onClick:e.toggleCanResize},{default:m((()=>[c(l(e.canResize?"取消自适应":"自适应高度"),1)])),_:1},8,["onClick"]),p(j,{type:"primary",onClick:e.toggleBorder},{default:m((()=>[c(l(e.border?"隐藏边框":"显示边框"),1)])),_:1},8,["onClick"]),p(j,{type:"primary",onClick:e.toggleLoading},{default:m((()=>[f])),_:1},8,["onClick"]),p(j,{type:"primary",onClick:e.toggleStriped},{default:m((()=>[c(l(e.striped?"隐藏斑马纹":"显示斑马纹"),1)])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination"])])};export default j;