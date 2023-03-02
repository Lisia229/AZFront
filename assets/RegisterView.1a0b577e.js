import{a as k,u as y,r as f,k as b,o as i,c as l,b as r,w as v,d as u,v as c,e as m,G as o,n as _,m as C,f as M,x as V,S as g}from"./index.7b48a265.js";import{_ as B}from"./b01.b89b088a.js";import{v as n}from"./index.15c9ddb7.js";const A={class:"container flex flex-wrap items-center justify-between mx-auto"},q={id:"register",class:"relative h-full w-full"},E={id:"registerform",class:"w-3/4 flex mx-auto md:grid md:grid-cols-12 rounded-xl shadow bg-whiteW justify-center items-start","data-aos":"fade-left","data-aos-duration":"1500","data-aos-delay":"1500"},j=r("div",{class:"hidden w-full h-full md:block md:col-span-5"},[r("img",{id:"registerimg",class:"rounded-l-xl",src:B})],-1),L={class:"w-full h-full col-span-7"},H={class:"w-full max-w-sm p-4 rounded-xl sm:p-6 md:p-8 mx-auto"},N=["onSubmit"],S=r("h1",{class:"text-xl font-bold leading-tight tracking-normal text-gray-900 md:text-2xl dark:text-white"},"Create and account",-1),z=r("label",{for:"email",class:"flex mb-2 text-sm font-medium text-gray-900 dark:text-white"},[r("svg",{"aria-hidden":"true",class:"w-5 h-5 mr-1 text-gray-500 dark:text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[r("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),r("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]),o(" Your Email ")],-1),U={key:0,class:"mt-2 text-xs text-red-600 dark:text-red-400"},$=r("span",{class:"font-medium"},"Email is invalid",-1),T=[$],D=r("label",{for:"account",class:"flex mb-2 text-sm font-medium text-gray-900 dark:text-white"},[r("svg",{fill:"none",stroke:"currentColor","stroke-width":"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",class:"w-5 h-5 mr-1 text-gray-500 dark:text-gray-400"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"})]),o(" Your account ")],-1),I={key:0,class:"mt-2 text-xs text-red-600 dark:text-red-400"},O=r("span",{class:"font-medium"},"Oh, snapp!",-1),R=r("label",{for:"password",class:"flex mb-2 text-sm font-medium text-gray-900 dark:text-white"},[r("svg",{fill:"none",stroke:"currentColor","stroke-width":"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",class:"w-5 h-5 mr-1 text-gray-500 dark:text-gray-400"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"})]),o(" Password ")],-1),Y={key:0,class:"mt-2 text-xs text-red-600 dark:text-red-400"},G=r("span",{class:"font-medium"},"Oh, snapp!",-1),P=r("label",{for:"confirm-password",class:"flex mb-2 text-sm font-medium text-gray-900 dark:text-white"},[r("svg",{class:"w-5 h-5 mr-1 text-gray-500 dark:text-gray-400",fill:"none",stroke:"currentColor","stroke-width":"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"})]),o(" Confirm password ")],-1),W={key:0,class:"mt-2 text-xs text-red-600 dark:text-red-400"},F=r("span",{class:"font-medium"},"password is not the same",-1),J=[F],K=M('<div class="flex items-start"><div class="flex items-center h-5"><input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""></div><div class="ml-3 text-sm"><label for="terms" class="font-light text-gray-500 dark:text-gray-300"> I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label></div></div><button type="submit" class="w-full text-white bg-blueB hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Create an account </button>',2),Q={class:"text-sm font-light text-gray-500 dark:text-gray-400"},X=r("div",{"data-aos":"fade-right","data-aos-duration":"1500","data-aos-delay":"2500",class:"hidden w-16 h-16 md:block absolute top-9 left-0"},[r("a",{href:"/"},[r("svg",{fill:"none",stroke:"#4484A5","stroke-width":"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"})])])],-1),ar={__name:"RegisterView",setup(Z){k.init();const x=y(),a=f({account:{error:!1},password:{error:!1},email:{error:!1},passwordConfirm:{error:!1}}),t=f({account:"",password:"",passwordConfirm:"",email:""}),w=()=>n.isEmail(t.email)?n.isEmpty(t.account)||!n.isByteLength(t.account,{min:3,max:20})?(a.account.error=!0,!0):n.isEmpty(t.password)||!n.isByteLength(t.password,{min:4,max:20})?(a.password.error=!0,!0):t.passwordConfirm!==t.password?(a.passwordConfirm.error=!0,!0):!1:(a.email.error=!0,!0),h=async()=>{var p,e;if(!w())try{await V.post("/users",t),g.fire({icon:"success",title:"\u6210\u529F",text:"\u8A3B\u518A\u6210\u529F"}),x.push("/")}catch(d){g.fire({icon:"error",title:"\u5931\u6557",text:((e=(p=d==null?void 0:d.response)==null?void 0:p.data)==null?void 0:e.message)||"\u767C\u751F\u932F\u8AA4"})}};return(p,e)=>{const d=b("router-link");return i(),l("div",A,[r("div",q,[r("div",E,[j,r("div",L,[r("div",H,[r("form",{onSubmit:v(h,["prevent"]),class:"space-y-4 h-full md:space-y-1"},[S,r("div",null,[z,u(r("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>t.email=s),type:"text",name:"email",id:"email",class:"appearance-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@google.com",required:"",onClick:e[1]||(e[1]=s=>a.email.error=!1)},null,512),[[c,t.email]]),a.email.error?(i(),l("p",U,T)):m("",!0)]),r("div",null,[D,u(r("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>t.account=s),type:"text",name:"account",id:"account",class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"account ID",required:"",onClick:e[3]||(e[3]=s=>a.account.error=!1)},null,512),[[c,t.account]]),a.account.error?(i(),l("p",I,[O,o(" \xA0 required field. At least 3 words. ")])):m("",!0)]),r("div",null,[R,u(r("input",{"onUpdate:modelValue":e[4]||(e[4]=s=>t.password=s),type:"password",name:"password",id:"password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:"",onClick:e[5]||(e[5]=s=>a.password.error=!1)},null,512),[[c,t.password]]),a.password.error?(i(),l("p",Y,[G,o(" \xA0 required field. At least 4 words. ")])):m("",!0)]),r("div",null,[P,u(r("input",{"onUpdate:modelValue":e[6]||(e[6]=s=>t.passwordConfirm=s),type:"password",name:"confirm-password",id:"confirm-password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:"",onClick:e[7]||(e[7]=s=>a.passwordConfirm.error=!1)},null,512),[[c,t.passwordConfirm]]),a.passwordConfirm.error?(i(),l("p",W,J)):m("",!0)]),K,r("p",Q,[o(" Already have an account? "),_(d,{to:"/login",class:"text-blue-700 hover:underline dark:text-blue-500"},{default:C(()=>[o("Login here")]),_:1})])],40,N)])])]),X])])}}};export{ar as default};
