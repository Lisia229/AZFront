import { createRouter, createWebHistory } from 'vue-router'
import FrontLayout from '../layout/FrontLayout.vue'
import FrontHomeView from '../views/front/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import { useUserStore } from '@/stores/users'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: FrontLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: FrontHomeView,
          meta: {
            title: 'AZ.HOME',
            login: false,
            admin: false
          }
        },
        {
          path: 'content',
          name: 'content',
          component: () => import('@/views/front/ContectView.vue'),
          meta: {
            title: 'AZ | 聯絡',
            login: false,
            admin: false
          }
        },
        {
          path: 'exhibition',
          name: 'exhibition',
          component: () => import('@/views/front/ExhibitionView.vue'),
          meta: {
            title: 'AZ | 展覽介紹',
            login: false,
            admin: false
          }
        },
        {
          path: 'exhibition/:id',
          name: 'exhibitionId',
          component: () => import('@/views/front/ExhibitionInfo.vue'),
          meta: {
            title: 'AZ | 展覽資訊',
            login: false,
            admin: false
          }
        },
        {
          path: 'store',
          name: 'store',
          component: () => import('@/views/front/StoreView.vue'),
          meta: {
            title: 'AZ | 店家資訊',
            login: false,
            admin: false
          }
        },
        {
          path: 'stories/:id',
          name: 'storeId',
          component: () => import('@/views/front/StoreInfo.vue'),
          meta: {
            title: 'AZ | 店家資訊',
            login: false,
            admin: false
          }
        },
        {
          path: 'product',
          name: 'product',
          component: () => import('@/views/front/ProductView.vue'),
          meta: {
            title: 'AZ | 商品',
            login: false,
            admin: false
          }
        },
        {
          path: 'product/:id',
          name: 'productID',
          component: () => import('@/views/front/ProductInfo.vue'),
          meta: {
            title: 'AZ | 商品資訊',
            login: false,
            admin: false
          }
        },
        {
          path: 'rental',
          name: 'rental',
          component: () => import('@/views/front/RentalView.vue'),
          meta: {
            title: 'AZ | 場地資訊',
            login: false,
            admin: false
          }
        },
        {
          path: 'rental/:id',
          name: 'rentalID',
          component: () => import('@/views/front/RentalMore.vue'),
          meta: {
            title: 'AZ | 場地介紹',
            login: false,
            admin: false
          }
        },
        {
          path: 'rentalinfo',
          name: 'rentalinfo',
          component: () => import('@/views/front/RentalInfo.vue'),
          meta: {
            title: 'AZ | 場地租借',
            login: false,
            admin: false
          }
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import('@/views/front/CartView.vue'),
          meta: {
            title: 'AZ | 購物車',
            login: true,
            admin: false
          }
        }
      ]
    },
    {
      path: '/admin',
      component: () => import('@/layout/AdminLayout.vue'),
      children: [
        {
          path: '',
          name: 'admin-home',
          component: () => import('@/views/admin/SettingsView.vue'),
          meta: {
            title: '管理 | 首頁',
            login: true,
            admin: true
          }
        },
        {
          path: 'admin-exhibition',
          name: 'admin-exhibition',
          component: () => import('@/views/admin/ExhibitionView.vue'),
          meta: {
            title: 'AZ | 展覽管理',
            login: false,
            admin: true
          }
        },
        {
          path: 'products',
          name: 'admin-products',
          component: () => import('@/views/admin/ProductsView.vue'),
          meta: {
            title: 'AZ | 商品管理',
            login: false,
            admin: true
          }
        },
        {
          path: 'stores',
          name: 'admin-stores',
          component: () => import('@/views/admin/StoreView.vue'),
          meta: {
            title: 'AZ | 商品管理',
            login: false,
            admin: true
          }
        },
        {
          path: 'usersettings',
          name: 'admin-usersettings',
          component: () => import('@/views/admin/SettingsView.vue'),
          meta: {
            title: 'AZ | 設定',
            login: true,
            admin: true
          }
        },
        {
          path: 'usersOrder',
          name: 'admin-usersOrder',
          component: () => import('@/views/admin/OrderUser.vue'),
          meta: {
            title: 'AZ | 訂單',
            login: true,
            admin: true
          }
        },
        {
          path: 'Order',
          name: 'admin-Order',
          component: () => import('@/views/admin/OrderView.vue'),
          meta: {
            title: 'AZ | 訂單',
            login: true,
            admin: true
          }
        },
        {
          path: 'RentalOrder',
          name: 'admin-RentalOrder',
          component: () => import('@/views/admin/RentalOrder.vue'),
          meta: {
            title: 'AZ | 場地預約',
            login: true,
            admin: true
          }
        },
        {
          path: 'members',
          name: 'admin-members',
          component: () => import('@/views/admin/MemberView.vue'),
          meta: {
            title: 'AZ | 會員管理',
            login: false,
            admin: true
          }
        },
        {
          path: 'rental',
          name: 'admin-rental',
          component: () => import('@/views/admin/RentalView.vue'),
          meta: {
            title: 'AZ | 場地管理',
            login: false,
            admin: true
          }
        },
        {
          path: 'contect',
          name: 'admin-contect',
          component: () => import('@/views/admin/ContentView.vue'),
          meta: {
            title: 'AZ | 聯絡管理',
            login: false,
            admin: true
          }
        },
        {
          path: 'love',
          name: 'admin-love',
          component: () => import('@/views/admin/LoveView.vue'),
          meta: {
            title: 'AZ | 我的最愛',
            login: false,
            admin: true
          }
        }
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/front/RegisterView.vue'),
      meta: {
        title: 'AZ | 註冊',
        login: false,
        admin: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/front/LoginView.vue'),
      meta: {
        title: 'AZ | 登入',
        login: false,
        admin: false
      }
    },
    {
      path: '/404',
      name: '404',
      component: NotFoundView,
      meta: {
        title: 'AZ | 404',
        login: false,
        admin: false
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'all',
      redirect: '/404'
    }
  ]
})

router.afterEach((to, from) => {
  document.title = to.meta.title
  window.scrollTo(0, 0)
})

router.beforeEach(async (to, from, next) => {
  const user = useUserStore()
  if (user.isLogin && (to.path === '/register' || to.path === '/login')) {
    next('/')
  } else if (to.meta.login && !user.isLogin) {
    next('/')
  } else {
    next()
  }
})

export default router
