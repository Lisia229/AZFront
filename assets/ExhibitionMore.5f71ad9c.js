import{E as o,o as r,c as n,b as t,C as a,G as l}from"./index.0ff2cf13.js";const s={class:"cursor-pointer"},i={class:"mb-2 text-xl whitespace-nowrap font-bold tracking-normal text-gray-900 dark:text-white"},c={class:"lg:w-full relative mx-auto"},d=["src"],g={class:"p-5 row-auto items-center justify-between align-middle flex max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-4 lg:cols-2"},u={class:"mb-2 whitespace-nowrap lg:text-xl text-lg font-bold tracking-tight text-gray-900 dark:text-white"},p=t("br",null,null,-1),x={class:"hidden lg:right-0 lg:bottom-1 lg:absolute lg:flex whitespace-nowrap items-center justify-center px-3 py-1 mx-3 text-xs font-medium text-center rounded-lg bg-blueB text-white hover:bg-white hover:text-blueB hover:border-[1px] hover:border-blueB"},y={__name:"ExhibitionMore",props:{_id:{type:String,default:""},name:{type:String,default:""},dateStart:{type:String,default:""},dateEnd:{type:String,default:""},price:{type:Number,default:0},place:{type:String,default:""},time:{type:String,default:""},description:{type:String,default:""},image:{type:String,default:""},sell:{type:Boolean,default:!1},category:{type:String,default:""}},setup(e){return o(),(m,h)=>(r(),n("a",s,[t("p",i,a(e.name),1),t("div",c,[t("img",{class:"mt-4 object-cover md:w-full md:h-56 lg:w-full lg:h-60 mx-auto",src:e.image},null,8,d),t("div",g,[t("span",u,[l(a(new Date(e.dateStart).toLocaleDateString())+" ~ "+a(new Date(e.dateEnd).toLocaleDateString())+" ",1),p,l(" "+a(e.place),1)]),t("span",x,a(e.category),1)])])]))}};export{y as _};