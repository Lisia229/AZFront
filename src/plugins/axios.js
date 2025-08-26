// api.js
import axios from 'axios'
import { useUserStore } from '@/stores/users.js'

export const api = axios.create({ baseURL: import.meta.env.VITE_API })
export const apiAuth = axios.create({ baseURL: import.meta.env.VITE_API })

apiAuth.interceptors.request.use(config => {
  const user = useUserStore()
  if (user.token) config.headers.authorization = 'Bearer ' + user.token
  return config
})

apiAuth.interceptors.response.use(
  res => res,
  async error => {
    const user = useUserStore()
    const originalRequest = error.config

    if (
      error.response?.status === 401 &&
      !['/users/login', '/users/logout', '/users/extend'].includes(originalRequest.url)
    ) {
      try {
        const newToken = await apiAuth.patch('/users/extend').then(res => res.data.result)
        user.token = newToken
        originalRequest.headers.authorization = 'Bearer ' + newToken
        return apiAuth(originalRequest)
      } catch (err) {
        user.logout()
        return Promise.reject(error)
      }
    }
    return Promise.reject(error)
  }
)
