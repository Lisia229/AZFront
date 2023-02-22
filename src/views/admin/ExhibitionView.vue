<template>
  <div id="admin-exhibition">
    <div class="flex justify-center items-center py-8 px-8 text-3xl">
      <svg class="w-12 h-12 pr-2" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"></path>
      </svg>
      <div>展覽管理</div>
    </div>
    <div class="flex">
      <div class="px-4 py-4">
        <button
          type="button"
          class="text-white bg-blueB hover:bg-white hover:text-blueB hover:border-[1px] hover:border-blueB focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
          @click="addBtn(form)">
          新增展覽
        </button>
      </div>
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
    <div class="row-auto items-center justify-between align-middle flex max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-4 lg:cols-12">
      <div class="col" v-for="(buttonCategorie, index) in buttonCategories">
        <button
          type="button"
          :class="{ 'text-white bg-black': filterMain === buttonCategorie }"
          @click="filterMain = buttonCategorie"
          class="hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
          {{ buttonCategorie }}
        </button>
      </div>
    </div>

    <!-- -新增 -->
    <section id="addExhibition" class="bg-white z-50 hidden rounded-xl border-2 border-black fixed">
      <div id="exhibitionform" class="relative rounded-xl">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            @click="cancel(form)"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-hide="addExhibition">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="px-6 py-6 lg:px-8">
            <h2 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add a new Exhibition</h2>

            <form @submit.prevent="submit" class="space-y-6">
              <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div class="sm:col-span-2">
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Exhibition Name</label>
                  <input
                    v-model="form.name"
                    type="text"
                    name="name"
                    id="name"
                    class="bg-white border border-vtd-secondary-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type Exhibition name" />
                </div>
                <div class="w-full">
                  <label for="place" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">place</label>
                  <Input
                    v-model="form.place"
                    :select="place"
                    title="choose place"
                    class="bg-white border border-vtd-secondary-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="place" />
                </div>
                <div class="w-full">
                  <label for="place" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">sell(TRUE / FALSE)</label>
                  <input
                    v-model="form.sell"
                    type="text"
                    name="place"
                    id="place"
                    class="bg-white border border-vtd-secondary-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                </div>
                <div class="w-full">
                  <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                  <input
                    v-model="form.price"
                    type="number"
                    name="price"
                    id="price"
                    class="bg-white border border-vtd-secondary-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="$2999" />
                </div>

                <div>
                  <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                  <Input
                    v-model="form.category"
                    :select="categories"
                    title="choose category"
                    class="bg-white border border-vtd-secondary-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="categories" />
                </div>

                <!-- -date -->

                <div class="w-full">
                  <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">date</label>
                  <div date-rangepicker id="dateRangePickerId" class="flex items-center">
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          class="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </div>
                      <input
                        ref="dateStartInput"
                        name="start"
                        type="text"
                        class="bg-white border border-gray-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                        placeholder="Select date start" />
                    </div>
                    <span class="mx-4 text-gray-500">to</span>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          class="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </div>
                      <input
                        ref="dateEndInput"
                        name="end"
                        type="text"
                        class="bg-white border border-gray-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                        placeholder="Select date end" />
                    </div>
                  </div>
                </div>

                <div class="w-full">
                  <label for="time" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">time</label>
                  <input
                    v-model="form.time"
                    type="text"
                    name="place"
                    id="place"
                    placeholder="10:00 - 16:00"
                    class="bg-white border border-vtd-secondary-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                </div>

                <!-- -Description -->
                <div class="sm:col-span-2">
                  <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <textarea
                    v-model="form.description"
                    id="description"
                    rows="8"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-vtd-secondary-300focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Your description here"></textarea>
                </div>
                <div class="sm:col-span-2">
                  <label for="img" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">upload image</label>
                  <div class="flex items-center justify-center w-full">
                    <label
                      for="dropzone-file"
                      class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                      <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <UploadImage v-model="form.image" id="dropzone-file" />
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Click to upload</span>
                          or drag and drop
                        </p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div class="flex justify-center align-middle">
                <div class="col">
                  <button
                    type="button"
                    data-modal-hide="addExhibition"
                    @click="cancel(form)"
                    class="inline-flex border-[1px] border-pinkP shadow bg-pinkP text-white items-center mx-3 px-7 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-white hover:text-pinkP hover:border-[1px] hover:border-pinkP">
                    cancel
                  </button>
                  <button
                    type="submit"
                    data-modal-hide="addExhibition"
                    class="inline-flex shadow bg-blueB text-white items-center mx-3 px-7 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 border-[1px] border-blueB hover:bg-white hover:text-blueB hover:border-[1px] hover:border-blueB">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- -列出 -->
    <div id="exhibition-list" class="rounded-lg">
      <table class="w-full table-fixed text-left text-gray-500">
        <thead class="text-base text-white uppercase bg-black">
          <tr>
            <th scope="col" class="px-6 py-3">展覽照片</th>
            <th scope="col" class="px-6 py-3">展覽名稱</th>
            <th scope="col" class="px-6 py-3">票卷價格</th>
            <th scope="col" class="px-6 py-3">展覽分類</th>
            <th scope="col" class="px-6 py-3">展覽日期</th>
            <th scope="col" class="px-6 py-3">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(exhibition, index) in showPageData" :key="exhibition._id" class="bg-gray-100 border-b hover:bg-gray-200">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              <img class="w-44" :src="exhibition.image" />
            </th>
            <td class="px-6 py-4">{{ exhibition.name }}</td>
            <td class="px-6 py-4">NT. {{ exhibition.price }}</td>
            <td class="px-6 py-4">{{ exhibition.category }}</td>
            <td class="px-6 py-4">{{ new Date(exhibition.dateStart).toLocaleDateString() }} ~ {{ new Date(exhibition.dateEnd).toLocaleDateString() }}</td>
            <td class="px-6 py-4">
              <button
                type="button"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blueB focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                @click="editBtn(exhibition)">
                編輯
                <svg class="h-3.5 w-3.5 ml-2" fill="#fff" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g data-name="Layer 2">
                      <g data-name="edit-2">
                        <rect width="24" height="24" opacity="0"></rect>
                        <path d="M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2z"></path>
                        <path
                          d="M5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 18zM15.27 4L18 6.73l-2 1.95L13.32 6zm-8.9 8.91L12 7.32l2.7 2.7-5.6 5.6-3 .28z"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
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
            <p
              :class="{ 'text-white bg-pinkP': currentPage === page }"
              class="z-10 px-3 py-2 leading-tight hover:bg-pinkP hover:text-white dark:border-gray-700 dark:bg-gray-700 dark:text-white">
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
  </div>
