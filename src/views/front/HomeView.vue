<template id="template">
  <!-- -swiper -->
  <div id="swiperhome" class="pt-[70px] lg:pt-[100px]">
    <Swiper></Swiper>
  </div>
  <!-- -展覽 -->
  <div
    id="HomeExhibitions"
    class="box gs_revea h-full lg:h-[100vh] 2xl:h-full flex flex-wrap justify-center items-center w-full py-4 px-4 md:py-8 md:px-8 lg:px-[100px] lg:py-16">
    <div class="w-full pb-4 lg:pb-8">
      <div class="text-pinkP font-medium uppercase text-center tracking-widest">WHAT’S GOING ON</div>
    </div>
    <div class="w-full pb-4 lg:pb-8">
      <div class="text-black text-2xl lg:text-[40px] font-medium uppercase text-center tracking-normal font-serif">In Progress Exhibitions</div>
    </div>
    <div class="w-full flex flex-wrap pb-8 justify-center items-center">
      <homeswiper></homeswiper>
    </div>
  </div>
  <!-- -商店 -->
  <div class="box h-full 2xl:h-full flex flex-wrap justify-center items-center w-full py-4 px-4 md:py-8 md:px-8 lg:px-[100px] lg:py-16">
    <div class="w-full pb-4 lg:pb-8">
      <div class="text-pinkP font-medium uppercase text-center tracking-widest">SHOP</div>
    </div>
    <div class="w-full pb-4 lg:pb-8">
      <div class="text-black text-2xl lg:text-[40px] font-medium uppercase text-center tracking-normal font-serif">園區店家</div>
    </div>
    <div class="w-full h-full flex flex-wrap pb-8 justify-center items-center">
      <shopswiper></shopswiper>
    </div>
  </div>
  <!-- -場地介紹 -->
  <div class="box h-full py-4 px-4 md:py-8 md:px-8 lg:h-[100vh] lg:px-[100px] lg:py-16 2xl:h-full flex flex-wrap justify-center items-center w-full bg-[#FDFBF5]">
    <div class="w-full lg:w-1/2 h-full px-4 py-4 lg:py-[100px] lg:px-[100px]">
      <span class="text-pinkP leading-10 font-medium uppercase text-center tracking-widest">ABOUT RENTAL</span>
      <div class="font-serif text-xl lg:text-[40px] leading-10 text-black font-bold lg:pt-[20px] lg:pb-[30px]">歡迎您發揮您的創意</div>
      <div class="font-light mb-[20px] text-black md:text-lg">
        由台灣文創發展股份有限公司所經營之AZ文化創意產業園區（以下稱本園區），為促進台灣文創產業發展，鼓勵各類文化創意發想及跨界藝文創作展演活動，受理本園區檔期申請及審查，特訂定此要點。
      </div>
      <div>
        <router-link to="/rental">
          <button class="text-pinkP hover:bg-pinkP hover:text-white font-serif py-3 px-6 border border-pinkP" type="button">MORE</button>
        </router-link>
      </div>
    </div>
    <div class="w-full h-full md:w-1/2 flex justify-center items-center">
      <rentalhome></rentalhome>
    </div>
  </div>
  <!-- -商品 -->
  <div class="box h-full 2xl:h-full flex flex-wrap justify-center items-center w-full py-4 px-4 md:py-8 md:px-8 lg:px-[100px] lg:py-16">
    <div class="w-full pb-4 lg:pb-8">
      <div class="text-pinkP font-medium uppercase text-center tracking-widest">products</div>
    </div>
    <div class="w-full pb-4 lg:pb-8">
      <div class="text-black text-2xl lg:text-[40px] font-medium text-center tracking-normal font-serif">Explore our Products</div>
    </div>
    <div class="w-full flex flex-wrap pb-8 justify-center items-center">
      <swipermoreVue></swipermoreVue>
    </div>
  </div>
  <!-- -about Us -->
  <div
    id="followUs"
    class="box hidden h-full lg:h-[1000px] 2xl:h-[100vh] lg:flex flex-wrap justify-center items-center w-full py-4 px-4 md:py-8 md:px-8 lg:px-[100px] lg:py-[80px]">
    <div class="flex justify-center items-start">
      <div class="w-full flex flex-wrap justify-center items-center lg:w-1/2">
        <div class="w-full">
          <img class="mx-auto" src="../../assets/logo/img-follow_pc.png" />
        </div>
        <div class="w-full pt-[40px] flex justify-center items-center">
          <div class="w-1/2 lg:w-1/3">
            <button
              type="button"
              class="text-white bg-[#333] hover:bg-[#333]/90 focus:ring-4 focus:outline-none focus:ring-[#333]/50 font-medium text-sm px-6 py-4 text-center inline-flex items-center">
              <svg
                class="w-4 h-4 mr-2 -ml-1"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook-f"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512">
                <path
                  fill="currentColor"
                  d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path>
              </svg>
              Facebook
            </button>
          </div>
          <div class="w-1/2 lg:w-1/3">
            <button
              type="button"
              class="text-white bg-[#333] hover:bg-[#333]/90 focus:ring-4 focus:outline-none focus:ring-[#333]/50 font-medium text-sm px-6 py-4 text-center inline-flex items-center">
              <svg
                class="w-4 h-4 mr-2 -ml-1"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="github"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512">
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
              Github
            </button>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/2">
        <img src="../../assets/icons/img-footer.png" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import imageView from '../../swiper/imageView.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import homeswiper from '../../swiper/homeswiper.vue'
import swipermoreVue from '../../swiper/homeproduct.vue'
import Swiper from '../../components/SwiperHome.vue'
import rentalhome from '../../swiper/rentalhome.vue'
import shopswiper from '../../swiper/shopswiper.vue'

import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
AOS.init()
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const boxes = gsap.utils.toArray('.box')

  boxes.forEach((box, i) => {
    const anim = gsap.fromTo(box, { autoAlpha: 0, y: 100 }, { duration: 1, autoAlpha: 1, y: 0 })
    ScrollTrigger.create({
      trigger: box,
      animation: anim,
      toggleActions: 'play none none reverse',
      once: false
    })
  })
})
</script>
