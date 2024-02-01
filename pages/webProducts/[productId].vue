<template>
  <div class="products-wrap">
    <link rel="stylesheet" href="/css/quill.core.css" />
    <link rel="stylesheet" href="/css/quill.snow.css" />
    <link rel="stylesheet" href="/css/quill.bubble.css" />
    <div class="head">
      <img src="https://dummyimage.com/1200x200/ccc/fff" alt="" />
    </div>
    <div class="products-content" v-loading="state.loading">
      <div class="left">
        <div class="link-wrap">
          <h2>Get Social</h2>
          <div class="icon-wrap">
            <a href="//www.youtube.com/@jinzuan">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-youtube"></use>
              </svg>
            </a>
            <a href="//www.pinterest.com/jzcut/">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-pinterestpinterest30"></use>
              </svg>
            </a>
            <a href="//www.facebook.com/jzcut">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-facebook"></use>
              </svg>
            </a>
            <a href="//instagram.com/jz_cut">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-instagram"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="bread-wrap">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
            <el-breadcrumb-item><NuxtLink to="/products">Products List</NuxtLink></el-breadcrumb-item>
            <el-breadcrumb-item>{{ state.productClassNameEn }}</el-breadcrumb-item>
            <el-breadcrumb-item>{{ state.productNameEn }}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="product-list">
          <el-row>
            <el-col>
              <div class="ql-container ql-snow">
                <div class="ql-editor" v-html="state.content"></div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
useHead({
  script: [
    {
      src: "/js/iconfont.js",
    },
  ],
});
const route = useRoute();
const state = reactive({
  loading: false,
  productId: route.params.productId,
  productClassName: "",
  productClassNameEn: "",
  productName: "",
  productNameEn: "",
  content: "",
});
const config = useRuntimeConfig();
const baseUrl = config.public.apiBaseUrl;
onMounted(async () => {
  await handleGetProductsDetail();
});
// 获取产品详情
const handleGetProductsDetail = async () => {
  try {
    state.loading = true;
    const res: any = await $fetch(`${baseUrl}/web-api/webOffice/product/${state.productId}`);
    if (res.code === 200) {
      state.content = res.data.content;
      state.productClassName = res.data.productClass.productClassName;
      state.productClassNameEn = res.data.productClass.productClassNameEn;
      state.productName = res.data.productName;
      state.productNameEn = res.data.productNameEn;
    }
  } catch (err) {
  } finally {
    state.loading = false;
  }
};
</script>
<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
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
      .link-wrap {
        .icon-wrap {
          .icon {
            font-size: 20px;
            margin: 0 0.05rem;
            color: #9b9b9b;
            cursor: pointer;
            transition: all 0.3s;
            &:hover {
              color: #ffbf6c;
            }
          }
        }
      }
    }
    .right {
      flex-grow: 1;
      padding: 0.1rem;
      border-left: 1px solid #dcdfe6;
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
