import{S as A,i as M,s as B,k as m,a as y,q as $,G as C,l as h,h as o,c as w,m as f,r as x,n as _,H as i,b as H,u as I,B as q,I as D}from"../../chunks/index-c557404a.js";import{s as G}from"../../chunks/singletons-3f0eca46.js";/* empty css                            */const N=()=>{const s=G,e={page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated};return Object.defineProperties(e,{preloading:{get(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:s.navigating.subscribe}},enumerable:!1},session:{get(){return P(),{}},enumerable:!1}}),e},O={subscribe(s){return N().page.subscribe(s)}};function P(){throw new Error("stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")}function T(s){let e,l,a,r,u,d=s[0].status+"",b,E,c,p=s[0].error.message+"",v;return{c(){e=m("meta"),l=y(),a=m("main"),r=m("div"),u=m("h1"),b=$(d),E=y(),c=m("h2"),v=$(p),this.h()},l(t){const n=C("svelte-13hesxt",document.head);e=h(n,"META",{name:!0,content:!0}),n.forEach(o),l=w(t),a=h(t,"MAIN",{class:!0});var k=f(a);r=h(k,"DIV",{class:!0});var g=f(r);u=h(g,"H1",{});var S=f(u);b=x(S,d),S.forEach(o),E=w(g),c=h(g,"H2",{class:!0});var j=f(c);v=x(j,p),j.forEach(o),g.forEach(o),k.forEach(o),this.h()},h(){document.title="Shipwreck - Error",_(e,"name","og:title"),_(e,"content","Shipwreck - Error"),_(c,"class","svelte-kj6p36"),_(r,"class","overlay svelte-kj6p36"),_(a,"class","svelte-kj6p36")},m(t,n){i(document.head,e),H(t,l,n),H(t,a,n),i(a,r),i(r,u),i(u,b),i(r,E),i(r,c),i(c,v)},p(t,[n]){n&1&&d!==(d=t[0].status+"")&&I(b,d),n&1&&p!==(p=t[0].error.message+"")&&I(v,p)},i:q,o:q,d(t){o(e),t&&o(l),t&&o(a)}}}function V(s,e,l){let a;return D(s,O,r=>l(0,a=r)),[a]}class K extends A{constructor(e){super(),M(this,e,V,T,B,{})}}export{K as default};
