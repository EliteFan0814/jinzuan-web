<template>
  <div class="page-wrap">
    {{ pre }}---{{ pageListArr }}---{{ next }}
    <ul class="page-list">
      <li v-if="pre > 0" class="page-item">
        <a href=""></a>
        <NuxtLink :to="`/productList/${route.params.pcName}/${route.params.pcId}/${pageListArr[0]}`">
          <!-- {{ pageListArr[0] }} -->
          <el-icon><ArrowLeftBold /></el-icon>
        </NuxtLink>
      </li>
      <li v-for="(item, index) in pageListArr" :key="item" class="page-item">
        <NuxtLink :to="`/productList/${route.params.pcName}/${route.params.pcId}/${item}`">{{ item }}</NuxtLink>
      </li>
      <li v-if="next > 0" class="page-item">
        <NuxtLink
          :to="`/productList/${route.params.pcName}/${route.params.pcId}/${pageListArr[pageListArr.length - 1]}`">
          {{ next }}
          <el-icon><ArrowLeftBold /></el-icon>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// You might choose this based on an API call or logged-in status
const nuxtApp = useNuxtApp()
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  nuxtApp.vueApp.component(key, component)
}
const route = useRoute();
const props = defineProps({
  total: Number,
  pageSize: Number,
  currentPage: Number,
});
const pageListArr = ref<number[]>([]);
const pre = ref(1);
const next = ref(1);
const pageGenerate = (total: number, pageSize: number, currentPage: number) => {
  let maxPage = Math.ceil(total / pageSize);
  if (currentPage > maxPage) {
    currentPage = maxPage;
  }
  let min = 1;
  let max = 1;
  if (currentPage > 3) {
    min = currentPage - 2;
  }
  if (currentPage + 7 > maxPage) {
    max = maxPage;
  } else {
    max = currentPage + 7;
  }
  for (min; min <= max; min++) {
    pageListArr.value.push(min);
  }
  console.log(pageListArr);
  if (currentPage - 1 > 0) {
    pre.value = currentPage - 1;
  } else {
    pre.value = -1;
  }
  if (currentPage + 1 <= max) {
    next.value = currentPage + 1;
  } else {
    next.value = -1;
  }
};
pageGenerate(props.total, props.pageSize, props.currentPage);
</script>

<style lang="scss" scoped>
.page-wrap {
  width: 100%;
  .page-list {
    display: flex;
    justify-content: center;
    .page-item {
      border: 1px solid red;
      width: 20px;
      margin: 0 5px;
      a {
        display: block;
        text-align: center;
      }
    }
  }
}
</style>
