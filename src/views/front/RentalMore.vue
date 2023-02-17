<template>
  <div id="rentalmore" class="pt-[100px]">
    <nav class="px-4 py-8 lg:py-16" aria-label="Breadcrumb">
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
            <router-link to="/rental" class="ml-1 text-sm font-medium text-gray-700 hover:text-pinkP md:ml-2 dark:text-gray-400 dark:hover:text-white">
              場地介紹
            </router-link>
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
            <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">場地資訊</span>
          </div>
        </li>
      </ol>
    </nav>
    <div class="pb-4 text-xl lg:text-3xl text-center">{{ rentalinfo.name }}</div>
    <div class="sm:px-4 w-full h-full">
      <swiperinfoVue :images="rentalinfo.images"></swiperinfoVue>
    </div>
    <div>
      <div class="lg:px-16 lg:py-16 px-8 py-8 lg:text-xl">
        <div class="lg:flex justify-center items-center whitespace-pre-wrap">
          <div class="pb-4 w-full lg:w-2/3">
            <div class="py-4 text-left">{{ rentalinfo.description }}</div>
            <div class="py-4 text-gray-600 text-xl">場地注意事項：</div>
            <div class="text-gray-800">{{ rentalinfo.attention }}</div>
          </div>
          <div class="border-2 w-full lg:w-1/3 px-4 py-4 text-lg border-gray-700 rounded-xl">
            <div class="pb-4">
              <span class="text-gray-600 text-base">場地尺寸：</span>
              <span class="text-gray-800">{{ rentalinfo.size }}</span>
            </div>
            <div class="pb-4">
              <span class="text-gray-600 text-base">場地價格：</span>
              <span class="text-gray-800">{{ rentalinfo.price }} / 日</span>
            </div>
            <div class="pb-4">
              <span class="text-gray-600 text-base">場地可容納人數：</span>
              <span class="text-gray-800">{{ rentalinfo.number }}</span>
            </div>
            <div class="pb-4">
              <span class="text-gray-600 text-base">場地使用建議：</span>
              <div class="text-gray-800">{{ rentalinfo.suggest }}</div>
            </div>
            <div class="pb-4">
              <span class="text-gray-600 text-base">場地相關資訊：</span>
              <div class="text-gray-800">{{ rentalinfo.equipment }}</div>
            </div>
          </div>
        </div>
        <router-link to="/rentalinfo">
          <button
            type="button"
            class="inline-flex items-center px-5 py-3 my-4 text-sm font-medium text-center text-white bg-blueB rounded-lg hover:bg-white hover:text-blueB hover:border-[1px] hover:border-blueB focus:ring-4 focus:outline-none focus:ring-blue-300">
            場地申請
          </button>
        </router-link>
      </div>
    </div>

    <h1 class="px-4">其他場地</h1>
    <div>
      <rentalmore></rentalmore>
    </div>
  </div>
</template>
<script setup>
import { reactive, watch } from 'vue'
import { api } from '@/plugins/axios'
import Swal from 'sweetalert2'
import { useRoute } from 'vue-router'

import rentalmore from '../../components/rentalmore.vue'

import AOS from 'aos'
import 'aos/dist/aos.css'
import swiperinfoVue from '../../components/swiperinfo.vue'
AOS.init()
const route = useRoute()
watch(
  () => route.params.id,
  value => {
    if (value && route.path.includes('/rental')) {
      getProcutData()
    }
  }
)
const rentalinfo = reactive({
  name: '',
  price: '',
  image: '',
  images: [],
  description: '',
  suggest: '',
  size: '',
  equipment: '',
  number: '',
  attention: ''
})

const getProcutData = async () => {
  try {
    const { data } = await api.get('/rentals/' + route.params.id)
    rentalinfo.name = data.result.name
    rentalinfo.image = data.result.image
    rentalinfo.description = data.result.description
    rentalinfo.price = data.result.price
    rentalinfo.images = data.result.images
    rentalinfo.suggest = data.result.suggest
    rentalinfo.size = data.result.size
    rentalinfo.equipment = data.result.equipment
    rentalinfo.number = data.result.number
    rentalinfo.attention = data.result.attention
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
