<template>
  <div id="storeView" class="lg:pt-0">
    <swiper></swiper>
    <div v-for="storie in stories" :key="storie._id">
      <StoreCard v-bind="storie" @click="store(storie._id)"></StoreCard>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import { api } from '@/plugins/axios'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'
import swiper from '../../components/storeswiper.vue'
import StoreCard from '../../components/StoreCard.vue'

const stories = reactive([])
const router = useRouter()

;(async () => {
  try {
    // !資料要解構 data:新名字
    const { data } = await api.get('/stories')
    stories.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
    console.log(error)
  }
})()

const store = id => {
  router.push(`stories/${id}`)
}
</script>
