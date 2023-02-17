<template>
  <div id="admin-rental">
    <div class="flex justify-center items-center py-8 px-8 text-3xl">
      <svg class="w-12 h-12 pr-2" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"></path>
      </svg>
      <div>場地管理</div>
    </div>
    <button
      type="button"
      class="text-white bg-blueB hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
      @click="addBtn(form)">
      新增場地資訊
    </button>

    <div id="addrentals" class="bg-white z-50 hidden rounded-xl border-2 border-black fixed">
      <div id="rentalsform" class="relative rounded-xl">
        <div class="relative bg-white rounded-xl shadow">
          <button
            type="button"
            @click="cancel(form)"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-hide="addrentals">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="px-6 py-4 lg:px-8">
            <h2 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">新增場地資訊</h2>

            <form @submit.prevent="submit" class="space-y-6">
              <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <!-- -name -->
                <div class="w-full">
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rental's Name</label>
                  <input
                    v-model="form.name"
                    type="text"
                    name="name"
                    id="name"
                    class="bg-white border border-vtd-secondary-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type Store's name" />
                </div>
                <!-- -price -->
                <div class="w-full">
                  <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                  <input
                    v-model="form.price"
                    type="number"
                    name="price"
                    id="price"
                    class="bg-white border border-vtd-secondary-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="$2999" />
                </div>
                <!-- -size -->
                <div class="w-full">
                  <label for="size" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">size</label>
                  <input
                    v-model="form.size"
                    type="text"
                    name="size"
                    id="size"
                    placeholder="size"
                    class="bg-white border border-vtd-secondary-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                </div>
                <!-- -number -->
                <div class="w-full">
                  <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">number</label>
                  <input
                    v-model="form.number"
                    type="text"
                    name="number"
                    id="number"
                    placeholder="number"
                    class="bg-white border border-vtd-secondary-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                </div>
                <!-- -suggest -->
                <div class="sm:col-span-2">
                  <label for="suggest" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">suggest</label>
                  <textarea
                    v-model="form.suggest"
                    id="suggest"
                    rows="3"
                    placeholder="suggest"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-vtd-secondary-300focus:ring-primary-500 focus:border-primary-500"></textarea>
                </div>
                <!-- -equipment -->
                <div class="sm:col-span-2">
                  <label for="introduction" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">equipment</label>
                  <textarea
                    v-model="form.equipment"
                    id="equipment"
                    rows="3"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-vtd-secondary-300focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Your introduction here"></textarea>
                </div>
                <!-- -attention -->
                <div class="sm:col-span-2">
                  <label for="attention" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">attention</label>
                  <textarea
                    v-model="form.attention"
                    id="attention"
                    rows="5"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-vtd-secondary-300focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Your special here"></textarea>
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
                <!-- -image -->
                <div class="w-full">
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
                <!-- -images -->
                <div class="col-span-2">
                  <label for="img" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">upload images</label>
                  <div class="flex items-center justify-center w-full">
                    <div class="grid grid-cols-3 items-center justify-center pt-5 pb-6">
                      <div v-for="(img, index) in form.images" :key="index">
                        <UploadImage v-model="form.images[index].image" :id="`img-${index}`" />
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center justify-center">
                    <button
                      v-if="form.images.length >= 1"
                      type="button"
                      @click="form.images.pop()"
                      class="inline-flex border shadow border-pinkP text-pinkP items-center mx-3 px-7 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center rounded-lg focus:ring-4 focus:ring-pink-200 hover:bg-pinkP hover:text-white">
                      DELETE
                    </button>
                    <button
                      v-if="!form.images.length || form.images.length < 9"
                      type="button"
                      @click="
                        form.images.push({
                          image: ''
                        })
                      "
                      class="inline-flex border shadow border-blueB text-blueB items-center mx-3 px-7 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center hover:bg-blueB hover:text-white rounded-lg focus:ring-4 focus:ring-blue-200">
                      ADD
                    </button>
                  </div>
                </div>
              </div>
              <div class="flex justify-center align-middle">
                <div class="col">
                  <button
                    type="button"
                    data-modal-hide="addrentals"
                    @click="cancel(form)"
                    class="inline-flex border shadow hover:bg-white hover:text-pinkP hover:border-[1px] hover:border-pinkP bg-pinkP text-white items-center mx-3 px-7 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                    cancel
                  </button>
                  <button
                    type="submit"
                    data-modal-hide="addrentals"
                    class="inline-flex border shadow hover:text-blueB hover:border-[1px] hover:border-blueB hover:bg-white bg-blueB text-white items-center mx-3 px-7 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div id="rental-list" class="grid mb-8 rounded-lg md:mb-12 md:grid-cols-3">
      <div
        id="card"
        v-for="(rental, idx) in rentals"
        :key="rental._id"
        class="flex flex-col items-center justify-center p-8 text-center bg-whiteF rounded-t-lg md:rounded-t-none md:rounded-tl-lg dark:bg-gray-800 dark:border-gray-700">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg w-96 h-60" :src="rental.image" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{ rental.name }}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {{ rental.suggest }}
            </p>
            <button
              type="button"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blueB hover:bg-white hover:text-blueB hover:border-[1px] hover:border-blueB rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300"
              @click="editBtn(rental)">
              編輯
              <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { apiAuth } from '@/plugins/axios'
