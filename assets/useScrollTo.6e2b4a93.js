import{r as a,ce as o,e as t,aU as r}from"./index.13aefb6f.js";import{r as s}from"./animation.3a6b162f.js";function n({el:n,to:e,duration:c=500,callback:l}){const i=a(!1),f=(a=>a.scrollTop)(n),u=e-f;let p=0;c=o(c)?500:c;const m=function(){if(!t(i))return;p+=20;const a=(o=p,e=f,b=u,(o/=c/2)<1?b/2*o*o+e:-b/2*(--o*(o-2)-1)+e);var o,e,b;((a,o)=>{a.scrollTop=o})(n,a),p<c&&t(i)?s(m):l&&r(l)&&l()};return{start:()=>{i.value=!0,m()},stop:()=>{i.value=!1}}}export{n as u};
