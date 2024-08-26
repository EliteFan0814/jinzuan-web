<template>
  <main class="main">
    <Carousel></Carousel>
    <!-- 产品中心 -->
    <section class="products">
      <h2 class="big-title">
        <span class="h2-left">PRODUCTS&nbsp;</span>
        <span class="h2-right">CENTER</span>
      </h2>
      <h3 class="sub-title">Main Products：Metal Bond、Resin Bond、Electroplated、Vitrified、Brazed</h3>
      <el-row v-if="state.productsClassList.length > 0">
        <el-col :md="8" v-for="(item, index) in state.productsClassList" :key="index">
          <div class="products-class">
            <h4 class="p-c-name">
              <img src="/logo.png" alt="jzdia" class="logo-title" />
              <NuxtLink to="/products">
                <span class="omit-1" :title="item.labelEn">{{ item.labelEn }}</span>
              </NuxtLink>
            </h4>
            <NuxtLink to="/products">
              <div class="p-c-content">
                <div class="img-wrap">
                  <img :src="item.avatar" alt="" />
                </div>
                <div class="hover-info">
                  <p class="present">
                    {{ item.leader }}
                  </p>
                </div>
              </div>
            </NuxtLink>
          </div>
        </el-col>
      </el-row>
      <el-empty v-else description="No Data" />
    </section>
    <!-- 新闻中心 -->
    <section class="news">
      <h2 class="big-title">
        <span class="h2-left">NEWS&nbsp;</span>
        <span class="h2-right">CENTER</span>
      </h2>
      <h3 class="sub-title">Company news and latest industry trends</h3>
      <div v-if="state.newsList.length > 0" class="news-wrap">
        <div class="news-item" v-for="(item, index) in state.newsList" :key="index">
          <el-row>
            <el-col :md="6">
              <div>
                <span class="news-class">News</span>
                <time>{{ item.createTime?.slice(0, 10) }}</time>
              </div>
            </el-col>
            <el-col :md="18">
              <div class="news-title omit-1">
                <NuxtLink :to="`/webNews/${item.newsId}`">{{ item.newsName }}</NuxtLink>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="more">
          <button class="common-btn"><NuxtLink :to="`/news/`">More</NuxtLink></button>
        </div>
      </div>
      <el-empty v-else description="No Data" />
    </section>
  </main>
</template>

<script lang="ts" setup>
//     { label: '电子、半导体、金刚石', img: 'https://dummyimage.com/600x400/ccc/fff' }
const state = reactive({
  loading: false,
  productsClassList: [],
  newsList: [],
});
const config = useRuntimeConfig();
const baseUrl = config.public.apiBaseUrl;

onMounted(async () => {
  // await handleGetProductsClassList();
  // await handleGetNewsList();
});
// 获取产品分类
const handleGetProductsClassList = async () => {
  try {
    state.loading = true;
    const { data, pending, error, refresh } = await useFetch(`${baseUrl}/web-api/webOffice/product/productsClassTree`);
    const res: any = data.value;
    console.log(res);
    console.log(pending);
    console.log(error);
    console.log(refresh);
    // const res = await $fetch(`${baseUrl}/web-api/webOffice/product/productsClassTree`);
    if (res.code === 200) {
      state.productsClassList = res.data[0].children;
    }
  } catch (err) {
    console.log(err, 1);
  } finally {
    state.loading = false;
  }
};
// 获取新闻列表
const handleGetNewsList = async () => {
  try {
    state.loading = true;
    const { data, pending } = await useFetch(`${baseUrl}/web-api/webOffice/news/list?pageNum=1&pageSize=10`);
    const res: any = data.value;
    console.log(res);
    // const res: any = await $fetch(`${baseUrl}/web-api/webOffice/news/list?pageNum=1&pageSize=10`);
    if (res.code === 200) {
      state.newsList = res.rows;
    }
  } catch (err) {
  } finally {
    state.loading = false;
  }
};
handleGetProductsClassList();
// handleGetNewsList();

// const { data, pending } = await useFetch(`${baseUrl}/web-api/webOffice/product/productsClassTree`);
// const res: any = data.value;
// if (res.code === 200) {
//   state.productsClassList = res.data[0].children;
// }
</script>

<style lang="scss" scoped>
// 公共样式
.big-title {
  font-family: times new roman, times, serif;
  font-weight: 400;
  font-size: 0.2rem;
  text-align: center;
  margin-bottom: 0;
  .h2-left {
    color: #2f318b;
  }
  .h2-right {
    color: #f5a63f;
  }
}
.sub-title {
  text-align: center;
  margin: 0.1rem 0;
  color: #9a9a9a;
}
.main {
  .products {
    padding: 0 0.1rem;

    .products-class {
      width: 95%;
      margin: 0 auto 0.05rem;
      .p-c-name {
        margin: 0;
        font-weight: 400;
        display: flex;
        align-items: center;
        @media only screen and (min-width: 992px) {
          font-size: 0.1rem;
          .logo-title {
            width: 0.1rem;
            margin-right: 5px;
          }
        }
        @media only screen and (max-width: 992px) {
          font-size: 16px;
          .logo-title {
            width: 16px;
            margin-right: 5px;
          }
        }
        padding: 0.03rem 0;
      }
      .p-c-content {
        position: relative;
        .img-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          // height: 400px;
          img {
            max-width: 100%;
            max-height: 100%;
            display: block;
          }
        }
        .hover-info {
          // display: none;
          transition: all 0.3s;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          color: transparent;
          background: rgba(0, 0, 0, 0);
          .present {
            padding: 0.2rem;
          }
          .feature {
            li {
              cursor: pointer;
              margin-bottom: 0.05rem;
              .point {
                padding-right: 5px;
              }
              &:hover {
                font-weight: bold;
                color: #f5a63f;
              }
            }
          }
        }
        &:hover {
          .hover-info {
            display: block;
            color: #fff;
            background: rgba(0, 0, 0, 0.6);
          }
        }
      }
    }
  }
  .news {
    background-color: #efefef;
    padding: 0.1rem;
    .news-wrap {
      margin: 0 2rem;
      .news-item {
        font-size: 16px;
        padding: 0.1rem 0;
        border-top: 1px solid #ccc;
        &:last-child {
          border-bottom: 1px solid #ccc;
        }
        .news-class {
          display: inline-block;
          padding: 0.04rem 0.08rem;
          background-color: #f5a63f;
          color: #fff;
          cursor: pointer;
          &:hover {
            background-color: #ccc;
          }
        }
        time {
          display: inline-block;
          padding: 0.04rem 0.1rem;
        }
        .news-title {
          padding: 0.04rem 0.1rem;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
            color: #f5a63f;
          }
        }
      }
      .more {
        text-align: center;
        .common-btn {
          color: #151515;
          background-color: #ccc;
          border: none;
          padding: 0.05rem 0.1rem;
          cursor: pointer;
          transition: all 0.2s;
          &:hover {
            background-color: #f5a63f;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
