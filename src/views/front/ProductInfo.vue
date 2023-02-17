<template>
  <div id="productInfo" class="relative py-8">
    <!-- -navbar -->
    <nav class="px-4 py-4 lg:pb-6 lg:py-10 w-full z-10 bg-white fixed" aria-label="Breadcrumb">
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
            <router-link to="/product" class="ml-1 text-sm font-medium text-gray-700 hover:text-pinkP md:ml-2 dark:text-gray-400 dark:hover:text-white">商品</router-link>
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
            <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">商品資訊</span>
          </div>
        </li>
      </ol>
    </nav>
    <div class="px-4 lg:px-0 lg:w-full h-full flex py-16 lg:flex-row-reverse flex-wrap">
      <div id="productcontent" class="h-full relative w-full lg:w-1/2 py-4 flex justify-center items-start lg:items-center">
        <div class="w-full py-4 lg:w-[80%] text-xl lg:text-2xl flex justify-between lg:items-center h-full">
          <div class="flex-wrap flex w-full">
            <div class="w-full flex justify-end pb-4">
              <button v-if="!activeLove" @click="submitLove" type="button">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
                </svg>
              </button>
              <button v-if="activeLove" @click="submitLove" type="button">
                <svg class="w-8 h-8" fill="#F196A7" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path
                    d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"></path>
                </svg>
              </button>
            </div>
            <form @submit.prevent="submitCart" class="w-full border-b-[1px] border-gray-300">
              <div class="sm:w-2/3 lg:w-full flex justify-between items-start lg:items-center">
                <span class="whitespace-nowrap">{{ productinfo.name }}</span>
                <span class="text-red-800 whitespace-nowrap">NT. {{ productinfo.price }}</span>
              </div>
              <div class="w-full py-4 justify-between items-start lg:items-center">
                <span class="text-base">{{ productinfo.colors }}</span>
              </div>
              <!-- -選數量 -->
              <div id="addquantity" class="flex w-full pb-4 justify-between items-start lg:items-center relative">
                <button class="absolute left-3" type="button" @click="quantity--">
                  <svg
                    class="w-5 h-5 number-btn"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15"></path>
                  </svg>
                </button>
                <input
                  v-model="quantity"
                  type="number"
                  min="1"
                  max="10"
                  readonly="readonly"
                  class="bg-white py- px-36 text-center border border-[#242424] text-[#242424] text-sm focus:ring-[#242424] focus:border-[#242424] block w-full p-2.5" />
                <button class="absolute right-3" type="button" @click="quantity++">
                  <svg
                    class="w-5 h-5 number-btn"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
                  </svg>
                </button>
              </div>
              <!-- -加入購物車 -->
              <div class="w-full pb-4 justify-between items-start lg:items-center">
                <button
                  @click="editCart({ _id, quantity: 1 })"
                  type="submit"
                  class="bg-[#323232] w-full h-12 px-4 py-2 text-base text-white border-[1px] border-[#323232] hover:text-[#323232] hover:bg-white">
                  ADD TO BAG
                </button>
              </div>
            </form>
            <div class="w-full py-4 justify-between items-start lg:items-center">
              <div class="w-full pb-4 text-sm whitespace-pre-wrap">{{ productinfo.description }}</div>
            </div>
          </div>
        </div>
      </div>
      <div id="productimg" class="w-full lg:w-1/2 py-4">
        <ProductSwiper :images="productinfo.images"></ProductSwiper>
      </div>
    </div>
  </div>
  <h1 class="px-4">其他推薦商品</h1>
  <div>
    <swipermoreVue></swipermoreVue>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { reactive, ref, computed, watch } from 'vue'
import { api } from '@/plugins/axios'
import Swal from 'sweetalert2'
import { useRoute } from 'vue-router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ProductSwiper from '../../components/ProductSwipwe.vue'
import swipermoreVue from '../../components/swipermore.vue'
import router from '../../router'
import { useUserStore } from '@/stores/users'

AOS.init()
const route = useRoute()

const user = useUserStore()
const { editCart, editLove } = user
const { love } = storeToRefs(user)

const quantity = ref(1)

watch(
  () => route.params.id,
  value => {
    if (value && route.path.includes('/product')) {
      getProcutData()
    }
  }
)

const submitLove = async () => {
  await editLove({ p_id: productinfo._id })
}

const activeLove = computed(() => {
  return love.value.includes(productinfo._id)
})

const productinfo = reactive({
  _id: '',
  name: '',
  price: '',
  colors: '',
  description: '',
  image: '',
  images: [],
  sell: true,
  category: ''
})

const submitCart = async () => {
  await editCart({ p_id: productinfo._id, quantity: parseInt(quantity.value) })
}

const getProcutData = async () => {
  try {
    const { data } = await api.get('/products/' + route.params.id)
    productinfo._id = data.result._id
    productinfo.name = data.result.name
    productinfo.image = data.result.image
    productinfo.description = data.result.description
    productinfo.colors = data.result.colors
    productinfo.images = data.result.images
    productinfo.sell = data.result.sell
    productinfo.category = data.result.category
    productinfo.price = data.result.price

    document.title = 'AZ |' + productinfo.name
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
    router.go(-1)
  }
}

getProcutData()
</script>
