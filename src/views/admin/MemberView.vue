<template>
  <div id="admin-member" class="relative">
    <div class="flex justify-center items-center py-8 px-8 text-3xl">
      <svg class="w-12 h-12 pr-2" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"></path>
      </svg>
      <div>會員管理</div>
    </div>
    <div id="search" class="py-4">
      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          v-model="searchValue"
          @change="currentPage = 1"
          class="block p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-lightpink focus:ring-pink-300 focus:border-pink-500"
          placeholder="Search" />
      </div>
    </div>

    <div v-if="form.editing" class="bg-white rounded-lg border-2 border-black fixed w-1/2 top-1/4 left-1/4">
      <form id="editform" @submit.prevent="submit">
        <div class="flex-col px-8 py-8 items-center justify-center">
          <div class="w-full flex justify-center items-center">
            <!-- 大頭貼 -->
            <div class="relative w-20 h-20 overflow-hidden rounded-full dark:bg-gray-600">
              <ImageInput v-model="form.image" className="avatar" id="avatar"></ImageInput>
            </div>
          </div>
          <div class="flex items-center pt-8">
            <label for="account" class="w-28 block pr-2 text-xl font-medium text-gray-900">account</label>
            <input
              v-model="form.account"
              type="text"
              name="account"
              id="account"
              class="bg-white border border-vtd-secondary-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="change account" />
          </div>
          <div class="flex items-center pt-2">
            <label for="account" class="w-28 block pr-2 text-xl font-medium text-gray-900">email</label>
            <input
              v-model="form.email"
              type="email"
              name="email"
              id="email"
              class="bg-white border border-vtd-secondary-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="change email" />
          </div>
          <div class="flex items-center pt-2">
            <label for="role" class="w-28 block pr-2 text-xl font-medium text-gray-900">role</label>
            <input
              v-model="form.role"
              type="number"
              name="role"
              id="role"
              class="bg-white border border-vtd-secondary-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="change role" />
          </div>
        </div>
        <div class="flex items-center justify-center px-6 mx-2 py-3 my-2">
          <button
            @click="cancel(form)"
            type="button"
            class="inline-flex items-center px-3 mx-2 py-2 my-2 text-sm font-medium text-center text-white bg-pinkP rounded-lg hover:bg-white hover:text-pinkP hover:border-[1px] hover:border-pinkP hover:bg-whitehover:bg-pink-400 focus:ring-4 focus:outline-none focus:ring-pink-300">
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
            class="inline-flex items-center px-3 mx-2 py-2 my-2 text-sm font-medium text-center text-white bg-blueB rounded-lg hover:text-blueB hover:border-[1px] hover:border-blueB hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300">
            儲存
            <svg class="w-4 h-4 ml-2 -mr-1" fill="currentColor" width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" d="m15.12 2.23-9.79 9.78L.88 7.56 0 8.44l5.33 5.34L16 3.11l-.88-.88z"></path></g>
            </svg>
          </button>
        </div>
      </form>
    </div>

    <!-- -會員資料 -->
    <div class="w-full rounded-lg bg-black text-white">
      <table class="w-full mx-auto text-xl table-fixed">
        <tr>
          <td class="px-6 py-3">使用者ID</td>
          <td class="px-6 py-3">帳號</td>
          <td class="px-6 py-3">信箱</td>
          <td class="px-6 py-3">管理員權限</td>
          <td class="px-6 py-3">編輯</td>
        </tr>
        <tr v-for="(member, index) in showPageData" :key="member._id" class="bg-gray-100 text-black">
          <td class="px-6 py-3"><img class="rounded-full w-20 h-20" :src="member.image" /></td>
          <td class="px-6 py-3">{{ member.account }}</td>
          <td class="px-6 py-3">{{ member.email }}</td>
          <td class="px-6 py-3">{{ member.role }}</td>
          <td class="px-6 py-3">
            <button
              @click="editBtn(member)"
              type="button"
              class="inline-flex items-center px-3 py-2 my-2 text-sm font-medium text-center text-white bg-blueB rounded-lg hover:bg-white hover:text-blueB hover:border-[1px] hover:border-blueB focus:ring-4 focus:outline-none focus:ring-blue-300">
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
          </td>
        </tr>
      </table>
    </div>
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
</template>
<script setup>
import { apiAuth } from '@/plugins/axios'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/users'
import { reactive, computed, ref } from 'vue'
import Swal from 'sweetalert2'
import ImageInput from '../../components/UploadImage.vue'

const user = useUserStore()

const members = reactive([])

// -分頁
const limit = 5
// -ref要加value
const totalPage = ref(1)
const currentPage = ref(1)

// -搜尋
const searchValue = ref('')

// -篩選
const filterMain = ref('全部')
const filterData = computed(() => {
  const isSearch = searchValue.value !== ''
  if (isSearch) {
    filterMain.value === '全部'
  }

  const membersList = members.filter(item => {
    if (isSearch) {
      return item.account.includes(searchValue.value)
    } else {
      if (filterMain.value === '全部') return item
      return item.category === filterMain.value
    }
  })
  totalPage.value = Math.ceil(membersList.length / limit)
  return membersList
})

const showPageData = computed(() => {
  const startIndex = (currentPage.value - 1) * limit
  const endIndex = currentPage.value * limit

  return filterData.value.slice(startIndex, endIndex)
})

const { account, email, role, image } = storeToRefs(user)

const form = reactive({
  _id: '',
  account: account.value || '',
  image: image.value || '',
  email: email.value || '',
  role: role.value || '',
  editing: false
})

// !取消
const cancel = () => {
  form._id = ''
  form.account = ''
  form.email = ''
  form.image = ''
  form.role = ''
  form.editing = false
}

const editBtn = data => {
  form._id = data._id
  form.account = data.account
  form.email = data.email
  form.image = data.image
  form.role = data.role
  form.editing = true
}

const submit = async () => {
  const fd = new FormData()
  fd.append('_id', form._id)
  fd.append('account', form.account)
  fd.append('email', form.email)
  fd.append('role', form.role)
  fd.append('image', form.image)

  try {
    const { data } = await apiAuth.patch('/users/edituser', fd)
    const idx = members.findIndex(index => index._id === form._id)
    members[idx] = data.result
    members[idx].image = members[idx].image || `https://source.boringavatars.com/beam/256/${account.value}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`
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

;(async () => {
  try {
    const { data } = await apiAuth.get('/users/all')
    members.push(...data.result)
    members.forEach(member => {
      member.image = member.image || `https://source.boringavatars.com/beam/256/${member.account}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`
    })
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()
</script>
