import{R as T,T as W,E as J,o as x,c as B,b as t,C as h,_ as K,u as Z,r as A,x as D,S as F,l as j,m as S,F as L,y as Q,z as N,j as ee,n as _,D as te,i as se,P as ae,H as O,I as re,a as ie,J as le,K as oe,M as ne,k as ce,f as de,G as H}from"./index.9236d6a7.js";import{s as fe}from"./swiperinfo.c7983306.js";function pe(n){const{effect:i,swiper:e,on:c,setTranslate:l,setTransition:a,overwriteParams:s,perspective:r,recreateShadows:m,getEffectParams:o}=n;c("beforeInit",()=>{if(e.params.effect!==i)return;e.classNames.push(`${e.params.containerModifierClass}${i}`),r&&r()&&e.classNames.push(`${e.params.containerModifierClass}3d`);const u=s?s():{};Object.assign(e.params,u),Object.assign(e.originalParams,u)}),c("setTranslate",()=>{e.params.effect===i&&l()}),c("setTransition",(u,w)=>{e.params.effect===i&&a(w)}),c("transitionEnd",()=>{if(e.params.effect===i&&m){if(!o||!o().slideShadows)return;e.slides.forEach(u=>{u.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(w=>w.remove())}),m()}});let d;c("virtualUpdate",()=>{e.params.effect===i&&(e.slides.length||(d=!0),requestAnimationFrame(()=>{d&&e.slides&&e.slides.length&&(l(),d=!1)}))})}function ue(n,i){const e=T(i);return e!==i&&(e.style.backfaceVisibility="hidden",e.style["-webkit-backface-visibility"]="hidden"),e}function I(n,i,e){const c=`swiper-slide-shadow${e?`-${e}`:""}`,l=T(i);let a=l.querySelector(`.${c}`);return a||(a=W("div",`swiper-slide-shadow${e?`-${e}`:""}`),l.append(a)),a}function me({swiper:n,extendParams:i,on:e}){i({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),pe({effect:"coverflow",swiper:n,on:e,setTranslate:()=>{const{width:a,height:s,slides:r,slidesSizesGrid:m}=n,o=n.params.coverflowEffect,d=n.isHorizontal(),u=n.translate,w=d?-u+a/2:-u+s/2,q=d?o.rotate:-o.rotate,R=o.depth;for(let v=0,U=r.length;v<U;v+=1){const p=r[v],$=m[v],X=p.swiperSlideOffset,z=(w-X-$/2)/$,f=typeof o.modifier=="function"?o.modifier(z):z*o.modifier;let E=d?q*f:0,k=d?0:q*f,P=-R*Math.abs(f),g=o.stretch;typeof g=="string"&&g.indexOf("%")!==-1&&(g=parseFloat(o.stretch)/100*$);let M=d?0:g*f,V=d?g*f:0,C=1-(1-o.scale)*Math.abs(f);Math.abs(V)<.001&&(V=0),Math.abs(M)<.001&&(M=0),Math.abs(P)<.001&&(P=0),Math.abs(E)<.001&&(E=0),Math.abs(k)<.001&&(k=0),Math.abs(C)<.001&&(C=0);const Y=`translate3d(${V}px,${M}px,${P}px)  rotateX(${k}deg) rotateY(${E}deg) scale(${C})`,G=ue(o,p);if(G.style.transform=Y,p.style.zIndex=-Math.abs(Math.round(f))+1,o.slideShadows){let y=d?p.querySelector(".swiper-slide-shadow-left"):p.querySelector(".swiper-slide-shadow-top"),b=d?p.querySelector(".swiper-slide-shadow-right"):p.querySelector(".swiper-slide-shadow-bottom");y||(y=I(o,p,d?"left":"top")),b||(b=I(o,p,d?"right":"bottom")),y&&(y.style.opacity=f>0?f:0),b&&(b.style.opacity=-f>0?-f:0)}}},setTransition:a=>{n.slides.map(r=>T(r)).forEach(r=>{r.style.transitionDuration=`${a}ms`,r.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(m=>{m.style.transitionDuration=`${a}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}const he={class:"cursor-pointer"},we={class:"lg:w-full relative mx-auto"},ge=["src"],_e={class:"p-5 items-center justify-center align-middle flex max-w-screen-xl px-4 text-center py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-4"},xe={class:"mb-2 whitespace-nowrap lg:text-xl text-base font-bold tracking-tight text-gray-900"},ve={__name:"storesmall",props:{_id:{type:String,default:""},name:{type:String,default:""},price:{type:Number,default:0},dateValue:{type:String,default:""},image:{type:String,default:""},images:{type:Array,default:""},special:{type:String,default:""},suggest:{type:String,default:""},equipment:{type:String,default:""},number:{type:String,default:""},attention:{type:String,default:""}},setup(n){return J(),(i,e)=>(x(),B("a",he,[t("div",we,[t("img",{class:"mt-4 object-cover md:w-full md:h-56 lg:w-[500px] lg:h-72 mx-auto",src:n.image},null,8,ge),t("div",_e,[t("span",xe,[t("p",null,h(n.name),1)])])])]))}};const ye={__name:"swiperstoremore",setup(n){const i=Z(),e=[ae,me],c=A([]);(async()=>{var a,s;try{const{data:r}=await D.get("/stories");c.push(...r.result)}catch(r){F.fire({icon:"error",title:"\u5931\u6557",text:((s=(a=r==null?void 0:r.response)==null?void 0:a.data)==null?void 0:s.message)||"\u767C\u751F\u932F\u8AA4"}),console.log(r)}})();const l=a=>{i.push(`/stories/${a}`)};return(a,s)=>(x(),j(N(se),{loop:!0,effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},pagination:!0,breakpoints:{640:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:2,spaceBetween:20},1200:{slidesPerView:3,spaceBetween:50},1400:{slidesPerView:3,spaceBetween:50}},modules:e,class:"mySwiper",id:"mySwipwe"},{default:S(()=>[(x(!0),B(L,null,Q(c,r=>(x(),j(N(ee),{key:r._id},{default:S(()=>[_(ve,te({onClick:m=>l(r._id)},r),null,16,["onClick"])]),_:2},1024))),128))]),_:1}))}},be=K(ye,[["__scopeId","data-v-30d55f91"]]),Se={id:"storeinfo",class:"lg:flex pt-10 ms:flex-col overflow-x-hidden"},$e={class:"navbar px-4 py-4 lg:pb-6 lg:pt-10 w-full z-10 bg-white fixed","aria-label":"Breadcrumb"},Ee={class:"inline-flex items-center space-x-1 md:space-x-3"},ke={class:"inline-flex items-center"},Pe=t("svg",{"aria-hidden":"true",class:"w-4 h-4 mr-2",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})],-1),Me={class:"flex items-center"},Ve=t("svg",{"aria-hidden":"true",class:"w-6 h-6 text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1),Ce=de('<li aria-current="page"><div class="flex items-center"><svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">\u5E97\u5BB6\u8CC7\u8A0A</span></div></li>',1),Te={class:"px-4 lg:px-0 lg:w-full h-full flex py-16 lg:flex-row-reverse flex-wrap"},Be={class:"w-full h-[500px] py-4"},qe={class:"h-full relative w-full py-4 flex justify-center items-start lg:items-center"},ze={class:"w-full py-4 lg:w-[80%] text-xl lg:text-2xl flex flex-wrap justify-between lg:items-center h-full"},je={class:"w-full flex flex-wrap justify-center items-center"},Ne={class:"w-full lg:w-1/2"},Oe=["src"],He={class:"w-full lg:w-1/2 lg:px-8 lg:py-8 px-4 py-4 text-left"},Ie={class:"w-full pb-4 text-base lg:text-lg whitespace-pre-wrap"},Ae={class:"w-full pb-4 text-base lg:text-lg whitespace-pre-wrap"},De={class:"w-full pb-4 text-base lg:text-lg whitespace-pre-wrap"},Fe=t("div",null,"\u7C89\u7D72\u5C08\u9801\uFF1A",-1),Le={class:"text-blueB"},Re=["href"],Ue={class:"w-full pb-4 text-base lg:text-lg whitespace-pre-wrap"},Xe=t("div",null,"\u7279\u8272\uFF1A",-1),Ye={class:"flex-wrap flex w-full mt-4"},Ge={class:"w-full py-4 justify-center items-center lg:items-center"},We={class:"w-2/3 mx-auto pb-4 text-base lg:text-lg whitespace-pre-wrap"},Je={id:"storeinfo"},Ke=t("h1",{class:"px-4 py-4"},"\u5176\u4ED6\u5E97\u5BB6",-1),et={__name:"StoreInfo",setup(n){O.registerPlugin(re),ie.init(),le(()=>{O.from(".navbar",{yPercent:-100,paused:!1,duration:.5,scrollTrigger:{start:"top 60",end:()=>"+="+document.documentElement.scrollHeight,onEnter(l){l.animation.play()},onUpdate(l){l.direction===-1?l.animation.play():l.animation.reverse()},markers:!1}})});const i=oe(),e=A({name:"",image:"",images:[],description:"",dateValue:"",special:"",url:"",place:"",price:""});ne(()=>i.params.id,l=>{l&&i.path.includes("/stories")&&c()});const c=async()=>{var l,a;try{const{data:s}=await D.get("/stories/"+i.params.id);e.name=s.result.name,e.image=s.result.image,e.description=s.result.description,e.dateValue=s.result.dateValue,e.images=s.result.images,e.url=s.result.url,e.place=s.result.place,e.special=s.result.special,e.price=s.result.price}catch(s){F.fire({icon:"error",title:"\u5931\u6557",text:((a=(l=s==null?void 0:s.response)==null?void 0:l.data)==null?void 0:a.message)||"\u767C\u751F\u932F\u8AA4"})}};return c(),(l,a)=>{const s=ce("router-link");return x(),B(L,null,[t("div",Se,[t("nav",$e,[t("ol",Ee,[t("li",ke,[_(s,{to:"/",class:"inline-flex items-center text-sm font-medium text-gray-700 hover:text-pinkP"},{default:S(()=>[Pe,H(" Home ")]),_:1})]),t("li",null,[t("div",Me,[Ve,_(s,{to:"/store",class:"ml-1 text-sm font-medium text-gray-700 hover:text-pinkP md:ml-2 dark:text-gray-400 dark:hover:text-white"},{default:S(()=>[H("\u5E97\u5BB6")]),_:1})])]),Ce])]),t("div",Te,[t("div",Be,[_(fe,{images:e.images},null,8,["images"])]),t("div",qe,[t("div",ze,[t("div",je,[t("div",Ne,[t("img",{src:e.image},null,8,Oe)]),t("div",He,[t("div",Ie,h(e.name),1),t("div",Ae,"\u71DF\u696D\u6642\u9593\uFF1A"+h(e.dateValue),1),t("div",De,[Fe,t("div",Le,[t("a",{href:e.url},h(e.url),9,Re)])]),t("div",Ue,[Xe,t("div",null,h(e.special),1)])])]),t("div",Ye,[t("div",Ge,[t("div",We,[t("div",Je,h(e.description),1)])])])])])])]),Ke,t("div",null,[_(be)])],64)}}};export{et as default};