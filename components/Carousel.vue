<template>
  <div class="carousel-wrap">
    <swiper
      :speed="800"
      :navigation="{ enabled: true }"
      :pagination="{ enabled: true, clickable: true }"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
      :slides-per-view="1"
      :loop="true"
      :modules="state.swiperModules"
    >
      <swiper-slide v-for="(item, index) in state.bannerList" :key="index">
        <div class="banner-wrap"><img :src="item.url" alt="" /></div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts" setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import banner0Img from '~/assets/banner0.jpg'
import banner1Img from '~/assets/banner1.jpg'
import banner2Img from '~/assets/banner2.jpg'
import banner3Img from '~/assets/banner3.jpg'
// { url: "https://dummyimage.com/1000x400/ccc/fff" },
const state = reactive({
  bannerList: [{ url: banner0Img }, { url: banner1Img }, { url: banner2Img }, { url: banner3Img }],
  swiperModules: [Pagination, Autoplay, Navigation]
})
const onSwiper = (swiper) => {
  // console.log(swiper)
}
const onSlideChange = () => {
  // console.log('slide change')
}
</script>

<style lang="scss" scoped>
.carousel-wrap {
  .banner-wrap {
    height: 4rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
