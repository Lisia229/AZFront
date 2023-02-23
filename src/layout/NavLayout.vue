<template>
  <nav id="navbar" class="bg-whiteF border-b lg:h-[100px] z-40 shadow w-full fixed border-gray-500 px-4 py-2.5 dark:bg-gray-900 top-0 left-0">
    <div class="container px-4 h-full flex flex-wrap items-center justify-between mx-auto">
      <router-link to="/" class="flex items-center">
        <img src="../assets/logo/zero.1.gif" class="mr-3 h-9 lg:h-[38px]" alt="Flowbite Logo" />
      </router-link>
      <div class="flex items-center md:order-2">
        <button
          type="button"
          class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom">
          <span class="sr-only">Open user menu</span>
          <img v-if="!isLogin" class="w-12 h-12 rounded-full" src="../assets/logo/avatar.jpg" alt="Rounded avatar" />
          <img v-if="isLogin" class="w-12 h-12 rounded-full" :src="image" />
        </button>
        <!-- Dropdown menu -->
        <div class="z-50 hidden my-4 text-base list-none bg-whiteF divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
          <div class="px-4 py-3">
            <span v-if="!isLogin" class="block text-sm text-gray-900 dark:text-white">visitor</span>
            <span v-if="isLogin" class="block text-sm text-gray-900 dark:text-white">{{ account }}</span>
            <span v-if="!isLogin" class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">visitor@gmail.com</span>
            <span v-if="isLogin" class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{{ email }}</span>
          </div>
          <ul class="py-2" aria-labelledby="user-menu-button">
            <li v-if="isLogin">
              <router-link to="/cart" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                購物車
              </router-link>
            </li>
            <li v-if="isLogin">
              <router-link
                to="/admin/love"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                我的最愛
              </router-link>
            </li>
            <li v-if="isLogin && isAdmin" to="/admin">
              <router-link to="/admin" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                後台管理
              </router-link>
            </li>
            <li v-if="isLogin">
              <router-link
                to="/admin/usersettings"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                設定
              </router-link>
            </li>
            <li v-if="isLogin" @click="logout">
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">登出</a>
            </li>
            <li v-if="!isLogin" to="/login">
              <router-link to="/login" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                登入
              </router-link>
            </li>
            <li v-if="!isLogin" to="/register">
              <router-link to="/register" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                註冊
              </router-link>
            </li>
          </ul>
        </div>
        <button
          data-collapse-toggle="mobile-menu-2"
          type="button"
          class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-blieB focus:outline-none focus:ring-2 focus:ring-blue-200"
          aria-controls="mobile-menu-2"
          aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <div id="mobile-menu-2" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
        <ul
          class="flex flex-col p-4 mt-4 text-md border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-base font-medium md:border-0 md:bg-whiteF">
          <li class="px-3 py-4 md:py-0" :class="{ 'text-blueB': route.path === '/' }">
            <router-link to="/" class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 whitespace-nowrap lg:text-md md:hover:bg-transparent md:hover:text-blueB md:p-0">
              首頁
            </router-link>
          </li>
          <li class="px-3 py-4 md:py-0" :class="{ 'text-blueB': route.path === '/exhibition' }">
            <router-link
              to="/exhibition"
              class="block whitespace-nowrap lg:text-md py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blueB md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              展覽介紹
            </router-link>
          </li>
          <li class="px-3 py-4 md:py-0" :class="{ 'text-blueB': route.path === '/store' }">
            <router-link
              to="/store"
              class="block whitespace-nowrap lg:text-md py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blueB md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              進駐店家
            </router-link>
          </li>
          <li class="px-3 py-4 md:py-0" :class="{ 'text-blueB': route.path === '/product' }">
            <router-link
              to="/product"
              class="block whitespace-nowrap lg:text-md py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blueB md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              聯名商品
            </router-link>
          </li>
          <li class="px-3 py-4 md:py-0" :class="{ 'text-blueB': ['/rental', '/rentalinfo'].includes(route.path) }">
            <div
              id="dropdownHoverButton"
              data-dropdown-toggle="dropdownHover"
              data-dropdown-trigger="hover"
              class="flex whitespace-nowrap lg:text-md py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blueB md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              場地租借
              <svg width="20px" height="20px" viewBox="0 0 1024 1024" fill="#000" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M478.312 644.16c24.38 26.901 64.507 26.538 88.507-0.89l270.57-309.222c7.758-8.867 6.86-22.344-2.008-30.103-8.866-7.759-22.344-6.86-30.103 2.007L534.71 615.173c-7.202 8.231-17.541 8.325-24.782 0.335L229.14 305.674c-7.912-8.73-21.403-9.394-30.133-1.482s-9.394 21.403-1.482 30.134l280.786 309.833z"></path>
                </g>
              </svg>
            </div>
            <div id="dropdownHover" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                <li>
                  <router-link to="/rental" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">場地介紹</router-link>
                </li>
                <li>
                  <router-link to="/rentalinfo" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">場地申請</router-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="px-3 py-4 md:py-0" :class="{ ' text-blueB': route.path === '/content' }">
            <router-link
              to="/content"
              class="block whitespace-nowrap lg:text-md py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blueB md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              聯絡我們
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/users'
// import { onMounted } from 'vue'
// import gsap from 'gsap'
// import ScrollTrigger from 'gsap/ScrollTrigger'

const route = useRoute()
const user = useUserStore()
const { isLogin, isAdmin, account, email, image } = storeToRefs(user)
const { logout } = user

// onMounted(async () => {
//   await nextTick()
//   gsap.from('#navbar', {
//     yPercent: -100,
//     paused: false,
//     duration: 0.5,
//     scrollTrigger: {
//       start: 'top 60',
//       end: () => document.documentElement.scrollHeight, // end 為整份文件高度
//       onEnter(self) {
//         self.animation.play()
//       },
//       onUpdate(self) {
//         // self.direction -1 => 偵測到捲動軸往上
//         // self.direction 1 => 偵測到捲動軸往下
//         self.direction === -1 ? self.animation.play() : self.animation.reverse()
//       }
//       // markers: true
//     }
//   })
// })
</script>
