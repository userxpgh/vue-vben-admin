import{d as o,u as t,aQ as e,aK as i,$ as s,bf as r,e as a,bg as n,cp as d,cq as p,h as l,o as m,i as c,j as u,l as j,k as f,bw as b}from"./index.2b0223a6.js";import{L as x}from"./index.25842393.js";import{D as _,G as g,S as C}from"./siteSetting.c485f07c.js";import{G as F}from"./GithubFilled.a5a5292d.js";import"./vendor.0d1494f4.js";import"./isNumeric.2bec345d.js";import"./RightOutlined.533f9bac.js";import"./LeftOutlined.81d26ae1.js";import"./index.b0a8084c.js";import"./EllipsisOutlined.abfccc6f.js";import"./types.c82b6381.js";import"./isEqual.278dbd3b.js";import"./toInteger.3a23a5d6.js";import"./index.95c10fda.js";import"./useTimeout.cf1df41e.js";import"./useHeaderSetting.306c855b.js";import"./domUtils.3aeba9b0.js";import"./_stringToArray.415ab55d.js";import"./useSortable.a748e96e.js";import"./index.0438ed90.js";import"./index.91533b9d.js";import"./useScrollTo.0326b6fc.js";import"./animation.b863c4a3.js";import"./index.723f91a0.js";import"./useWindowSizeFn.85191285.js";import"./usePageContext.4951455d.js";import"./index.7d4f60fb.js";import"./clickOutside.1adc0691.js";import"./index.35960677.js";import"./UpOutlined.3069b699.js";import"./DownOutlined.2647a59c.js";import"./PlusOutlined.2e1c7ad0.js";import"./index.320d0717.js";var h=o({name:"LayoutFooter",components:{Footer:x.Footer,GithubFilled:F},setup(){const{t:o}=t(),{getShowFooter:d}=n(),{currentRoute:p}=e(),{prefixCls:l}=i("layout-footer");return{getShowLayoutFooter:s((()=>{var o;return a(d)&&!(null==(o=a(p).meta)?void 0:o.hiddenFooter)})),prefixCls:l,t:o,DOC_URL:_,GITHUB_URL:g,SITE_URL:C,openWindow:r}}});const w=b("data-v-47369c67");d("data-v-47369c67");const L=u("div",null,"Copyright ©2020 Vben Admin",-1);p();const S=w(((o,t,e,i,s,r)=>{const a=l("GithubFilled"),n=l("Footer");return o.getShowLayoutFooter?(m(),c(n,{key:0,class:o.prefixCls},{default:w((()=>[u("div",{class:`${o.prefixCls}__links`},[u("a",{onClick:t[1]||(t[1]=t=>o.openWindow(o.SITE_URL))},j(o.t("layout.footer.onlinePreview")),1),u(a,{onClick:t[2]||(t[2]=t=>o.openWindow(o.GITHUB_URL)),class:`${o.prefixCls}__github`},null,8,["class"]),u("a",{onClick:t[3]||(t[3]=t=>o.openWindow(o.DOC_URL))},j(o.t("layout.footer.onlineDocument")),1)],2),L])),_:1},8,["class"])):f("",!0)}));h.render=S,h.__scopeId="data-v-47369c67";export default h;