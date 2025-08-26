<script setup>
import { apiAuth } from '@/plugins/axios'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/users'
import { reactive, computed, ref } from 'vue'
import Swal from 'sweetalert2'
import ImageInput from '../../components/UploadImage.vue'

const user = useUserStore()

const members = reactive([])

// 分頁
const limit = 5
const totalPage = ref(1)
const currentPage = ref(1)

// 搜尋
const searchValue = ref('')

// 篩選
const filterMain = ref('全部')
const filterData = computed(() => {
  const isSearch = searchValue.value !== ''
  const membersList = members.filter(item => {
    if (isSearch) {
      return item.account.toUpperCase().includes(searchValue.value.toUpperCase())
    } else {
      if (filterMain.value === '全部') return item
      return item.category === filterMain.value
    }
  })
  totalPage.value = Math.ceil(membersList.length / limit)
  return membersList
})

const showPageData = computed(() => {
  const startIndex = (currentPage.value - 1) * limit
  const endIndex = currentPage.value * limit
  return filterData.value.slice(startIndex, endIndex)
})

const { account, email, role, image } = storeToRefs(user)

const form = reactive({
  _id: '',
  account: account.value || '',
  image: image.value || '',
  email: email.value || '',
  role: role.value || '',
  editing: false
})

// 取消編輯
const cancel = () => {
  form._id = ''
  form.account = ''
  form.email = ''
  form.image = ''
  form.role = ''
  form.editing = false
}

// 編輯按鈕
const editBtn = data => {
  form._id = data._id
  form.account = data.account
  form.email = data.email
  form.image = data.image
  form.role = data.role
  form.editing = true
}

// 提交修改
const submit = async () => {
  const fd = new FormData()
  fd.append('_id', form._id)
  fd.append('account', form.account)
  fd.append('email', form.email)
  fd.append('role', form.role)
  fd.append('image', form.image)

  try {
    const { data } = await apiAuth.patch('/users/edituser', fd)
    const idx = members.findIndex(item => item._id === form._id)

    // 安全生成 DiceBear seed
    const seed = encodeURIComponent(data.result.account || form.account)
    members[idx] = data.result
    members[idx].image =
      data.result.image && data.result.image.trim() !== ''
        ? data.result.image
        : `https://api.dicebear.com/9.x/beam/svg?seed=${seed}&size=256&colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`

    form.editing = false

    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '更改成功'
    })
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '更改失敗'
    })
  }
}

// 初始化會員資料
;(async () => {
  try {
    const { data } = await apiAuth.get('/users/all')
    members.push(...data.result)

    // 統一處理 DiceBear fallback avatar
    members.forEach(member => {
      const seed = encodeURIComponent(member.account || 'default')
      member.image =
        member.image && member.image.trim() !== ''
          ? member.image
          : `https://api.dicebear.com/9.x/beam/svg?seed=${seed}&size=256&colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`
    })
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()
</script>
