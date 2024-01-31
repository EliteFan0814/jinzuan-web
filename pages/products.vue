<template>
  <div class="products-wrap">
    <div class="head">
      <img src="https://dummyimage.com/1200x200/ccc/fff" alt="" />
    </div>
    <div class="products-content" v-loading="state.loading">
      <div class="left">
        <el-menu :default-openeds="['0']" @open="handleOpen" @close="handleClose">
          <el-sub-menu v-for="(item, index) in state.productsClassList" :key="item.id" :index="String(index)">
            <template #title>
              <span>{{ item.label }}</span>
            </template>
            <el-menu-item
              v-for="(innerItem, innerIndex) in item.children"
              :key="innerItem.id"
              :index="String(index) + '-' + String(innerIndex)">
              {{ innerItem.label }}
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </div>
      <div class="right">
        <div class="bread-wrap">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
            <el-breadcrumb-item><NuxtLink to="/products">Products List</NuxtLink></el-breadcrumb-item>
            <el-breadcrumb-item>promotion list</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="product-list">
          <el-row>
            <el-col :md="6" :sm="8" v-for="(item, index) in state.productsList" :key="index">
              <div class="p-item">
                <div class="img-wrap">
                  <img :src="item.img" :alt="item.label" class="p-img" />
                </div>
                <div class="p-name omit-1">
                  <NuxtLink :to="`/webProducts/${item.id}`">{{ item.label }}</NuxtLink>
                </div>
                <div class="item"></div>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <div class="pagination">
              <el-pagination background layout="prev, pager, next" :total="1000" />
            </div>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const state = reactive({
  loading: false,
  activeNames: "0",
  productsClassList: [] as any,
  productsList: [
    {
      label: "PCD-切削用金刚石复合片",
      img: "https://dummyimage.com/800x600/ccc/fff",
      id: 1,
    },
    {
      label: "PCD-切削用金刚石复合片",
      img: "https://dummyimage.com/1200x600/ccc/fff",
      id: 2,
    },
    {
      label: "PCD-切削用金刚石复合片",
      img: "https://dummyimage.com/900x1600/ccc/fff",
      id: 3,
    },
    {
      label: "PCD-切削用金刚石复合片",
      img: "https://dummyimage.com/800x480/ccc/fff",
      id: 4,
    },
    {
      label: "PCD-切削用金刚石复合片",
      img: "https://dummyimage.com/800x600/ccc/fff",
      id: 5,
    },
  ],
});
const config = useRuntimeConfig();
const baseUrl = config.public.apiBaseUrl;
onMounted(async () => {
  await handleGetProductsClassList();
});
// 获取产品分类
const handleGetProductsClassList = async () => {
  try {
    state.loading = true;
    // const res = await useFetch(`${baseUrl}/web-api/webOffice/product/productsClassTree`);
    const res = await $fetch(`${baseUrl}/web-api/webOffice/product/productsClassTree`);
    if (res.code === 200) {
      console.log(res);
      state.productsClassList = res.data;
    }
  } catch (err) {
  } finally {
    state.loading = false;
  }
};
// handleGetProductsClassList();

const handleOpen = () => {};
const handleClose = () => {};
</script>
<style lang="scss" scoped>
.products-wrap {
  .head {
    img {
      width: 100%;
    }
  }
  .products-content {
    margin: 0 1rem;
    padding: 0.1rem 0;
    display: flex;
    .left {
      flex-shrink: 0;
      width: 20%;
      .el-collapse {
      }
    }
    .right {
      flex-grow: 1;
      padding: 0.1rem;
      .bread-wrap {
        margin-bottom: 0.1rem;
      }
      .product-list {
        .p-item {
          padding: 0.1rem 0;
          border: 1px solid transparent;
          transition: all 0.2s;
          &:hover {
            border: 1px solid #ffbf6c;
          }
          .img-wrap {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 80%;
            margin: 0 auto;
            height: 200px;
            margin-bottom: 0.05rem;
            // border: 1px solid red;
            .p-img {
              display: block;
              max-width: 100%;
              max-height: 100%;
            }
          }
          .p-name {
            cursor: pointer;
            margin: 0 auto;
            width: 80%;
            text-align: center;
            &:hover {
              color: #ffbf6c;
              font-weight: bold;
            }
          }
          .item {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
        .pagination {
          width: 100%;
          padding: 0.05rem 0;
          display: flex;
          justify-content: center;
        }
      }
    }
  }
}
</style>
