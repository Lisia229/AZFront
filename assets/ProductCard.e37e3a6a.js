import{E as r,o as s,c as o,b as e,B as c,C as a}from"./index.4570ff0a.js";const l={id:"productcard",class:"cursor-pointer"},i={id:"productcard2",class:"lg:w-full relative mx-auto"},n={class:"w-full h-72"},d=["src"],u={class:"p-5 items-center justify-center align-middle flex max-w-screen-xl px-4 text-center py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-4"},g={class:"mb-2 whitespace-nowrap lg:text-xl text-base font-bold tracking-tight text-gray-900"},m={class:"text-red-800"},h={__name:"ProductCard",props:{_id:{type:String,default:""},name:{type:String,default:""},category:{type:String,default:""},price:{type:Number,default:0},description:{type:String,default:""},image:{type:String,default:""},color:{type:String,default:""}},setup(t){return r(),(p,x)=>(s(),o("a",l,[e("div",i,[e("div",n,[e("img",{class:"mt-4 object-cover h-full w-full md:w-96 md:h-72 mx-auto",src:t.image},null,8,d)]),e("span",{class:c(["left-0 top-3 absolute lg:flex whitespace-nowrap items-center justify-center px-3 py-1 mx-3 text-xs font-medium text-center rounded-lg text-white hover:bg-white hover:border-[1px]",["bg-"+t.color,"hover:text-"+t.color,"hover:border-"+t.color]])},a(t.category),3),e("div",u,[e("span",g,[e("p",null,a(t.name),1),e("p",m,"NT. "+a(t.price),1)])])])]))}};export{h as _};
