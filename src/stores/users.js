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

    const isLogin = computed(() => {
      return token.value.length > 0
    })
    const isAdmin = computed(() => {
      return role.value === 1
    })

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
        Swal.fire({
          icon: 'success',
          title: '成功',
          text: '登入成功'
        })
        router.push('/')
      } catch (error) {
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: error?.response?.data?.message || '發生錯誤'
        })
      }
    }

    const logout = async () => {
      try {
        await apiAuth.delete('/users/logout')
        token.value = ''
        account.value = ''
        role.value = 0
        cart.value = 0
        router.push('/')
        Swal.fire({
          icon: 'success',
          title: '成功',
          text: '登出成功'
        })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: error?.response?.data?.message || '發生錯誤'
        })
      }
    }

    const getUser = async () => {
      if (token.value.length === 0) return
      try {
        const { data } = await apiAuth.get('/users/me')
        account.value = data.result.account
        email.value = data.result.email
        cart.value = data.result.cart
        role.value = data.result.role
        image.value = data.result.image || `https://source.boringavatars.com/beam/256/${account.value}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`
        love.value = data.result.love
      } catch (error) {
        logout()
      }
    }

    const editCart = async form => {
      if (token.value.length === 0) {
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: '請先登入'
        })
        router.push('/login')
        return
      }
      try {
        const { data } = await apiAuth.post('/users/cart', form)
        cart.value = data.result
        Swal.fire({
          icon: 'success',
          title: '成功'
        })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: error?.response?.data?.message || '發生錯誤'
        })
      }
    }

    const editLove = async id => {
      if (token.value.length === 0) {
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: '請先登入'
        })
        router.push('/login')
        return
      }
      try {
        const { data } = await apiAuth.post('/users/love', id)
        const index = love.value.findIndex(item => item === data.result)
        if (index === -1) {
          love.value.push(data.result)
          Swal.fire({
            icon: 'success',
            title: '加入我的最愛',
            text: '成功'
          })
        } else {
          love.value.splice(index, 1)
          Swal.fire({
            icon: 'success',
            title: '移除我的最愛',
            text: '成功'
          })
        }
      } catch (error) {
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: error?.response?.data?.message || '發生錯誤'
        })
      }
    }

    const checkout = async () => {
      try {
        await apiAuth.post('/orders')
        cart.value = 0
        Swal.fire({
          icon: 'success',
          title: '成功',
          text: '結帳成功'
        })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: error?.response?.data?.message || '發生錯誤'
        })
      }
    }

    return {
      token,
      account,
      email,
      cart,
      role,
      login,
      logout,
      getUser,
      isLogin,
      isAdmin,
      image,
      love,
      editCart,
      editLove,
      checkout
    }
  },
  {
    persist: {
      key: '20230103',
      paths: ['token']
    }
  }
)
