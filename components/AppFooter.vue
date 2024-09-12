<template>
  <footer class="footer">
    <div class="f-1">
      <el-row>
        <el-col :md="6">
          <div class="f-logo">
            <img src="~/assets/logo_white.svg" alt="logo" class="logo-img" />
            <p class="f-resume">
              JinZuan is a diversified global abrasives manufacturing company that brings products and technologies
              together.
            </p>
          </div>
        </el-col>
        <el-col :md="6">
          <div class="f-contact">
            <h4>Follow Us Now</h4>
            <div class="f-c-item">
              <span class="f-c-name">WhatsApp：</span>
              <a
                class="f-c-value"
                href="//wa.me/8618117002521?text=Hello, I+am+Alexis+Ye+from+Zhengzhou+Jinzuan+Diamond+Tools+Co.,+Ltd.+Welcome+to+your+inquiry.">
                +86 18117002521
              </a>
            </div>
            <div class="f-c-item">
              <span class="f-c-name">Phone：</span>
              <a class="f-c-value" href="tel:8618117002521">+86 18117002521</a>
            </div>
            <div class="f-c-item">
              <span class="f-c-name">Email：</span>
              <a class="f-c-value" href="mailto:cartroyal@gmail.com">cartroyal@gmail.com</a>
            </div>
          </div>
        </el-col>
        <el-col :md="6">
          <div class="f-contact">
            <h4>Useful Links</h4>
            <div class="f-c-item" v-for="(item, index) in state.navigationList" :key="index">
              <NuxtLink class="f-c-value" :to="item.route">{{ item.label }}</NuxtLink>
            </div>
          </div>
        </el-col>
        <el-col :md="6">
          <div class="f-contact">
            <h4>Main Office</h4>
            <div class="f-c-item">A02 No.167 Xuchang Road Shangjie District Zhengzhou City Henan Province China</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="f-2">
      <el-row>
        <el-col>
          <div class="f-end">Copyright © 2024 Zhengzhou Jinzuan Diamond Tool Co., Ltd.</div>
        </el-col>
      </el-row>
    </div>
  </footer>
</template>
<script lang="ts" setup>
const state = reactive({
  navigationList: [
    { label: "home", hasChild: false, route: "/" },
    { label: "about", hasChild: false, route: "/about" },
    // { label: "solutions", hasChild: true, route: "/solutions" },
    { label: "products", hasChild: true, route: "/productList/Products/100/1" },
    { label: "news", hasChild: false, route: "/newsList/1" },
    // { label: "downloads", hasChild: false, route: "/downloads" },
    // { label: "contacts", hasChild: false, route: "/contacts" },
  ],
});
</script>
<style lang="scss" scoped>
.footer {
  position: relative;
  z-index: 3;
  background-color: #1a1a1a;
  color: #fff;
  .f-1 {
    padding: 0.1rem;

    .f-logo {
      width: 70%;
      .logo-img {
        display: block;
        width: 70%;
      }
      .f-resume {
        width: 100%;
      }
    }
    .f-contact {
      h4 {
        margin: 0;
        margin-bottom: 0.1rem;
        font-size: 0.12rem;
      }
      .f-c-item {
        margin-bottom: 0.05rem;
        .f-c-name {
          color: #ffbf6c;
        }
        .f-c-value {
          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }

      }
    }
    @media only screen and (max-width: 992px) {
      font-size: 14px;
      .f-contact {
        h4 {
          font-size: 18px;
        }
        .f-c-item {
          text-align: center;
        }
      }
    }
  }
  .f-end {
    background-color: #000;
    color: #fff;
    text-align: center;
    padding: 0.1rem 0;
  }
}
@media only screen and (max-width: 992px) {
  .footer {
    .f-1 {
      .f-logo,
      .f-contact {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 0.4rem;
      }
    }
  }
}
</style>
