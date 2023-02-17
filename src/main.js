import App from './App.vue'

import { createApp } from 'vue'

import router from './router'

import pinia from './plugins/pinia'

import './css/style.css'
import { useUserStore } from '@/stores/users'
;(async () => {
  const app = createApp(App)
  app.use(pinia)
  await useUserStore().getUser()
  app.use(router)
  app.mount('#app')
})()
