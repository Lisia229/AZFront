import App from './App.vue'

import { createApp } from 'vue'
import router from './router'

import pinia from './plugins/pinia'
import SfVueAnimatedCursor from 'sf-vue-animated-cursor'
import './css/style.css'
import { useUserStore } from '@/stores/users'
;(async () => {
  const app = createApp(App)
  app.use(pinia)
  app.use(SfVueAnimatedCursor, { basic: false })
  await useUserStore().getUser()
  app.use(router)
  app.mount('#app')
})()
