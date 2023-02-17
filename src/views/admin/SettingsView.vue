<template>
  <div id="settings-front" class="flex justify-center">
    <div class="w-3/4 flex bg-gray-50 rounded-lg justify-start shadow">
      <div id="card" class="w-1/2 flex flex-col justify-center items-center p-8 text-center">
        <form id="editform" @submit.prevent="submit" v-if="form.editing">
          <div class="w-full flex justify-center items-center">
            <!-- 大頭貼 -->
            <div class="relative w-20 h-20 overflow-hidden rounded-full">
              <ImageInput v-model="form.image" className="avatar" id="avatar"></ImageInput>
            </div>
          </div>
          <div class="flex-col px-3 py-4 items-center justify-center">
            <div class="flex items-center pt-2">
              <label for="account" class="w-28 block pr-2 text-xl font-medium text-gray-900">account</label>
              <input
                v-model="form.account"
                type="text"
                name="account"
                id="account"
                class="bg-white border border-vtd-secondary-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="change account" />
            </div>
            <div class="flex items-center pt-2">
              <label for="account" class="w-28 block pr-2 text-xl font-medium text-gray-900">email</label>
              <input
                v-model="form.email"
                type="email"
                name="email"
                id="email"
                class="bg-white border border-vtd-secondary-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="change email" />
            </div>
          </div>
          <div class="px-3 mx-2 py-2 my-2">
            <button
              @click="cancel(form)"
              type="button"
              class="inline-flex items-center px-3 py-2 mx-2 my-2 text-sm font-medium text-center text-white bg-blueB rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              取消
              <svg
                class="w-4 h-4 ml-2 -mr-1"
                width="20px"
                height="20px"
                viewBox="0 0 512 512"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="currentColor">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <title>cancel</title>
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="work-case" fill="currentColor" transform="translate(91.520000, 91.520000)">
                      <polygon
                        id="Close"
                        points="328.96 30.2933333 298.666667 1.42108547e-14 164.48 134.4 30.2933333 1.42108547e-14 1.42108547e-14 30.2933333 134.4 164.48 1.42108547e-14 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48"></polygon>
                    </g>
                  </g>
                </g>
              </svg>
            </button>
            <button
              type="submit"
              class="inline-flex items-center px-3 mx-2 py-2 my-2 text-sm font-medium text-center text-white bg-red-800 rounded-lg hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300">
              儲存
              <svg class="w-4 h-4 ml-2 -mr-1" fill="currentColor" width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" d="m15.12 2.23-9.79 9.78L.88 7.56 0 8.44l5.33 5.34L16 3.11l-.88-.88z"></path></g>
              </svg>
            </button>
          </div>
        </form>

        <div v-if="!form.editing" class="max-w-sm">
          <div class="w-full flex justify-center items-center">
            <!-- 大頭貼 -->
            <div class="relative w-20 h-20 overflow-hidden rounded-full">
              <img class="rounded-full" :src="image" />
            </div>
          </div>
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">{{ account }}</h5>
            <p class="mb-3 text-2xl font-normal text-gray-700 dark:text-gray-400">
              {{ email }}
            </p>
          </div>
        </div>

        <button
          @click="form.editing = true"
          v-if="!form.editing"
          type="button"
          class="inline-flex items-center px-3 py-2 my-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
          編輯
          <svg class="w-4 h-4 ml-2 -mr-1" fill="currentColor" width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M15.49 7.3h-1.16v6.35H1.67V3.28H8V2H1.67A1.21 1.21 0 0 0 .5 3.28v10.37a1.21 1.21 0 0 0 1.17 1.25h12.66a1.21 1.21 0 0 0 1.17-1.25z"></path>
              <path
                d="M10.56 2.87 6.22 7.22l-.44.44-.08.08-1.52 3.16a1.08 1.08 0 0 0 1.45 1.45l3.14-1.53.53-.53.43-.43 4.34-4.36.45-.44.25-.25a2.18 2.18 0 0 0 0-3.08 2.17 2.17 0 0 0-1.53-.63 2.19 2.19 0 0 0-1.54.63l-.7.69-.45.44zM5.51 11l1.18-2.43 1.25 1.26zm2-3.36 3.9-3.91 1.3 1.31L8.85 9zm5.68-5.31a.91.91 0 0 1 .65.27.93.93 0 0 1 0 1.31l-.25.24-1.3-1.3.25-.25a.88.88 0 0 1 .69-.25z"></path>
            </g>
          </svg>
        </button>
      </div>
      <img class="w-1/2 rounded-r-lg" src="../../assets/image/b07.jpg" />
    </div>
  </div>
</template>
<script setup>
import { apiAuth } from '@/plugins/axios'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/users'
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import ImageInput from '../../components/UploadImage.vue'

const user = useUserStore()
const { account, email, image } = storeToRefs(user)

// 抓取表單物件
const form = reactive({
  _id: '',
  account: account.value || '',
  email: email.value || '',
  image: image.value || '',
  editing: false
})

// !取消
const cancel = () => {
  form.editing = false
}

const submit = async () => {
  const fd = new FormData()
  fd.append('account', form.account)
  fd.append('email', form.email)
  fd.append('image', form.image)

  try {
    const { data } = await apiAuth.patch('/users/edit', fd)
    account.value = data.result.account
    email.value = data.result.email
    image.value = data.result.image
    form.editing = false

    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '更改成功'
    })
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '更改失敗'
    })
  }
}
</script>
