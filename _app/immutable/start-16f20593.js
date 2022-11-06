import{S as Qe,i as xe,s as et,a as tt,e as F,c as nt,b as H,g as de,t as J,d as he,f as G,h as K,j as rt,o as Se,k as at,l as st,m as ot,n as Ee,p as q,q as it,r as lt,u as ct,v as X,w as Z,x as Ae,y as Q,z as x,A as Ge}from"./chunks/index-a4d79020.js";import{g as Ke,f as ze,s as M,a as $e,b as ft,i as ut}from"./chunks/singletons-4c20b4f1.js";function pt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function dt(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const ht=["href","pathname","search","searchParams","toString","toJSON"];function mt(r,e){const n=new URL(r);for(const i of ht){let s=n[i];Object.defineProperty(n,i,{get(){return e(),s},enumerable:!0,configurable:!0})}return gt(n),n}function gt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const _t="/__data.json";function wt(r){return r.replace(/\/$/,"")+_t}function yt(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let i=n.length;for(;i;)e=e*33^n[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const me=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const i=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;pe.delete(i)}return me(r,e)};const pe=new Map;function bt(r,e,n){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;(n==null?void 0:n.body)&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&(s+=`[data-hash="${yt(n.body)}"]`);const d=document.querySelector(s);if(d!=null&&d.textContent){const{body:t,...f}=JSON.parse(d.textContent),g=d.getAttribute("data-ttl");return g&&pe.set(e,{body:t,init:f,ttl:1e3*Number(g)}),Promise.resolve(new Response(t,f))}return me(r,n)}function vt(r,e){const n=pe.get(r);if(n){if(performance.now()<n.ttl)return new Response(n.body,n.init);pe.delete(r)}return me(r,e)}const Et=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function kt(r){const e=[],n=[],i=[];let s=!0;return{pattern:r==="/"?/^\/$/:new RegExp(`^${St(r).map((t,f,g)=>{const p=decodeURIComponent(t),_=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(p);if(_)return e.push(_[1]),n.push(_[2]),i.push(!1),"(?:/(.*))?";const w=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(p);if(w)return e.push(w[1]),n.push(w[2]),i.push(!0),"(?:/([^/]+))?";const $=f===g.length-1;if(!p)return;const C=p.split(/\[(.+?)\](?!\])/).map((L,B)=>{if(B%2){const T=Et.exec(L);if(!T)throw new Error(`Invalid param: ${L}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,ee,W,oe,te]=T;return e.push(oe),n.push(te),i.push(!!ee),W?"(.*?)":ee?"([^/]*)?":"([^/]+?)"}return $&&L.includes(".")&&(s=!1),L.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("");return"/"+C}).join("")}${s?"/?":""}$`),names:e,types:n,optional:i}}function Rt(r){return!/^\([^)]+\)$/.test(r)}function St(r){return r.slice(1).split("/").filter(Rt)}function $t(r,{names:e,types:n,optional:i},s){const d={};for(let t=0;t<e.length;t+=1){const f=e[t],g=n[t];let p=r[t+1];if(p||!i[t]){if(g){const _=s[g];if(!_)throw new Error(`Missing "${g}" param matcher`);if(!_(p))return}d[f]=p!=null?p:""}}return d}function Ot(r,e,n,i){const s=new Set(e);return Object.entries(n).map(([f,[g,p,_]])=>{const{pattern:w,names:$,types:z,optional:C}=kt(f),L={id:f,exec:B=>{const T=w.exec(B);if(T)return $t(T,{names:$,types:z,optional:C},i)},errors:[1,..._||[]].map(B=>r[B]),layouts:[0,...p||[]].map(t),leaf:d(g)};return L.errors.length=L.layouts.length=Math.max(L.errors.length,L.layouts.length),L});function d(f){const g=f<0;return g&&(f=~f),[g,r[f]]}function t(f){return f===void 0?f:[s.has(f),r[f]]}}function Lt(r){let e,n,i;var s=r[0][0];function d(t){return{props:{data:t[2],form:t[1]}}}return s&&(e=X(s,d(r))),{c(){e&&Z(e.$$.fragment),n=F()},l(t){e&&Ae(e.$$.fragment,t),n=F()},m(t,f){e&&Q(e,t,f),H(t,n,f),i=!0},p(t,f){const g={};if(f&4&&(g.data=t[2]),f&2&&(g.form=t[1]),s!==(s=t[0][0])){if(e){de();const p=e;J(p.$$.fragment,1,0,()=>{x(p,1)}),he()}s?(e=X(s,d(t)),Z(e.$$.fragment),G(e.$$.fragment,1),Q(e,n.parentNode,n)):e=null}else s&&e.$set(g)},i(t){i||(e&&G(e.$$.fragment,t),i=!0)},o(t){e&&J(e.$$.fragment,t),i=!1},d(t){t&&K(n),e&&x(e,t)}}}function jt(r){let e,n,i;var s=r[0][0];function d(t){return{props:{data:t[2],$$slots:{default:[At]},$$scope:{ctx:t}}}}return s&&(e=X(s,d(r))),{c(){e&&Z(e.$$.fragment),n=F()},l(t){e&&Ae(e.$$.fragment,t),n=F()},m(t,f){e&&Q(e,t,f),H(t,n,f),i=!0},p(t,f){const g={};if(f&4&&(g.data=t[2]),f&523&&(g.$$scope={dirty:f,ctx:t}),s!==(s=t[0][0])){if(e){de();const p=e;J(p.$$.fragment,1,0,()=>{x(p,1)}),he()}s?(e=X(s,d(t)),Z(e.$$.fragment),G(e.$$.fragment,1),Q(e,n.parentNode,n)):e=null}else s&&e.$set(g)},i(t){i||(e&&G(e.$$.fragment,t),i=!0)},o(t){e&&J(e.$$.fragment,t),i=!1},d(t){t&&K(n),e&&x(e,t)}}}function At(r){let e,n,i;var s=r[0][1];function d(t){return{props:{data:t[3],form:t[1]}}}return s&&(e=X(s,d(r))),{c(){e&&Z(e.$$.fragment),n=F()},l(t){e&&Ae(e.$$.fragment,t),n=F()},m(t,f){e&&Q(e,t,f),H(t,n,f),i=!0},p(t,f){const g={};if(f&8&&(g.data=t[3]),f&2&&(g.form=t[1]),s!==(s=t[0][1])){if(e){de();const p=e;J(p.$$.fragment,1,0,()=>{x(p,1)}),he()}s?(e=X(s,d(t)),Z(e.$$.fragment),G(e.$$.fragment,1),Q(e,n.parentNode,n)):e=null}else s&&e.$set(g)},i(t){i||(e&&G(e.$$.fragment,t),i=!0)},o(t){e&&J(e.$$.fragment,t),i=!1},d(t){t&&K(n),e&&x(e,t)}}}function Me(r){let e,n=r[5]&&He(r);return{c(){e=at("div"),n&&n.c(),this.h()},l(i){e=st(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=ot(e);n&&n.l(s),s.forEach(K),this.h()},h(){Ee(e,"id","svelte-announcer"),Ee(e,"aria-live","assertive"),Ee(e,"aria-atomic","true"),q(e,"position","absolute"),q(e,"left","0"),q(e,"top","0"),q(e,"clip","rect(0 0 0 0)"),q(e,"clip-path","inset(50%)"),q(e,"overflow","hidden"),q(e,"white-space","nowrap"),q(e,"width","1px"),q(e,"height","1px")},m(i,s){H(i,e,s),n&&n.m(e,null)},p(i,s){i[5]?n?n.p(i,s):(n=He(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&K(e),n&&n.d()}}}function He(r){let e;return{c(){e=it(r[6])},l(n){e=lt(n,r[6])},m(n,i){H(n,e,i)},p(n,i){i&64&&ct(e,n[6])},d(n){n&&K(e)}}}function It(r){let e,n,i,s,d;const t=[jt,Lt],f=[];function g(_,w){return _[0][1]?0:1}e=g(r),n=f[e]=t[e](r);let p=r[4]&&Me(r);return{c(){n.c(),i=tt(),p&&p.c(),s=F()},l(_){n.l(_),i=nt(_),p&&p.l(_),s=F()},m(_,w){f[e].m(_,w),H(_,i,w),p&&p.m(_,w),H(_,s,w),d=!0},p(_,[w]){let $=e;e=g(_),e===$?f[e].p(_,w):(de(),J(f[$],1,1,()=>{f[$]=null}),he(),n=f[e],n?n.p(_,w):(n=f[e]=t[e](_),n.c()),G(n,1),n.m(i.parentNode,i)),_[4]?p?p.p(_,w):(p=Me(_),p.c(),p.m(s.parentNode,s)):p&&(p.d(1),p=null)},i(_){d||(G(n),d=!0)},o(_){J(n),d=!1},d(_){f[e].d(_),_&&K(i),p&&p.d(_),_&&K(s)}}}function Nt(r,e,n){let{stores:i}=e,{page:s}=e,{components:d}=e,{form:t}=e,{data_0:f=null}=e,{data_1:g=null}=e;rt(i.page.notify);let p=!1,_=!1,w=null;return Se(()=>{const $=i.page.subscribe(()=>{p&&(n(5,_=!0),n(6,w=document.title||"untitled page"))});return n(4,p=!0),$}),r.$$set=$=>{"stores"in $&&n(7,i=$.stores),"page"in $&&n(8,s=$.page),"components"in $&&n(0,d=$.components),"form"in $&&n(1,t=$.form),"data_0"in $&&n(2,f=$.data_0),"data_1"in $&&n(3,g=$.data_1)},r.$$.update=()=>{r.$$.dirty&384&&i.page.set(s)},[d,t,f,g,p,_,w,i,s]}class Pt extends Qe{constructor(e){super(),xe(this,e,Nt,It,et,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Ut=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Tt=function(r,e){return new URL(r,e).href},We={},ke=function(e,n,i){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(d=>{if(d=Tt(d,i),d in We)return;We[d]=!0;const t=d.endsWith(".css"),f=t?'[rel="stylesheet"]':"";if(!!i)for(let _=s.length-1;_>=0;_--){const w=s[_];if(w.href===d&&(!t||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${f}`))return;const p=document.createElement("link");if(p.rel=t?"stylesheet":Ut,t||(p.as="script",p.crossOrigin=""),p.href=d,document.head.appendChild(p),t)return new Promise((_,w)=>{p.addEventListener("load",_),p.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${d}`)))})})).then(()=>e())},Dt={},ge=[()=>ke(()=>import("./chunks/0-53644802.js"),["./chunks/0-53644802.js","./components/layout.svelte-e0811907.js","./chunks/index-a4d79020.js"],import.meta.url),()=>ke(()=>import("./chunks/1-b9a63c2d.js"),["./chunks/1-b9a63c2d.js","./components/pages/_error.svelte-aac49cc2.js","./chunks/index-a4d79020.js","./chunks/singletons-4c20b4f1.js","./assets/_error-30c56eab.css","./assets/ress-39fe2769.css"],import.meta.url),()=>ke(()=>import("./chunks/2-d6aceebe.js"),["./chunks/2-d6aceebe.js","./components/pages/_page.svelte-0c869af3.js","./chunks/index-a4d79020.js","./assets/_page-85cdca2c.css","./assets/ress-39fe2769.css"],import.meta.url)],Bt=[],qt={"/":[2]},Ct={handleError:({error:r})=>{console.error(r)}};class Oe{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ye{constructor(e,n){this.status=e,this.location=n}}async function Vt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([i,s])=>[i,await s])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Ft=-1,Jt=-2,Gt=-3,Kt=-4,zt=-5,Mt=-6;function Ht(r){if(typeof r=="number")return i(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function i(s,d=!1){if(s===Ft)return;if(s===Gt)return NaN;if(s===Kt)return 1/0;if(s===zt)return-1/0;if(s===Mt)return-0;if(d)throw new Error("Invalid input");if(s in n)return n[s];const t=e[s];if(!t||typeof t!="object")n[s]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[s]=new Date(t[1]);break;case"Set":const g=new Set;n[s]=g;for(let w=1;w<t.length;w+=1)g.add(i(t[w]));break;case"Map":const p=new Map;n[s]=p;for(let w=1;w<t.length;w+=2)p.set(i(t[w]),i(t[w+1]));break;case"RegExp":n[s]=new RegExp(t[1],t[2]);break;case"Object":n[s]=Object(t[1]);break;case"BigInt":n[s]=BigInt(t[1]);break;case"null":const _=Object.create(null);n[s]=_;for(let w=1;w<t.length;w+=2)_[t[w]]=i(t[w+1]);break}else{const f=new Array(t.length);n[s]=f;for(let g=0;g<t.length;g+=1){const p=t[g];p!==Jt&&(f[g]=i(p))}}else{const f={};n[s]=f;for(const g in t){const p=t[g];f[g]=i(p)}}return n[s]}return i(0)}const Ze="sveltekit:scroll",V="sveltekit:index",ce=Ot(ge,Bt,qt,Dt),Le=ge[0],je=ge[1];Le();je();let se={};try{se=JSON.parse(sessionStorage[Ze])}catch{}function Re(r){se[r]=$e()}function Wt({target:r,base:e,trailing_slash:n}){var Ve;const i=[];let s=null;const d={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,g=!1,p=!0,_=!1,w=!1,$=!1,z=!1,C,L=(Ve=history.state)==null?void 0:Ve[V];L||(L=Date.now(),history.replaceState({...history.state,[V]:L},"",location.href));const B=se[L];B&&(history.scrollRestoration="manual",scrollTo(B.x,B.y));let T,ee,W;async function oe(){W=W||Promise.resolve(),await W,W=null;const a=new URL(location.href),l=ye(a,!0);s=null,await Ne(l,a,[])}async function te(a,{noScroll:l=!1,replaceState:u=!1,keepFocus:o=!1,state:c={},invalidateAll:h=!1},m,v){return typeof a=="string"&&(a=new URL(a,Ke(document))),be({url:a,scroll:l?$e():null,keepfocus:o,redirect_chain:m,details:{state:c,replaceState:u},nav_token:v,accepted:()=>{h&&(z=!0)},blocked:()=>{},type:"goto"})}async function Ie(a){const l=ye(a,!1);if(!l)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${a}`);return s={id:l.id,promise:Te(l)},s.promise}async function Ne(a,l,u,o,c={},h){var v,E;ee=c;let m=a&&await Te(a);if(m||(m=await Ce(l,{id:null},ae(new Error(`Not found: ${l.pathname}`),{url:l,params:{},route:{id:null}}),404)),l=(a==null?void 0:a.url)||l,ee!==c)return!1;if(m.type==="redirect")if(u.length>10||u.includes(l.pathname))m=await ie({status:500,error:ae(new Error("Redirect loop"),{url:l,params:{},route:{id:null}}),url:l,route:{id:null}});else return te(new URL(m.location,l).href,{},[...u,l.pathname],c),!1;else((E=(v=m.props)==null?void 0:v.page)==null?void 0:E.status)>=400&&await M.updated.check()&&await le(l);if(i.length=0,z=!1,_=!0,o&&o.details){const{details:y}=o,b=y.replaceState?0:1;y.state[V]=L+=b,history[y.replaceState?"replaceState":"pushState"](y.state,"",l)}if(s=null,g){t=m.state,m.props.page&&(m.props.page.url=l);const y=ue();C.$set(m.props),y()}else Pe(m);if(o){const{scroll:y,keepfocus:b}=o;if(!b){const R=document.body,I=R.getAttribute("tabindex");R.tabIndex=-1,R.focus({preventScroll:!0}),setTimeout(()=>{var O;(O=getSelection())==null||O.removeAllRanges()}),I!==null?R.setAttribute("tabindex",I):R.removeAttribute("tabindex")}if(await Ge(),p){const R=l.hash&&document.getElementById(l.hash.slice(1));y?scrollTo(y.x,y.y):R?R.scrollIntoView():scrollTo(0,0)}}else await Ge();p=!0,m.props.page&&(T=m.props.page),h&&h(),_=!1}function Pe(a){var c,h;t=a.state;const l=document.querySelector("style[data-sveltekit]");l&&l.remove(),T=a.props.page;const u=ue();C=new Pt({target:r,props:{...a.props,stores:M},hydrate:!0}),u();const o={from:null,to:fe("to",{params:t.params,route:{id:(h=(c=t.route)==null?void 0:c.id)!=null?h:null},url:new URL(location.href)}),willUnload:!1,type:"enter"};d.after_navigate.forEach(m=>m(o)),g=!0}async function ne({url:a,params:l,branch:u,status:o,error:c,route:h,form:m}){var I;const v=u.filter(Boolean),E={type:"loaded",state:{url:a,params:l,branch:u,error:c,route:h},props:{components:v.map(O=>O.node.component)}};m!==void 0&&(E.props.form=m);let y={},b=!T;for(let O=0;O<v.length;O+=1){const P=v[O];y={...y,...P.data},(b||!t.branch.some(U=>U===P))&&(E.props[`data_${O}`]=y,b=b||Object.keys((I=P.data)!=null?I:{}).length>0)}if(b||(b=Object.keys(T.data).length!==Object.keys(y).length),!t.url||a.href!==t.url.href||t.error!==c||m!==void 0||b){E.props.page={error:c,params:l,route:h,status:o,url:a,form:m,data:b?y:T.data};const O=(P,U)=>{Object.defineProperty(E.props.page,P,{get:()=>{throw new Error(`$page.${P} has been replaced by $page.url.${U}`)}})};O("origin","origin"),O("path","pathname"),O("query","searchParams")}return E}async function _e({loader:a,parent:l,url:u,params:o,route:c,server_data_node:h}){var y,b,R,I,O;let m=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await a();if((y=E.shared)!=null&&y.load){let P=function(...S){for(const D of S){const{href:k}=new URL(D,u);v.dependencies.add(k)}};const U={route:{get id(){return v.route=!0,c.id}},params:new Proxy(o,{get:(S,D)=>(v.params.add(D),S[D])}),data:(b=h==null?void 0:h.data)!=null?b:null,url:mt(u,()=>{v.url=!0}),async fetch(S,D){let k;S instanceof Request?(k=S.url,D={body:S.method==="GET"||S.method==="HEAD"?void 0:await S.blob(),cache:S.cache,credentials:S.credentials,headers:S.headers,integrity:S.integrity,keepalive:S.keepalive,method:S.method,mode:S.mode,redirect:S.redirect,referrer:S.referrer,referrerPolicy:S.referrerPolicy,signal:S.signal,...D}):k=S;const j=new URL(k,u).href;return P(j),g?vt(j,D):bt(k,j,D)},setHeaders:()=>{},depends:P,parent(){return v.parent=!0,l()}};Object.defineProperties(U,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),m=(R=await E.shared.load.call(null,U))!=null?R:null,m=m?await Vt(m):null}return{node:E,loader:a,server:h,shared:(I=E.shared)!=null&&I.load?{type:"data",data:m,uses:v}:null,data:(O=m!=null?m:h==null?void 0:h.data)!=null?O:null}}function Ue(a,l,u,o,c){if(z)return!0;if(!o)return!1;if(o.parent&&a||o.route&&l||o.url&&u)return!0;for(const h of o.params)if(c[h]!==t.params[h])return!0;for(const h of o.dependencies)if(i.some(m=>m(new URL(h))))return!0;return!1}function we(a,l){var u,o;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((u=a.uses.dependencies)!=null?u:[]),params:new Set((o=a.uses.params)!=null?o:[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&l!=null?l:null}async function Te({id:a,invalidating:l,url:u,params:o,route:c}){var D;if((s==null?void 0:s.id)===a)return s.promise;const{errors:h,layouts:m,leaf:v}=c,E=[...m,v];h.forEach(k=>k==null?void 0:k().catch(()=>{})),E.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let y=null;const b=t.url?a!==t.url.pathname+t.url.search:!1,R=t.route?a!==t.route.id:!1,I=E.reduce((k,j,N)=>{var re;const A=t.branch[N],Y=!!(j!=null&&j[0])&&((A==null?void 0:A.loader)!==j[1]||Ue(k.some(Boolean),R,b,(re=A.server)==null?void 0:re.uses,o));return k.push(Y),k},[]);if(I.some(Boolean)){try{y=await Xe(u,I)}catch(k){return ie({status:500,error:ae(k,{url:u,params:o,route:{id:c.id}}),url:u,route:c})}if(y.type==="redirect")return y}const O=y==null?void 0:y.nodes;let P=!1;const U=E.map(async(k,j)=>{var re;if(!k)return;const N=t.branch[j],A=O==null?void 0:O[j];if((!A||A.type==="skip")&&k[1]===(N==null?void 0:N.loader)&&!Ue(P,R,b,(re=N.shared)==null?void 0:re.uses,o))return N;if(P=!0,(A==null?void 0:A.type)==="error")throw A;return _e({loader:k[1],url:u,params:o,route:c,parent:async()=>{var Je;const Fe={};for(let ve=0;ve<j;ve+=1)Object.assign(Fe,(Je=await U[ve])==null?void 0:Je.data);return Fe},server_data_node:we(A===void 0&&k[0]?{type:"skip"}:A!=null?A:null,N==null?void 0:N.server)})});for(const k of U)k.catch(()=>{});const S=[];for(let k=0;k<E.length;k+=1)if(E[k])try{S.push(await U[k])}catch(j){if(j instanceof Ye)return{type:"redirect",location:j.location};let N=500,A;O!=null&&O.includes(j)?(N=(D=j.status)!=null?D:N,A=j.error):j instanceof Oe?(N=j.status,A=j.body):A=ae(j,{params:o,url:u,route:{id:c.id}});const Y=await De(k,S,h);return Y?await ne({url:u,params:o,branch:S.slice(0,Y.idx).concat(Y.node),status:N,error:A,route:c}):await Ce(u,{id:c.id},A,N)}else S.push(void 0);return await ne({url:u,params:o,branch:S,status:200,error:null,route:c,form:l?void 0:null})}async function De(a,l,u){for(;a--;)if(u[a]){let o=a;for(;!l[o];)o-=1;try{return{idx:o+1,node:{node:await u[a](),loader:u[a],data:{},server:null,shared:null}}}catch{continue}}}async function ie({status:a,error:l,url:u,route:o}){var y;const c={},h=await Le();let m=null;if(h.server)try{const b=await Xe(u,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;m=(y=b.nodes[0])!=null?y:null}catch{(u.origin!==location.origin||u.pathname!==location.pathname||f)&&await le(u)}const v=await _e({loader:Le,url:u,params:c,route:o,parent:()=>Promise.resolve({}),server_data_node:we(m)}),E={node:await je(),loader:je,shared:null,server:null,data:null};return await ne({url:u,params:c,branch:[v,E],status:a,error:l,route:null})}function ye(a,l){if(Be(a))return;const u=decodeURI(a.pathname.slice(e.length)||"/");for(const o of ce){const c=o.exec(u);if(c){const h=new URL(a.origin+pt(a.pathname,n)+a.search+a.hash);return{id:h.pathname+h.search,invalidating:l,route:o,params:dt(c),url:h}}}}function Be(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}function qe({url:a,type:l,intent:u,delta:o}){var v,E,y,b,R;let c=!1;const h={from:fe("from",{params:t.params,route:{id:(E=(v=t.route)==null?void 0:v.id)!=null?E:null},url:t.url}),to:fe("to",{params:(y=u==null?void 0:u.params)!=null?y:null,route:{id:(R=(b=u==null?void 0:u.route)==null?void 0:b.id)!=null?R:null},url:a}),willUnload:!u,type:l};o!==void 0&&(h.delta=o);const m={...h,cancel:()=>{c=!0}};return d.before_navigate.forEach(I=>I(m)),c?null:h}async function be({url:a,scroll:l,keepfocus:u,redirect_chain:o,details:c,type:h,delta:m,nav_token:v,accepted:E,blocked:y}){const b=ye(a,!1),R=qe({url:a,type:h,delta:m,intent:b});if(!R){y();return}Re(L),E(),w=!0,g&&M.navigating.set(R),await Ne(b,a,o,{scroll:l,keepfocus:u,details:c},v,()=>{w=!1,d.after_navigate.forEach(I=>I(R)),M.navigating.set(null)})}async function Ce(a,l,u,o){return a.origin===location.origin&&a.pathname===location.pathname&&!f?await ie({status:o,error:u,url:a,route:l}):await le(a)}function le(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{Se(()=>(d.after_navigate.push(a),()=>{const l=d.after_navigate.indexOf(a);d.after_navigate.splice(l,1)}))},before_navigate:a=>{Se(()=>(d.before_navigate.push(a),()=>{const l=d.before_navigate.indexOf(a);d.before_navigate.splice(l,1)}))},disable_scroll_handling:()=>{(_||!g)&&(p=!1)},goto:(a,l={})=>{if("keepfocus"in l)throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in l)throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return te(a,l,[])},invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")i.push(a);else{const{href:l}=new URL(a,location.href);i.push(u=>u.href===l)}return oe()},invalidateAll:()=>(z=!0,oe()),prefetch:async a=>{const l=new URL(a,Ke(document));await Ie(l)},prefetch_routes:async a=>{const u=(a?ce.filter(o=>a.some(c=>o.exec(c))):ce).map(o=>Promise.all([...o.layouts,o.leaf].map(c=>c==null?void 0:c[1]())));await Promise.all(u)},apply_action:async a=>{if(a.type==="error"){const l=new URL(location.href),{branch:u,route:o}=t;if(!o)return;const c=await De(t.branch.length,u,o.errors);if(c){const h=await ne({url:l,params:t.params,branch:u.slice(0,c.idx).concat(c.node),status:500,error:a.error,route:o});t=h.state;const m=ue();C.$set(h.props),m()}}else if(a.type==="redirect")te(a.location,{invalidateAll:!0},[]);else{const l={form:a.data,page:{...T,form:a.data,status:a.status}},u=ue();C.$set(l),u()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var h,m;let c=!1;if(!w){const v={from:fe("from",{params:t.params,route:{id:(m=(h=t.route)==null?void 0:h.id)!=null?m:null},url:t.url}),to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};d.before_navigate.forEach(E=>E(v))}c?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Re(L);try{sessionStorage[Ze]=JSON.stringify(se)}catch{}}});const a=o=>{const{url:c,options:h}=ze(o);if(c&&h.prefetch){if(Be(c))return;Ie(c)}};let l;const u=o=>{clearTimeout(l),l=setTimeout(()=>{var c;(c=o.target)==null||c.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",u),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const{a:c,url:h,options:m}=ze(o);if(!c||!h)return;const v=c instanceof SVGAElement;if(!v&&h.protocol!==location.protocol&&!(h.protocol==="https:"||h.protocol==="http:")||c.hasAttribute("download"))return;if((c.getAttribute("rel")||"").split(/\s+/).includes("external")||m.reload||(v?c.target.baseVal:c.target)){qe({url:h,type:"link"})||o.preventDefault(),w=!0;return}const[y,b]=h.href.split("#");if(b!==void 0&&y===location.href.split("#")[0]){$=!0,Re(L),t.url=h,M.page.set({...T,url:h}),M.page.notify();return}be({url:h,scroll:m.noscroll?$e():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:h.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),addEventListener("popstate",o=>{if(o.state){if(o.state[V]===L)return;const c=o.state[V]-L;be({url:new URL(location.href),scroll:se[o.state[V]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{L=o.state[V]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}}),addEventListener("hashchange",()=>{$&&($=!1,history.replaceState({...history.state,[V]:++L},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&M.navigating.set(null)})},_hydrate:async({status:a,error:l,node_ids:u,params:o,route:c,data:h,form:m})=>{var y;f=!0;const v=new URL(location.href);let E;try{const b=u.map(async(R,I)=>{const O=h[I];return _e({loader:ge[R],url:v,params:o,route:c,parent:async()=>{const P={};for(let U=0;U<I;U+=1)Object.assign(P,(await b[U]).data);return P},server_data_node:we(O)})});E=await ne({url:v,params:o,branch:await Promise.all(b),status:a,error:l,form:m,route:(y=ce.find(({id:R})=>R===c.id))!=null?y:null})}catch(b){if(b instanceof Ye){await le(new URL(b.location,location.href));return}E=await ie({status:b instanceof Oe?b.status:500,error:ae(b,{url:v,params:o,route:c}),url:v,route:c})}Pe(E)}}}async function Xe(r,e){var d;const n=new URL(r);n.pathname=wt(r.pathname);const i=await me(n.href,{headers:{"x-sveltekit-invalidated":e.map(t=>t?"1":"").join(",")}}),s=await i.json();if(!i.ok)throw new Error(s);return(d=s.nodes)==null||d.forEach(t=>{var f,g;(t==null?void 0:t.type)==="data"&&(t.data=Ht(t.data),t.uses={dependencies:new Set((f=t.uses.dependencies)!=null?f:[]),params:new Set((g=t.uses.params)!=null?g:[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),s}function ae(r,e){var n;return r instanceof Oe?r.body:(n=Ct.handleError({error:r,event:e}))!=null?n:{message:e.route.id!=null?"Internal Error":"Not Found"}}const Yt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function fe(r,e){for(const n of Yt)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${r}.routeId should now be ${r}.route.id`)},enumerable:!1}),e}function ue(){return()=>{}}async function Qt({env:r,hydrate:e,paths:n,target:i,trailing_slash:s}){ft(n);const d=Wt({target:i,base:n.base,trailing_slash:s});ut({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{Qt as start};
