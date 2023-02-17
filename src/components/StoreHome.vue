<template>
  <div class="lg:w-full lg:h-76 px-4 py-4 lg:pt-8">
    <img class="cursor-pointer rounded-lg md:w-full md:h-40 w-80 lg:w-80 lg:h-52" :src="image" />
    <div class="p-5 row-auto items-center justify-between align-middle max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-4">
      <p class="mb-2 whitespace-nowrap text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{ name }}</p>
      <p class="whitespace-pre-wrap text-ellipsis mb-2 text-sm font-bold text-left tracking-tight text-gray-900 dark:text-white">{{ introduction }}</p>
    </div>
  </div>
</template>
<script setup>
// store
import { useUserStore } from '@/stores/users'

defineProps({
  /* eslint-enable */
  name: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  introduction: {
    type: String,
    default: ''
  }
})

const user = useUserStore()
</script>
