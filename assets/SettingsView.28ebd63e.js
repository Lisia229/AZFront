import{E as y,I as k,r as V,o as a,c as n,a as e,w as C,n as S,b as m,v as p,G as f,d as u,z as g,C as x,e as w,f as R,S as h}from"./index.4bfb1fbf.js";import{U as j}from"./UploadImage.adf23195.js";const G=""+new URL("b07.224b5227.jpg",import.meta.url).href,z={id:"settings-front",class:"flex justify-center"},B={class:"w-3/4 flex bg-gray-50 rounded-lg justify-start shadow"},U={id:"card",class:"w-1/2 flex flex-col justify-center items-center p-8 text-center"},N=["onSubmit"],M={class:"w-full flex justify-center items-center"},L={class:"relative w-20 h-20 overflow-hidden rounded-full"},D={class:"flex-col px-3 py-4 items-center justify-center"},H={class:"flex items-center pt-2"},T=e("label",{for:"account",class:"w-28 block pr-2 text-xl font-medium text-gray-900"},"account",-1),A={class:"flex items-center pt-2"},E=e("label",{for:"account",class:"w-28 block pr-2 text-xl font-medium text-gray-900"},"email",-1),I={class:"px-3 mx-2 py-2 my-2"},$=e("svg",{class:"w-4 h-4 ml-2 -mr-1",width:"20px",height:"20px",viewBox:"0 0 512 512",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",fill:"currentColor"},[e("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),e("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),e("g",{id:"SVGRepo_iconCarrier"},[e("title",null,"cancel"),e("g",{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[e("g",{id:"work-case",fill:"currentColor",transform:"translate(91.520000, 91.520000)"},[e("polygon",{id:"Close",points:"328.96 30.2933333 298.666667 1.42108547e-14 164.48 134.4 30.2933333 1.42108547e-14 1.42108547e-14 30.2933333 134.4 164.48 1.42108547e-14 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48"})])])])],-1),F=w('<button type="submit" class="inline-flex items-center px-3 mx-2 py-2 my-2 text-sm font-medium text-center text-white bg-red-800 rounded-lg hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300"> \u5132\u5B58 <svg class="w-4 h-4 ml-2 -mr-1" fill="currentColor" width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" d="m15.12 2.23-9.79 9.78L.88 7.56 0 8.44l5.33 5.34L16 3.11l-.88-.88z"></path></g></svg></button>',1),P={key:1,class:"max-w-sm"},q={class:"w-full flex justify-center items-center"},J={class:"relative w-20 h-20 overflow-hidden rounded-full"},K=["src"],O={class:"p-5"},Q={class:"mb-2 text-2xl font-bold text-gray-900 dark:text-white"},W={class:"mb-3 text-2xl font-normal text-gray-700 dark:text-gray-400"},X=w('<svg class="w-4 h-4 ml-2 -mr-1" fill="currentColor" width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15.49 7.3h-1.16v6.35H1.67V3.28H8V2H1.67A1.21 1.21 0 0 0 .5 3.28v10.37a1.21 1.21 0 0 0 1.17 1.25h12.66a1.21 1.21 0 0 0 1.17-1.25z"></path><path d="M10.56 2.87 6.22 7.22l-.44.44-.08.08-1.52 3.16a1.08 1.08 0 0 0 1.45 1.45l3.14-1.53.53-.53.43-.43 4.34-4.36.45-.44.25-.25a2.18 2.18 0 0 0 0-3.08 2.17 2.17 0 0 0-1.53-.63 2.19 2.19 0 0 0-1.54.63l-.7.69-.45.44zM5.51 11l1.18-2.43 1.25 1.26zm2-3.36 3.9-3.91 1.3 1.31L8.85 9zm5.68-5.31a.91.91 0 0 1 .65.27.93.93 0 0 1 0 1.31l-.25.24-1.3-1.3.25-.25a.88.88 0 0 1 .69-.25z"></path></g></svg>',1),Y=e("img",{class:"w-1/2 rounded-r-lg",src:G},null,-1),re={__name:"SettingsView",setup(Z){const _=y(),{account:l,email:d,image:c}=k(_),t=V({_id:"",account:l.value||"",email:d.value||"",image:c.value||"",editing:!1}),b=()=>{t.editing=!1},v=async()=>{var r,o;const i=new FormData;i.append("account",t.account),i.append("email",t.email),i.append("image",t.image);try{const{data:s}=await R.patch("/users/edit",i);l.value=s.result.account,d.value=s.result.email,c.value=s.result.image,t.editing=!1,h.fire({icon:"success",title:"\u6210\u529F",text:"\u66F4\u6539\u6210\u529F"})}catch(s){console.log(s),h.fire({icon:"error",title:"\u5931\u6557",text:((o=(r=s==null?void 0:s.response)==null?void 0:r.data)==null?void 0:o.message)||"\u66F4\u6539\u5931\u6557"})}};return(i,r)=>(a(),n("div",z,[e("div",B,[e("div",U,[t.editing?(a(),n("form",{key:0,id:"editform",onSubmit:C(v,["prevent"])},[e("div",M,[e("div",L,[S(j,{modelValue:t.image,"onUpdate:modelValue":r[0]||(r[0]=o=>t.image=o),className:"avatar",id:"avatar"},null,8,["modelValue"])])]),e("div",D,[e("div",H,[T,m(e("input",{"onUpdate:modelValue":r[1]||(r[1]=o=>t.account=o),type:"text",name:"account",id:"account",class:"bg-white border border-vtd-secondary-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"change account"},null,512),[[p,t.account]])]),e("div",A,[E,m(e("input",{"onUpdate:modelValue":r[2]||(r[2]=o=>t.email=o),type:"email",name:"email",id:"email",class:"bg-white border border-vtd-secondary-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"change email"},null,512),[[p,t.email]])])]),e("div",I,[e("button",{onClick:r[3]||(r[3]=o=>b()),type:"button",class:"inline-flex items-center px-3 py-2 mx-2 my-2 text-sm font-medium text-center text-white bg-blueB rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},[f(" \u53D6\u6D88 "),$]),F])],40,N)):u("",!0),t.editing?u("",!0):(a(),n("div",P,[e("div",q,[e("div",J,[e("img",{class:"rounded-full",src:g(c)},null,8,K)])]),e("div",O,[e("h5",Q,x(g(l)),1),e("p",W,x(g(d)),1)])])),t.editing?u("",!0):(a(),n("button",{key:2,onClick:r[4]||(r[4]=o=>t.editing=!0),type:"button",class:"inline-flex items-center px-3 py-2 my-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300"},[f(" \u7DE8\u8F2F "),X]))]),Y])]))}};export{re as default};