!function(){var e=document.createElement("style");e.innerHTML=".list{display:flex;flex-wrap:wrap;padding:0 1vw}.active[data-v-7ffc713c]{border-bottom:3px solid white}\n",document.head.appendChild(e),System.register(["./app-video-item-legacy.b7ab29fe.js","./index-legacy.5b3d4b52.js"],(function(e){"use strict";var t,a,s,l,n,i,c,d,r,o,u,v,f,p,m,h,w,_,x,y,g,b,k,j,L,S,R,A;return{setters:[e=>{t=e.a,a=e.T,s=e.b,l=e.S,n=e.c,i=e.A,c=e.d,d=e._},e=>{r=e.d,o=e.r,u=e.o,v=e.a,f=e.c,p=e.w,m=e.b,h=e.e,w=e.F,_=e.f,x=e._,y=e.g,g=e.u,b=e.h,k=e.t,j=e.p,L=e.i,S=e.j,R=e.k,A=e.l}],execute:function(){const H=r({__name:"home-channel",setup(e){const l=o(0),n=o([]);return u((()=>{})),t({url:"/navList",method:"post"}).then((e=>{n.value=e.data.data})),(e,t)=>{const i=a,c=s;return v(),f(c,{active:l.value,"onUpdate:active":t[0]||(t[0]=e=>l.value=e)},{default:p((()=>[(v(!0),m(w,null,h(n.value,(e=>(v(),f(i,{key:e.id,title:e.text},null,8,["title"])))),128))])),_:1},8,["active"])}}}),I=["src"],T=x(r({__name:"home-swipe",setup(e){const a=o([]);return t({url:"/swiperList",method:"post"}).then((e=>{console.log("轮播图数据",e.data.data),a.value=e.data.data})),(e,t)=>{const s=l,i=n;return v(),f(i,{class:"my-swipe",autoplay:3e3,"indicator-color":"white","lazy-render":""},{default:p((()=>[(v(!0),m(w,null,h(a.value,(e=>(v(),f(s,{key:e.imgSrc},{default:p((()=>[_("img",{src:e.imgSrc,style:{width:"100%",height:"200px"}},null,8,I)])),_:2},1024)))),128))])),_:1})}}}),[["__scopeId","data-v-d67cb7f9"]]),q={class:"list"},z=r({__name:"home-video-list",setup(e){const a=o([]);return t({method:"post",url:"/videosList"}).then((e=>{console.log("视频列表的数据",e.data.data),a.value=e.data.data})),(e,t)=>(v(),m("div",q,[(v(!0),m(w,null,h(a.value,(e=>(v(),f(i,{key:e.id,video:e},null,8,["video"])))),128))]))}}),C={class:"h-screen w-screen"},E=r({__name:"index",setup:e=>(e,t)=>(v(),m("div",C,[y(c),y(H),y(T),y(z)]))}),F={class:"fixed top-0 left-0 w-screen h-16 text-xs overflow-hidden"},M={class:"w-screen h-16 flex justify-between items-center"},U=(e=>(j("data-v-7ffc713c"),e=e(),L(),e))((()=>_("div",{class:"w-1/5 flex justify-center items-center"},[_("img",{src:d,class:"w-10 h-4",alt:"logo"})],-1))),V={class:"w-4/5 flex"},B=x(r({__name:"Header",setup(e){const t=g(),a=o(t.getRoutes().filter((e=>e.meta.requiresAuth)));return(e,t)=>{const s=S("RouterLink");return v(),m("div",F,[_("div",M,[U,_("div",V,[(v(!0),m(w,null,h(a.value,((e,t)=>(v(),m("div",{class:"text-black w-1/4 flex items-center text-xs",key:t},[y(s,{to:e.path},{default:p((()=>[b(k(e.meta.title),1)])),_:2},1032,["to"])])))),128))])])])}}}),[["__scopeId","data-v-7ffc713c"]]),D={class:"h-screen w-screen"},G={class:"mt-16 flex justify-center items-center h-screen w-screen"},J=r({__name:"index",setup:e=>(e,t)=>{const a=S("RouterView");return v(),m("div",D,[y(B),_("div",G,[y(a)])])}}),K={class:"warps fixed h-screen w-screen top-0 left-0"},N={key:0},O={key:1};e("default",r({__name:"index",setup:e=>(e,t)=>(v(),m("div",K,[R(A)?(v(),m("div",N,[y(E)])):(v(),m("div",O,[y(J)]))]))}))}}}))}();