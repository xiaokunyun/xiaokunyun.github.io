import{o,c as r,a as K,d as y,u as z,r as w,b as B,e as n,f as a,F as L,g as R,h as t,n as h,w as f,v as m,i as s,j as d,k as _,l as k,t as j,m as q,T as E,p,S as T,q as U,K as V,s as D,x as F}from"./index.3e7f381b.js";import{_ as g}from"./_plugin-vue_export-helper.cdc0426e.js";import{i as G}from"./flex.c2990ccb.js";const H={},M=K('<div class="wrapper" data-v-63e52f16><div class="slash" data-v-63e52f16></div><div class="sides" data-v-63e52f16><div class="side" data-v-63e52f16></div><div class="side" data-v-63e52f16></div><div class="side" data-v-63e52f16></div><div class="side" data-v-63e52f16></div></div><div class="text" data-v-63e52f16><div class="text--backing" data-v-63e52f16>AKUN</div><div class="text--left" data-v-63e52f16><div class="inner" data-v-63e52f16>AKUN</div></div><div class="text--right" data-v-63e52f16><div class="inner" data-v-63e52f16>AKUN</div></div></div></div>',1),P=[M];function J(l,u){return o(),r("div",null,P)}const O=g(H,[["render",J],["__scopeId","data-v-63e52f16"]]),Q={class:"flex justify-center items-center w-3/4 h-20 text-xl"},W={class:"w-1/4 flex align-center justify-center"},X={class:"w-1/4 flex align-center justify-center"},Y=y({__name:"head",setup(l){const u=z();w([{name:" \u4E3B\u9875",icon:"iconfont icon-wenzhangguanli",path:"/exhibit"},{name:" \u6587\u7AE0\u5217\u8868",icon:"iconfont icon-wenzhangguanli",path:"/articleList"},{name:" Github",icon:"iconfont icon-GitHub",path:"https://github.com/qiheizhiya/myBlog"}]),B(()=>{console.log("list",x.value),console.log("router.getRoutes().filter(v=>v.meta.requiresAuth)",u.getRoutes().filter(c=>c.meta.requiresAuth))});const x=w([]),v=c=>{s().themeChange(c);let e=document.body;e.className=s().theme==!0?"":"dark"};return(c,e)=>{const b=O,C=d("RouterLink"),A=d("icon-sun"),$=d("icon-moon"),N=d("icon-chinese-fill"),S=d("icon-english-fill");return o(),r("div",Q,[n("div",W,[a(b)]),n("div",{class:h(["w-2/4 flex align-center justify-center flex-wrap",{active:t(G)}])},[(o(!0),r(L,null,R(t(u).getRoutes().filter(i=>i.meta.requiresAuth),(i,I)=>(o(),r("div",{class:"w-1/4",key:I},[a(C,{class:h(["alink",{alinktive:t(s)().theme}]),to:i.path},{default:_(()=>[k(j(i.meta.title),1)]),_:2},1032,["class","to"])]))),128))],2),n("div",X,[n("div",{onClick:e[0]||(e[0]=i=>v(!1))},[f(a(A,null,null,512),[[m,t(s)().theme==!0]])]),n("div",{onClick:e[1]||(e[1]=i=>v(!0))},[f(a($,null,null,512),[[m,t(s)().theme==!1]])]),n("div",{onClick:e[2]||(e[2]=i=>t(s)().localesChange("en"))},[f(a(N,null,null,512),[[m,t(s)().locales=="zh"]])]),n("div",{onClick:e[3]||(e[3]=i=>t(s)().localesChange("zh"))},[f(a(S,null,null,512),[[m,t(s)().locales=="en"]])])])])}}});const Z=g(Y,[["__scopeId","data-v-6f51912f"]]),ee=l=>(D("data-v-2b6e1188"),l=l(),F(),l),te={class:"w-screen h-screen mt-20"},se=k(" Loading... "),ne=ee(()=>n("div",{class:"beian"},"\u7248\u6743\u6240\u6709 \xA9 2022-\u81F3\u4ECA AKUN",-1)),ae=y({__name:"index",setup(l){return q(),(u,x)=>{const v=d("router-view");return o(),r("div",{class:h(["warp",{bganimation:t(s)().theme}])},[a(Z,{class:"fixed top-0 w-screen"}),n("div",te,[a(v,null,{default:_(({Component:c,route:e})=>[a(E,{name:"route.meta.transition || 'fade'",mode:"out-in"},{default:_(()=>[(o(),p(V,null,[(o(),p(T,null,{default:_(()=>[(o(),p(U(c),{key:e.meta.usePathKey?e.path:void 0}))]),fallback:_(()=>[se]),_:2},1024))],1024))]),_:2},1024)]),_:1})]),ne],2)}}});const ce=g(ae,[["__scopeId","data-v-2b6e1188"]]);export{ce as default};
