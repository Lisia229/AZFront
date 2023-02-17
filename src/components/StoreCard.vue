<template>
  <div class="gap-8 justify-center items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
    <img class="w-full lg:w-[600px] lg:h-[450px] dark:hidden" :src="image" alt="image" />
    <div class="mt-4 md:mt-0">
      <h2 class="mb-4 text-4xl tracking-normal font-extrabold text-gray-900 dark:text-white">{{ name }}</h2>
      <p class="mb-6 text-xl text-gray-500">
        {{ special }}
      </p>
      <button
        type="button"
        class="hover:text-white text-blueB border border-blueB hover:bg-blueB focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2">
        MORE
      </button>
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
  dateValue: {
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
  special: {
    type: String,
    default: ''
  }
})

const user = useUserStore()
</script>
