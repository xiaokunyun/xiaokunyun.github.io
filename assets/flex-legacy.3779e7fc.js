System.register(["./index-legacy.a9fe13b2.js"],(function(n,e){"use strict";var i,t,o,d,r,s,a,l,u;return{setters:[n=>{i=n.y,t=n.z,o=n.A,d=n.B,r=n.b,s=n.r,a=n.C,l=n.i,u=n.D}],execute:function(){var e;const w="undefined"!=typeof window,f=()=>{};w&&(null==(e=null==window?void 0:window.navigator)?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);const v=w?window:void 0;function c(...n){let e,i,d,r;if("string"==typeof n[0]?([i,d,r]=n,e=v):[e,i,d,r]=n,!e)return f;let s=f;const u=a((()=>function(n){var e;const i=l(n);return null!=(e=null==i?void 0:i.$el)?e:i}(e)),(n=>{s(),n&&(n.addEventListener(i,d,r),s=()=>{n.removeEventListener(i,d,r),s=f})}),{immediate:!0,flush:"post"}),w=()=>{u(),s()};var c;return c=w,t()&&o(c),w}w&&window.document,w&&window.navigator,w&&window.location;const g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},h="__vueuse_ssr_handlers__";var p,y;g[h]=g[h]||{},g[h],(y=p||(p={})).UP="UP",y.RIGHT="RIGHT",y.DOWN="DOWN",y.LEFT="LEFT",y.NONE="NONE";const{width:b}=function(n={}){const{window:e=v,initialWidth:t=1/0,initialHeight:o=1/0,listenOrientation:a=!0}=n,l=s(t),u=s(o),w=()=>{e&&(l.value=e.innerWidth,u.value=e.innerHeight)};return w(),function(n,e=!0){d()?r(n):e?n():i(n)}(w),c("resize",w,{passive:!0}),a&&c("orientationchange",w,{passive:!0}),{width:l,height:u}}();n("i",u((()=>b.value<1200)))}}}));