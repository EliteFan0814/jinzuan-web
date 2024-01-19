<template>
  <div class="carousel-wrap">
    <swiper
      :speed="800"
      :navigation="{ enabled: true }"
      :pagination="{ enabled: true, clickable: true }"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
      :slides-per-view="1"
      :loop="true"
      :modules="state.swiperModules">
      <swiper-slide v-for="(item, index) in state.bannerList" :key="index">
        <div class="banner-wrap"><img :src="item.url" alt="" /></div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts" setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const state = reactive({
  bannerList: [
    { url: "https://dummyimage.com/1000x400/ccc/fff" },
    { url: "https://dummyimage.com/1000x400/ccc/fff" },
    { url: "https://dummyimage.com/1000x400/ccc/fff" },
    { url: "https://dummyimage.com/1000x400/ccc/fff" },
    { url: "https://dummyimage.com/1000x400/ccc/fff" },
    { url: "https://dummyimage.com/1000x400/ccc/fff" },
    { url: "https://dummyimage.com/1000x400/ccc/fff" },
    { url: "https://dummyimage.com/1000x400/ccc/fff" },
  ],
  swiperModules: [Pagination, Autoplay, Navigation],
});
const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};
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
