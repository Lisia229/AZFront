// stores/users.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { api, apiAuth } from '@/plugins/axios'
import Swal from 'sweetalert2'
import router from '../router/index.js'

export const useUserStore = defineStore(
  'users',
  () => {
    const token = ref('')
    const account = ref('')
    const email = ref('')
    const image = ref('')
    const cart = ref(0)
    const role = ref(0)
    const love = ref([])

    const isLogin = computed(() => token.value.length > 0)
    const isAdmin = computed(() => role.value === 1)

    const login = async form => {
      try {
        const { data } = await api.post('/users/login', form)
        token.value = data.result.token
        account.value = data.result.account
        email.value = data.result.email
        cart.value = data.result.cart
        role.value = data.result.role
        image.value = data.result.image || `https://source.boringavatars.com/beam/256/${account.value}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`
        love.value = data.result.love
        Swal.fire({ icon: 'success', title: '成功', text: '登入成功' })
        router.push('/')
      } catch (error) {
        Swal.fire({ icon: 'error', title: '失敗', text: error?.response?.data?.message || '發生錯誤' })
      }
    }

    const logout = () => {
      token.value = ''
      account.value = ''
      role.value = 0
      cart.value = 0
      router.push('/')
      Swal.fire({ icon: 'success', title: '成功', text: '登出成功' })
    }

    const getUser = async () => {
      if (!token.value) return
      try {
        const { data } = await apiAuth.get('/users/me')
        account.value = data.result.account
        email.value = data.result.email
        cart.value = data.result.cart
        role.value = data.result.role
        image.value = data.result.image || `https://source.boringavatars.com/beam/256/${account.value}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`
        love.value = data.result.love
      } catch {
        logout()
      }
    }

    return { token, account, email, cart, role, image, love, isLogin, isAdmin, login, logout, getUser }
  },
  { persist: { key: '20230103', paths: ['token'] } }
)
