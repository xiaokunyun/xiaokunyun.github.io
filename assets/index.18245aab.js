/* empty css              */import{_ as z}from"./logo.60092ee7.js";import{d as F,u as h,a as q,r as D,b as R,o as T,c as U,e as s,n as E,f as c,g as e,w as u,v as d,t as m,h as l,i as t,F as L,j as v,k as i,I as P,l as G,m as H,B as J,S as K}from"./index.69b7de08.js";import{i as O}from"./flex.ec493fed.js";import{_ as Q}from"./_plugin-vue_export-helper.cdc0426e.js";const W={class:"relative w-screen h-screen flex justify-center items-center"},X={class:"w-100 h-100"},Y={class:"login-form-wrapper"},Z={class:"login-form-title"},ee={class:"login-form-sub-title"},oe={class:"login-form-error-msg"},ne=F({__name:"index",setup(se){const b=h();h();const w=q(),r=D({username:"super-admin",password:"123456"}),$=()=>{console.log("isAuthenticated",t().isAuthenticated),t().login("user/login",r),w.push({path:"/"})},y=R(""),p=n=>{t().themeChange(n);let o=document.body;t().theme==!0?(o.className="",document.body.removeAttribute("arco-theme")):(o.className="dark",document.body.setAttribute("arco-theme","dark"))},f=n=>{t().localesChange(n),console.log("useStore().locales",t().locales),b.locale.value=n};return(n,o)=>{const C=z,k=i("icon-sun"),x=i("icon-moon"),V=i("icon-chinese-fill"),S=i("icon-english-fill"),I=i("icon-user"),N=P,_=G,B=i("icon-lock"),A=H,g=J,M=K,j=L;return T(),U("div",W,[s("div",X,[s("div",{class:E(["flex justify-center items-center h-20",{active:c(O)}])},[e(C),s("div",{onClick:o[0]||(o[0]=a=>p(!1))},[u(e(k,null,null,512),[[d,c(t)().theme==!0]])]),s("div",{onClick:o[1]||(o[1]=a=>p(!0))},[u(e(x,null,null,512),[[d,c(t)().theme==!1]])]),s("div",{onClick:o[2]||(o[2]=a=>f("en"))},[u(e(V,null,null,512),[[d,c(t)().locales=="zh"]])]),s("div",{onClick:o[3]||(o[3]=a=>f("zh"))},[u(e(S,null,null,512),[[d,c(t)().locales=="en"]])])],2),s("div",null,[s("div",Y,[s("div",Z,m(n.$t("login.form.title")),1),s("div",ee,m(n.$t("login.form.title")),1),s("div",oe,m(y.value),1),e(j,{ref:"formRef",model:r,style:{width:"400px"},class:"login-form",layout:"vertical",onSubmit:$},{default:l(()=>[e(_,{field:"username",rules:[{required:!0,message:n.$t("login.form.userName.errMsg")}],"validate-trigger":["change","blur"],"hide-label":""},{default:l(()=>[e(N,{modelValue:r.username,"onUpdate:modelValue":o[4]||(o[4]=a=>r.username=a),placeholder:n.$t("login.form.userName.placeholder")},{prefix:l(()=>[e(I)]),_:1},8,["modelValue","placeholder"])]),_:1},8,["rules"]),e(_,{field:"password",rules:[{required:!0,message:n.$t("login.form.password.errMsg")}],"validate-trigger":["change","blur"],"hide-label":""},{default:l(()=>[e(A,{modelValue:r.password,"onUpdate:modelValue":o[5]||(o[5]=a=>r.password=a),placeholder:n.$t("login.form.password.placeholder"),"allow-clear":""},{prefix:l(()=>[e(B)]),_:1},8,["modelValue","placeholder"])]),_:1},8,["rules"]),e(_,null,{default:l(()=>[e(M,null,{default:l(()=>[e(g,{"html-type":"submit"},{default:l(()=>[v(m(n.$t("login.form.login")),1)]),_:1}),e(g,null,{default:l(()=>[v(m(n.$t("login.form.register")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])])])])])}}});const ce=Q(ne,[["__scopeId","data-v-23a97aea"]]);export{ce as default};