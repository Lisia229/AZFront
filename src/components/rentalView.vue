<template>
  <div class="gap-8 justify-center items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
    <div class="mt-4 md:mt-0">
      <h2 class="mb-4 text-4xl tracking-normal font-extrabold text-gray-900 dark:text-white">{{ name }}</h2>
      <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
        {{ description }}
      </p>
      <button
        type="button"
        class="hover:text-blueB hover:bg-white hover:border-[1px] hover:border-blueB text-white bg-blueB focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        MORE
      </button>
    </div>
    <img class="w-full dark:hidden" :src="image" alt="image" />
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
  price: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  images: {
    type:Array,
    default: ''
  },
  size: {
    type: String,
    default: ''
  },
  suggest: {
    type: String,
    default: ''
  },
  equipment: {
    type: String,
    default: ''
  },
  number: {
    type: String,
    default: ''
  },
  attention: {
    type: String,
    default: ''
  }
})

const user = useUserStore()
</script>