</template>

<script setup>
import { apiAuth } from '@/plugins/axios'
import { reactive, computed, ref, onMounted } from 'vue'
import Swal from 'sweetalert2'
import UploadImage from '../../components/UploadImage.vue'
import Input from '../../components/TheInput.vue'
import { Modal } from 'flowbite'

import DateRangePicker from 'flowbite-datepicker/DateRangePicker'
onMounted(() => {
  const dateRangePickerEl = document.getElementById('dateRangePickerId')
  new DateRangePicker(dateRangePickerEl, {
    // options
  })
})
const buttonCategories = ['全部', '期間限定店', '市集活動', '論壇演講', '展演活動', '其他']
const categories = ['期間限定店', '市集活動', '論壇演講', '展演活動', '其他']
const place = ['玻璃貨櫃屋(2層樓)', 'AZ劇場', '展覽會館', '其他']

const exhibitions = reactive([])

// -搜尋
const searchValue = ref('')

// -分頁
const limit = 5
// -ref要加value
const currentPage = ref(1)

// -篩選
const filterMain = ref('全部')

const dateStartInput = ref(null)
const dateEndInput = ref(null)

const filterData = computed(() => {
  return exhibitions.filter(item => {
    const includes = item.name.includes(searchValue.value)
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

let modal = null

onMounted(() => {
  modal = new Modal(document.getElementById('addExhibition'))
})

const addBtn = () => {
  modal.show()
}

// 抓取表單物件
const form = reactive({
  _id: '',
  name: '',
  place: '',
  price: 0,
  time: '',
  dateStart: '',
  dateEnd: '',
  description: '',
  image: undefined,
  sell: true,
  category: '',
  valid: false
})

// !編輯商品
const editBtn = data => {
  console.log(dateStartInput)
  console.log(data)
  form._id = data._id
  form.name = data.name
  form.place = data.place
  form.price = data.price
  form.time = data.time
  dateStartInput.value.value = data.dateStart
  dateEndInput.value.value = data.dateEnd
  form.description = data.description
  form.image = data.image
  form.sell = data.sell
  form.category = data.category
  form.valid = data.valid
  modal.show()
}

// -取消
const cancel = () => {
  form._id = ''
  form.name = ''
  form.place = ''
  form.price = 0
  dateStartInput.value.value = ''
  dateEndInput.value.value = ''
  form.description = ''
  form.image = ''
  form.sell = false
  form.category = ''
  form.time = ''
  form.valid = false
  form.idx = -1
  modal.hide()
}

const submit = async () => {
  // fd.append(key, value)
  const fd = new FormData()
  fd.append('name', form.name)
  fd.append('price', form.price)
  fd.append('dateStart', dateStartInput.value.value)
  fd.append('dateEnd', dateEndInput.value.value)
  fd.append('time', form.time)
  fd.append('place', form.place)
  fd.append('description', form.description)
  fd.append('image', form.image)
  fd.append('sell', form.sell)
  fd.append('category', form.category)

  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/exhibitions', fd)
      exhibitions.push(data.result)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      const { data } = await apiAuth.patch('/exhibitions/' + form._id, fd)
      exhibitions[form.idx] = data.result
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '編輯成功'
      })
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }

  // -送出後清空
  form._id = ''
  form.name = ''
  form.place = ''
  form.price = 0
  dateStartInput.value.value = ''
  dateEndInput.value.value = ''
  form.description = ''
  form.image = ''
  form.sell = false
  form.category = ''
  form.time = ''
  form.valid = false
  form.idx = -1

  modal.hide()
}

;(async () => {
  try {
    const { data } = await apiAuth.get('/exhibitions/all')
    exhibitions.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()
</script>
