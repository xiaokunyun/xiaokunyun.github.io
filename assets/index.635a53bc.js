import{d as y,u as w,a as j,z,b as B,o as i,c as f,e as o,g as a,D,E as K,h as u,j as C,t as T,n as v,f as s,i as n,w as m,v as p,k as c,T as q,G as g,H as E,J as M,K as V,L as F,M as H}from"./index.b30d6fa5.js";import{_ as G}from"./logo.456336de.js";import{i as k}from"./flex.dbc3c545.js";import{_ as b}from"./_plugin-vue_export-helper.cdc0426e.js";const J={class:"flex justify-center items-center w-3/4 h-20 text-xl"},P={class:"w-1/4 flex align-center justify-center"},U=y({__name:"head",setup(r){const x=w(),h=j();z(()=>{console.log("router.getRoutes().filter(v=>v.meta.requiresAuth)",h.getRoutes().filter(t=>t.meta.requiresAuth))}),B([]);const _=t=>{n().themeChange(t);let e=document.body;n().theme==!0?(e.className="",document.body.removeAttribute("arco-theme")):(e.className="dark",document.body.setAttribute("arco-theme","dark"))},d=t=>{n().localesChange(t),console.log("useStore().locales",n().locales),x.locale.value=t};return(t,e)=>{const A=G,S=c("RouterLink"),$=c("icon-sun"),I=c("icon-moon"),L=c("icon-chinese-fill"),N=c("icon-english-fill");return i(),f("div",J,[o("div",P,[a(A)]),o("div",{class:v(["w-2/4 flex align-center justify-center flex-wrap",{active:s(k)}])},[(i(!0),f(D,null,K(s(h).getRoutes().filter(l=>l.meta.requiresAuth),(l,R)=>(i(),f("div",{class:"w-1/4",key:R},[a(S,{class:v(["alink",{alinktive:s(n)().theme}]),to:l.path},{default:u(()=>[C(T(l.meta.title),1)]),_:2},1032,["class","to"])]))),128))],2),o("div",{class:v(["w-1/4 flex align-center justify-center",{svgactive:s(k)}])},[o("div",{onClick:e[0]||(e[0]=l=>_(!1))},[m(a($,null,null,512),[[p,s(n)().theme==!0]])]),o("div",{onClick:e[1]||(e[1]=l=>_(!0))},[m(a(I,null,null,512),[[p,s(n)().theme==!1]])]),o("div",{onClick:e[2]||(e[2]=l=>d("en"))},[m(a(L,null,null,512),[[p,s(n)().locales=="zh"]])]),o("div",{onClick:e[3]||(e[3]=l=>d("zh"))},[m(a(N,null,null,512),[[p,s(n)().locales=="en"]])])],2)])}}});const O=b(U,[["__scopeId","data-v-21928a46"]]),Q=r=>(F("data-v-8e11f359"),r=r(),H(),r),W={class:"w-screen h-screen mt-20"},X=C(" Loading... "),Y=Q(()=>o("div",{class:"beian"},"\u7248\u6743\u6240\u6709 \xA9 2022-\u81F3\u4ECA AKUN",-1)),Z=y({__name:"index",setup(r){return w(),(x,h)=>{const _=c("router-view");return i(),f("div",{class:v(["warp",{bganimation:s(n)().theme}])},[a(O,{class:"fixed top-0 w-screen"}),o("div",W,[a(_,null,{default:u(({Component:d,route:t})=>[a(q,{name:"route.meta.transition || 'fade'",mode:"out-in"},{default:u(()=>[(i(),g(V,null,[(i(),g(E,null,{default:u(()=>[(i(),g(M(d),{key:t.meta.usePathKey?t.path:void 0}))]),fallback:u(()=>[X]),_:2},1024))],1024))]),_:2},1024)]),_:1})]),Y],2)}}});const oe=b(Z,[["__scopeId","data-v-8e11f359"]]);export{oe as default};
