<template>
  <div class="products-wrap">
    <div class="head">
      <img src="https://dummyimage.com/1200x200/ccc/fff" alt="" />
    </div>
    <div class="products-content">
      <div class="left">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-sub-menu index="1">
            <template #title>
              <span>产品类别1</span>
            </template>
            <el-menu-item index="1-1">产品1</el-menu-item>
            <el-menu-item index="1-1">产品1</el-menu-item>
            <el-menu-item index="1-1">产品1</el-menu-item>
            <el-menu-item index="1-1">产品1</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <span>产品类别2</span>
            </template>
            <el-menu-item index="1-1">产品1</el-menu-item>
            <el-menu-item index="1-1">产品1</el-menu-item>
            <el-menu-item index="1-1">产品1</el-menu-item>
            <el-menu-item index="1-1">产品1</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <span>产品类别3</span>
            </template>
            <el-menu-item index="1-1">产品1</el-menu-item>
            <el-menu-item index="1-1">产品1</el-menu-item>
            <el-menu-item index="1-1">产品1</el-menu-item>
            <el-menu-item index="1-1">产品1</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </div>
      <div class="right">
        <div class="bread-wrap">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
            <el-breadcrumb-item><NuxtLink to="/products">Products List</NuxtLink></el-breadcrumb-item>
            <el-breadcrumb-item>{{ route.params.productId }}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="product-list">
          <el-row>
            <el-col :md="6" :sm="8" v-for="(item, index) in state.productsList" :key="index">
              <div class="p-item">
                <div class="img-wrap">
                  <img :src="item.img" :alt="item.label" class="p-img" />
                </div>
                <div class="p-name omit-1">{{ item.label }}</div>
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
const route = useRoute();
const state = reactive({
  activeNames: "1",
  productsList: [
    {
      label: "PCD-切削用金刚石复合片",
      img: "https://dummyimage.com/800x600/ccc/fff",
    },
    {
      label: "PCD-切削用金刚石复合片",
      img: "https://dummyimage.com/1200x600/ccc/fff",
    },
    {
      label: "PCD-切削用金刚石复合片",
      img: "https://dummyimage.com/900x1600/ccc/fff",
    },
    {
      label: "PCD-切削用金刚石复合片",
      img: "https://dummyimage.com/800x480/ccc/fff",
    },
    {
      label: "PCD-切削用金刚石复合片",
      img: "https://dummyimage.com/800x600/ccc/fff",
    },
  ],
});
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
