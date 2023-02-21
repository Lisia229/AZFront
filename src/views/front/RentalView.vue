<template>
  <div id="rentalView" class="relative w-full h-full flex flex-wrap justify-center items-center">
    <h1 class="text-xl lg:text-4xl py-8">- AZ園區場地介紹 -</h1>
    <img class="w-full px-4 py-4" src="../../assets/image/14.jpg" />
    <a href="#" class="hidden lg:block cursor-none px-4 bottom-[200px] right-[400px] py-2 absolute bg-black text-white rounded-3xl">停車場</a>
    <a href="#" class="hidden lg:block cursor-none px-4 top-[250px] right-[100px] py-2 absolute bg-black text-white rounded-3xl">園區入口</a>
    <router-link id="AZpark" to="/rental/63e25d92384dcac8bdbb00c0" class="hidden lg:block px-4 right-[500px] py-2 absolute bg-black text-white rounded-3xl">AZ劇場</router-link>
        <router-link id="AZRoom"  to="/rental/63e4f0a17362e713cd1787f8" class="hidden lg:block px-4 top-[400px] right-[300px] 2xl:right-[400px] py-2 absolute bg-black text-white rounded-3xl">展覽會館</router-link>
            <router-link id="AZHouse" to="/rental/63e4f1ab7362e713cd178801" class="hidden lg:block px-4 bottom-[350px] right-[700px] 2xl:right-[1000px] py-2 absolute bg-black text-white rounded-3xl">玻璃貨櫃屋</router-link>
  </div>
  <div class="mx-4 my-4 relative" v-for="rental in rentals" :key="rental._id">
    <rentalView id="rentalview" v-bind="rental" @click="rentalinfo(rental._id)"></rentalView>
  </div>
</template>
<script setup>
import rentalView from '../../components/rentalView.vue'
import { reactive } from 'vue'
import { api } from '@/plugins/axios'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'

const rentals = reactive([])
const router = useRouter()

;(async () => {
  try {
    // !資料要解構 data:新名字
    const { data } = await api.get('/rentals')
    rentals.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
    console.log(error)
  }
})()

const rentalinfo = id => {
  router.push(`rental/${id}`)
}
</script>
