import{a as e,i,o as s,j as t,k as o,w as r,n as m}from"./index.29609d4f.js";import"./xlsx.a48e520c.js";import"./SettingOutlined.ac574c68.js";import"./index.82fc86f3.js";import"./Trigger.37c59d90.js";import"./omit.2ffcf325.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.17ee02bd.js";import"./CheckOutlined.1a4e9b39.js";import"./index.2de68cf3.js";import"./index.c737d9ca.js";import"./colors.71b925e9.js";import"./index.b4f57292.js";import"./RightOutlined.f0cf9056.js";import"./index.69ce03f6.js";import"./types.18a8271d.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.b8f23ccf.js";import"./index.1cc941bc.js";import"./index.7e984e4b.js";import"./UpOutlined.edb786d7.js";import"./LeftOutlined.36364c62.js";import"./DownOutlined.cb72a579.js";import"./index.b09bf7d1.js";import"./index.c42cd4b3.js";import"./index.ca36f788.js";import"./zh_CN.0242bd16.js";import"./index.1a84a7b6.js";import"./index.4fff7c35.js";import"./CaretDownFilled.b6191c23.js";import"./CheckOutlined.da1c11f2.js";import"./CloseOutlined.96b80b97.js";import{s as p,F as d}from"./EditTableHeaderIcon.b8b8fdbb.js";import"./index.b2fafe90.js";import"./LeftOutlined.995dd1b7.js";import"./functional.d7bff21c.js";import"./RightOutlined.f1b92bb1.js";import"./useContext.104c8f73.js";import"./useTimeout.972bc5d4.js";import"./useDebounce.58e00ed6.js";import"./useEventListener.baa06eae.js";import"./useBreakpoint.a60d1be1.js";import"./resizeEvent.f7059d8c.js";import"./domUtils.f6eff73e.js";import"./tsxHelper.9170d194.js";import"./useExpose.4dbece1c.js";import{b as n}from"./index.9d72a4f6.js";import"./propTypes.8c664f5d.js";import"./index.c2092c4e.js";import"./index.875b9907.js";import"./useWindowSizeFn.9e056069.js";import"./uuid.40269c00.js";import"./download.0813916e.js";import"./useForm.5e9eb805.js";import"./useFullScreen.354d0669.js";import"./index.0af92575.js";import{u as a}from"./useTable.10ac547b.js";import{getCustomHeaderColumns as c}from"./tableData.ac26daff.js";import{d as j}from"./table.acfcd604.js";var f=e({components:{BasicTable:p,FormOutlined:d,BasicHelp:n},setup(){const[e]=a({title:"定高/头部自定义",api:j,columns:c(),canResize:!1,scroll:{y:100}});return{registerTable:e}}});const l={class:"p-4"},b=m(" 姓名 "),u=m(" 地址 ");f.render=function(e,m,p,d,n,a){const c=i("BasicHelp"),j=i("FormOutlined"),f=i("BasicTable");return s(),t("div",l,[o(f,{onRegister:e.registerTable},{customTitle:r((()=>[o("span",null,[b,o(c,{class:"ml-2",text:"姓名"})])])),customAddress:r((()=>[u,o(j,{class:"ml-2"})])),_:1},8,["onRegister"])])};export default f;