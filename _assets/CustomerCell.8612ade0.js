import{a as e,i as t,o as i,j as s,k as o,w as r,p as d,n as a}from"./index.4a20657c.js";import"./xlsx.a48e520c.js";import"./useSortable.5dd8d540.js";import"./index.e03530a2.js";import"./Trigger.ac5d4b81.js";import"./omit.836c1bd6.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.4ce5e280.js";import"./CheckOutlined.1be330dc.js";import"./index.9c067c1c.js";import"./colors.b0a3d4bc.js";import"./index.815b7b0b.js";import"./RightOutlined.9fa77bad.js";import"./index.735ab1e5.js";import"./types.3e415a39.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.7a5207ea.js";import"./_baseFor.f4e5f03f.js";import"./index.e1c0b789.js";import"./index.a172b251.js";import"./index.76eb4ecf.js";import"./index.bce375da.js";import"./UpOutlined.09ea3d5a.js";import"./LeftOutlined.faff2dda.js";import"./index.9d3583b5.js";import{T as m}from"./index.f91ebcc0.js";import"./index.156d08e6.js";import"./index.bfe08aa3.js";import"./index.57765f26.js";import"./zh_CN.0242bd16.js";import"./index.658fe8df.js";import"./index.e33fc4bc.js";import"./CaretDownFilled.99eea0af.js";import"./index.92ed2934.js";import"./CheckOutlined.46adf7d0.js";import"./CloseOutlined.15684c2a.js";import{s as n,T as p}from"./index.2f0cfb20.js";import"./FullscreenOutlined.fcdbf0a9.js";import"./LeftOutlined.d32d4386.js";import"./LoadingOutlined.110c74b1.js";import"./TableAction.2d2b5c9f.js";import"./RightOutlined.204b1f99.js";import"./SettingOutlined.ba60aba1.js";import"./useTimeout.98476688.js";import"./tsxHelper.681cabc4.js";import"./index.d58e2269.js";import"./animation.89606e29.js";import"./useScrollTo.a7e7001a.js";import"./useAttrs.5a25a26a.js";import"./index.f8e54d62.js";import"./index.1fc7357a.js";import"./useWindowSizeFn.e0ce7d91.js";import"./useForm.ff1be0bc.js";import"./uuid.40269c00.js";import"./useExpose.4aec0ace.js";import{u as c}from"./useTable.9ea34ee9.js";import{d as j}from"./table.5f08b407.js";const l=[{title:"ID",dataIndex:"id",slots:{customRender:"id"}},{title:"分类",dataIndex:"category",width:80,align:"center",slots:{customRender:"category"}},{title:"姓名",dataIndex:"name",width:120},{title:"头像",dataIndex:"img",width:120,slots:{customRender:"img"}},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",slots:{customRender:"no"}},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime"}];var b=e({components:{BasicTable:n,TableImg:p,Tag:m},setup(){const[e]=c({title:"自定义列内容",api:j,columns:l,bordered:!0});return{registerTable:e}}});const u={class:"p-4"};b.render=function(e,m,n,p,c,j){const l=t("Tag"),b=t("TableImg"),f=t("BasicTable");return i(),s("div",u,[o(f,{onRegister:e.registerTable},{id:r((({record:e})=>[d(" ID: "+a(e.id),1)])),no:r((({record:e})=>[o(l,{color:"green"},{default:r((()=>[d(a(e.no),1)])),_:2},1024)])),img:r((()=>[o(b,{imgList:["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216"]},null,8,["imgList"])])),category:r((({record:e})=>[o(l,{color:"green"},{default:r((()=>[d(a(e.no),1)])),_:2},1024)])),_:1},8,["onRegister"])])};export default b;