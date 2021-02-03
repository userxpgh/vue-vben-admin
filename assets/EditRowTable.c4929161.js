import{_ as e}from"./index.456a3dd4.js";import{o as t}from"./select.5d062a0a.js";import{d as i}from"./table.eac50957.js";import{d as o,r as d,h as n,o as a,i as s,j as r,w as l}from"./index.13aefb6f.js";import{g as m}from"./index.49e351fd.js";import{u as p}from"./useTable.c7976c79.js";import"./index.8bcb6041.js";import"./SearchOutlined.e439a87c.js";import"./CheckOutlined.ee7dbd66.js";import"./DownOutlined.fce9d8c3.js";import"./index.b8869e26.js";import"./index.283c70c2.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.b157ece4.js";import"./isEqual.10a7398e.js";import"./_baseProperty.74f89655.js";import"./toInteger.03d4fa11.js";import"./index.f32a4577.js";import"./RightOutlined.6352f3be.js";import"./EllipsisOutlined.9a8cdd6b.js";import"./types.b30def48.js";import"./index.cc60a3a6.js";import"./LeftOutlined.547a5ef5.js";import"./DoubleLeftOutlined.e7cdc27f.js";import"./DoubleRightOutlined.ed42d62a.js";import"./zh_CN.8094f4d6.js";import"./uuid.cf3286f7.js";import"./index.27e8a081.js";import"./util.3aff73a5.js";import"./DeleteOutlined.a704a3ca.js";import"./EyeOutlined.5c1c4d2a.js";import"./index.67d4aa0f.js";/* empty css              */import"./scrollTo.c1e0f75f.js";import"./transButton.02b1ac87.js";import"./CaretDownFilled.a4d697f1.js";import"./clickOutside.3127988f.js";import"./domUtils.9ad9e2d5.js";import"./_stringToArray.7cbaaf1a.js";import"./index.c4a5d02a.js";import"./index.8ea7d227.js";import"./UpOutlined.8a010a74.js";import"./index.4492f9ad.js";import"./useSortable.a0307153.js";import"./useTimeout.e3e2a7dc.js";import"./useWindowSizeFn.00dd0980.js";import"./index.0ff48f30.js";import"./useAttrs.95d4f09d.js";import"./index.527ce582.js";import"./index.7726fdfd.js";import"./useScrollTo.6e2b4a93.js";import"./animation.3a6b162f.js";import"./FullscreenOutlined.d0e0a14c.js";import"./index.84b4f59b.js";import"./SettingOutlined.ac368ccb.js";import"./useExpose.f80b9bbf.js";import"./useForm.fee172c9.js";import"./index.67caae9f.js";import"./index.d9581c88.js";import"./colors.d2161316.js";import"./RedoOutlined.7cc244ed.js";import"./Tree.3116bedb.js";import"./index.d57d5cc5.js";import"./index.cd79f189.js";import"./download.72bbbc17.js";const c=[{title:"输入框",dataIndex:"name",editRow:!0,editComponentProps:{prefix:"$"},width:200},{title:"默认输入状态",dataIndex:"name7",editRow:!0,width:200},{title:"输入框校验",dataIndex:"name1",editRow:!0,editRule:!0,width:200},{title:"输入框函数校验",dataIndex:"name2",editRow:!0,editRule:async e=>"2"===e?"不能输入该值":"",width:200},{title:"数字输入框",dataIndex:"id",editRow:!0,editRule:!0,editComponent:"InputNumber",width:200},{title:"下拉框",dataIndex:"name3",editRow:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"远程下拉",dataIndex:"name4",editRow:!0,editComponent:"ApiSelect",editComponentProps:{api:t},width:200},{title:"勾选框",dataIndex:"name5",editRow:!0,editComponent:"Checkbox",editValueMap:e=>e?"是":"否",width:200},{title:"开关",dataIndex:"name6",editRow:!0,editComponent:"Switch",editValueMap:e=>e?"开":"关",width:200}];var u=o({components:{BasicTable:e,TableAction:m},setup(){const e=d(""),[t]=p({title:"可编辑行示例",api:i,columns:c,showIndexColumn:!1,actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});function o(t){var i;e.value=t.key,null==(i=t.onEdit)||i.call(t,!0)}function n(t){var i;e.value="",null==(i=t.onEdit)||i.call(t,!1,!0)}async function a(t){var i;await(null==(i=t.onEdit)?void 0:i.call(t,!1,!0))&&(e.value="")}return{registerTable:t,handleEdit:o,createActions:function(t,i){return t.editable?[{label:"保存",onClick:a.bind(null,t,i)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:n.bind(null,t,i)}}]:[{label:"编辑",disabled:!!e.value&&e.value!==t.key,onClick:o.bind(null,t)}]}}}});const j={class:"p-4"};u.render=function(e,t,i,o,d,m){const p=n("TableAction"),c=n("BasicTable");return a(),s("div",j,[r(c,{onRegister:e.registerTable},{action:l((({record:t,column:i})=>[r(p,{actions:e.createActions(t,i)},null,8,["actions"])])),_:1},8,["onRegister"])])};export default u;
