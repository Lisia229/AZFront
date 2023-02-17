<template>
  <div id="love" class="pt-[70px] w-full h-full">
    <div class="flex justify-center items-center py-8 px-8 text-3xl">
      <svg class="w-10 h-10 pr-2" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
      </svg>
      <div>我的最愛</div>
    </div>
    <table class="w-full border-b-[1px] border-gray-500 table-fixed text-left text-gray-500 py-8">
      <thead class="text-base text-center text-white uppercase bg-black">
        <tr>
          <th scope="col" class="px-6 py-3">照片</th>
          <th scope="col" class="px-6 py-3">名稱</th>
          <th scope="col" class="px-6 py-3">價格</th>
          <th scope="col" class="px-6 py-3">動作</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr class="my-2" v-for="(item, index) in love" :key="index">
          <td>
            <div class="w-full h-full">
              <img class="w-full h-44 object-cover" :src="item.data.image" />
            </div>
          </td>
          <td>
            {{ item.data.name }}
          </td>
          <td>
            <div>NT. {{ item.data.price }}</div>
          </td>
          <td>
            <button type="button" @click="!submitLove">remove</button>
          </td>
        </tr>
        <tr v-if="love.length === 0">
          <td colspan="6">沒有東西</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios'

const love = reactive([])

;(async () => {
  try {
    const { data } = await apiAuth.get('/users/love')
    console.log(data.result)
    love.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得我的最愛失敗'
    })
  }
})()
</script>
