import{a as x,A as b,b as k}from"./app-video-item.2aed2434.js";import{d as m,r as d,o as t,c as p,w as h,T as $,a as n,b as v,F as f,e as C,C as I,f as _,I as S,g as L,_ as w,h as i,u as V,i as y,n as R,j as A,t as E,p as H,k as T,l as j,m as B}from"./index.32c9756c.js";const F=m({__name:"home-channel",setup(c){const s=d(0),o=d([]);return x({url:"/navList",method:"get"}).then(e=>{console.log(e.data),o.value=e.data.result}),(e,r)=>{const u=C,l=$;return t(),p(l,{active:s.value,"onUpdate:active":r[0]||(r[0]=a=>s.value=a)},{default:h(()=>[(t(!0),n(f,null,v(o.value,a=>(t(),p(u,{key:a.id,title:a.text},null,8,["title"]))),128))]),_:1},8,["active"])}}});const N=m({__name:"home-swipe",setup(c){const s=d([]);x({url:"/swiperList",method:"get"}).then(e=>{console.log("\u8F6E\u64AD\u56FE\u6570\u636E",e.data.result),s.value=e.data.result});const o=e=>{console.log(e)};return(e,r)=>{const u=S,l=L,a=I;return t(),p(a,{style:{width:"100%",height:"200px"},"default-current":2,onChange:o},{default:h(()=>[(t(!0),n(f,null,v(s.value,g=>(t(),p(l,{key:g.imgSrc},{default:h(()=>[_(u,{width:"100%",src:g.imgSrc},null,8,["src"])]),_:2},1024))),128))]),_:1})}}});const D=w(N,[["__scopeId","data-v-57cf6e44"]]),q={class:"list"},z=m({__name:"home-video-list",setup(c){const s=d([]);return x({method:"get",url:"/videosList"}).then(o=>{console.log("\u89C6\u9891\u5217\u8868\u7684\u6570\u636E",o.data.result),s.value=o.data.result}),(o,e)=>(t(),n("div",q,[(t(!0),n(f,null,v(s.value,r=>(t(),p(b,{key:r.id,video:r},null,8,["video"]))),128))]))}});const M="/assets/logo.d1a0d3b7.png",U=c=>(H("data-v-308f13b7"),c=c(),T(),c),G={class:"fixed top-0 left-0 w-screen h-16 text-xs overflow-hidden"},J={class:"w-screen h-16 flex justify-between items-center"},K=U(()=>i("div",{class:"w-1/5 flex justify-center items-center"},[i("img",{src:M,class:"w-10 h-4",alt:"logo"})],-1)),O={class:"w-4/5 flex"},P=m({__name:"Header",setup(c){const s=V(),o=d(s.getRoutes().filter(e=>e.meta.requiresAuth));return(e,r)=>{const u=y("RouterLink");return t(),n("div",G,[i("div",J,[K,i("div",O,[(t(!0),n(f,null,v(o.value,(l,a)=>(t(),n("div",{class:R(["text-black w-1/4 flex items-center text-xs",{active:a}]),key:a},[_(u,{to:l.path},{default:h(()=>[A(E(l.meta.title),1)]),_:2},1032,["to"])],2))),128))])])])}}});const Q=w(P,[["__scopeId","data-v-308f13b7"]]),W={class:"warps fixed h-screen w-screen top-0 left-0"},X={key:0},Y={key:1},Z={class:"mt-16 flex justify-center items-center h-screen w-screen"},se=m({__name:"index",setup(c){return(s,o)=>{const e=y("RouterView");return t(),n("div",W,[j(B)?(t(),n("div",X,[_(k),_(F),_(D),_(z)])):(t(),n("div",Y,[i("div",null,[_(Q),i("div",Z,[_(e)])])]))])}}});export{se as default};
