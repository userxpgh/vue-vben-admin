let e=document.createElement("style");e.innerHTML=".vben-setting-input-number-item[data-v-9dadcc20]{display:flex;justify-content:space-between;margin:16px 0}.vben-setting-input-number-item-input-number[data-v-9dadcc20]{width:126px}",document.head.appendChild(e);import{a as t,aY as n,i,o as s,j as a,k as r,n as p,J as m,bi as o}from"./index.4a20657c.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.4ce5e280.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.7a5207ea.js";import"./UpOutlined.09ea3d5a.js";import"./index.156d08e6.js";import{I as d}from"./index.bfe08aa3.js";import"./index.1434c1eb.js";import"./index.92ed2934.js";import"./index.49625164.js";import"./RightOutlined.204b1f99.js";import"./SettingOutlined.ba60aba1.js";import"./useTimeout.98476688.js";import"./tsxHelper.681cabc4.js";import"./index.d58e2269.js";import"./animation.89606e29.js";import"./useScrollTo.a7e7001a.js";import"./useAttrs.5a25a26a.js";import"./useHeaderSetting.33d2feee.js";import{b as u}from"./index.1cf0059b.js";var l=t({name:"InputNumberItem",components:{InputNumber:d},props:{event:{type:Number,default:()=>{}},title:{type:String}},setup(e){const{prefixCls:t}=n("setting-input-number-item");return{prefixCls:t,handleChange:function(t){e.event&&u(e.event,t)}}}});const c=o("data-v-9dadcc20")(((e,t,n,o,d,u)=>{const l=i("InputNumber");return s(),a("div",{class:e.prefixCls},[r("span",null,p(e.title),1),r(l,m(e.$attrs,{size:"small",class:`${e.prefixCls}-input-number`,onChange:e.handleChange}),null,16,["class","onChange"])],2)}));l.render=c,l.__scopeId="data-v-9dadcc20";export default l;