<template>
  <div id="rentalView" class="px-4 py-4 overflow-x-hidden">
    <div id="rentalintro" class="px-4 py-4">
      <h1 class="text-3xl pb-8 text-center">AZ文創園區 【場地租借辦法】</h1>
      <div class="flex flex-wrap">
        <div class="w-full lg:w-[40%]">
          <p class="w-full pb-8 px-4">
            一、宗旨
            <br />
            <br />
            由台灣文創發展股份有限公司所經營之AZ文化創意產業園區（以下稱本園區），為促進台灣文創產業發展，鼓勵各類文化創意發想及跨界藝文創作展演活動，受理本園區檔期申請及審查，特訂定此要點。
          </p>
          <p class="w-full pb-8 px-4">
            二、申請資格
            <br />
            <br />
            團體：法人、政府機關、一般公司企業等。
            <br />
            個人：年滿二十歲之中華民國國民，或在台領有證件之外國人。
          </p>
          <p class="w-full pb-8 px-4">
            三、場地申請
            <br />
            <br />
            若要申請，請填寫以下表單，工作日為3-5個工作天(不包含假日)，會有專人與您聯繫。
          </p>
        </div>
        <div class="w-full lg:w-[60%]">
          <p class="py-3">一般場館</p>

          <div class="relative overflow-x-auto pb-3">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-gray-700 uppercase bg-pink-50">
                <tr>
                  <th scope="col" class="px-6 py-3">場館名稱</th>
                  <th scope="col" class="px-6 py-3">總坪數</th>
                  <th scope="col" class="px-6 py-3">活動日場租(含稅)</th>
                  <th scope="col" class="px-6 py-3">進撤場日場租(含稅)</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="rental in rentals" :key="rental._id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 lg:text-base">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ rental.name }}</th>
                  <td class="px-6 py-4">{{ rental.size }}</td>
                  <td class="px-6 py-4">NT$ {{ rental.price }}</td>
                  <td class="px-6 py-4">NT$ {{ rental.price / 2 }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-full px-4 py-4">
      <div class="flex rounded-lg border-[1px] border-gray-100 shadow">
        <div class="hidden lg:block lg:w-1/2">
          <img class="hidden h-full object-cover lg:block rounded-l-lg" src="../../assets/image/b01.jpg" />
        </div>
        <div class="flex-col py-4 px-4 relative justify-center items-center w-full">
          <h1 class="text-center text-2xl py-4 px-4">AZ.ゼロ 場地申請表</h1>
          <form @submit.prevent="rentalForm" class="space-y-6 py-4 px-8">
            <fieldset v-if="step === 1">
              <div class="flex justify-around items-center text-xl rounded-xl px-4 pb-6">
                <div class="text-pinkP px-4 py-2 border-b-2 border-pinkP">聯絡資訊</div>
                <svg
                  class="w-6 h-6transition duration-75"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                </svg>
                <div>場地資訊</div>
                <svg
                  class="w-6 h-6transition duration-75"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                </svg>
                <div>活動規劃</div>
              </div>
              <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <!-- -活動名稱 -->
                <div class="w-full">
                  <label for="large-input" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">申請人 ：</label>
                  <input
                    v-model="form.name"
                    type="text"
                    id="large-input"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-lightpink sm:text-md focus:ring-pink-500 focus:border-pink-500" />
                </div>
                <div class="w-full">
                  <label for="large-input" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">填表日期（例 2023-01-03)：</label>
                  <input
                    v-model="form.date"
                    type="text"
                    id="large-input"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-lightpink sm:text-md focus:ring-pink-500 focus:border-pink-500" />
                </div>
                <!-- <div class="sm:col-span-2"> -->
                <div class="w-full">
                  <label for="large-input" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">申請單位：</label>
                  <input
                    v-model="form.unit"
                    type="text"
                    id="large-input"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-lightpink sm:text-md focus:ring-pink-500 focus:border-pink-500" />
                </div>
                <div class="w-full">
                  <label for="large-input" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">聯絡電話 ：</label>
                  <input
                    v-model="form.phone"
                    type="text"
                    id="large-input"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-lightpink sm:text-md focus:ring-pink-500 focus:border-pink-500" />
                </div>
                <div class="w-full">
                  <label for="large-input" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">聯絡信箱 ：</label>
                  <input
                    v-model="form.email"
                    type="email"
                    id="large-input"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-lightpink sm:text-md focus:ring-pink-500 focus:border-pink-500" />
                </div>
                <div class="w-full">
                  <label for="category" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">聯絡地址：</label>
                  <input
                    v-model="form.adresse"
                    type="text"
                    id="large-input"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-lightpink sm:text-md focus:ring-pink-500 focus:border-pink-500" />
                </div>
              </div>
              <div class="flex justify-center py-4">
                <button
                  type="button"
                  class="next action-button inline-flex items-center px-3 py-2 my-2 text-sm font-medium text-center text-white bg-pinkP rounded-lg hover:text-black hover:bg-lightpink focus:ring-4 focus:outline-none focus:ring-lightpink"
                  @click="step = 2">
                  下一步
                  <svg
                    class="w-6 h-6transition duration-75"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </button>
              </div>
            </fieldset>
            <fieldset v-if="step === 2">
              <div class="flex justify-around items-center text-xl rounded-xl px-4 pb-6">
                <div>聯絡資訊</div>
                <svg
                  class="w-6 h-6transition duration-75"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                </svg>
                <div class="text-pinkP px-4 py-2 border-b-2 border-pinkP">場地資訊</div>
                <svg
                  class="w-6 h-6transition duration-75"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                </svg>
                <div>活動規劃</div>
              </div>
              <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <!-- -統一編號 -->
                <div class="sm:col-span-2">
                  <label for="uniform" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">統一編號 / 立案字號：</label>
                  <input
                    v-model="form.uniform"
                    type="text"
                    id="large-input"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-lightpink sm:text-md focus:ring-pink-500 focus:border-pink-500" />
                </div>
                <!-- -單位類別 -->
                <div class="w-full">
                  <label for="category" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">單位類別：</label>
                  <Input
                    v-model="form.category"
                    :select="categorys"
                    title="choose place"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-lightpink sm:text-md focus:ring-pink-500 focus:border-pink-500"
                    placeholder="place" />
                </div>

                <!-- -申請場地 -->
                <div class="w-full">
                  <label for="rental" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">申請場地：</label>
                  <Input
                    v-model="form.rental"
                    :select="Rentals"
                    title="choose place"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-lightpink sm:text-md focus:ring-pink-500 focus:border-pink-500"
                    placeholder="place" />
                </div>
                <!-- -活動性質 -->
                <div class="w-full">
                  <label for="activity" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">活動性質：</label>
                  <Input
                    v-model="form.activity"
                    :select="activities"
                    title="choose place"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-lightpink sm:text-md focus:ring-pink-500 focus:border-pink-500"
                    placeholder="place" />
                </div>
                <!-- -參觀性質 -->
                <div class="w-full">
                  <label for="visite" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">參觀性質：</label>
                  <Input
                    v-model="form.visite"
                    :select="visites"
                    title="choose place"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-lightpink sm:text-md focus:ring-pink-500 focus:border-pink-500"
                    placeholder="place" />
                </div>
              </div>
              <div class="flex justify-center py-4">
                <button
                  type="button"
                  class="previous action-button inline-flex items-center px-3 mr-2 py-2 my-2 text-sm font-medium text-center text-white bg-pinkP rounded-lg hover:text-black hover:bg-lightpink focus:ring-4 focus:outline-none focus:ring-lightpink"
                  @click="step = 1">
                  <svg
                    class="w-6 h-6transition duration-75"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  上一步
                </button>
                <button
                  type="button"
                  class="next action-button inline-flex ml-2 items-center px-3 py-2 my-2 text-sm font-medium text-center text-white bg-pinkP rounded-lg hover:text-black hover:bg-lightpink focus:ring-4 focus:outline-none focus:ring-lightpink"
                  @click="step = 3">
                  下一步
                  <svg
                    class="w-6 h-6transition duration-75"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </button>
              </div>
            </fieldset>
            <fieldset v-if="step === 3">
              <div class="flex justify-around items-center text-xl rounded-xl px-4 pb-6">
                <div>聯絡資訊</div>
                <svg
                  class="w-6 h-6transition duration-75"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                </svg>
                <div>場地資訊</div>
                <svg
                  class="w-6 h-6transition duration-75"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                </svg>
                <div class="text-pinkP px-4 py-2 border-b-2 border-pinkP">活動規劃</div>
              </div>
              <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <!-- -活動名稱 -->
                <div class="w-full">
                  <label for="large-input" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">活動名稱：</label>
                  <input
                    v-model="form.mainname"
                    type="text"
                    id="large-input"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-lightpink sm:text-md focus:ring-pink-500 focus:border-pink-500" />
                </div>
                <!-- -活動時間 -->
                <div class="w-full">
                  <label for="large-input" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">活動時間(例 10:00 ~ 16:00)：</label>
                  <input
                    v-model="form.time"
                    type="text"
                    id="large-input"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-lightpink sm:text-md focus:ring-pink-500 focus:border-pink-500" />
                </div>
                <!-- -活動時間 -->
                <div class="w-full">
                  <label for="large-input" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">活動開始：</label>
                  <input
                    v-model="form.dateStart"
                    type="text"
                    id="large-input"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-lightpink sm:text-md focus:ring-pink-500 focus:border-pink-500" />
                </div>
                <div class="w-full">
                  <label for="large-input" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">活動結束：</label>
                  <input
                    v-model="form.dateEnd"
                    type="text"
                    id="large-input"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-lightpink sm:text-md focus:ring-pink-500 focus:border-pink-500" />
                </div>
                <!-- <div class="w-full">
                    <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">date</label>
                    <div date-rangepicker id="dateRangePickerId" class="flex items-center">
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              fill-rule="evenodd"
                              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                              clip-rule="evenodd"></path>
                          </svg>
                        </div>
                        <input
                          ref="dateStartInput"
                          name="start"
                          type="text"
                          class="bg-white border border-gray-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                          placeholder="Select date start" />
                      </div>
                      <span class="mx-4 text-gray-500">to</span>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              fill-rule="evenodd"
                              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                              clip-rule="evenodd"></path>
                          </svg>
                        </div>
                        <input
                          ref="dateEndInput"
                          name="end"
                          type="text"
                          class="bg-white border border-gray-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                          placeholder="Select date end" />
                      </div>
                    </div>
                  </div> -->
                <!-- -活動內容 -->
                <div class="sm:col-span-2">
                  <label for="description" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">活動內容：</label>
                  <textarea
                    v-model="form.description"
                    id="description"
                    rows="8"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-lightpink sm:text-md focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Your description here"></textarea>
                </div>
              </div>
              <div class="flex justify-center py-4">
                <button
                  @click="step = 2"
                  type="button"
                  class="previous action-button inline-flex items-center px-3 mr-2 py-2 my-2 text-sm font-medium text-center text-white bg-pinkP rounded-lg hover:text-black hover:bg-lightpink focus:ring-4 focus:outline-none focus:ring-lightpink">
                  <svg
                    class="w-6 h-6transition duration-75"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  上一步
                </button>
                <button
                  type="submit"
                  class="submit action-button inline-flex ml-2 items-center px-3 py-2 my-2 text-sm font-medium text-center text-white bg-pinkP rounded-lg hover:text-black hover:bg-lightpink focus:ring-4 focus:outline-none focus:ring-lightpink">
                  送出
                  <svg
                    class="w-6 h-6transition duration-75"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref, onMounted } from 'vue'
