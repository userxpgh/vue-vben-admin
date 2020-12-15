import{a as e,P as o,I as n,M as c,H as l,k as t,r as a,ae as i,L as r,ad as s,by as u,bh as d}from"./index.2a9ceb8a.js";import{P as f,a as v}from"./colors.b7cfe24e.js";function p(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}var b=e({name:"ACheckableTag",props:{prefixCls:o.string,checked:o.looseBool,onChange:{type:Function},onClick:{type:Function}},emits:["update:checked","change","click"],setup:function(e,o){var a=o.slots,i=o.emit,r=n("configProvider",c).getPrefixCls,s=function(o){var n=e.checked;i("update:checked",!n),i("change",!n),i("click",o)};return function(){var o,n,c=e.checked,i=e.prefixCls,u=r("tag",i),d=l(u,(p(o={},"".concat(u,"-checkable"),!0),p(o,"".concat(u,"-checkable-checked"),c),o));return t("span",{class:d,onClick:s},[null===(n=a.default)||void 0===n?void 0:n.call(a)])}}});function g(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function k(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!r(e)}var h=new RegExp("^(".concat(f.join("|"),")(-inverse)?$")),C=new RegExp("^(".concat(v.join("|"),")$")),m={prefixCls:o.string,color:{type:String},closable:o.looseBool.def(!1),closeIcon:o.VNodeChild,visible:o.looseBool,onClose:{type:Function},icon:o.VNodeChild},x=e({name:"ATag",emits:["update:visible","close"],setup:function(e,o){var r=o.slots,f=o.emit,v=o.attrs,p=n("configProvider",c).getPrefixCls,b=a(!0);i((function(){void 0!==e.visible&&(b.value=e.visible)}));var m=function(o){o.stopPropagation(),f("update:visible",!1),f("close",o),o.defaultPrevented||void 0===e.visible&&(b.value=!1)},x=function(){var o=e.color;return!!o&&(h.test(o)||C.test(o))};return function(){var o,n,c,a,i=e.prefixCls,f=e.icon,h=void 0===f?null===(n=r.icon)||void 0===n?void 0:n.call(r):f,C=e.color,y=e.closeIcon,P=void 0===y?null===(c=r.closeIcon)||void 0===c?void 0:c.call(r):y,j=e.closable,w=void 0!==j&&j,I=x(),O=p("tag",i),T={backgroundColor:C&&!x()?C:void 0},B=l(O,(g(o={},"".concat(O,"-").concat(C),I),g(o,"".concat(O,"-has-color"),C&&!I),g(o,"".concat(O,"-hidden"),!b.value),o)),F=h||null,A=null===(a=r.default)||void 0===a?void 0:a.call(r),E=F?t(s,null,[F,t("span",null,k(A)?A:{default:function(){return[A]}})]):A,N="onClick"in v,R=t("span",{class:B,style:T},[E,w?P?t("div",{class:"".concat(O,"-close-icon"),onClick:m},k(P)?P:{default:function(){return[P]}}):t(d,{class:"".concat(O,"-close-icon"),onClick:m},null):null]);return N?t(u,null,k(R)?R:{default:function(){return[R]}}):R}}});x.props=m,x.CheckableTag=b,x.install=function(e){return e.component(x.name,x),e.component(b.name,b),e};export{x as T};