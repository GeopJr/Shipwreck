import{S as M,i as b,s as x,e as _,k as S,t as g,J as C,c as m,d as o,m as q,a as p,h as w,b as u,K as c,g as A,j as H,n as I}from"../chunks/index-709f8876.js";/* empty css                         */function D(n){let e,i,s,t,r,d,E,h,f;return{c(){e=_("meta"),i=S(),s=_("main"),t=_("div"),r=_("h1"),d=g(n[0]),E=S(),h=_("h2"),f=g(n[1]),this.h()},l(a){const l=C('[data-svelte="svelte-13hesxt"]',document.head);e=m(l,"META",{name:!0,content:!0}),l.forEach(o),i=q(a),s=m(a,"MAIN",{class:!0});var k=p(s);t=m(k,"DIV",{class:!0});var v=p(t);r=m(v,"H1",{});var y=p(r);d=w(y,n[0]),y.forEach(o),E=q(v),h=m(v,"H2",{class:!0});var j=p(h);f=w(j,n[1]),j.forEach(o),v.forEach(o),k.forEach(o),this.h()},h(){document.title="Shipwreck - Error",u(e,"name","og:title"),u(e,"content","Shipwreck - Error"),u(h,"class","svelte-kj6p36"),u(t,"class","overlay svelte-kj6p36"),u(s,"class","svelte-kj6p36")},m(a,l){c(document.head,e),A(a,i,l),A(a,s,l),c(s,t),c(t,r),c(r,d),c(t,E),c(t,h),c(h,f)},p(a,[l]){l&1&&H(d,a[0]),l&2&&H(f,a[1])},i:I,o:I,d(a){o(e),a&&o(i),a&&o(s)}}}function T({error:n,status:e}){return{props:{status:e,error:n.message}}}function J(n,e,i){let{status:s}=e,{error:t}=e;return n.$$set=r=>{"status"in r&&i(0,s=r.status),"error"in r&&i(1,t=r.error)},[s,t]}class V extends M{constructor(e){super();b(this,e,J,D,x,{status:0,error:1})}}export{V as default,T as load};
