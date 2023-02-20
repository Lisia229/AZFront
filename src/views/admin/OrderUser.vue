<template>
  <div id="Order" class="pt-[70px] pb-16 w-full h-full">
    <div class="flex justify-center items-center py-8 px-8 text-3xl">
      <svg class="w-12 h-12 pr-2" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
      </svg>
      <div>商品訂購記錄</div>
    </div>
    <table class="w-full rounded-xl table-fixed text-left py-8">
      <thead class="text-xl text-center uppercas bg-black text-white">
        <tr>
          <th scope="col" class="px-6 py-3">ID</th>
          <th scope="col" class="px-6 py-3">日期</th>
          <th scope="col" class="px-6 py-3">金額</th>
          <th scope="col" class="px-6 py-3">商品</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr class="h-32" v-for="order in orders" :key="order._id">
          <td>{{ order._id }}</td>
          <td>{{ new Date(order.date).toLocaleDateString() }}</td>
          <td>NT. {{ order.totalPrice }}</td>
          <td>
            <ul>
              <li class="text-left" v-for="product in order.products" :key="product._id">
                {{ product.quantity + '個' + product.data.name }}
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import { apiAuth } from '@/plugins/axios'
import Swal from 'sweetalert2'

const orders = reactive([])

;(async () => {
  try {
    const { data } = await apiAuth.get('/orders')
    console.log(data.result)
    // orders.push(...data.result)
    orders.push(
      ...data.result.map(order => {
        order.totalPrice = order.products.reduce((total, current) => total + current.data.price * current.quantity, 0)
        return order
      })
    )
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得訂單失敗'
    })
  }
})()
</script>
