<template>
  <div>
    <div class="images-wrapper" v-for="exhibition in exhibitions" :key="exhibition._id">
      <div class="image-container image-1">
        <div class="image"></div>
      </div>
      <div class="image-container image-2">
        <div class="image"></div>
      </div>
      <div class="image-container image-3">
        <div class="image"></div>
      </div>
    </div>
    <div class="text-container">
      <div class="text-wrapper">
        <div class="title-container">
          <div class="title-item active">Synth Normcore</div>
          <div class="title-item">Ethical Vinyl</div>
          <div class="title-item">Unami Bitters</div>
        </div>
        <div class="date-container">
          <div class="date-item active">01.10.18</div>
          <div class="date-item">10.10.19</div>
          <div class="date-item">11.19.20</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { onMounted } from 'vue'
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  let sections = gsap.utils.toArray('.image-container')
  let numbers = document.querySelectorAll('.number-item')
  let dates = document.querySelectorAll('.date-item')
  let titles = document.querySelectorAll('.title-item')

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: '.images-wrapper',
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      end: () => '+=' + (document.querySelector('.images-wrapper').offsetWidth - 5)
    }
  })
  sections.forEach((e, i) => {
    ScrollTrigger.create({
      trigger: e,
      start: i * e.offsetWidth,
      end: i * e.offsetWidth + e.offsetWidth,
      onEnter: () => showItem(i),
      onEnterBack: () => {
        hideItem(i + 1)
        showItem(i)
      },
      onLeave: () => hideItem(i)
    })
  })
  function hideItem(index) {
    if (index > sections.length - 1 || index < 0) return

    // add class to new sections
    numbers[index].classList.remove('active')
    titles[index].classList.remove('active')
    dates[index].classList.remove('active')
  }

  function showItem(index) {
    if (index > sections.length - 1 || index < 0) return

    // add class to new sections
    numbers[index].classList.add('active')
    titles[index].classList.add('active')
    dates[index].classList.add('active')
  }
})

const exhibitions = reactive([])

;(async () => {
  try {
    const { data } = await api.get('/exhibitions')
    exhibitions.push(...data.result.splice(1, 3))
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()

const info = id => {
  router.push(`/exhibition/${id}`)
}
</script>
