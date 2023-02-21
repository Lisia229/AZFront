<template>
  <div id="storeinfo" class="lg:flex pt-10 ms:flex-col overflow-x-hidden">
    <!-- -navbar -->
    <nav class="navbar px-4 py-4 lg:pb-6 lg:pt-10 w-full z-10 bg-white fixed" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <router-link to="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-pinkP">
            <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            Home
          </router-link>
        </li>
        <li>
          <div class="flex items-center">
            <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg>
            <router-link to="/store" class="ml-1 text-sm font-medium text-gray-700 hover:text-pinkP md:ml-2 dark:text-gray-400 dark:hover:text-white">店家</router-link>
          </div>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg>
            <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">店家資訊</span>
          </div>
        </li>
      </ol>
    </nav>
    <div class="px-4 lg:px-0 lg:w-full h-full flex py-16 lg:flex-row-reverse flex-wrap">
      <div class="w-full h-[500px] py-4">
        <swiperinfoVue :images="storeinfo.images"></swiperinfoVue>
      </div>
      <div class="h-full relative w-full py-4 flex justify-center items-start lg:items-center">
        <div class="w-full py-4 lg:w-[80%] text-xl lg:text-2xl flex flex-wrap justify-between lg:items-center h-full">
          <div class="w-full flex flex-wrap justify-center items-center">
            <div class="w-full lg:w-1/2">
              <img :src="storeinfo.image" />
            </div>
            <div class="w-full lg:w-1/2 lg:px-8 lg:py-8 px-4 py-4 text-left">
              <div class="w-full pb-4 text-base lg:text-lg whitespace-pre-wrap">{{ storeinfo.name }}</div>
              <div class="w-full pb-4 text-base lg:text-lg whitespace-pre-wrap">營業時間：{{ storeinfo.dateValue }}</div>
              <div class="w-full pb-4 text-base lg:text-lg whitespace-pre-wrap">
                <div>粉絲專頁：</div>
                <div class="text-blueB">
                  <a :href="storeinfo.url">{{ storeinfo.url }}</a>
                </div>
              </div>
              <div class="w-full pb-4 text-base lg:text-lg whitespace-pre-wrap">
                <div>特色：</div>
                <div>{{ storeinfo.special }}</div>
              </div>
            </div>
          </div>
          <div class="flex-wrap flex w-full mt-4">
            <div class="w-full py-4 justify-center items-center lg:items-center">
              <div class="w-2/3 mx-auto pb-4 text-base lg:text-lg whitespace-pre-wrap">
                <div id="storeinfo">{{ storeinfo.description }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div id="rightinfo" class="w-full lg:w-1/2 h-full overflow-y-auto">
      <div class="lg:px-16 px-8 py-8 h-full whitespace-pre-wrap lg:text-xl">
        {{ storeinfo.description }}
      </div>
      <div class="lg:px-16 lg:py-16 px-8 py-8 whitespace-pre-wrap sm:text-sm lg:text-xl bg-gray-900 text-gray-50 h-full">
        <div class="pb-4">營業時間：{{ storeinfo.dateValue }}</div>
        <div class="pb-4">地點：{{ storeinfo.place }}</div>
        <div class="pb-4">
          粉絲專頁：
          <br />
          <a :href="storeinfo.url">{{ storeinfo.url }}</a>
        </div>
        <div class="pb-4 whitespace-pre-wrap">
          特色：
          <br />
          {{ storeinfo.special }}
        </div>
      </div>
    </div> -->
  </div>
  <h1 class="px-4 py-4">其他店家</h1>
  <div>
    <swiperstoremore></swiperstoremore>
  </div>
</template>
<script setup>
import { reactive, watch, onMounted } from 'vue'
import { api } from '@/plugins/axios'
import Swal from 'sweetalert2'
import { useRoute } from 'vue-router'
import swiperinfoVue from '../../components/swiperinfo.vue'
import AOS from 'aos'
import swiperstoremore from '../../components/swiperstoremore.vue'
import 'aos/dist/aos.css'

import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
AOS.init()

onMounted(() => {
  gsap.from('.navbar', {
    yPercent: -100,
    paused: false,
    duration: 0.5,
    scrollTrigger: {
      start: 'top 60',
      end: () => '+=' + document.documentElement.scrollHeight, // end 為整份文件高度
      onEnter(self) {
        self.animation.play()
      },
      onUpdate(self) {
        // self.direction -1 => 偵測到捲動軸往上
        // self.direction 1 => 偵測到捲動軸往下
        self.direction === -1 ? self.animation.play() : self.animation.reverse()
      },
      markers: false
    }
  })
})
const route = useRoute()

const storeinfo = reactive({
  name: '',
  image: '',
  images: [],
  description: '',
  dateValue: '',
  special: '',
  url: '',
  place: '',
  price: ''
})

watch(
  () => route.params.id,
  value => {
    if (value && route.path.includes('/stories')) {
      getProcutData()
    }
  }
)
const getProcutData = async () => {
  try {
    const { data } = await api.get('/stories/' + route.params.id)
    storeinfo.name = data.result.name
    storeinfo.image = data.result.image
    storeinfo.description = data.result.description
    storeinfo.dateValue = data.result.dateValue
    storeinfo.images = data.result.images
    storeinfo.url = data.result.url
    storeinfo.place = data.result.place
    storeinfo.special = data.result.special
    storeinfo.price = data.result.price
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
}
getProcutData()
</script>
