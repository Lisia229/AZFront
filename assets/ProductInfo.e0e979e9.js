import{_ as S,E as P,o as l,l as v,m as p,c as h,y as V,z as c,j,a as e,F as b,i as M,A as L,u as D,r as $,x as A,S as z,n as m,D as N,P as T,H as q,I as F,s as R,J as E,t as G,k as H,d as C,w as O,C as g,b as U,v as J,e as K,K as Z,G as B}from"./index.4a6a947d.js";import{a as Q}from"./aos.4c3fb397.js";import{_ as W}from"./ProductCard.32d4344b.js";const X=["src"],Y={__name:"ProductSwipwe",props:{image:{type:String},images:{type:Array}},setup(x){const r=[L];return P(),(_,d)=>(l(),v(c(M),{spaceBetween:30,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},modules:r,class:"mySwiper"},{default:p(()=>[(l(!0),h(b,null,V(x.images,w=>(l(),v(c(j),null,{default:p(()=>[e("img",{src:w},null,8,X)]),_:2},1024))),256))]),_:1}))}},ee=S(Y,[["__scopeId","data-v-ef4d664a"]]);const te={__name:"swipermore",setup(x){const r=D(),_=[T],d=$([]);(async()=>{var n,i;try{const{data:o}=await A.get("/products");d.push(...o.result.splice(1,8))}catch(o){z.fire({icon:"error",title:"\u5931\u6557",text:((i=(n=o==null?void 0:o.response)==null?void 0:n.data)==null?void 0:i.message)||"\u767C\u751F\u932F\u8AA4"})}})();const w=n=>{r.push(`/product/${n}`)};return(n,i)=>(l(),v(c(M),{slidesPerView:1,spaceBetween:30,loop:!0,pagination:{clickable:!0},breakpoints:{640:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:2,spaceBetween:20},1200:{slidesPerView:3,spaceBetween:50},1400:{slidesPerView:4,spaceBetween:50}},modules:_,class:"mySwiper",id:"mySwipwe"},{default:p(()=>[(l(!0),h(b,null,V(d,o=>(l(),v(c(j),{key:o._id},{default:p(()=>[m(W,N({onClick:y=>w(o._id)},o),null,16,["onClick"])]),_:2},1024))),128))]),_:1}))}},se=S(te,[["__scopeId","data-v-3b07dfe3"]]),oe={id:"productInfo",class:"relative py-8"},ae={class:"navbar px-4 py-4 lg:pb-6 lg:py-10 w-full z-10 bg-white fixed","aria-label":"Breadcrumb"},ie={class:"inline-flex items-center space-x-1 md:space-x-3"},le={class:"inline-flex items-center"},re=e("svg",{"aria-hidden":"true",class:"w-4 h-4 mr-2",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})],-1),ne={class:"flex items-center"},ce=e("svg",{"aria-hidden":"true",class:"w-6 h-6 text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1),de=K('<li aria-current="page"><div class="flex items-center"><svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">\u5546\u54C1\u8CC7\u8A0A</span></div></li>',1),ue={class:"px-4 lg:px-0 lg:w-full h-full flex py-16 lg:flex-row-reverse flex-wrap"},pe={id:"productcontent",class:"h-full relative w-full lg:w-1/2 py-4 flex justify-center items-start lg:items-center"},_e={class:"w-full py-4 lg:w-[80%] text-xl lg:text-2xl flex justify-between lg:items-center h-full"},we={class:"flex-wrap flex w-full"},me={class:"w-full flex justify-end pb-4"},he=e("svg",{class:"w-8 h-8",fill:"none",stroke:"currentColor","stroke-width":"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"})],-1),fe=[he],ge=e("svg",{class:"w-8 h-8",fill:"#F196A7",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},[e("path",{d:"M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"})],-1),ve=[ge],xe=["onSubmit"],ye={class:"sm:w-2/3 lg:w-full flex justify-between items-start lg:items-center"},be={class:"whitespace-nowrap"},ke={class:"text-red-800 whitespace-nowrap"},Ce={class:"w-full py-4 justify-between items-start lg:items-center"},Be={class:"text-base"},Se={id:"addquantity",class:"flex w-full pb-4 justify-between items-start lg:items-center relative"},Pe=e("svg",{class:"w-5 h-5 number-btn",fill:"none",stroke:"currentColor","stroke-width":"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 12h-15"})],-1),Ve=[Pe],je=e("svg",{class:"w-5 h-5 number-btn",fill:"none",stroke:"currentColor","stroke-width":"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4.5v15m7.5-7.5h-15"})],-1),Me=[je],$e={class:"w-full pb-4 justify-between items-start lg:items-center"},Ae={class:"w-full py-4 justify-between items-start lg:items-center"},ze={class:"w-full pb-4 text-sm whitespace-pre-wrap"},Ie={id:"productimg",class:"w-full lg:w-1/2 py-4"},Le=e("h1",{class:"px-4"},"\u5176\u4ED6\u63A8\u85A6\u5546\u54C1",-1),De={class:"w-full h-full"},Fe={__name:"ProductInfo",setup(x){Q.init();const r=q(),_=P(),{editCart:d,editLove:w}=_,{love:n}=F(_),i=R(1);E(()=>r.params.id,u=>{u&&r.path.includes("/product")&&k()});const o=async()=>{await w({p_id:t._id})},y=G(()=>n.value.includes(t._id)),t=$({_id:"",name:"",price:"",colors:"",description:"",image:"",images:[],sell:!0,category:""}),I=async()=>{await d({p_id:t._id,quantity:parseInt(i.value)})},k=async()=>{var u,a;try{const{data:s}=await A.get("/products/"+r.params.id);t._id=s.result._id,t.name=s.result.name,t.image=s.result.image,t.description=s.result.description,t.colors=s.result.colors,t.images=s.result.images,t.sell=s.result.sell,t.category=s.result.category,t.price=s.result.price,document.title="AZ |"+t.name}catch(s){z.fire({icon:"error",title:"\u5931\u6557",text:((a=(u=s==null?void 0:s.response)==null?void 0:u.data)==null?void 0:a.message)||"\u767C\u751F\u932F\u8AA4"}),Z.go(-1)}};return k(),(u,a)=>{const s=H("router-link");return l(),h(b,null,[e("div",oe,[e("nav",ae,[e("ol",ie,[e("li",le,[m(s,{to:"/",class:"inline-flex items-center text-sm font-medium text-gray-700 hover:text-pinkP"},{default:p(()=>[re,B(" Home ")]),_:1})]),e("li",null,[e("div",ne,[ce,m(s,{to:"/product",class:"ml-1 text-sm font-medium text-gray-700 hover:text-pinkP md:ml-2 dark:text-gray-400 dark:hover:text-white"},{default:p(()=>[B("\u5546\u54C1")]),_:1})])]),de])]),e("div",ue,[e("div",pe,[e("div",_e,[e("div",we,[e("div",me,[c(y)?C("",!0):(l(),h("button",{key:0,onClick:o,type:"button"},fe)),c(y)?(l(),h("button",{key:1,onClick:o,type:"button"},ve)):C("",!0)]),e("form",{onSubmit:O(I,["prevent"]),class:"w-full border-b-[1px] border-gray-300"},[e("div",ye,[e("span",be,g(t.name),1),e("span",ke,"NT. "+g(t.price),1)]),e("div",Ce,[e("span",Be,g(t.colors),1)]),e("div",Se,[e("button",{class:"absolute left-3",type:"button",onClick:a[0]||(a[0]=f=>i.value--)},Ve),U(e("input",{"onUpdate:modelValue":a[1]||(a[1]=f=>i.value=f),type:"number",min:"1",max:"10",readonly:"readonly",class:"bg-white py- px-36 text-center border border-[#242424] text-[#242424] text-sm focus:ring-[#242424] focus:border-[#242424] block w-full p-2.5"},null,512),[[J,i.value]]),e("button",{class:"absolute right-3",type:"button",onClick:a[2]||(a[2]=f=>i.value++)},Me)]),e("div",$e,[e("button",{onClick:a[3]||(a[3]=f=>c(d)({_id:u._id,quantity:1})),type:"submit",class:"bg-[#323232] w-full h-12 px-4 py-2 text-base text-white border-[1px] border-[#323232] hover:text-[#323232] hover:bg-white"}," ADD TO BAG ")])],40,xe),e("div",Ae,[e("div",ze,g(t.description),1)])])])]),e("div",Ie,[m(ee,{images:t.images},null,8,["images"])])])]),Le,e("div",De,[m(se)])],64)}}};export{Fe as default};
