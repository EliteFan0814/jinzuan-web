<template>
  <div class="app-wrap">
    <AppHeader class="app-header" />
    <NuxtLayout>
      <NuxtPage class="app-content" />
    </NuxtLayout>
    <AppFooter class="app-footer" />
  </div>
  <el-backtop />
</template>
<script setup>
useHead({
  script: [
    {
      src: "/js/iconfont.js",
    },
  ],
});
function flexible() {
  var docEl = document.documentElement;
  var dpr = window.devicePixelRatio || 1;

  // adjust body font size
  function setBodyFontSize() {
    if (document.body) {
      document.body.style.fontSize = 14 * dpr + "px";
    } else {
      document.addEventListener("DOMContentLoaded", setBodyFontSize);
    }
  }
  setBodyFontSize();

  // set 1rem = viewWidth / 10
  function setRemUnit() {
    var rem = docEl.clientWidth / 10;
    docEl.style.fontSize = rem + "px";
  }

  setRemUnit();

  // reset rem unit on page resize
  window.addEventListener("resize", setRemUnit);
  window.addEventListener("pageshow", function (e) {
    if (e.persisted) {
      setRemUnit();
    }
  });

  // detect 0.5px supports
  if (dpr >= 2) {
    var fakeBody = document.createElement("body");
    var testElement = document.createElement("div");
    testElement.style.border = ".5px solid transparent";
    fakeBody.appendChild(testElement);
    docEl.appendChild(fakeBody);
    if (testElement.offsetHeight === 1) {
      docEl.classList.add("hairlines");
    }
    docEl.removeChild(fakeBody);
  }
}
onMounted(() => {
  flexible();
});
</script>

<style lang="scss">
body {
  a,
  a:link,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
    color: inherit;
  }
  ul,
  li {
    list-style: none;
  }
  .omit-1 {
    white-space: nowrap;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    overflow: hidden;
  }
  .omit-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  @media only screen and (max-width: 992px) {
    * {
      font-size: 14px;
    }
  }
}
.app-wrap {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .app-header {
    flex-shrink: 0;
  }
  .app-content {
    flex-grow: 1;
  }
  .app-footer {
    flex-shrink: 0;
  }
}
.el-backtop {
  right: 0.5rem;
  bottom: 0.5rem;
}
</style>
