<template>
  <main class="main">
    <Carousel></Carousel>
    <!-- 产品中心 -->
    <section class="products">
      <h2 class="big-title">
        <span class="h2-left">PRODUCTS&nbsp;</span>
        <span class="h2-right">CENTER</span>
      </h2>
      <h3 class="sub-title">
        主营产品：石油/天然气钻头用金刚石复合片，切削刀具用金刚石复合片和煤田/矿山用金刚石复合片，聚晶金刚石拉丝模坯
      </h3>
      <el-row>
        <el-col :md="8" v-for="(item, index) in state.produstsClassList" :key="index">
          <div class="products-class">
            <h4 class="p-c-name">
              <img src="/logo.png" alt="jzdia logo" class="logo-title" />
              <span class="omit-1" :title="item.label">{{ item.label }}</span>
            </h4>
            <div class="p-c-content">
              <img :src="item.img" alt="" />
              <div class="hover-info">
                <p class="present">
                  公司生产产品广泛应用于石油钻探及矿山开采，电线电缆、木材、陶瓷、金属及其它材料的切割加工等领域。
                </p>
                <ul class="feature">
                  <li>
                    <span class="point">●</span>
                    <span class="f-item">金刚石复合片</span>
                  </li>
                  <li>
                    <span class="point">●</span>
                    <span class="f-item">金刚石复合片</span>
                  </li>
                  <li>
                    <span class="point">●</span>
                    <span class="f-item">金刚石复合片</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </section>
    <!-- 新闻中心 -->
    <section class="news">
      <h2 class="big-title">
        <span class="h2-left">NEWS&nbsp;</span>
        <span class="h2-right">CENTER</span>
      </h2>
      <h3 class="sub-title">公司新闻、最新行业动态实时更新</h3>
      <div class="news-wrap">
        <div class="news-item">
          <el-row>
            <el-col :md="4"><div>新闻报道<time>2023-10-30</time></div></el-col>
            <el-col :md="20"><div>新闻报道新闻报道新闻报道新闻报道</div></el-col>
          </el-row>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
const state = reactive({
  produstsClassList: [
    {
      label: "电子、半导体、子、半导体、金刚子、半导体、金刚子、半导体、金刚金刚石",
      img: "https://dummyimage.com/600x400/ccc/fff",
    },
    { label: "电子、半导体、金刚石", img: "https://dummyimage.com/600x400/ccc/fff" },
    { label: "电子、半导体、金刚石", img: "https://dummyimage.com/600x400/ccc/fff" },
    { label: "电子、半导体、金刚石", img: "https://dummyimage.com/600x400/ccc/fff" },
    { label: "电子、半导体、金刚石", img: "https://dummyimage.com/600x400/ccc/fff" },
    { label: "电子、半导体、金刚石", img: "https://dummyimage.com/600x400/ccc/fff" },
  ],
});
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
        img {
          width: 100%;
          display: block;
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
      border: 1px solid red;
    }
  }
}
</style>
