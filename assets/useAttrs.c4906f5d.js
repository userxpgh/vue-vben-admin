import{cY as s,a as t,aZ as e,a$ as a}from"./index.2b0223a6.js";const c=["class","style"],n=/^on[A-Z]/;function r(r={}){const o=a();if(!o)return{};const{excludeListeners:u=!1,excludeKeys:i=[]}=r,l=s({}),d=i.concat(c);return o.attrs=t(o.attrs),e((()=>{const s=(t=o.attrs,Object.keys(t).map((s=>[s,t[s]]))).reduce(((s,[t,e])=>(d.includes(t)||u&&n.test(t)||(s[t]=e),s)),{});var t;l.value=s})),l}export{r as u};