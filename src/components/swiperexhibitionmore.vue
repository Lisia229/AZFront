<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :loop="true"
    :pagination="{
      clickable: true
    }"
    :breakpoints="{
      '640': {
        slidesPerView: 1,
        spaceBetween: 20
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 20
      },
      '1200': {
        slidesPerView: 3,
        spaceBetween: 50
      },
      '1400': {
        slidesPerView: 4,
        spaceBetween: 50
      }
    }"
    :modules="modules"
    class="mySwiper"
    id="ExhibitionSwipwer">
    <swiper-slide v-for="exhibition in exhibitions" :key="exhibition._id">
      <ExhibitionMore @click="info(exhibition._id)" v-bind="exhibition"></ExhibitionMore>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { reactive } from 'vue'
import { api } from '@/plugins/axios'
import ExhibitionMore from './ExhibitionMore.vue'
import Swal from 'sweetalert2'
import { Pagination } from 'swiper'
import 'swiper/css'
import { useRouter } from 'vue-router'
import 'swiper/css/navigation'

const router = useRouter()

const modules = [Pagination]

const exhibitions = reactive([])

;(async () => {
  try {
    const { data } = await api.get('/exhibitions')
    exhibitions.push(...data.result.splice(1, 8))
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()

const info = id => {
  router.push(`/exhibition/${id}`)
}
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
  padding-bottom: 3rem;
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
