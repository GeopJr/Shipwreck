function h(){}function F(t,e){for(const n in e)t[n]=e[n];return t}function q(t){return t()}function C(){return Object.create(null)}function m(t){t.forEach(q)}function H(t){return typeof t=="function"}function I(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function G(t){return Object.keys(t).length===0}function ot(t,e,n,r){if(t){const i=M(t,e,n,r);return t[0](i)}}function M(t,e,n,r){return t[1]&&r?F(n.ctx.slice(),t[1](r(e))):n.ctx}function ut(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const f=[],o=Math.max(e.dirty.length,i.length);for(let u=0;u<o;u+=1)f[u]=e.dirty[u]|i[u];return f}return e.dirty|i}return e.dirty}function lt(t,e,n,r,i,f){if(i){const o=M(e,n,r,f);t.p(o,i)}}function ft(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}let b=!1;function J(){b=!0}function K(){b=!1}function Q(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const a=e[l];a.claim_order!==void 0&&c.push(a)}e=c}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,a=(i>0&&e[n[i]].claim_order<=l?i+1:Q(1,i,x=>e[n[x]].claim_order,l))-1;r[c]=n[a]+1;const s=a+1;n[s]=c,i=Math.max(s,i)}const f=[],o=[];let u=e.length-1;for(let c=n[i]+1;c!=0;c=r[c-1]){for(f.push(e[c-1]);u>=c;u--)o.push(e[u]);u--}for(;u>=0;u--)o.push(e[u]);f.reverse(),o.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<o.length;c++){for(;l<f.length&&o[c].claim_order>=f[l].claim_order;)l++;const a=l<f.length?f[l]:null;t.insertBefore(o[c],a)}}function W(t,e){if(b){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function st(t,e,n){b&&!n?W(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function U(t){t.parentNode.removeChild(t)}function V(t){return document.createElement(t)}function E(t){return document.createTextNode(t)}function at(){return E(" ")}function dt(){return E("")}function _t(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function ht(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function X(t){return Array.from(t.childNodes)}function Y(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function L(t,e,n,r,i=!1){Y(t);const f=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const u=t[o];if(e(u)){const c=n(u);return c===void 0?t.splice(o,1):t[o]=c,i||(t.claim_info.last_index=o),u}}for(let o=t.claim_info.last_index-1;o>=0;o--){const u=t[o];if(e(u)){const c=n(u);return c===void 0?t.splice(o,1):t[o]=c,i?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,u}}return r()})();return f.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,f}function Z(t,e,n,r){return L(t,i=>i.nodeName===e,i=>{const f=[];for(let o=0;o<i.attributes.length;o++){const u=i.attributes[o];n[u.name]||f.push(u.name)}f.forEach(o=>i.removeAttribute(o))},()=>r(e))}function mt(t,e,n){return Z(t,e,n,V)}function tt(t,e){return L(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>E(e),!0)}function pt(t){return tt(t," ")}function yt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function gt(t,e){t.value=e==null?"":e}function xt(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function bt(t,e,n){t.classList[n?"add":"remove"](e)}function $t(t,e=document.body){return Array.from(e.querySelectorAll(t))}let p;function y(t){p=t}function S(){if(!p)throw new Error("Function called outside component initialization");return p}function jt(t){S().$$.on_mount.push(t)}function wt(t){S().$$.after_update.push(t)}function Et(t,e){S().$$.context.set(t,e)}const g=[],P=[],$=[],z=[],B=Promise.resolve();let v=!1;function T(){v||(v=!0,B.then(D))}function St(){return T(),B}function O(t){$.push(t)}const A=new Set;let j=0;function D(){const t=p;do{for(;j<g.length;){const e=g[j];j++,y(e),et(e.$$)}for(y(null),g.length=0,j=0;P.length;)P.pop()();for(let e=0;e<$.length;e+=1){const n=$[e];A.has(n)||(A.add(n),n())}$.length=0}while(g.length);for(;z.length;)z.pop()();v=!1,A.clear(),y(t)}function et(t){if(t.fragment!==null){t.update(),m(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const w=new Set;let d;function vt(){d={r:0,c:[],p:d}}function Ot(){d.r||m(d.c),d=d.p}function nt(t,e){t&&t.i&&(w.delete(t),t.i(e))}function At(t,e,n,r){if(t&&t.o){if(w.has(t))return;w.add(t),d.c.push(()=>{w.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function Nt(t,e){const n={},r={},i={$$scope:1};let f=t.length;for(;f--;){const o=t[f],u=e[f];if(u){for(const c in o)c in u||(r[c]=1);for(const c in u)i[c]||(n[c]=u[c],i[c]=1);t[f]=u}else for(const c in o)i[c]=1}for(const o in r)o in n||(n[o]=void 0);return n}function kt(t){return typeof t=="object"&&t!==null?t:{}}function qt(t){t&&t.c()}function Ct(t,e){t&&t.l(e)}function rt(t,e,n,r){const{fragment:i,on_mount:f,on_destroy:o,after_update:u}=t.$$;i&&i.m(e,n),r||O(()=>{const c=f.map(q).filter(H);o?o.push(...c):m(c),t.$$.on_mount=[]}),u.forEach(O)}function it(t,e){const n=t.$$;n.fragment!==null&&(m(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ct(t,e){t.$$.dirty[0]===-1&&(g.push(t),T(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Mt(t,e,n,r,i,f,o,u=[-1]){const c=p;y(t);const l=t.$$={fragment:null,ctx:null,props:f,update:h,not_equal:i,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:C(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let a=!1;if(l.ctx=n?n(t,e.props||{},(s,x,...N)=>{const k=N.length?N[0]:x;return l.ctx&&i(l.ctx[s],l.ctx[s]=k)&&(!l.skip_bound&&l.bound[s]&&l.bound[s](k),a&&ct(t,s)),x}):[],l.update(),a=!0,m(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){J();const s=X(e.target);l.fragment&&l.fragment.l(s),s.forEach(U)}else l.fragment&&l.fragment.c();e.intro&&nt(t.$$.fragment),rt(t,e.target,e.anchor,e.customElement),K(),D()}y(c)}class Lt{$destroy(){it(this,1),this.$destroy=h}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!G(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const _=[];function Pt(t,e=h){let n;const r=new Set;function i(u){if(I(t,u)&&(t=u,n)){const c=!_.length;for(const l of r)l[1](),_.push(l,t);if(c){for(let l=0;l<_.length;l+=2)_[l][0](_[l+1]);_.length=0}}}function f(u){i(u(t))}function o(u,c=h){const l=[u,c];return r.add(l),r.size===1&&(n=e(i)||h),u(t),()=>{r.delete(l),r.size===0&&(n(),n=null)}}return{set:i,update:f,subscribe:o}}var zt=function t(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;var r,i,f;if(Array.isArray(e)){if(r=e.length,r!=n.length)return!1;for(i=r;i--!=0;)if(!t(e[i],n[i]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if(f=Object.keys(e),r=f.length,r!==Object.keys(n).length)return!1;for(i=r;i--!=0;)if(!Object.prototype.hasOwnProperty.call(n,f[i]))return!1;for(i=r;i--!=0;){var o=f[i];if(!t(e[o],n[o]))return!1}return!0}return e!==e&&n!==n};export{kt as A,it as B,F as C,Pt as D,St as E,ot as F,lt as G,ft as H,ut as I,$t as J,W as K,h as L,zt as M,bt as N,gt as O,_t as P,m as Q,Lt as S,X as a,ht as b,mt as c,U as d,V as e,xt as f,st as g,tt as h,Mt as i,yt as j,at as k,dt as l,pt as m,vt as n,At as o,Ot as p,nt as q,Et as r,I as s,E as t,wt as u,jt as v,qt as w,Ct as x,rt as y,Nt as z};
