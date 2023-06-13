(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function S(){}const Se=t=>t;function xe(t){return t()}function ue(){return Object.create(null)}function J(t){t.forEach(xe)}function ce(t){return typeof t=="function"}function N(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Y;function O(t,e){return Y||(Y=document.createElement("a")),Y.href=e,t===Y.href}function Pe(t){return Object.keys(t).length===0}function oe(t){return t==null?"":t}const ze=typeof window<"u";let Re=ze?()=>window.performance.now():()=>Date.now(),ae=ze?t=>requestAnimationFrame(t):S;const M=new Set;function Ee(t){M.forEach(e=>{e.c(t)||(M.delete(e),e.f())}),M.size!==0&&ae(Ee)}function Je(t){let e;return M.size===0&&ae(Ee),{promise:new Promise(n=>{M.add(e={c:t,f:n})}),abort(){M.delete(e)}}}function g(t,e){t.appendChild(e)}function Ce(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function He(t){const e=_("style");return De(Ce(t),e),e.sheet}function De(t,e){return g(t.head||t,e),e.sheet}function P(t,e,n){t.insertBefore(e,n||null)}function C(t){t.parentNode&&t.parentNode.removeChild(t)}function me(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function W(t){return document.createTextNode(t)}function z(){return W(" ")}function ee(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Me(t){return Array.from(t.childNodes)}function Le(t,e){e=""+e,t.data!==e&&(t.data=e)}function Be(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}const Z=new Map;let V=0;function Ke(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Qe(t,e){const n={stylesheet:He(e),rules:{}};return Z.set(t,n),n}function ge(t,e,n,i,r,s,l,o=0){const c=16.666/i;let a=`{
`;for(let A=0;A<=1;A+=c){const w=e+(n-e)*s(A);a+=A*100+`%{${l(w,1-w)}}
`}const v=a+`100% {${l(n,1-n)}}
}`,d=`__svelte_${Ke(v)}_${o}`,j=Ce(t),{stylesheet:y,rules:m}=Z.get(j)||Qe(j,t);m[d]||(m[d]=!0,y.insertRule(`@keyframes ${d} ${v}`,y.cssRules.length));const u=t.style.animation||"";return t.style.animation=`${u?`${u}, `:""}${d} ${i}ms linear ${r}ms 1 both`,V+=1,d}function Ne(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),V-=r,V||Ge())}function Ge(){ae(()=>{V||(Z.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&C(e)}),Z.clear())})}let fe;function U(t){fe=t}const D=[],de=[];let B=[];const he=[],Ie=Promise.resolve();let se=!1;function Xe(){se||(se=!0,Ie.then(Oe))}function $(t){B.push(t)}const te=new Set;let H=0;function Oe(){if(H!==0)return;const t=fe;do{try{for(;H<D.length;){const e=D[H];H++,U(e),Te(e.$$)}}catch(e){throw D.length=0,H=0,e}for(U(null),D.length=0,H=0;de.length;)de.pop()();for(let e=0;e<B.length;e+=1){const n=B[e];te.has(n)||(te.add(n),n())}B.length=0}while(D.length);for(;he.length;)he.pop()();se=!1,te.clear(),U(t)}function Te(t){if(t.fragment!==null){t.update(),J(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach($)}}function Ue(t){const e=[],n=[];B.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),B=e}let T;function Fe(){return T||(T=Promise.resolve(),T.then(()=>{T=null})),T}function ne(t,e,n){t.dispatchEvent(Be(`${e?"intro":"outro"}${n}`))}const q=new Set;let L;function re(){L={r:0,c:[],p:L}}function le(){L.r||J(L.c),L=L.p}function x(t,e){t&&t.i&&(q.delete(t),t.i(e))}function E(t,e,n,i){if(t&&t.o){if(q.has(t))return;q.add(t),L.c.push(()=>{q.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const We={duration:0};function pe(t,e,n,i){const r={direction:"both"};let s=e(t,n,r),l=i?0:1,o=null,c=null,a=null;function v(){a&&Ne(t,a)}function d(y,m){const u=y.b-l;return m*=Math.abs(u),{a:l,b:y.b,d:u,duration:m,start:y.start,end:y.start+m,group:y.group}}function j(y){const{delay:m=0,duration:u=300,easing:A=Se,tick:w=S,css:b}=s||We,R={start:Re()+m,b:y};y||(R.group=L,L.r+=1),o||c?c=R:(b&&(v(),a=ge(t,l,y,u,m,A,b)),y&&w(0,1),o=d(R,u),$(()=>ne(t,y,"start")),Je(p=>{if(c&&p>c.start&&(o=d(c,u),c=null,ne(t,o.b,"start"),b&&(v(),a=ge(t,l,o.b,o.duration,0,A,s.css))),o){if(p>=o.end)w(l=o.b,1-l),ne(t,o.b,"end"),c||(o.b?v():--o.group.r||J(o.group.c)),o=null;else if(p>=o.start){const k=p-o.start;l=o.a+o.d*A(k/o.duration),w(l,1-l)}}return!!(o||c)}))}return{run(y){ce(s)?Fe().then(()=>{s=s(r),j(y)}):j(y)},end(){v(),o=c=null}}}function F(t){t&&t.c()}function K(t,e,n,i){const{fragment:r,after_update:s}=t.$$;r&&r.m(e,n),i||$(()=>{const l=t.$$.on_mount.map(xe).filter(ce);t.$$.on_destroy?t.$$.on_destroy.push(...l):J(l),t.$$.on_mount=[]}),s.forEach($)}function Q(t,e){const n=t.$$;n.fragment!==null&&(Ue(n.after_update),J(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function $e(t,e){t.$$.dirty[0]===-1&&(D.push(t),Xe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(t,e,n,i,r,s,l,o=[-1]){const c=fe;U(t);const a=t.$$={fragment:null,ctx:[],props:s,update:S,not_equal:r,bound:ue(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:ue(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};l&&l(a.root);let v=!1;if(a.ctx=n?n(t,e.props||{},(d,j,...y)=>{const m=y.length?y[0]:j;return a.ctx&&r(a.ctx[d],a.ctx[d]=m)&&(!a.skip_bound&&a.bound[d]&&a.bound[d](m),v&&$e(t,d)),j}):[],a.update(),v=!0,J(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){const d=Me(e.target);a.fragment&&a.fragment.l(d),d.forEach(C)}else a.fragment&&a.fragment.c();e.intro&&x(t.$$.fragment),K(t,e.target,e.anchor,e.customElement),Oe()}U(c)}class I{$destroy(){Q(this,1),this.$destroy=S}$on(e,n){if(!ce(n))return S;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!Pe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ie=[{name:"Github",link:"https://api.iconify.design/devicon:github.svg?color=%23888888"},{name:"Telegram",link:"https://api.iconify.design/logos:telegram.svg?color=%23888888"},{name:"Discord",link:"https://api.iconify.design/logos:discord-icon.svg?color=%23888888"},{name:"linkedIn",link:"https://api.iconify.design/devicon:linkedin.svg?color=%23888888"},{name:"Gmail",link:"https://api.iconify.design/logos:google-gmail.svg?color=%23888888"}];function Ye(t){let e,n,i,r,s,l,o,c,a,v,d,j,y,m,u,A,w;return{c(){e=_("footer"),n=_("div"),i=_("h3"),i.textContent="Contact me",r=z(),s=_("a"),l=_("img"),c=z(),a=_("a"),v=_("img"),j=z(),y=_("a"),m=_("img"),A=z(),w=_("div"),w.innerHTML="<p>\xA9 Ole Martin Snoen 2023</p>",f(i,"class","svelte-ra17dh"),O(l.src,o=ie[1].link)||f(l,"src",o),f(l,"alt","telegram"),f(l,"class","svelte-ra17dh"),f(s,"href","https://t.me/olesno00"),O(v.src,d=ie[2].link)||f(v,"src",d),f(v,"alt","discord"),f(v,"class","svelte-ra17dh"),f(a,"href","https://www.discordapp.com/users/802629317728665640"),O(m.src,u=ie[4].link)||f(m,"src",u),f(m,"alt","gmail"),f(m,"class","svelte-ra17dh"),f(y,"href","mailto: olesnoen@gmail.com"),f(n,"class","contact svelte-ra17dh"),f(w,"class","copyright svelte-ra17dh"),f(e,"class","svelte-ra17dh")},m(b,R){P(b,e,R),g(e,n),g(n,i),g(n,r),g(n,s),g(s,l),g(n,c),g(n,a),g(a,v),g(n,j),g(n,y),g(y,m),g(e,A),g(e,w)},p:S,i:S,o:S,d(b){b&&C(e)}}}class qe extends I{constructor(e){super(),G(this,e,null,Ye,N,{})}}const Ze="data:image/png;base64,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";function Ve(t){let e,n,i,r,s,l,o,c;return{c(){e=_("header"),n=_("a"),i=_("img"),s=z(),l=_("a"),o=_("img"),O(i.src,r=Ze)||f(i,"src",r),f(i,"alt","title with name"),f(n,"href","/"),O(o.src,c=et)||f(o,"src",c),f(o,"class","icon"),f(o,"alt","github Logo"),f(l,"href","https://github.com/olemart1n"),f(l,"target","_blank"),f(e,"class","svelte-1xsqhpz")},m(a,v){P(a,e,v),g(e,n),g(n,i),g(e,s),g(e,l),g(l,o)},p:S,i:S,o:S,d(a){a&&C(e)}}}let et="https://api.iconify.design/devicon:github.svg?color=%23888888";class tt extends I{constructor(e){super(),G(this,e,null,Ve,N,{})}}function ve(t,{delay:e=0,duration:n=400,easing:i=Se}={}){const r=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:i,css:s=>`opacity: ${s*r}`}}function _e(t){let e,n,i,r,s,l,o,c;return{c(){e=_("div"),n=_("a"),i=W("Github"),r=z(),s=_("a"),l=W("Demo"),f(n,"href",t[3]),f(n,"class","anchor-button svelte-18e64ey"),f(s,"href",t[2]),f(s,"class","anchor-button svelte-18e64ey"),f(e,"class",oe("project_links")+" svelte-18e64ey")},m(a,v){P(a,e,v),g(e,n),g(n,i),g(e,r),g(e,s),g(s,l),c=!0},p(a,v){(!c||v&8)&&f(n,"href",a[3]),(!c||v&4)&&f(s,"href",a[2])},i(a){c||($(()=>{!c||(o||(o=pe(e,ve,{},!0)),o.run(1))}),c=!0)},o(a){o||(o=pe(e,ve,{},!1)),o.run(0),c=!1},d(a){a&&C(e),a&&o&&o.end()}}}function nt(t){let e,n,i,r,s,l,o,c,a,v,d,j,y,m=t[4]&&_e(t);return{c(){e=_("button"),n=_("h3"),i=W(t[1]),s=z(),l=_("figure"),o=_("img"),v=z(),m&&m.c(),f(n,"class",r=oe(t[4]?"h3":"")+" svelte-18e64ey"),O(o.src,c=t[0])||f(o,"src",c),f(o,"alt",a="This project's name is "+t[1]),f(o,"class","svelte-18e64ey"),f(e,"class","project svelte-18e64ey")},m(u,A){P(u,e,A),g(e,n),g(n,i),g(e,s),g(e,l),g(l,o),g(e,v),m&&m.m(e,null),d=!0,j||(y=[ee(e,"focus",t[5]),ee(e,"mouseenter",t[6]),ee(e,"mouseleave",t[7])],j=!0)},p(u,[A]){(!d||A&2)&&Le(i,u[1]),(!d||A&16&&r!==(r=oe(u[4]?"h3":"")+" svelte-18e64ey"))&&f(n,"class",r),(!d||A&1&&!O(o.src,c=u[0]))&&f(o,"src",c),(!d||A&2&&a!==(a="This project's name is "+u[1]))&&f(o,"alt",a),u[4]?m?(m.p(u,A),A&16&&x(m,1)):(m=_e(u),m.c(),x(m,1),m.m(e,null)):m&&(re(),E(m,1,1,()=>{m=null}),le())},i(u){d||(x(m),d=!0)},o(u){E(m),d=!1},d(u){u&&C(e),m&&m.d(),j=!1,J(y)}}}function it(t,e,n){let{imageSrc:i}=e,{name:r}=e,{demoLink:s}=e,{ghLink:l}=e,o=!1;const c=()=>n(4,o=!0),a=()=>n(4,o=!0),v=()=>n(4,o=!1);return t.$$set=d=>{"imageSrc"in d&&n(0,i=d.imageSrc),"name"in d&&n(1,r=d.name),"demoLink"in d&&n(2,s=d.demoLink),"ghLink"in d&&n(3,l=d.ghLink)},[i,r,s,l,o,c,a,v]}class ot extends I{constructor(e){super(),G(this,e,it,nt,N,{imageSrc:0,name:1,demoLink:2,ghLink:3})}}function st(t){let e,n,i,r,s,l;return{c(){e=_("div"),n=_("img"),r=z(),s=_("p"),l=W(t[1]),O(n.src,i=t[0])||f(n,"src",i),f(n,"alt",t[1]),f(n,"class","svelte-tm7x3r"),f(e,"class","svelte-tm7x3r")},m(o,c){P(o,e,c),g(e,n),g(e,r),g(e,s),g(s,l)},p(o,[c]){c&1&&!O(n.src,i=o[0])&&f(n,"src",i),c&2&&f(n,"alt",o[1]),c&2&&Le(l,o[1])},i:S,o:S,d(o){o&&C(e)}}}function rt(t,e,n){let{src:i}=e,{name:r}=e;return t.$$set=s=>{"src"in s&&n(0,i=s.src),"name"in s&&n(1,r=s.name)},[i,r]}class lt extends I{constructor(e){super(),G(this,e,rt,st,N,{src:0,name:1})}}const ye=[{name:"Holidaze",image:"https://ulcxpfjjujtdnmvvzzuz.supabase.co/storage/v1/object/public/portfolio/holidaze.png",description:"At holidaze you can book venues/host venues",ghLink:"https://github.com/olemart1n/project-holidaze",demoLink:"https://moonlit-meerkat-213c3d.netlify.app/"},{name:"Shop",image:"https://ulcxpfjjujtdnmvvzzuz.supabase.co/storage/v1/object/public/portfolio/SHOP.png",description:"At holidaze you can book venues/host venues",ghLink:"https://github.com/olemart1n/noroff-react-app",demoLink:"https://front-end-frameworks-ole-martin.netlify.app/"},{name:"AuctionHouse",image:"https://ulcxpfjjujtdnmvvzzuz.supabase.co/storage/v1/object/public/portfolio/AuctionHouse.png",description:"At holidaze you can book venues/host venues",ghLink:"https://github.com/olemart1n/semesterproject-2-olemartin",demoLink:"https://olemart1n.github.io/semesterproject-2-olemartin/"}],be=[{name:"Github",imageSrc:"https://api.iconify.design/devicon:github.svg?color=%23888888"},{name:"JavaScript",imageSrc:"https://api.iconify.design/logos:javascript.svg?color=%23888888"},{name:"React",imageSrc:"https://api.iconify.design/skill-icons:react-dark.svg?color=%23888888"},{name:"Svelte",imageSrc:"https://api.iconify.design/skill-icons:svelte.svg?color=%23888888"},{name:"Supabase",imageSrc:"https://api.iconify.design/logos:supabase-icon.svg?color=%23888888"},{name:"Docker",imageSrc:"https://api.iconify.design/logos:docker-icon.svg?color=%23888888"},{name:"CSS3",imageSrc:"https://api.iconify.design/devicon:css3.svg?color=%23888888"},{name:"HTML5",imageSrc:"https://api.iconify.design/vscode-icons:file-type-html.svg?color=%23888888"},{name:"SASS",imageSrc:"https://api.iconify.design/logos:sass.svg?color=%23888888"},{name:"Prisma",imageSrc:"https://api.iconify.design/skill-icons:prisma.svg?color=%23888888"},{name:"Express",imageSrc:"https://api.iconify.design/skill-icons:expressjs-light.svg?color=%23888888"},{name:"Adobe XD",imageSrc:"https://api.iconify.design/logos:adobe-xd.svg?color=%23888888"},{name:"Figma",imageSrc:"https://api.iconify.design/skill-icons:figma-dark.svg?color=%23888888"},{name:"VSC",imageSrc:"https://api.iconify.design/akar-icons:vscode-fill.svg?color=%23888888"},{name:"postgresql",imageSrc:"https://api.iconify.design/logos:postgresql.svg?color=%23888888"}];function ke(t,e,n){const i=t.slice();return i[0]=e[n],i}function Ae(t,e,n){const i=t.slice();return i[3]=e[n],i}function we(t){let e,n;return e=new lt({props:{src:t[3].imageSrc,name:t[3].name}}),{c(){F(e.$$.fragment)},m(i,r){K(e,i,r),n=!0},p:S,i(i){n||(x(e.$$.fragment,i),n=!0)},o(i){E(e.$$.fragment,i),n=!1},d(i){Q(e,i)}}}function je(t){let e,n;return e=new ot({props:{imageSrc:t[0].image,name:t[0].name,ghLink:t[0].ghLink,demoLink:t[0].demoLink}}),{c(){F(e.$$.fragment)},m(i,r){K(e,i,r),n=!0},p:S,i(i){n||(x(e.$$.fragment,i),n=!0)},o(i){E(e.$$.fragment,i),n=!1},d(i){Q(e,i)}}}function ct(t){let e,n,i,r,s,l,o,c,a,v,d,j,y,m=be,u=[];for(let p=0;p<m.length;p+=1)u[p]=we(Ae(t,m,p));const A=p=>E(u[p],1,1,()=>{u[p]=null});let w=ye,b=[];for(let p=0;p<w.length;p+=1)b[p]=je(ke(t,w,p));const R=p=>E(b[p],1,1,()=>{b[p]=null});return{c(){e=_("main"),n=_("section"),i=_("div"),i.innerHTML=`<h3>About me</h3> 
            <p class="svelte-863zx9">I have been studying frontend development at Noroff School of Technology and Media
                for the last two years. Before that i was working with construction.<br/> Coding is
                something i think is really fun, and the interest has just increased in the last
                couple of years. I hope i will find a job where i can work on creating seamless user
                experiences.
                <br/>Blockchain tech is also something i am planning to learn more about and i
                intend to do an online course about solidity</p>`,r=z(),s=_("div"),l=_("h4"),l.textContent="Technologies i have worked with",o=z(),c=_("div");for(let p=0;p<u.length;p+=1)u[p].c();a=z(),v=_("div"),d=_("h1"),d.textContent="Projects",j=z();for(let p=0;p<b.length;p+=1)b[p].c();f(i,"class","text svelte-863zx9"),f(c,"class","techDiv svelte-863zx9"),f(s,"class","tech svelte-863zx9"),f(n,"class","intro svelte-863zx9"),f(d,"class","svelte-863zx9"),f(v,"class","projects svelte-863zx9")},m(p,k){P(p,e,k),g(e,n),g(n,i),g(n,r),g(n,s),g(s,l),g(s,o),g(s,c);for(let h=0;h<u.length;h+=1)u[h]&&u[h].m(c,null);g(e,a),g(e,v),g(v,d),g(v,j);for(let h=0;h<b.length;h+=1)b[h]&&b[h].m(v,null);y=!0},p(p,[k]){if(k&0){m=be;let h;for(h=0;h<m.length;h+=1){const X=Ae(p,m,h);u[h]?(u[h].p(X,k),x(u[h],1)):(u[h]=we(X),u[h].c(),x(u[h],1),u[h].m(c,null))}for(re(),h=m.length;h<u.length;h+=1)A(h);le()}if(k&0){w=ye;let h;for(h=0;h<w.length;h+=1){const X=ke(p,w,h);b[h]?(b[h].p(X,k),x(b[h],1)):(b[h]=je(X),b[h].c(),x(b[h],1),b[h].m(v,null))}for(re(),h=w.length;h<b.length;h+=1)R(h);le()}},i(p){if(!y){for(let k=0;k<m.length;k+=1)x(u[k]);for(let k=0;k<w.length;k+=1)x(b[k]);y=!0}},o(p){u=u.filter(Boolean);for(let k=0;k<u.length;k+=1)E(u[k]);b=b.filter(Boolean);for(let k=0;k<b.length;k+=1)E(b[k]);y=!1},d(p){p&&C(e),me(u,p),me(b,p)}}}class at extends I{constructor(e){super(),G(this,e,null,ct,N,{})}}function ft(t){let e,n,i,r,s,l;return e=new tt({}),i=new at({}),s=new qe({}),{c(){F(e.$$.fragment),n=z(),F(i.$$.fragment),r=z(),F(s.$$.fragment)},m(o,c){K(e,o,c),P(o,n,c),K(i,o,c),P(o,r,c),K(s,o,c),l=!0},p:S,i(o){l||(x(e.$$.fragment,o),x(i.$$.fragment,o),x(s.$$.fragment,o),l=!0)},o(o){E(e.$$.fragment,o),E(i.$$.fragment,o),E(s.$$.fragment,o),l=!1},d(o){Q(e,o),o&&C(n),Q(i,o),o&&C(r),Q(s,o)}}}class ut extends I{constructor(e){super(),G(this,e,null,ft,N,{})}}new ut({target:document.getElementById("app")});
