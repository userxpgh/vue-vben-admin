import{d as e,aJ as t,aF as a,r,aQ as n,aK as i,dC as o,aZ as s,bg as l,bR as u,aS as d,t as c,aB as m,bI as f,aC as p,h,o as v,i as b,j as g,w as C,k as j,l as k,m as B}from"./index.13aefb6f.js";import{B as x}from"./index.d1f698f3.js";import"./index.f32a4577.js";/* empty css              */import"./vendor.3b1829c7.js";import"./DownOutlined.fce9d8c3.js";import"./RightOutlined.6352f3be.js";import"./EllipsisOutlined.9a8cdd6b.js";import"./types.b30def48.js";import"./isEqual.10a7398e.js";import"./toInteger.03d4fa11.js";var y=e({name:"LayoutBreadcrumb",components:{Icon:t,[x.name]:x},props:{theme:a.oneOf(["dark","light"])},setup(){const e=r([]),{currentRoute:t}=n(),{prefixCls:a}=i("layout-breadcrumb"),{getShowBreadCrumbIcon:h}=l(),{t:v}=o();return s((()=>{var a,r;if(t.value.name===d)return;const n=null==(a=t.value)?void 0:a.matched;if(!n||0===n.length)return;let i=function(e){let t=f(e,(e=>{const{meta:t}=e;if(!t)return!1;const{title:a,hideBreadcrumb:r,hideMenu:n}=t;return!(!a||r||n)})).filter((e=>{var t,a;return!(null==(t=e.meta)?void 0:t.hideBreadcrumb)||!(null==(a=e.meta)?void 0:a.hideMenu)}));return t=t.filter((e=>e.path!==m.BASE_HOME)),t}(c(n));const o=i.filter((e=>e.path!==m.BASE_HOME));o.length===i.length&&o.unshift({path:m.BASE_HOME,meta:{title:v("layout.header.home"),isLink:!0}}),(null==(r=t.value.meta)?void 0:r.currentActiveMenu)&&o.push(t.value),e.value=o})),{routes:e,t:v,prefixCls:a,getShowBreadCrumbIcon:h,handleClick:function(e,t,a){null==a||a.preventDefault();const{children:r,redirect:n,meta:i}=e;if((null==r?void 0:r.length)&&!n)return void(null==a||a.stopPropagation());if(null==i?void 0:i.carryParam)return;const o=p();if(n&&u(n))o(n);else{const e=t.slice(1),a=e.pop()||"";let r=`${e.pop()||""}/${a}`;r=/^\//.test(r)?r:`/${r}`,o(r)}},hasRedirect:function(e,t){var a;return!!(null==(a=null==t?void 0:t.meta)?void 0:a.isLink)||e.indexOf(t)!==e.length-1}}}});const E={key:1};y.render=function(e,t,a,r,n,i){const o=h("Icon"),s=h("router-link"),l=h("a-breadcrumb");return v(),b("div",{class:[e.prefixCls,`${e.prefixCls}--${e.theme}`]},[g(l,{routes:e.routes},{itemRender:C((({route:t,routes:a,paths:r})=>[e.getShowBreadCrumbIcon&&t.meta.icon?(v(),b(o,{key:0,icon:t.meta.icon},null,8,["icon"])):j("",!0),e.hasRedirect(a,t)?(v(),b(s,{key:2,to:"",onClick:a=>e.handleClick(t,r,a)},{default:C((()=>[B(k(e.t(t.meta.title)),1)])),_:2},1032,["onClick"])):(v(),b("span",E,k(e.t(t.meta.title)),1))])),_:1},8,["routes"])],2)};export default y;