import { reactive, onMounted, computed } from 'vue'
import Swal from 'sweetalert2'
import UploadImage from '../../components/UploadImage.vue'
import { Modal } from 'flowbite'

const rentals = reactive([])

let modal = null

const addBtn = () => {
  modal.show()
}

onMounted(() => {
  modal = new Modal(document.getElementById('addrentals'))
})

const images = computed(() => {
  if (!editProduct.value.images) return []
  return editProduct.value.images.map(item => {
    return {
      image: item
    }
  })
})

// 抓取表單物件
const form = reactive({
  _id: '',
  name: '',
  price: '',
  description: '',
  image: 'undefined',
  images: [],
  suggest: '',
  size: '',
  equipment: '',
  number: '',
  attention: '',
  valid: false
})

// !編輯
const editBtn = data => {
  form._id = data._id
  form.name = data.name
  form.price = data.price
  form.description = data.description
  form.image = data.image
  ;(form.images = data.images.map(item => {
    return {
      image: item
    }
  })),
    (form.suggest = data.suggest)
  form.size = data.size
  form.equipment = data.equipment
  form.number = data.number
  form.attention = data.attention
  form.valid = data.valid
  modal.show()
}

// -取消
const cancel = () => {
  form._id = ''
  form.name = ''
  form.price = ''
  form.description = ''
  form.image = ''
  form.images = []
  form.suggest = ''
  form.size = ''
  form.equipment = ''
  form.number = ''
  form.attention = ''
  form.valid = false
  form.idx = -1
  modal.hide()
}

const submit = async () => {
  // fd.append(key, value)
  const fd = new FormData()
  fd.append('name', form.name)
  fd.append('equipment', form.equipment)
  fd.append('number', form.number)
  fd.append('price', form.price)
  fd.append('description', form.description)
  fd.append('image', form.image)
  fd.append('attention', form.attention)
  fd.append('suggest', form.suggest)
  fd.append('size', form.size)

  if (form.images.length >= 1) {
    form.images.forEach(item => {
      fd.append('images', item.image)
    })
  }

  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/rentals', fd)
      rentals.push(data.result)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      const { data } = await apiAuth.patch('/rentals/' + form._id, fd)
      rentals[form.idx] = data.result
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
  form.price = ''
  form.description = ''
  form.image = ''
  form.images = []
  form.suggest = ''
  form.size = ''
  form.equipment = ''
  form.number = ''
  form.attention = ''
  form.valid = false
  form.idx = -1

  modal.hide()
}

;(async () => {
  try {
    const { data } = await apiAuth.get('/rentals/all')
    rentals.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()
</script>
