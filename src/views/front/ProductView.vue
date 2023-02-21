<template>
  <div id="ProductView" class="lg:pt-0 w-full h-full overflow-hidden">
    <swiper></swiper>
    <div class="flex w-full h-full justify-between items-center"></div>
    <hr class="h-px my-4 bg-gray-500 border-0 dark:bg-gray-700" />
    <section id="buttonCategorie" class="bg-whiteF dark:bg-gray-900">
      <div class="row-auto items-center justify-between align-middle flex max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-4 lg:cols-12">
        <div class="col">
          <p class="max-w-2xl hidden md:block font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">Products</p>
        </div>
        <div class="col hidden lg:block">
          <!-- !search -->
          <div class="px-4 py-4">
            <label for="table-search" class="sr-only">Search</label>
            <div class="relative mt-1">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                v-model="searchValue"
                @change="currentPage = 1"
                class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-100 focus:ring-pink-300 focus:border-pink-500"
                placeholder="Search" />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="line hidden md:block w-0.5 h-24 bg-gray-500"></div>
        </div>
        <div class="col" v-for="(buttonCategorie, index) in buttonCategories">
          <button
            type="button"
            :class="{ 'text-white bg-black': filterMain === buttonCategorie }"
            @click="filterMain = buttonCategorie"
            class="hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            {{ buttonCategorie }}
          </button>
        </div>
        <div class="hidden bg-yellowY hover:text-yellowY hover:border-yellowY"></div>
        <div class="hidden hover:text-greenG hover:border-greenG bg-greenG"></div>
        <div class="hidden hover:border-purpleP bg-purpleP hover:text-purpleP"></div>
        <div class="hidden hover:border-[#333] bg-[#333] hover:text-[#333]"></div>
        <div class="hidden hover:border-lightblue bg-lightblue hover:text-lightblue"></div>
      </div>
    </section>
    <hr class="h-px my-4 lg:flex lg:bg-gray-500 lg:border-0 dark:bg-gray-700" />
    <!-- -products -->
    <div class="md:flex md:col-span-12 items-center mx-auto lg:mt-0 lg:col-span-12 lg:grid">
      <div class="md:grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center align-middle max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-4">
        <div class="py-5 mx-2" v-for="product in showPageData" :key="product._id">
          <ProductCard @click="info(product._id)" v-bind="product" :color="buttonColors[product.category]"></ProductCard>
        </div>
      </div>
    </div>
    <!-- -分頁 -->
    <nav class="grid items-center justify-center px-4 py-4 mx-auto" aria-label="Pagenavigationexample">
      <ul class="mx-auto inline-flex items-center -space-x-px">
        <li>
          <a
            href="#"
            aria-current="page"
            class="block px-3 py-2 ml-0 leading-tight text-gray-500 rounded-l-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span class="sr-only">Previous</span>
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"></path>
            </svg>
          </a>
        </li>
        <li v-for="page in totalPage" @click="currentPage = page">
          <p :class="{ 'text-white bg-pinkP': currentPage === page }" class="z-10 px-3 py-2 leading-tight hover:bg-pinkP hover:text-white">
            {{ page }}
          </p>
        </li>
        <li>
          <a
            href="#"
            class="block px-3 py-2 leading-tight text-gray-500 rounded-r-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span class="sr-only">Next</span>
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script setup>
import swiper from '../../components/SwiperView.vue'
import { reactive, ref, computed } from 'vue'
import { api } from '@/plugins/axios'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'
import ProductCard from '../../components/ProductCard.vue'

const products = reactive([])
const router = useRouter()

const buttonCategories = ['全部', '衣服', '褲子', '包包', '文創', '文具', '飾品', '其他']
const buttonColors = {
  衣服: 'blueB',
  褲子: 'pinkP',
  包包: 'lightblue',
  文創: 'greenG',
  文具: 'purpleP',
  飾品: 'yellowY',
  其他: '[#333]'
}

// -搜尋
const searchValue = ref('')

// -分頁
const limit = 9
// -ref要加value
const currentPage = ref(1)
// -篩選
const filterMain = ref('全部')

const filterData = computed(() => {
  return products.filter(item => {
    const includes = item.name.toUpperCase().includes(searchValue.value.toUpperCase())
    return filterMain.value === '全部' ? includes : filterMain.value === item.category
  })
})

const totalPage = computed(() => {
  return Math.ceil(filterData.value.length / limit)
})

const showPageData = computed(() => {
  const startIndex = (currentPage.value - 1) * limit
  const endIndex = currentPage.value * limit

  return filterData.value.slice(startIndex, endIndex)
})

;(async () => {
  try {
    const { data } = await api.get('/products')
    products.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()

const info = id => {
  router.push(`product/${id}`)
}
</script>
