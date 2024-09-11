<template>
  <div class="products-wrap">
    <!-- <Head>
      <Title>{{ state.productNameEn }}</Title>
      <Meta name="keywords" :content="state.productNameEn" />
      <Meta name="keywords" :content="state.remark" />
    </Head> -->
    <link rel="stylesheet" href="/css/quill.core.css" />
    <link rel="stylesheet" href="/css/quill.snow.css" />
    <link rel="stylesheet" href="/css/quill.bubble.css" />
    <div class="head">
      <!-- <img src="https://dummyimage.com/1200x200/ccc/fff" alt="" /> -->
      <img :src="productsImg" alt="" />
      <span class="head-title">Products</span>
    </div>
    <div class="products-content" v-loading="state.loading">
      <el-affix :offset="100" class="left hidden-md-and-down" style="z-index: 2">
        <div>
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
          <div class="link-wrap">
            <h2>Phone / WhatsApp</h2>
            <div class="icon-wrap phone">
              <a
                href="//wa.me/8618117002521?text=Hello, I+am+Alexis+Ye+from+Zhengzhou+Jinzuan+Diamond+Tools+Co.,+Ltd.+Welcome+to+your+inquiry.">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-whatsapp"></use>
                </svg>
              </a>
              <a
                href="//wa.me/8618117002521?text=Hello, I+am+Alexis+Ye+from+Zhengzhou+Jinzuan+Diamond+Tools+Co.,+Ltd.+Welcome+to+your+inquiry.">
                +86 18117002521
              </a>
            </div>
            <div class="icon-wrap phone">
              <a href="tel:8618117002521">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-tel"></use>
                </svg>
              </a>
              <a href="tel:8618117002521">+86 18117002521</a>
            </div>
          </div>
          <div class="link-wrap">
            <h2>Email</h2>
            <div class="icon-wrap phone">
              <a href="mailto:cartroyal@gmail.com">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-email"></use>
                </svg>
              </a>
              <a href="mailto:cartroyal@gmail.com">cartroyal@gmail.com</a>
            </div>
          </div>
        </div>
      </el-affix>
      <!-- <div class="left-div"></div> -->
      <div class="right">
        <div class="bread-wrap">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
            <el-breadcrumb-item><NuxtLink to="/productList/Products/100/1">Products List</NuxtLink></el-breadcrumb-item>
            <el-breadcrumb-item>
              <NuxtLink :to="`/productList/${route.params.pcName}/${route.params.pcId}/1`">
                {{ state.productClassNameEn }}
              </NuxtLink>
            </el-breadcrumb-item>
            <el-breadcrumb-item>{{ state.productNameEn }}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="product-content">
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
import productsImg from "~/assets/products.jpg";
const route = useRoute();
const state = reactive({
  loading: false,
  productId: route.params.productId,
  productClassName: "",
  productClassNameEn: "",
  productName: "",
  productNameEn: "",
  content: "",
  remark: "",
});
const config = useRuntimeConfig();
const baseUrl = config.public.apiBaseUrl;

const seoProductNameEn = ref();
const seoRemark = ref();
useHead({
  title: seoProductNameEn,
  meta: [
    { name: "description", content: seoProductNameEn },
    { name: "keywords", content: seoRemark },
  ],
});
// 获取产品详情
const handleGetProductDetail = async () => {
  const { data, error, refresh } = await useFetch(`${baseUrl}/web-api/webOffice/product/${state.productId}`);
  const res: any = data.value;
  if (res.code === 200) {
    state.content = res.data.content;
    state.productClassName = res.data.productClass.productClassName;
    state.productClassNameEn = res.data.productClass.productClassNameEn;
    state.productName = res.data.productName;
    state.productNameEn = res.data.productNameEn;
    state.remark = res.data.remark;
    // 用于页面seo
    seoProductNameEn.value = res.data.productNameEn;
    seoRemark.value = res.data.remark;
  }
};
handleGetProductDetail();
</script>
<style lang="scss" scoped>
.products-wrap {
  .head {
    position: relative;
    .head-title {
      color: #fff;
      font-size: 0.5rem;
      font-weight: 600;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
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
      width: 200px;
      .link-wrap {
        margin-right: 0.1rem;
        padding-bottom: 0.1rem;
        border-bottom: 1px solid #ebebeb;
        h2 {
          font-size: 16px;
          color: #666;
        }
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
        .phone {
          display: flex;
          align-items: center;
          margin-bottom: 0.05rem;
          &:last-child {
            margin-bottom: 0;
          }
          a {
            &:hover {
              text-decoration: underline;
              color: #ffbf6c;
            }
          }
          .icon {
            color: #ffc107;
          }
        }
      }
    }
    .right {
      box-sizing: border-box;
      width: calc(100% - 200px);
      flex-grow: 1;
      padding: 0.1rem;
      .bread-wrap {
        margin-bottom: 0.1rem;
      }
      .product-content {
        .ql-container {
          border: 1px solid #dcdfe6;
          .ql-editor {
            border: none;
            :deep(.ql-video) {
              width: 100%;
              max-width: 100%;
              height: 2.5rem;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 992px) {
    .products-content {
      margin: 0;
    }
  }
}
</style>
