<template>
  <div class="lg:w-full mx-auto border-b-2 border-black">
    <img class="cursor-pointer rounded-lg mx-auto" :src="image" />
    <div class="p-5 row-auto items-center justify-between align-middle flex max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-4 lg:cols-12">
      <span class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{ name }}</span>
      <span class="mb-2 text-xl font-bold text-right tracking-tight text-gray-900 dark:text-white">
        {{ new Date(dateStart).toLocaleDateString() }} ~ {{ new Date(dateEnd).toLocaleDateString() }}
      </span>
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
  unit: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  date: {
    type: String,
    default: ''
  },
  time: {
    type: String,
    default: ''
  },
  phone: {
    type: Number,
    default: 0
  },
  adresse: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    default: ''
  },
  rental: {
    type: String,
    default: ''
  },
  visite: {
    type: String,
    default: ''
  },
  uniform: {
    type: Number,
    default: 0
  },
  activity: {
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

  mainname: {
    type: String,
    default: ''
  },

  description: {
    type: String,
    default: ''
  }
})

const user = useUserStore()
</script>
