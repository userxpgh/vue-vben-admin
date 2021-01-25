import{d as e,h as t,o as i,i as s,j as o,w as d,m as r,l as a}from"./index.2b0223a6.js";import{T as n}from"./index.d959b37a.js";import{_ as m,T as p}from"./index.cbfbe92e.js";import{d as c}from"./table.f64cc779.js";import{u as l}from"./useTable.f3f5c2c2.js";import"./vendor.0d1494f4.js";import"./colors.66ca87a3.js";import"./index.42a936c1.js";import"./SearchOutlined.cd07db3b.js";import"./CheckOutlined.c235740e.js";import"./DownOutlined.2647a59c.js";import"./index.5cc00d52.js";import"./index.95b0d3ed.js";import"./responsiveObserve.c545f1cc.js";import"./index.e5ffe887.js";import"./findIndex.1c918bfa.js";import"./isEqual.278dbd3b.js";import"./_baseProperty.74f89655.js";import"./toInteger.3a23a5d6.js";import"./index.ba0a5ce4.js";import"./index.283b94b2.js";import"./index.193a18d3.js";import"./UpOutlined.3069b699.js";import"./index.427207d8.js";import"./EyeOutlined.c34fd344.js";import"./RightOutlined.533f9bac.js";import"./RedoOutlined.00629dbc.js";import"./index.b0a8084c.js";import"./EllipsisOutlined.abfccc6f.js";import"./types.c82b6381.js";import"./Tree.4124212e.js";import"./util.1c91d956.js";import"./useAttrs.c4906f5d.js";import"./index.95c10fda.js";import"./index.febfd785.js";import"./uuid.4f8dcc00.js";import"./index.a6163e31.js";import"./DeleteOutlined.8598f1b8.js";import"./index.1c9a1d20.js";import"./useTimeout.cf1df41e.js";import"./useWindowSizeFn.85191285.js";import"./index.0438ed90.js";import"./index.91533b9d.js";import"./domUtils.3aeba9b0.js";import"./_stringToArray.415ab55d.js";import"./useScrollTo.0326b6fc.js";import"./animation.b863c4a3.js";import"./FullscreenOutlined.6e44ab46.js";import"./index.0a4ee640.js";import"./index.320d0717.js";import"./index.94cbe5a2.js";import"./LeftOutlined.81d26ae1.js";import"./download.cd7652ef.js";import"./index.1706970f.js";import"./DoubleLeftOutlined.7daf16d3.js";import"./DoubleRightOutlined.a55f474b.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.9655cdf7.js";import"./CaretDownFilled.f3bd669d.js";import"./clickOutside.1adc0691.js";import"./useSortable.a748e96e.js";import"./SettingOutlined.4a907ccc.js";import"./useExpose.7c053ca8.js";import"./useForm.fcadc8c7.js";const j=[{title:"ID",dataIndex:"id",slots:{customRender:"id"}},{title:"分类",dataIndex:"category",width:80,align:"center",defaultHidden:!0,slots:{customRender:"category"}},{title:"姓名",dataIndex:"name",width:120},{title:"头像",dataIndex:"img",width:120,slots:{customRender:"img"}},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",slots:{customRender:"no"}},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime"}];var u=e({components:{BasicTable:m,TableImg:p,Tag:n},setup(){const[e]=l({title:"自定义列内容",api:c,columns:j,bordered:!0,showTableSetting:!0});return{registerTable:e}}});const b={class:"p-4"};u.render=function(e,n,m,p,c,l){const j=t("Tag"),u=t("TableImg"),f=t("BasicTable");return i(),s("div",b,[o(f,{onRegister:e.registerTable},{id:d((({record:e})=>[r(" ID: "+a(e.id),1)])),no:d((({record:e})=>[o(j,{color:"green"},{default:d((()=>[r(a(e.no),1)])),_:2},1024)])),img:d((()=>[o(u,{imgList:["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216"]},null,8,["imgList"])])),category:d((({record:e})=>[o(j,{color:"green"},{default:d((()=>[r(a(e.no),1)])),_:2},1024)])),_:1},8,["onRegister"])])};export default u;