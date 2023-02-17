<template>
  <div id="homeExhibit" class="w-[90%] md:w-full h-full bg-whiteF shadow-lg">
    <img class="cursor-pointer object-cover w-full h-[300px]" :src="image" />
    <div class="text-center">
      <div class="text-[24px] py-3">{{ name }}</div>
      <div class="text-gray-600 pb-3">{{ new Date(dateStart).toLocaleDateString() }} ~ {{ new Date(dateEnd).toLocaleDateString() }}</div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/users'

defineProps({
  /* eslint-disable */
  _id: {
    type: String,
    default: ''
  },
  /* eslint-enable */
  name: {
    type: String,
    default: ''
  },
  dateStart: {
    type: String,
    default: ''
  },
  dateEnd: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    default: 0
  },
  place: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  sell: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    default: ''
  }
})

const user = useUserStore()
</script>

<style scoped></style>
