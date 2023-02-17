<template>
  <swiper
    :slidesPerView="3"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    :breakpoints="{
      '@0.00': {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      '@0.75': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '@1.00': {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      '@1.50': {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }"
    :spaceBetween="30"
    :modules="modules"
    class="mySwiper">
    <swiper-slide>
      <img src="../assets/image/v01.jpg">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/image/v02.jpg">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/image/v03.jpg">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/image/v04.jpg">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/image/v05.jpg">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/image/v06.jpg">
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'

// import required modules
import { Autoplay } from 'swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Autoplay]
    }
  }
}
</script>
<style scoped>
.swiper {
  width: 100%;
  height: 100vh;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
