<template>
  <header>
    <div class="contact-wrap">
      <div class="c-left">Welcome to China Zhengzhou Jinzuan</div>
      <div class="c-right">
        <span>
          Email：
          <a class="mail" href="mailto:cartroyal@gmail.com">cartroyal@gmail.com</a>
        </span>
      </div>
    </div>
    <el-affix :offset="0">
      <div class="navigate-wrap">
        <div class="logo-wrap">
          <img src="~/assets/logo_black.svg" alt="logo" class="logo-img" />
        </div>
        <div class="navigation hidden-md-and-down">
          <ul>
            <li
              v-for="item in state.navigationList"
              :key="item.label"
              :class="{ 'li-active': item.activeList.includes(route.name) }">
              <el-popover v-if="item.hasChild" placement="bottom" trigger="hover">
                <template #reference>
                  <NuxtLink :to="item.route">{{ item.label }}</NuxtLink>
                </template>
                <div class="child">子类别</div>
              </el-popover>
              <NuxtLink v-else :to="item.route">{{ item.label }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="navigation n-phone">
          <el-dropdown>
            <div>
              <svg class="icon menumore" aria-hidden="true">
                <use xlink:href="#icon-menu"></use>
              </svg>
            </div>
            <!-- <svg class="icon menumore" aria-hidden="true">
              <use xlink:href="#icon-menu"></use>
            </svg> -->
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item v-for="item in state.navigationList" :key="item.label">
                  <NuxtLink :to="item.route">{{ item.label }}</NuxtLink>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </el-affix>
  </header>
</template>
<script lang="ts" setup>
const state = reactive({
  navigationList: [
    { label: "home", hasChild: false, route: "/", activeList: ["index"] },
    { label: "about", hasChild: false, route: "/about", activeList: ["about"] },
    // { label: "solutions", hasChild: true, route: "/solutions",activeList: ["solutions"] },
    // { label: "products", hasChild: false, route: "/products", activeList: ["products", "webProducts-productId"] },
    {
      label: "products",
      hasChild: false,
      route: "/product-list-Products_100",
      activeList: ["products", "product-list-pcName_pcId", "webProducts-productId"],
    },
    { label: "news", hasChild: false, route: "/news", activeList: ["news", "news-newsId"] },
    // { label: "downloads", hasChild: false, route: "/downloads",activeList: ["downloads"] },
    // { label: "contacts", hasChild: false, route: "/contacts",activeList: ["contacts"] },
  ],
});
const route = useRoute();
useHead({
  title:
    "JinZuan is a diversified global abrasives manufacturing company that brings products and technologies together.",
  meta: [
    {
      name: "description",
      content: "Diamond cutting blades factory supply from China with premium quality since 2008.",
    },
    {
      name: "keywords",
      content:
        "diamond blade factroy, tile diamond blade, grind wheel diamond,diamond cup wheel,diamond cutting disc, resin diamond blade",
    },
  ],
});
</script>
<style lang="scss" scoped>
header {
  .contact-wrap {
    padding: 0.05rem 0.1rem;
    color: #fff;
    background-color: #797979;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .c-right {
      display: flex;
      flex-direction: column;
      .mail {
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .navigate-wrap {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 0.05rem 0.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo-wrap {
      flex-shrink: 0;
      width: 2rem;
      .logo-img {
        display: block;
        width: 100%;
      }
    }
    .navigation {
      ul {
        display: flex;
        align-items: center;
        justify-content: space-around;
        li {
          transition: all 0.3s;
          cursor: pointer;
          padding: 0 10px;
          border-right: 1px solid #cccccc;
          &:hover {
            color: #f5a63f;
          }
          &:last-child {
            border-right: none;
          }
        }
        .li-active {
          font-weight: bold;
          color: #f5a63f;
        }
      }
    }
    .n-phone {
      display: none;
    }
  }
  @media only screen and (max-width: 992px) {
    .contact-wrap {
      .c-left,
      .c-right {
        font-size: 12px !important;
      }
    }
    .navigate-wrap {
      .logo-wrap {
        .logo-img {
          width: 150px;
        }
      }
      .n-phone {
        display: block;
        .menumore {
          font-size: 20px;
        }
      }
    }
  }
}
</style>
