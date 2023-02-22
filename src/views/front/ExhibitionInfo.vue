<template>
  <div id="exhibitionInfo" class="overflow-x-hidden">
    <!-- -navbar -->
    <nav class="navbar px-4 py-4 lg:pb-6 lg:py-10 w-full z-10 bg-white fixed" aria-label="Breadcrumb">
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
            <router-link to="/exhibition" class="ml-1 text-sm font-medium text-gray-700 hover:text-pinkP md:ml-2 dark:text-gray-400 dark:hover:text-white">
              展覽
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
            <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">展覽資訊</span>
          </div>
        </li>
      </ol>
    </nav>
    <section class="py-20 w-full">
      <div class="w-full flex-column justify-center items-center">
        <div class="flex flex-wrap">
          <div class="hidden mx-auto lg:block lg:w-[30%] py-4 px-8">
            <div>
              <div class="pb-4">
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
              <div class="text-xl lg:text-2xl font-medium pb-4">{{ exhibitioninfo.name }}</div>
              <div class="text-xl pb-4">
                日期：{{ new Date(exhibitioninfo.dateStart).toLocaleDateString() }} ~ {{ new Date(exhibitioninfo.dateEnd).toLocaleDateString() }}
              </div>
              <div class="text-xl pb-4">時間：{{ exhibitioninfo.time }}</div>
              <div class="text-xl pb-4">地點：{{ exhibitioninfo.place }}</div>
              <div class="text-xl pb-4">門票：NT. {{ exhibitioninfo.price }}</div>
            </div>
            <form @submit.prevent="submitCart" class="w-full border-b-[1px] border-gray-300">
              <div class="sm:w-2/3 lg:w-full flex justify-between items-start lg:items-center">
                <span class="whitespace-nowrap">{{ exhibitioninfo.name }}</span>
                <span class="text-red-800 whitespace-nowrap">門票NT. {{ exhibitioninfo.price }}</span>
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
          </div>
          <div class="w-full lg:w-[70%] py-4 px-4">
            <img class="w-[80%] mx-auto" :src="exhibitioninfo.image" />
          </div>
        </div>
        <hr class="h-px my-8 bg-gray-500 border-0 dark:bg-gray-700" />
        <div class="flex flex-wrap justify-center items-center">
          <div class="lg:hidden w-full py-4 px-4">
            <div>
              <div class="pb-4">
                <button type="button">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
                  </svg>
                </button>
              </div>
              <div class="text-xl lg:text-2xl pb-4">
                日期：{{ new Date(exhibitioninfo.dateStart).toLocaleDateString() }} ~ {{ new Date(exhibitioninfo.dateEnd).toLocaleDateString() }}
              </div>
              <div class="text-xl lg:text-2xl pb-4">時間：{{ exhibitioninfo.time }}</div>
              <div class="text-xl lg:text-2xl pb-4">地點：{{ exhibitioninfo.place }}</div>
              <div class="text-xl lg:text-2xl pb-4">門票：NT. {{ exhibitioninfo.price }}</div>
            </div>
            <form @submit.prevent="submitCart" class="w-full border-b-[1px] border-gray-300">
              <div class="sm:w-2/3 lg:w-full flex justify-between items-start lg:items-center">
                <span class="whitespace-nowrap">{{ exhibitioninfo.name }}</span>
                <span class="text-red-800 whitespace-nowrap">門票NT. {{ exhibitioninfo.price }}</span>
              </div>
              <!-- -選數量 -->
              <div id="addquantity" class="flex w-full pb-4 justify-between items-start lg:items-center relative">
                <button class="absolute left-3 top-3" type="button" @click="quantity--">
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
                <button class="absolute right-3 top-3" type="button" @click="quantity++">
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
          </div>

          <div class="w-full">
            <div class="w-full text-center">
              <h1 class="text-xl lg:text-4xl">【 展覽介紹 】</h1>
            </div>
            <div class="w-full">
              <div class="px-4 py-4 lg:px-16 lg:py-8 w-full whitespace-pre-wrap lg:text-xl text-center">{{ exhibitioninfo.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <h1 class="px-4 py-4">其他推薦展覽</h1>
    <swiperexhibitionmore class="w-full py-4"></swiperexhibitionmore>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { reactive, ref, computed, watch, onMounted } from 'vue'
import { api } from '@/plugins/axios'
import Swal from 'sweetalert2'
import { useRoute } from 'vue-router'
import router from '../../router'
import { useUserStore } from '@/stores/users'
import swiperexhibitionmore from '../../components/swiperexhibitionmore.vue'
// import { gsap } from 'gsap'
// import ScrollTrigger from 'gsap/ScrollTrigger'
// gsap.registerPlugin(ScrollTrigger)
// onMounted(() => {
//   gsap.from('.navbar', {
//     yPercent: -100,
//     paused: false,
//     duration: 0.5,
//     scrollTrigger: {
//       start: 'top 60',
//       end: () => '+=' + document.documentElement.scrollHeight, // end 為整份文件高度
//       onEnter(self) {
//         self.animation.play()
//       },
//       onUpdate(self) {
//         // self.direction -1 => 偵測到捲動軸往上
//         // self.direction 1 => 偵測到捲動軸往下
//         self.direction === -1 ? self.animation.play() : self.animation.reverse()
//       },
//       markers: false
//     }
//   })
// })
const route = useRoute()
const user = useUserStore()
const { editCart, editLove } = user
const { love } = storeToRefs(user)

const quantity = ref(1)

watch(
  () => route.params.id,
  value => {
    if (value && route.path.includes('/exhibition')) {
      getProcutData()
    }
  }
)

const exhibitioninfo = reactive({
  _id: '',
  name: '',
  image: '',
  description: '',
  dateStart: '',
  dateEnd: '',
  time: '',
  place: '',
  sell: true,
  price: ''
})

const activeLove = computed(() => {
  return love.value.includes(exhibitioninfo._id)
})

const submitCart = async () => {
  await editCart({ e_id: exhibitioninfo._id, quantity: parseInt(quantity.value) })
}

const submitLove = async () => {
  await editLove({ e_id: exhibitioninfo._id })
}

const getProcutData = async () => {
  try {
    const { data } = await api.get('/exhibitions/' + route.params.id)
    exhibitioninfo._id = data.result._id
    exhibitioninfo.name = data.result.name
    exhibitioninfo.image = data.result.image
    exhibitioninfo.time = data.result.time
    exhibitioninfo.description = data.result.description
    exhibitioninfo.dateStart = data.result.dateStart
    exhibitioninfo.sell = data.result.sell
    exhibitioninfo.dateEnd = data.result.dateEnd
    exhibitioninfo.place = data.result.place
    exhibitioninfo.price = data.result.price

    document.title = 'AZ |' + exhibitioninfo.name
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