import { apiAuth, api } from '@/plugins/axios'
import Swal from 'sweetalert2'
import Input from '../../components/Inputpink.vue'

import DateRangePicker from 'flowbite-datepicker/DateRangePicker'
const step = ref(1)
const rentals = reactive([])

const categorys = ['一般團體', '藝文團體', '其他']
const Rentals = ['玻璃貨櫃屋(2層樓)', 'AZ劇場', '展覽會館', '其他']
const visites = ['不開放', '自由入場', '索票/邀請函', '售票', '其他']

const activities = [
  '座談會/研討會/研習/講座/論壇',
  '記者會/發表會',
  '同人/社團活動',
  '藝術/文化展演活動',
  '消費者體驗活動',
  '演唱會/簽名會',
  '個展/畢展',
  '影片/平面拍攝',
  '園遊會/家庭日/市集',
  '其他'
]

const form = reactive({
  _id: '',
  name: '',
  unit: '',
  email: '',
  time: '',
  date: '',
  phone: '',
  adresse: '',
  category: '',
  rental: '',
  visite: '',
  activity: '',
  uniform: '',
  dateStart: '',
  dateEnd: '',
  mainname: '',
  description: ''
})

const rentalForm = async () => {
  try {
    await apiAuth.post('/rentalorders', form)
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '表單已送出'
    })
    form.name = ''
    form.unit = ''
    form.email = ''
    form.date = ''
    form.phone = ''
    form.adresse = ''
    form.category = ''
    form.rental = ''
    form.visite = ''
    form.activity = ''
    form.uniform = ''
    form.dateStart = ''
    form.dateEnd = ''
    form.mainname = ''
    form.description = ''
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
}

;(async () => {
  try {
    // !資料要解構 data:新名字
    const { data } = await api.get('/rentals')
    rentals.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
    console.log(error)
  }
})()
</script>
