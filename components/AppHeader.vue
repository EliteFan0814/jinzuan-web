<template>
  <header>
    <div class="logo-wrap">
      <img src="~/assets/logo_black.svg" alt="logo" class="logo-img" />
    </div>
    <div class="navigation">
      <ul>
        <li v-for="item in state.navigationList" :key="item.label" :class="{ 'li-active': item.route === route.path }">
          <el-popover v-if="item.hasChild" placement="bottom" trigger="hover">
            <template #reference>
              <NuxtLink :to="item.route">{{ item.label }}</NuxtLink>
            </template>
            <div>
              你是谁
            </div>
          </el-popover>
          <NuxtLink v-else :to="item.route">{{ item.label }}</NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>
<script lang="ts" setup>
const state = reactive({
  navigationList: [
    { label: "home", hasChild: false, route: "/" },
    { label: "about", hasChild: false, route: "/about" },
    { label: "solutions", hasChild: true, route: "/solutions" },
    { label: "products", hasChild: true, route: "/products" },
    { label: "news", hasChild: false, route: "/news" },
    { label: "downloads", hasChild: false, route: "/downloads" },
    { label: "contacts", hasChild: false, route: "/contacts" },
  ],
});
const route = useRoute();
</script>
<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  .logo-wrap {
    width: 20rem;
    .logo-img {
      display: block;
      width: 100%;
    }
  }
  .navigation {
    flex-grow: 1;
    ul,
    li {
      list-style: none;
    }
    ul {
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-size: 16px;
      li {
        transition: all 0.3s;
        cursor: pointer;
        &:hover {
          color: #f5a63f;
        }
      }
      .li-active {
        color: #f5a63f;
      }
    }
  }
}
</style>
