<template>
  <a class="cursor-pointer">
    <div class="lg:w-full relative mx-auto">
      <img class="mt-4 object-cover md:w-full md:h-56 lg:w-full lg:h-72 mx-auto" :src="image" />
      <span
          class="left-0 top-3 absolute lg:flex whitespace-nowrap items-center justify-center px-3 py-1 mx-3 text-xs font-medium text-center rounded-lg bg-blueB text-white hover:bg-white hover:text-blueB hover:border-[1px] hover:border-blueB">
          {{ category }}
        </span>
      <div class="p-5 items-center justify-center align-middle flex max-w-screen-xl px-4 text-center py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-4">
        <span class="mb-2 whitespace-nowrap lg:text-xl text-base font-bold tracking-tight text-gray-900">
          <p>{{ name }}</p>
          <p class="text-red-800"> NT. {{ price }}</p>
        </span>
      </div>
    </div>
  </a>
</template>
<script setup>
import { useUserStore } from '@/stores/users'

defineProps({
  _id: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  category: {
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
  }
})

const user = useUserStore()
</script>
