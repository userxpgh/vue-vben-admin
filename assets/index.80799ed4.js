import{d as e,r as a,e as t,g as o,h as i,o as s,i as r,w as n,j as p,m as d}from"./index.13aefb6f.js";import{I as l}from"./index.c4a5d02a.js";import{a as m}from"./index.527ce582.js";import{u}from"./useCopyToClipboard.e68e0e89.js";import{_ as f}from"./index.28ae351f.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.e439a87c.js";import"./EyeOutlined.5c1c4d2a.js";import"./index.7726fdfd.js";import"./domUtils.9ad9e2d5.js";import"./_stringToArray.7cbaaf1a.js";import"./RightOutlined.6352f3be.js";/* empty css              */import"./useTimeout.e3e2a7dc.js";import"./useScrollTo.6e2b4a93.js";import"./animation.3a6b162f.js";import"./index.d1f698f3.js";import"./index.f32a4577.js";import"./EllipsisOutlined.9a8cdd6b.js";import"./types.b30def48.js";import"./isEqual.10a7398e.js";import"./toInteger.03d4fa11.js";import"./DownOutlined.fce9d8c3.js";import"./index.f3e0521d.js";import"./usePageContext.fb1fd52f.js";import"./transButton.02b1ac87.js";import"./ArrowLeftOutlined.745a5650.js";var c=e({name:"Copy",components:{CollapseContainer:m,PageWrapper:f,[l.name]:l},setup(){const e=a(""),{createMessage:i}=o(),{clipboardRef:s,copiedRef:r}=u();return{handleCopy:function(){const a=t(e);a?(s.value=a,t(r)&&i.warning("copy success！")):i.warning("请输入要拷贝的内容！")},value:e}}});const j={class:"flex justify-center"},b=d(" Copy ");c.render=function(e,a,t,o,d,l){const m=i("a-input"),u=i("a-button"),f=i("CollapseContainer"),c=i("PageWrapper");return s(),r(c,{title:"文本复制示例"},{default:n((()=>[p(f,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Copy Example"},{default:n((()=>[p("div",j,[p(m,{placeholder:"请输入",value:e.value,"onUpdate:value":a[1]||(a[1]=a=>e.value=a)},null,8,["value"]),p(u,{type:"primary",onClick:e.handleCopy},{default:n((()=>[b])),_:1},8,["onClick"])])])),_:1})])),_:1})};export default c;
