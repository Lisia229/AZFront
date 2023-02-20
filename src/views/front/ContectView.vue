<template>
  <div class="py-16 lg:py-4 px-4 w-full h-full lg:h-[100vh]">
    <div class="w-full h-full px-4 py-4 flex flex-wrap mx-auto justify-center items-center rounded-lg md:flex-row">
      <div class="relative w-full lg:h-full lg:w-1/2 flex-col items-center justify-center p-4 leading-normal">
        <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="3000" class="lg:absolute z-30 lg:top-[20%] lg:right-[2%]">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">聯絡AZ.ゼロ</h5>
          <p class="mb-3 text-center font-normal text-gray-700 dark:text-gray-400">
            若有任何問題，請隨時與我們聯繫。
            <br />
            訂單客服 AZ@onelittleday.com.tw
            <br />
            雜誌訂閱 az.zero229@gmail.com
            <br />
            行銷合作 az.zero@gmail.com
            <br />
            電商行銷、產品業務 02-1234-1200#103
            <br />
            電話 02-1234-1200
            <br />
            傳真 02-1234-1300
            <br />
          </p>
        </div>
        <img
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-delay="1000"
          class="hidden z-10 2xl:top-[50%] 2xl:left-[30%] absolute lg:block top-0 left-0"
          src="../../assets/logo/01.png" />
        <img
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-delay="2000"
          class="z-20 hidden 2xl:top-[3%] 2xl:left-[50%] absolute lg:block top-[-10%] left-[35%]"
          src="../../assets/logo/circle.png" />
      </div>
      <div class="relative w-full lg:w-1/2 lg:py-16 lg:px-16 py-8 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl py-4 px-4 tracking-tight font-extrabold text-center text-black">Contact Us</h2>
        <form @submit.prevent="contectForm" class="space-y-8">
          <div>
            <label for="email" class="block mb-2 text-xl font-medium text-gray-900">Your email</label>
            <input
              v-model="form.email"
              type="email"
              id="email"
              class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-lightpink sm:text-md focus:ring-pink-500 focus:border-pink-500"
              placeholder="name@flowbite.com"
              required
              @click="error.email.error = false" />
            <p v-if="error.email.error" class="mt-2 text-xs text-red-600 dark:text-red-400">
              <span class="font-medium">信箱必填</span>
            </p>
          </div>

          <div>
            <label for="subject" class="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Subject</label>
            <input
              v-model="form.subject"
              type="text"
              id="subject"
              class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-lightpink sm:text-md focus:ring-pink-500 focus:border-pink-500"
              placeholder="Let us know how we can help you"
              required
              @click="error.subject.error = false" />
            <p v-if="error.subject.error" class="mt-2 text-xs text-red-600 dark:text-red-400">
              <span class="font-medium">主題必填</span>
            </p>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400">Your message</label>
            <textarea
              v-model="form.message"
              id="message"
              @click="error.message.error = false"
              rows="6"
              class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-lightpink sm:text-md focus:ring-pink-500 focus:border-pink-500"
              placeholder="Leave a comment..."></textarea>
            <p v-if="error.message.error" class="mt-2 text-xs text-red-600 dark:text-red-400">
              <span class="font-medium">內容必填</span>
            </p>
          </div>
          <div class="flex justify-center">
            <button
              type="submit"
              class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-pinkP border-[1px] border-pinkP hover:text-pinkP hover:bg-white sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <section id="content" class="flex flex-wrap w-full h-full">
    <div id="iframe" class="w-full lg:w-full h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115670.5729041518!2d121.38928261640626!3d25.04406980000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96523e0246d%3A0xf1c9276707165c71!2z6I-v5bGxMTkxNOaWh-WMluWJteaEj-eUoualreWckuWNgA!5e0!3m2!1szh-TW!2stw!4v1676015049220!5m2!1szh-TW!2stw"
        frameborder="0"
        style="border: 0"
        allowfullscreen=""></iframe>
      <!-- 嵌入 Google map -->
    </div>
  </section>
</template>
<script setup>
import validator from 'validator'
import { reactive } from 'vue'
import { apiAuth } from '@/plugins/axios'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Swal from 'sweetalert2'
import { gsap } from 'gsap'

AOS.init()

const error = reactive({
  email: {
    error: false
  },
  subject: {
    error: false
  },
  message: {
    error: false
  }
})

const form = reactive({
  email: '',
  subject: '',
  message: ''
})

const validatorError = () => {
  if (!validator.isEmail(form.email)) {
    error.email.error = true
    return true
  }
  if (validator.isEmpty(form.subject)) {
    error.subject.error = true
    return true
  }
  if (validator.isEmpty(form.message)) {
    error.message.error = true
    return true
  }

  return false
}

// !"apiAuth" 和 "api" 通常是指两种不同类型的应用程序编程接口 (API)。
// !"apiAuth" 通常是指身份验证 API，它用于验证请求的身份，以确保请求是从可信的源发出的。它通常会在请求访问敏感数据之前验证请求的身份。
// !"api" 通常是指数据交互 API，它用于允许两个应用程序交换数据。它提供了一种机制，允许一个应用程序请求数据，并从另一个应用程序接收数据。
// !简而言之，"apiAuth" 用于验证请求者的身份，而 "api" 用于允许应用程序之间交换数据。

const contectForm = async () => {
  if (validatorError()) return
  try {
    await apiAuth.post('/contect', form)
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '表單已送出'
    })

    form.email = ''
    form.subject = ''
    form.message = ''
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
}
</script>
