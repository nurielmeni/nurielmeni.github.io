import{d as v,q as w,aI as Q,aJ as R,_ as q,o as c,c as C,w as e,a as t,aF as S,aD as y,G as n,a2 as b,Q as I,am as h,an as N,ao as B,C as E,ap as L,D as d,a6 as _,F as p,P as g,ah as V,E as D,aG as F}from"./index-D9bZvPVZ.js";const P=v({__name:"StepResultsSingleChoiceCard",props:{currentStepResults:{},stackSource:{}},setup(o,{expose:f}){f();const s=o,r={id:-1,source:void 0,correct:void 0,answer:!1},m=w(()=>s?.currentStepResults?Object.entries(s.currentStepResults).map(([a,k])=>{const i=parseInt(a.replace("q_",""));if(isNaN(i))return r;const u=s.stackSource.find(x=>x.id===i);return u?{id:i,source:u?.source,correct:u?.correct_choice,answer:k}:r}):[]),l={props:s,errorResult:r,results:m,get mdiCheckCircle(){return Q},get mdiCloseCircle(){return R}};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}}),T={class:"text-body1 q-ma-none text-center"};function j(o,f,s,r,m,l){return s.currentStepResults?(c(),C(F,{key:0,class:"full-width bg-accent text-dark q-pa-none",flat:""},{default:e(()=>[t(S,{class:"q-pa-none"},{default:e(()=>[y("h3",T,n(o.$t("STEP_RESULTS")),1)]),_:1}),t(b,{class:"q-my-sm"}),t(S,null,{default:e(()=>[t(I,{class:"q-gutter-xs",separator:""},{default:e(()=>[(c(!0),h(N,null,B(r.results,a=>(c(),h("div",{key:a.id},[t(E,{class:L(["q-py-none left-border",{wrong:a.answer!==!0}])},{default:e(()=>[t(d,null,{default:e(()=>[t(_,null,{default:e(()=>[p(n(a.source),1)]),_:2},1024),t(_,{class:"text-caption text-positive"},{default:e(()=>[p(n(a.correct),1)]),_:2},1024)]),_:2},1024),a.answer!==!0?(c(),C(d,{key:0,class:"text-negative",side:""},{default:e(()=>[t(_,null,{default:e(()=>[p(n(a.answer),1)]),_:2},1024)]),_:2},1024)):g("",!0),t(d,{side:""},{default:e(()=>[t(V,null,{default:e(()=>[t(D,{name:a.answer===!0?r.mdiCheckCircle:r.mdiCloseCircle,color:a.answer===!0?"positive":"negative"},null,8,["name","color"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["class"])]))),128))]),_:1})]),_:1})]),_:1})):g("",!0)}const O=q(P,[["render",j],["__scopeId","data-v-f7e47808"],["__file","StepResultsSingleChoiceCard.vue"]]);export{O as default};
