<template>
  <swiper
    :spaceBetween="30"
    :loop="true"
    :centeredSlides="true"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper">
    <swiper-slide>
      <img src="../assets/image/h01.jpeg" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/image/h02.jpeg" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/image/h03.png" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/image/h04.jpeg" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/image/h05.jpeg" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/image/h06.jpeg" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/image/h07.jpeg" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/image/h08.png" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/image/h09.jpeg" />
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
  height: 100%;
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
