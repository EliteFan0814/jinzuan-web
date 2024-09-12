<template>
  <div class="newss-wrap">
    <link rel="stylesheet" href="/css/quill.core.css" />
    <link rel="stylesheet" href="/css/quill.snow.css" />
    <link rel="stylesheet" href="/css/quill.bubble.css" />
    <div class="head">
      <!-- <img src="https://dummyimage.com/1200x200/ccc/fff" alt="" /> -->
      <img :src="newsImg" alt="" />
      <span class="head-title">News</span>
    </div>
    <div class="newss-content" v-loading="state.loading">
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
      <div v-if="state.newsList.length > 0" class="right">
        <div class="bread-wrap">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
            <el-breadcrumb-item><NuxtLink to="/newsList/1">News List</NuxtLink></el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="news-content">
          <div class="news-item" v-for="(item, index) in state.newsList" :key="index">
            <el-row>
              <el-col :md="5">
                <div class="img-wrap">
                  <img :src="item.avatar" :alt="item.newsName" class="p-img" />
                </div>
              </el-col>
              <el-col :md="19">
                <div class="title-wrap">
                  <div class="title">{{ item.newsName }}</div>
                  <div class="time">{{ item.createTime }}</div>
                </div>
                <div class="more">
                  <button class="common-btn">
                    <NuxtLink :to="`/newsList/detail/${item.newsId}`">More</NuxtLink>
                  </button>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
        <el-row>
          <!-- <div class="pagination p-md">
            <el-pagination
              v-model:currentPage="state.queryParams.pageNum"
              v-model:page-size="state.queryParams.pageSize"
              :total="state.total"
              :page-sizes="[10, 20, 50, 100]"
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              layout="total, sizes, prev, pager, next, jumper" />
          </div>
          <div class="pagination p-xs">
            <el-pagination
              v-model:currentPage="state.queryParams.pageNum"
              v-model:page-size="state.queryParams.pageSize"
              layout="prev, pager, next"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :total="state.total" />
          </div> -->
          <paginationNews
            :total="state.total"
            :pageSize="state.queryParams.pageSize"
            :currentPage="state.queryParams.pageNum"></paginationNews>
        </el-row>
      </div>
      <el-empty v-else description="No Data" class="empty" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import newsImg from "~/assets/news.jpg";
const route = useRoute();
const state = reactive({
  loading: false,
  newsList: [],
  total: 0,
  queryParams: {
    pageNum: Number(route.params.page),
    pageSize: 10,
  },
});
const config = useRuntimeConfig();
const baseUrl = config.public.apiBaseUrl;
// onMounted(async () => {
//   await handleGetNewsList();
// });
// 获取新闻详情
const handleGetNewsList = async () => {
  try {
    state.loading = true;
    const queryStr = new URLSearchParams(state.queryParams).toString();
    // const res: any = await $fetch(`${baseUrl}/web-api/webOffice/news/list?${queryStr}`);
    const { data, pending, error, refresh } = await useFetch(`${baseUrl}/web-api/webOffice/news/list?${queryStr}`);
    const res: any = data.value;
    if (res.code === 200) {
      state.newsList = res.rows;
      state.total = res.total;
    }
  } catch (err) {
    console.log(err);
  } finally {
    state.loading = false;
  }
};
const handleCurrentChange = (val: number) => {
  handleGetNewsList();
};
// 改变页面容量
const handleSizeChange = (val: number) => {
  state.queryParams.pageNum = 1;
  state.queryParams.pageSize = val;
  handleGetNewsList();
};
handleGetNewsList();
</script>
<style lang="scss" scoped>
.newss-wrap {
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
  .newss-content {
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
      .news-content {
        .news-item {
          border-bottom: 1px solid #ebebeb;
          padding: 0.06rem 0;
          margin-bottom: 0.05rem;
          // background-color: #ebebeb;
          .img-wrap {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            margin: 0 auto;
            height: 150px;
            // margin-bottom: 0.05rem;
            // border: 1px solid red;
            .p-img {
              display: block;
              max-width: 100%;
              max-height: 100%;
            }
          }
          .title-wrap {
            padding: 0.05rem;
            font-size: 0.1rem;
            .title {
              font-weight: bold;
            }
            .time {
              padding: 0.08rem 0 0.02rem;
              font-size: 12px;
              color: #9b9b9b;
            }
          }
          .more {
            padding: 0.05rem;
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
      .pagination {
        width: 100%;
        padding: 0.05rem 0;
        display: flex;
        justify-content: center;
      }
      .p-md {
        display: flex;
      }
      .p-xs {
        display: none;
      }
    }
    .empty {
      width: 100%;
      text-align: center;
    }
  }
  @media only screen and (max-width: 992px) {
    .newss-content {
      margin: 0;
      .right {
        .p-md {
          display: none;
        }
        .p-xs {
          display: flex;
        }
      }
    }
  }
}
</style>
