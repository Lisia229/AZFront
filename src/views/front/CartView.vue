<template>
  <div id="CartView">
    <!-- -navbar -->
    <nav class="px-4 py-4 lg:pb-6 lg:py-10 w-full z-10 bg-white fixed" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <router-link to="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-pinkP">
            <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            Home
          </router-link>
        </li>
        <li>
          <div class="flex items-center">
            <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg>
            <router-link to="/product" class="ml-1 text-sm font-medium text-gray-700 hover:text-pinkP md:ml-2 dark:text-gray-400 dark:hover:text-white">商品</router-link>
          </div>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg>
            <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">購物車</span>
          </div>
        </li>
      </ol>
    </nav>
    <div class="container px-4 py-4 mx-auto mt-10">
      <div class="flex flex-wrap shadow-md my-10">
        <div class="w-full md:w-3/4 bg-white px-10 py-10">
          <div class="flex justify-between border-b pb-8">
            <h1 class="font-semibold text-2xl">Shopping Cart</h1>
            <h2 class="font-semibold text-2xl">{{ totalquantity }} Items</h2>
          </div>
          <div class="flex mt-10 mb-5">
            <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Quantity</h3>
            <h3 class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
            <h3 class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
          </div>
          <div v-if="cart.length === 0" class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">沒有商品</div>
          <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5" v-for="(item, index) in cart" :key="index">
            <div class="flex w-2/5">
              <!-- product -->
              <div class="w-2/3 h-full">
                <div>
                  <img class="w-44 h-44 object-cover" :src="item.data.image" />
                </div>
              </div>
              <div class="w-1/3 flex flex-col justify-between ml-4 flex-grow">
                <span class="font-bold text-sm">{{ item.data.name }}</span>
                <span class="text-red-500 text-xs">{{ item.data.colors }}</span>
                <button type="button" @click="updateCart(index, item.quantity * -1)" class="font-semibold text-left hover:text-red-500 text-gray-500 text-xs">
                  Remove
                </button>
              </div>
            </div>
            <div class="flex justify-center w-1/5">
              <button type="button" class="fill-current" @click="updateCart(index, -1)">
                <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                  <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
              </button>

              <span class="mx-2 border text-center w-8">{{ item.quantity }}</span>

              <button type="button" class="fill-current text-gray-600 w-3" @click="updateCart(index, 1)">
                <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                  <path
                    d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
              </button>
            </div>

            <span class="text-center w-1/5 font-semibold text-sm">NT. {{ item.data.price }}</span>
            <span class="text-center w-1/5 font-semibold text-sm">NT. {{ item.data.price * item.quantity }}</span>
          </div>

          <router-link to="product" class="flex font-semibold text-indigo-600 text-sm mt-10">
            <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
              <path
                d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </router-link>
        </div>
        <div id="summary" class="w-full md:w-1/4 px-8 py-10">
          <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
          <div class="flex justify-between mt-10 mb-5">
            <span class="font-semibold text-sm">NT. {{ totalPrice }}</span>
          </div>
          <div>
            <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
            <select class="block p-2 text-gray-600 w-full text-sm">
              <option>Standard shipping - $10.00</option>
            </select>
          </div>
          <div class="py-10">
            <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
            <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-full" />
          </div>
          <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
          <div class="border-t mt-8">
            <div class="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>NT. {{ totalPrice }}</span>
            </div>
            <button
              type="button"
              :class="{ 'bg-red-600': canCheckout }"
              :disabled="canCheckout"
              @click="onCheckoutBtnClick"
              class="bg-blueB font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, computed } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios'
import { useUserStore } from '@/stores/users'
import { useRouter } from 'vue-router'

const router = useRouter()

const user = useUserStore()
const { editCart, checkout } = user

const cart = reactive([])

const updateCart = async (index, quantity) => {
  const sumbitData = {
    quantity
  }

  if (cart[index].dataModel === 'exhibitions') {
    sumbitData.e_id = cart[index].data._id
  } else if (cart[index].dataModel === 'products') {
    sumbitData.p_id = cart[index].data._id
  }

  await editCart(sumbitData)
  cart[index].quantity += quantity
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1)
  }
}

const onCheckoutBtnClick = async () => {
  await checkout()
  router.push('/orders')
}

const totalPrice = computed(() => {
  return cart.reduce((total, current) => {
    return total + current.data.price * current.quantity
  }, 0)
})

const canCheckout = computed(() => {
  const isSell = cart.some(item => !item.data.sell)
  return cart.length > 0 && isSell
})

;(async () => {
  try {
    const { data } = await apiAuth.get('/users/cart')
    cart.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得購物車失敗'
    })
  }
})()
</script>
