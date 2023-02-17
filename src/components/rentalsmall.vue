<template>
  <a class="cursor-pointer">
    <div class="lg:w-full relative mx-auto">
      <img class="mt-4 object-cover md:w-full md:h-56 lg:w-full lg:h-72 mx-auto" :src="image" />
      <div class="p-5 items-center justify-center align-middle flex max-w-screen-xl px-4 text-center py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-4">
        <span class="mb-2 whitespace-nowrap lg:text-xl text-base font-bold tracking-tight text-gray-900">
          <p>{{ name }}</p>
          <p class="text-red-800">NT. {{ price }}</p>
        </span>
      </div>
    </div>
  </a>
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
    type: Array,
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
