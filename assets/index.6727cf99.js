import{d as s,f as t,aW as n,b1 as r,at as a,cn as e,b7 as o}from"./index.94b82568.js";var u=s({name:"Authority",props:{value:{type:[Number,Array,String],default:""}},setup(s,{slots:o}){const{getPermissionMode:u}=a(),{hasPermission:i}=e();return()=>{const a=t(u);return a===n.ROLE?function(){const{value:t}=s;return t?i(t)?r(o):null:r(o)}():a===n.BACK?function(){const{value:t}=s;return t?i(t)?r(o):null:r(o)}():r(o)}}});o(u);export{u as _};