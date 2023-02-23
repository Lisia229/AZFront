<template>
  <a class="cursor-pointer">
    <div id="homePimg" class="lg:w-full h-full relative mx-auto">
      <div class="w-full h-full overflow-hidden">
        <img class="hover:scale-110 first:mt-4 object-cover md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] mx-auto" :src="image" />
      </div>
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
