<template>
  <a class="cursor-pointer">
    <p class="mb-2 text-xl whitespace-nowrap font-bold tracking-normal text-gray-900 dark:text-white">{{ name }}</p>
    <div class="lg:w-full relative mx-auto">
      <img class="mt-4 object-cover md:w-full md:h-56 lg:w-full lg:h-60 mx-auto" :src="image" />
      <div class="p-5 row-auto items-center justify-between align-middle flex max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-4 lg:cols-2">
        <span class="mb-2 whitespace-nowrap lg:text-xl text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          {{ new Date(dateStart).toLocaleDateString() }} ~ {{ new Date(dateEnd).toLocaleDateString() }}
          <br />
          {{ place }}
        </span>
        <span
          class="hidden lg:right-0 lg:bottom-1 lg:absolute lg:flex whitespace-nowrap items-center justify-center px-3 py-1 mx-3 text-xs font-medium text-center rounded-lg text-white hover:bg-white hover:border-[1px]"
          :class="['bg-' + color, 'hover:text-' + color, 'hover:border-' + color]">
          {{ category }}
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
  time: {
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
  },
  color: {
    type: String,
    default: ''
  }
})

const user = useUserStore()
</script>
