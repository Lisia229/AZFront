import{r as i,g as d,S as p,o as s,c as l,b as t,F as u,y as h,e as _,C as c}from"./index.e9e5a399.js";const x={id:"love",class:"pt-[70px] w-full h-full"},y=t("div",{class:"flex justify-center items-center py-8 px-8 text-3xl"},[t("svg",{class:"w-10 h-10 pr-2",fill:"none",stroke:"currentColor","stroke-width":"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"})]),t("div",null,"\u6211\u7684\u6700\u611B")],-1),v={class:"w-full border-b-[1px] border-gray-500 table-fixed text-left text-gray-500 py-8"},f=t("thead",{class:"text-base text-center text-white uppercase bg-black"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3"},"\u7167\u7247"),t("th",{scope:"col",class:"px-6 py-3"},"\u540D\u7A31"),t("th",{scope:"col",class:"px-6 py-3"},"\u50F9\u683C"),t("th",{scope:"col",class:"px-6 py-3"},"\u52D5\u4F5C")])],-1),w={class:"text-center"},b={class:"w-full h-full"},g=["src"],m={key:0},k=t("td",{colspan:"6"},"\u6C92\u6709\u6771\u897F",-1),C=[k],N={__name:"LoveView",setup(B){const o=i([]);return(async()=>{try{const{data:e}=await d.get("/users/love");console.log(e.result),o.push(...e.result)}catch{p.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u6211\u7684\u6700\u611B\u5931\u6557"})}})(),(e,a)=>(s(),l("div",x,[y,t("table",v,[f,t("tbody",w,[(s(!0),l(u,null,h(o,(r,n)=>(s(),l("tr",{class:"my-2",key:n},[t("td",null,[t("div",b,[t("img",{class:"w-full h-44 object-cover",src:r.data.image},null,8,g)])]),t("td",null,c(r.data.name),1),t("td",null,[t("div",null,"NT. "+c(r.data.price),1)]),t("td",null,[t("button",{type:"button",onClick:a[0]||(a[0]=j=>!e.submitLove)},"remove")])]))),128)),o.length===0?(s(),l("tr",m,C)):_("",!0)])])]))}};export{N as default};
