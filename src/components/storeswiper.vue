<template>
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false
    }"
    :navigation="false"
    :modules="modules"
    class="mySwiper">
    <swiper-slide>
      <img src="../assets/image/s01.jpg" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/image/s02.jpeg" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/image/s03.jpg" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/image/s04.jpg" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/image/s05.jpg" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/image/s06.jpg" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/image/s07.jpg" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/image/s08.jpg" alt="" />
    </swiper-slide>
  </swiper>
</template>
<script>
import { ref } from 'vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation } from 'swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation]
    }
  }
}
</script>
<style scoped>
.swiper {
  width: 100%;
  height: 600px;
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
  height: 600px;
  object-fit: cover;
}

.autoplay-progress {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--swiper-theme-color);
}

.autoplay-progress svg {
  --progress: 0;
  position: absolute;
  left: 0;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  stroke-width: 4px;
  stroke: var(--swiper-theme-color);
  fill: none;
  stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
  stroke-dasharray: 125.6;
  transform: rotate(-90deg);
}
</style>
