/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
(function(Context,namespace,hydratedCssClass,resourcesUrl,s){"use strict";
s=document.querySelector("script[data-namespace='ionic']");if(s){resourcesUrl=s.getAttribute('data-resources-url');}
(function(resourcesUrl){const t=window.Ionic=window.Ionic||{};Object.defineProperty(t,"queue",{get:()=>Context.queue});const e=t.config=Context.config=new class{constructor(t){this.m=new Map(Object.entries(t))}get(t,e){const o=this.m.get(t);return void 0!==o?o:e}getBoolean(t,e=!1){const o=this.m.get(t);return void 0===o?e:"string"==typeof o?"true"===o:!!o}getNumber(t,e){const o=parseFloat(this.m.get(t));return isNaN(o)?void 0!==e?e:NaN:o}set(t,e){this.m.set(t,e)}}(Object.assign({},t.config,function(){const t={};return window.location.search.slice(1).split("&").filter(t=>t.startsWith("ionic:")).map(t=>t.split("=")).forEach(e=>{t[e[0].slice(6)]=decodeURIComponent(e[1])}),t}())),o=document.documentElement,n=e.get("mode",o.getAttribute("mode")||(function(t,e){return/iPad|iPhone|iPod/i.test(t.navigator.userAgent)}(window)?"ios":"md"));t.mode=Context.mode=n,e.set("mode",n),o.setAttribute("mode",t.mode);
})(resourcesUrl);
(function(t,e,n,o){"use strict";function i(t,e,n,o,i,c,f){let l=n.t+(o||O),s=n[l];if(s||(s=n[l=n.t+O]),s){let o=e.e;if(e.n)if(1===n.encapsulation)o=i.shadowRoot;else for(;i=e.o(i);)if(i.host&&i.host.shadowRoot){o=i.host.shadowRoot;break}const c=t.i.get(o)||{};if(!c[l]){f=s.content.cloneNode(!0);const n=o.querySelectorAll("[data-styles]");e.c(o,f,n.length&&n[n.length-1].nextSibling||o.f),c[l]=!0,t.i.set(o,c)}}}function c(t){return{l:t[0],s:t[1],r:!!t[2],u:!!t[3],a:!!t[4]}}function f(t,e){if(T(e)&&"object"!=typeof e){if(t===Boolean||3===t)return"false"!==e&&(""===e||!!e);if(t===Number||4===t)return parseFloat(e);if(t===String||2===t)return e.toString()}return e}function l(t,e,n,o){const i=t.p.get(e);i&&((o=i["s-ld"]||i.$activeLoading)&&((n=o.indexOf(e))>-1&&o.splice(n,1),o.length||(i["s-init"]&&i["s-init"](),i.$initLoad&&i.$initLoad())),t.p.delete(e))}function s(t,e,n){let o,i,c=null,f=!1,l=!1;for(var s=arguments.length;s-- >2;)L.push(arguments[s]);for(;L.length>0;)if((n=L.pop())&&void 0!==n.pop)for(s=n.length;s--;)L.push(n[s]);else"boolean"==typeof n&&(n=null),(l="function"!=typeof t)&&(null==n?n="":"number"==typeof n?n=String(n):"string"!=typeof n&&(l=!1)),l&&f?c[c.length-1].d+=n:null===c?c=[l?{d:n}:n]:c.push(l?{d:n}:n),f=l;if(null!=e){if(e.className&&(e.class=e.className),"object"==typeof e.class){for(s in e.class)e.class[s]&&L.push(s);e.class=L.join(" "),L.length=0}null!=e.v&&(o=e.v),null!=e.name&&(i=e.name)}return"function"==typeof t?t(Object.assign({},e,{children:c})):{m:t,b:c,d:void 0,y:e,w:o,g:i,M:void 0,k:!1}}function r(t,e,n,o){e.split(" ").forEach(e=>{t[e]=!0,n&&(t[`${e}-${n}`]=!0,o&&(t[`${e}-${n}-${o}`]=t[`${e}-${o}`]=!0))})}function u(t,e){t.j.has(e)||(t.j.set(e,!0),t.C?t.queue.write(()=>a(t,e)):t.queue.tick(()=>a(t,e)))}function a(t,e,n,o,i,c){if(t.j.delete(e),!t.W.has(e)){if(o=t.x.get(e),n=!o){if((i=t.p.get(e))&&i.$rendered&&(i["s-rn"]=!0),i&&!i["s-rn"])return(i["s-rc"]=i["s-rc"]||[]).push(()=>{a(t,e)}),void(i.$onRender=i["s-rc"]);o=function f(t,e,n,o,i,c,l){try{(function s(t,e,n,o,i,c,f){for(f in t.O.set(o,n),t.N.has(n)||t.N.set(n,{}),(c=Object.assign({color:{type:String}},e.properties)).mode={type:String},c)d(t,c[f],n,o,f,i)})(t,i=t.T(e).S,e,o=new i,n),function r(t,e,n){if(e){const o=t.O.get(n);e.forEach(e=>{n[e.method]={emit:n=>{t.A(o,e.name,{bubbles:e.bubbles,composed:e.composed,cancelable:e.cancelable,detail:n})}}})}}(t,i.events,o);try{if(c=t.R.get(e)){for(l=0;l<c.length;l+=2)o[c[l]](c[l+1]);t.R.delete(e)}}catch(n){t.L(n,2,e)}}catch(n){o={},t.L(n,7,e,!0)}return t.x.set(e,o),o}(t,e,t.q.get(e));try{o.componentWillLoad&&(c=o.componentWillLoad())}catch(n){t.L(n,3,e)}}c&&c.then?c.then(()=>p(t,e,o,n)):p(t,e,o,n)}}function p(t,e,n,o){(function i(t,e,n,o,c){try{const i=e.S.host;let f;if(o.render||o.hostData||i||f){t.B=!0;const f=o.render&&o.render();let l;l=o.hostData&&o.hostData(),t.B=!1,i&&(l=function f(t,e,n){return t=t||{},Object.keys(e).forEach(o=>{"theme"===o?r(t.class=t.class||{},e[o],n.mode,n.color):"class"===o?r(t[o]=t[o]||{},e[o]):t[o]=e[o]}),t}(l,i,o));const u=t.D.get(n)||{};u.M=n;const a=s(null,l,f);t.D.set(n,t.render(u,a,c,e.S.encapsulation))}t.P(t,t.F,e,o.mode,n),n["s-rn"]=!0,n.$onRender&&(n["s-rc"]=n.$onRender),n["s-rc"]&&(n["s-rc"].forEach(t=>t()),n["s-rc"]=null)}catch(e){t.B=!1,t.L(e,8,n,!0)}})(t,t.T(e),e,n,!o);try{o?e["s-init"]():(n.componentDidUpdate&&n.componentDidUpdate(),g(t.D.get(e)))}catch(n){t.L(n,6,e,!0)}}function d(t,e,n,o,i,c,l,s){if(e.type||e.state){const r=t.N.get(n);e.state||(!e.attr||void 0!==r[i]&&""!==r[i]||(l=c&&c.H)&&T(s=l[e.attr])&&(r[i]=f(e.type,s)),n.hasOwnProperty(i)&&(void 0===r[i]&&(r[i]=n[i]),delete n[i])),o.hasOwnProperty(i)&&void 0===r[i]&&(r[i]=o[i]),e.watchCallbacks&&(r[q+i]=e.watchCallbacks.slice()),b(o,i,function r(e){return(e=t.N.get(t.O.get(this)))&&e[i]},function u(n,o){(o=t.O.get(this))&&(e.state||e.mutable)&&v(t,o,i,n)})}else if(e.elementRef)m(o,i,n);else if(e.method)m(n,i,o[i].bind(o));else if(e.context){const c=t.I(e.context);void 0!==c&&m(o,i,c.U&&c.U(n)||c)}else e.connect&&m(o,i,t.z(e.connect))}function v(t,e,n,o,i,c,f){(i=t.N.get(e))||t.N.set(e,i={});const l=i[n];if(o!==l&&(i[n]=o,c=t.x.get(e))){if(f=i[q+n])for(let t=0;t<f.length;t++)try{c[f[t]].call(c,o,l,n)}catch(t){}!t.B&&e["s-rn"]&&u(t,e)}}function m(t,e,n){Object.defineProperty(t,e,{configurable:!0,value:n})}function b(t,e,n,o){Object.defineProperty(t,e,{configurable:!0,get:n,set:o})}function h(t,e,n,o,i,c,f,l,s){if("class"!==n||c)if("style"===n){for(l in o=o||E,i=i||E,o)i[l]||(e.style[l]="");for(l in i)i[l]!==o[l]&&(e.style[l]=i[l])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in e)if("list"!==n&&"type"!==n&&!c&&(n in e||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=t.T(e);o&&o.Q&&o.Q[n]?y(e,n,i):"ref"!==n&&(y(e,n,null==i?"":i),null!=i&&!1!==i||e.removeAttribute(n))}else null!=i?function r(t,e,n){const o=e!==(e=e.replace(/^xlink\:?/,"")),i=B[e];!i||n&&"false"!==n?"function"!=typeof n&&(i&&(n=""),o?t.setAttributeNS(D,A(e),n):t.setAttribute(e,n)):o?t.removeAttributeNS(D,A(e)):t.removeAttribute(e)}(e,n,i):!c||null!=i&&!1!==i||e.removeAttribute(n);else n=A(n)in e?A(n.substring(2)):A(n[2])+n.substring(3),i?i!==o&&t.F.Z(e,n,i):t.F.G(e,n);else if(o!==i){const t=null==o||""===o?N:o.trim().split(/\s+/),n=null==i||""===i?N:i.trim().split(/\s+/);let c=null==e.className||""===e.className?N:e.className.trim().split(/\s+/);for(l=0,s=t.length;l<s;l++)-1===n.indexOf(t[l])&&(c=c.filter(e=>e!==t[l]));for(l=0,s=n.length;l<s;l++)-1===t.indexOf(n[l])&&(c=[...c,n[l]]);e.className=c.join(" ")}}function y(t,e,n){try{t[e]=n}catch(t){}}function $(t,e,n,o,i){const c=11===n.M.nodeType&&n.M.host?n.M.host:n.M,f=e&&e.y||E,l=n.y||E;for(i in f)l&&null!=l[i]||null==f[i]||h(t,c,i,f[i],void 0,o,n.k);for(i in l)i in f&&l[i]===("value"===i||"checked"===i?c[i]:f[i])||h(t,c,i,f[i],l[i],o,n.k)}function w(t,e){function n(i,c,f,l,s,r,p,d,h){if(d=c.b[f],u||(v=!0,"slot"===d.m&&(a&&e.J(l,a+"-slot",""),d.b?d.K=!0:d.V=!0)),T(d.d))d.M=e.X(d.d);else if(d.V)d.M=e.X("");else{if(r=d.M=P||"svg"===d.m?e.Y("http://www.w3.org/2000/svg",d.m):e._(d.K?"slot-fb":d.m),P="svg"===d.m||"foreignObject"!==d.m&&P,$(t,null,d,P),T(a)&&r["s-si"]!==a&&e.J(r,r["s-si"]=a,""),d.b)for(s=0;s<d.b.length;++s)(p=n(i,d,s,r))&&e.tt(r,p);"svg"===d.m&&(P=!1)}return d.M["s-hn"]=m,(d.K||d.V)&&(d.M["s-sr"]=!0,d.M["s-cr"]=b,d.M["s-sn"]=d.g||"",(h=i&&i.b&&i.b[f])&&h.m===d.m&&i.M&&o(i.M)),d.M}function o(n,i,c,f){t.et=!0;const r=e.nt(n);for(c=r.length-1;c>=0;c--)(f=r[c])["s-hn"]!==m&&f["s-ol"]&&(e.ot(f),e.c(s(f),f,l(f)),e.ot(f["s-ol"]),f["s-ol"]=null,v=!0),i&&o(f,i);t.et=!1}function i(t,o,i,c,f,s,r,u){const a=t["s-cr"]||t.$defaultHolder;for((r=a&&e.o(a)||t).shadowRoot&&(r=r.shadowRoot);f<=s;++f)c[f]&&(u=T(c[f].d)?e.X(c[f].d):n(null,i,f,t))&&(c[f].M=u,e.c(r,u,l(o)))}function c(t,n,i,c){for(;n<=i;++n)T(t[n])&&(c=t[n].M,d=!0,c["s-ol"]?e.ot(c["s-ol"]):o(c,!0),e.ot(c))}function f(t,e){return t.m===e.m&&t.w===e.w&&("slot"!==t.m||t.g===e.g)}function l(t){return t&&t["s-ol"]?t["s-ol"]:t}function s(t){return e.o(t["s-ol"]?t["s-ol"]:t)}const r=[];let u,a,p,d,v,m,b;return function u(h,y,w,g,M,k,j,C,W){if(p=w,m=e.it(h.M),b=h.M["s-cr"],a="scoped"===g||"shadow"===g&&!e.n?"data-"+e.it(h.M):null,v=d=!1,p||a&&e.J(h.M,a+"-host",""),function r(u,a,p){const d=a.M=u.M,v=u.b,m=a.b;P=a.M&&T(e.ct(a.M))&&void 0!==a.M.ownerSVGElement,P="svg"===a.m||"foreignObject"!==a.m&&P,T(a.d)?(p=d["s-cr"]||d.$defaultHolder)?e.ft(e.o(p),a.d):u.d!==a.d&&e.ft(d,a.d):("slot"!==a.m&&$(t,u,a,P),T(v)&&T(m)?function b(t,u,a,p,d,v,m,h){let y=0,$=0,w=u.length-1,g=u[0],M=u[w],k=p.length-1,j=p[0],C=p[k];for(;y<=w&&$<=k;)if(null==g)g=u[++y];else if(null==M)M=u[--w];else if(null==j)j=p[++$];else if(null==C)C=p[--k];else if(f(g,j))r(g,j),g=u[++y],j=p[++$];else if(f(M,C))r(M,C),M=u[--w],C=p[--k];else if(f(g,C))"slot"!==g.m&&"slot"!==C.m||o(e.o(g.M)),r(g,C),e.c(t,g.M,e.lt(M.M)),g=u[++y],C=p[--k];else if(f(M,j))"slot"!==g.m&&"slot"!==C.m||o(e.o(M.M)),r(M,j),e.c(t,M.M,g.M),M=u[--w],j=p[++$];else{for(d=null,v=y;v<=w;++v)if(u[v]&&T(u[v].w)&&u[v].w===j.w){d=v;break}T(d)?((h=u[d]).m!==j.m?m=n(u&&u[$],a,d,t):(r(h,j),u[d]=void 0,m=h.M),j=p[++$]):(m=n(u&&u[$],a,$,t),j=p[++$]),m&&e.c(s(g.M),m,l(g.M))}y>w?i(t,null==p[k+1]?null:p[k+1].M,a,p,$,k):$>k&&c(u,y,w)}(d,v,a,m):T(m)?(T(u.d)&&e.ft(d,""),i(d,null,a,m,0,m.length-1)):T(v)&&c(v,0,v.length-1)),P&&"svg"===a.m&&(P=!1)}(h,y),v){for(function t(n,o,i,c,f,l,s,u,a,p){for(f=0,l=(o=e.nt(n)).length;f<l;f++){if((i=o[f])["s-sr"]&&(c=i["s-cr"]))for(u=e.nt(e.o(c)),a=i["s-sn"],s=u.length-1;s>=0;s--)(c=u[s])["s-cn"]||c["s-nr"]||c["s-hn"]===i["s-hn"]||((3===(p=e.st(c))||8===p)&&""===a||1===p&&null===e.rt(c,"slot")&&""===a||1===p&&e.rt(c,"slot")===a)&&(r.some(t=>t.ut===c)||(d=!0,c["s-sn"]=a,r.push({at:i,ut:c})));1===e.st(i)&&t(i)}}(y.M),k=0;k<r.length;k++)(j=r[k]).ut["s-ol"]||((C=e.X(""))["s-nr"]=j.ut,e.c(e.o(j.ut),j.ut["s-ol"]=C,j.ut));for(t.et=!0,k=0;k<r.length;k++){j=r[k];const t=e.o(j.at);let n=e.lt(j.at);for(C=j.ut["s-ol"];C=e.pt(C);)if((W=C["s-nr"])&&W["s-sn"]===j.ut["s-sn"]&&t===e.o(W)){n=e.lt(W);break}(!n&&t!==e.o(j.ut)||e.lt(j.ut)!==n)&&j.ut!==n&&(e.ot(j.ut),e.c(t,j.ut,n))}t.et=!1}return d&&function t(n,o,i,c,f,l,s,r){for(c=0,f=(i=e.nt(n)).length;c<f;c++)if(o=i[c],1===e.st(o)){if(o["s-sr"])for(s=o["s-sn"],o.hidden=!1,l=0;l<f;l++)if(i[l]["s-hn"]!==o["s-hn"])if(r=e.st(i[l]),""!==s){if(1===r&&s===e.rt(i[l],"slot")){o.hidden=!0;break}}else if(1===r||3===r&&""!==e.dt(i[l]).trim()){o.hidden=!0;break}t(o)}}(y.M),r.length=0,y}}function g(t,e){t&&(t.y&&t.y.ref&&t.y.ref(e?null:t.M),t.b&&t.b.forEach(t=>{g(t,e)}))}function M(t,e,n,o,i){const c=t.st(e);let f,l,s,r;if(i&&1===c){(l=t.rt(e,x))&&(s=l.split("."))[0]===o&&((r={}).m=t.it(r.M=e),n.b||(n.b=[]),n.b[s[1]]=r,n=r,i=""!==s[2]);for(let c=0;c<e.childNodes.length;c++)M(t,e.childNodes[c],n,o,i)}else 3===c&&(f=e.previousSibling)&&8===t.st(f)&&"s"===(s=t.dt(f).split("."))[0]&&s[1]===o&&((r={d:t.dt(e)}).M=e,n.b||(n.b=[]),n.b[s[2]]=r)}function k(t,e,n,o,i){return n["s-cr"]||t.rt(n,W)||function c(t,e){return t&&1===e.encapsulation}(t.n,e)||(n["s-cr"]=t.X(""),n["s-cr"]["s-cn"]=!0,t.c(n,n["s-cr"],t.nt(n)[0])),t.n||1!==e.encapsulation||(n.shadowRoot=n),o={vt:n["s-id"],H:{}},e.Q&&Object.keys(e.Q).forEach(c=>{(i=e.Q[c].mt)&&(o.H[i]=t.rt(n,i))}),o}function j(t,e,n,o){n.connectedCallback=function(){(function n(t,e,o){t.bt.has(o)||(t.bt.set(o,!0),function i(t,e){const n=t.T(e);n.ht&&n.ht.forEach(n=>{n.r||t.F.Z(e,n.l,function o(t,e,n,i){return o=>{(i=t.x.get(e))?i[n](o):((i=t.R.get(e)||[]).push(n,o),t.R.set(e,i))}}(t,e,n.s),n.a,n.u)})}(t,o)),t.W.delete(o),t.yt.has(o)||(t.yt.set(o,!0),o["s-id"]||(o["s-id"]=t.$t()),function c(t,e,n){for(n=e;n=t.F.ct(n);)if(t.wt(n)){t.gt.has(e)||(t.p.set(e,n),n.$activeLoading&&(n["s-ld"]=n.$activeLoading),(n["s-ld"]=n["s-ld"]||[]).push(e));break}}(t,o),t.queue.tick(()=>t.Mt(e,o,k(t.F,e,o))))})(t,e,this)},n.attributeChangedCallback=function(t,n,o){(function i(t,e,n,o,c,l,s){if(t&&o!==c)for(l in t)if((s=t[l]).mt&&A(s.mt)===A(n)){e[l]=f(s.kt,c);break}})(e.Q,this,t,n,o)},n.disconnectedCallback=function(){(function e(t,n,o){!t.et&&function i(t,e){for(;e;){if(!t.o(e))return 9!==t.st(e);e=t.o(e)}}(t.F,n)&&(t.W.set(n,!0),l(t,n),g(t.D.get(n),!0),t.F.G(n),t.bt.delete(n),(o=t.x.get(n))&&o.componentDidUnload&&o.componentDidUnload(),[t.p,t.jt,t.q].forEach(t=>t.delete(n)))})(t,this)},n["s-init"]=function(){(function e(t,n,o,i,c){if(!t.gt.has(n)&&(i=t.x.get(n))&&!t.W.has(n)&&(!n["s-ld"]||!n["s-ld"].length)){delete n["s-ld"],t.gt.set(n,!0);try{g(t.D.get(n)),(c=t.jt.get(n))&&(c.forEach(t=>t(n)),t.jt.delete(n)),i.componentDidLoad&&i.componentDidLoad()}catch(e){t.L(e,4,n)}n.classList.add(o),l(t,n)}})(t,this,o)},n.forceUpdate=function(){u(t,this)},function i(t,e,n){e&&Object.keys(e).forEach(o=>{const i=e[o].Ct;1===i||2===i?b(n,o,function e(){return(t.N.get(this)||{})[o]},function e(n){v(t,this,o,n)}):6===i&&m(n,o,R)})}(t,e.Q,n)}function C(t,e,n,o){return function(){const i=arguments;return function c(t,e,n){return new Promise(o=>{let i=e[n];i||(i=t.Wt.querySelector(n)),i||(i=e[n]=t._(n),t.tt(t.Wt,i)),i.componentOnReady(o)})}(t,e,n).then(t=>t[o].apply(t,i))}}const W="data-ssrv",x="data-ssrc",O="$",E={},N=[],S={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},T=t=>null!=t,A=t=>t.toLowerCase(),R=()=>{},L=[],q="wc-",B={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},D="http://www.w3.org/1999/xlink";let P=!1;(function F(t,e,n,o,f,l){const r={html:{}},a={},p=n[t]=n[t]||{},d=function v(t,e,n){t.xt||(t.xt=((t,e,n,o)=>t.addEventListener(e,n,o)),t.Ot=((t,e,n,o)=>t.removeEventListener(e,n,o)));const o=new WeakMap,i={Et:n.documentElement,e:n.head,Wt:n.body,Nt:!1,st:t=>t.nodeType,_:t=>n.createElement(t),Y:(t,e)=>n.createElementNS(t,e),X:t=>n.createTextNode(t),St:t=>n.createComment(t),c:(t,e,n)=>t.insertBefore(e,n),ot:t=>t.remove(),tt:(t,e)=>t.appendChild(e),nt:t=>t.childNodes,o:t=>t.parentNode,lt:t=>t.nextSibling,pt:t=>t.previousSibling,it:t=>A(t.nodeName),dt:t=>t.textContent,ft:(t,e)=>t.textContent=e,rt:(t,e)=>t.getAttribute(e),J:(t,e,n)=>t.setAttribute(e,n),Tt:(t,e,n,o)=>t.setAttributeNS(e,n,o),At:(t,e)=>t.removeAttribute(e),Rt:(t,o)=>"child"===o?t.firstElementChild:"parent"===o?i.ct(t):"body"===o?i.Wt:"document"===o?n:"window"===o?e:t,Z:(e,n,c,f,l,s,r,u)=>{const a=n;let p=e,d=o.get(e);if(d&&d[a]&&d[a](),"string"==typeof s?p=i.Rt(e,s):"object"==typeof s?p=s:(u=n.split(":")).length>1&&(p=i.Rt(e,u[0]),n=u[1]),!p)return;let v=c;(u=n.split(".")).length>1&&(n=u[0],v=(t=>{t.keyCode===S[u[1]]&&c(t)})),r=i.Nt?{capture:!!f,passive:!!l}:!!f,t.xt(p,n,v,r),d||o.set(e,d={}),d[a]=(()=>{p&&t.Ot(p,n,v,r),d[a]=null})},G:(t,e)=>{const n=o.get(t);n&&(e?n[e]&&n[e]():Object.keys(n).forEach(t=>{n[t]&&n[t]()}))},Lt:(t,n,o)=>t&&t.dispatchEvent(new e.CustomEvent(n,o))};try{e.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>i.Nt=!0}))}catch(t){}return i.ct=((t,e)=>(e=i.o(t))&&11===i.st(e)?e.host:e),i}(p,n,o);e.isServer=e.isPrerender=!(e.isClient=!0),e.window=n,e.location=n.location,e.document=o,e.resourcesUrl=e.publicPath=f,e.enableListener=((t,e,n,o,i)=>(function c(t,e,n,o,i,f){if(e){const c=t.O.get(e),l=t.T(c);if(l&&l.ht)if(o){const o=l.ht.find(t=>t.l===n);o&&t.F.Z(c,n,t=>e[o.s](t),o.a,void 0===f?o.u:!!f,i)}else t.F.G(c,n)}})(h,t,e,n,o,i)),e.emit=((t,n,o)=>d.Lt(t,e.eventNameFn?e.eventNameFn(n):n,o)),p.h=s,p.Context=e;const m=n.$definedCmps=n.$definedCmps||{};let b=0;const h={F:d,qt:function y(t,e){if(!m[t.t]){m[t.t]=!0,j(h,t,e.prototype,l);{const n=[];for(const e in t.Q)t.Q[e].mt&&n.push(t.Q[e].mt);e.observedAttributes=n}n.customElements.define(t.t,e)}},A:e.emit,T:t=>r[d.it(t)],I:t=>e[t],isClient:!0,wt:t=>!(!m[d.it(t)]&&!h.T(t)),$t:()=>t+b++,L:(t,e,n)=>void 0,z:t=>(function e(t,n,o){return{create:C(t,n,o,"create"),componentOnReady:C(t,n,o,"componentOnReady")}})(d,a,t),queue:e.queue=function $(t,e){function n(t){for(let e=0;e<t.length;e++)try{t[e]()}catch(t){}t.length=0}function o(t,e){let n=0;for(;n<t.length&&c()<e;)try{t[n++]()}catch(t){}n===t.length?t.length=0:0!==n&&t.splice(0,n)}function i(){a++,n(s);const e=c()+7*Math.ceil(a*(1/22));o(r,e),o(u,e),r.length>0&&(u.push(...r),r.length=0),(p=s.length+r.length+u.length>0)?t.raf(i):a=0}const c=()=>e.performance.now(),f=Promise.resolve(),l=[],s=[],r=[],u=[];let a=0,p=!1;return t.raf||(t.raf=e.requestAnimationFrame.bind(e)),{tick(t){l.push(t),1===l.length&&f.then(()=>n(l))},read(e){s.push(e),p||(p=!0,t.raf(i))},write(e){r.push(e),p||(p=!0,t.raf(i))}}}(p,n),Mt:function g(t,n){if(n.mode||(n.mode=d.rt(n,"mode")||e.mode),k(h.F,t,n),t.S)u(h,n);else{const e="string"==typeof t.Bt?t.Bt:t.Bt[n.mode],o=f+e+(function o(t,e){return 2===e.encapsulation||1===e.encapsulation&&!t}(d.n,t)?".sc":"")+".js";import(o).then(e=>{try{t.S=e[(t=>A(t).split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""))(t.t)],function o(t,e,n){const o=n.style;if(o){const i=n.is+(n.styleMode||O);if(!e[i]){const n=t._("template");e[i]=n,n.innerHTML=`<style>${o}</style>`,t.tt(t.e,n)}}}(d,t,t.S)}catch(e){t.S=class{}}u(h,n)}).catch(t=>void 0)}},p:new WeakMap,i:new WeakMap,yt:new WeakMap,bt:new WeakMap,gt:new WeakMap,O:new WeakMap,q:new WeakMap,x:new WeakMap,W:new WeakMap,j:new WeakMap,jt:new WeakMap,R:new WeakMap,D:new WeakMap,N:new WeakMap};h.render=w(h,d);const x=d.Et;x["s-ld"]=[],x["s-rn"]=!0,x["s-init"]=(()=>{h.gt.set(x,p.loaded=h.C=!0),d.Lt(n,"appload",{detail:{namespace:t}})}),function E(t,e,n){const o=n.querySelectorAll(`[${W}]`),i=o.length;let c,f,l,s,r,u;if(i>0)for(t.gt.set(n,!0),s=0;s<i;s++)for(c=o[s],f=e.rt(c,W),(l={}).m=e.it(l.M=c),t.D.set(c,l),r=0,u=c.childNodes.length;r<u;r++)M(e,c.childNodes[r],l,f,!0)}(h,d,x),h.P=i,(p.components||[]).map(t=>(function e(t,n,o,i){const f={t:t[0],Q:{color:{mt:"color"}}};f.Bt=t[1];const l=t[3];if(l)for(o=0;o<l.length;o++)i=l[o],f.Q[i[0]]={Ct:i[1],Dt:!!i[2],mt:"string"==typeof i[3]?i[3]:i[3]?i[0]:0,kt:i[4]};return f.encapsulation=t[4],t[5]&&(f.ht=t[5].map(c)),n[f.t]=f})(t,r)).forEach(t=>h.qt(t,class extends HTMLElement{})),function N(t,e){e.componentOnReady=((e,n)=>{if(t.T(e)&&!t.gt.has(e)){const o=t.jt.get(e)||[];o.push(n),t.jt.set(e,o)}else n(e)}),e.$r&&e.$r.forEach(t=>e.componentOnReady(t[0],t[1])),e.$r=null}(h,p),p.initialized=!0})(o,n,t,e,resourcesUrl,hydratedCssClass)})(window,document,Context,namespace);
})({},"Ionic","hydrated");