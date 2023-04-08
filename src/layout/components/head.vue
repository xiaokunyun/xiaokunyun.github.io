<template>
  <header class="absolute inset-x-0 top-0 z-50">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </a>
        <Logo />
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <RouterLink
          class="text-2xl leading-6 text-gray-900 hover: focus:outline-black "
          v-for="(item, index) in router.getRoutes().filter((v) => v.meta.requiresAuth)"
          :key="index"
          :to="item.path"
        >
          <div v-show="item.meta.title == '主页'">{{ $t("home") }}</div>
          <div v-show="item.meta.title == '统计'">{{ $t("Statistics") }}</div>
          <div v-show="item.meta.title == '在线'">{{ $t("online") }}</div>
          <div v-show="item.meta.title == '关于'">{{ $t("about") }}</div>
        </RouterLink>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <div class="flex justify-center align-center text-3xl">
          <!-- <a href="#" class="flex align-center justify-center text-sm font-semibold text-gray-900"
            >Log in <span aria-hidden="true">&rarr;</span></a
          > -->
          <div @click="themeChangel()">
            <icon-moon v-show="useStore().theme == false" />
            <icon-sun v-show="useStore().theme == true" />
          </div>
          <div @click="localesChange1()">
            <icon-chinese-fill v-show="useStore().locales == 'zh'" />
            <icon-english-fill v-show="useStore().locales == 'en'" />
          </div>
        </div>
      </div>
    </nav>
  </header>

  <!-- <br />
  <br /> -->
  <!-- <div class="flex justify-center items-center w-3/4 h-20 text-xl">
    <div class="w-1/4 flex align-center justify-center">
      <Logo />
    </div>
    <div
      class="w-2/4 flex align-center justify-center flex-wrap"
      :class="{ active: isMobileTerminal }"
    >
      <div
        class="w-1/4 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
        v-for="(item, index) in router.getRoutes().filter((v) => v.meta.requiresAuth)"
        :key="index"
      >
        <RouterLink class="alink" :class="{ alinktive: useStore().theme }" :to="item.path">
          <div v-show="item.meta.title == '主页'">{{ $t("home") }}</div>
          <div v-show="item.meta.title == '统计'">{{ $t("Statistics") }}</div>
          <div v-show="item.meta.title == '在线'">{{ $t("online") }}</div>
          <div v-show="item.meta.title == '关于'">{{ $t("about") }}</div>
        </RouterLink>
      </div>
    </div>
    <div class="w-1/4 flex align-center justify-center">
      <div @click="themeChangel()">
        <icon-moon v-show="useStore().theme == false" />
        <icon-sun v-show="useStore().theme == true" />
      </div>
      <div @click="localesChange1()">
        <icon-chinese-fill v-show="useStore().locales == 'zh'" />
        <icon-english-fill v-show="useStore().locales == 'en'" />
      </div>
    </div>
  </div> -->
</template>

<script setup lang="ts">
import { useStore } from "@/store/user";
import { RouteRecordRaw } from "vue-router";
import { isMobileTerminal } from "@/util/flex";
import { useI18n } from "vue-i18n";
const i18n = useI18n();
const { t } = useI18n();
const router = useRouter();
onMounted(() => {
  console.log(
    "router.getRoutes().filter(v=>v.meta.requiresAuth)",
    router.getRoutes().filter((v) => v.meta.requiresAuth)
  );
});
const list = ref<RouteRecordRaw[]>([]);
const themeChangel = () => {
  //主题切换
  useStore().themeChange(!useStore().theme);
  let body = document.body;
  if (useStore().theme == true) {
    body.className = "";
    // 恢复亮色主题
    document.body.removeAttribute("arco-theme");
  } else {
    body.className = "dark";
    // 设置为暗黑主题
    document.body.setAttribute("arco-theme", "dark");
  }
};
const localesChange1 = () => {
  //语言切换
  if (useStore().locales == "zh") {
    useStore().localesChange("en");
    i18n.locale.value = "en";
  } else {
    useStore().localesChange("zh");
    i18n.locale.value = "zh";
  }
};
</script>

<style scoped lang="scss">
// .fontsizes {
//   font-size: 13px;
// }

.active {
  // font-size: 1px;
  // width: 50px;
  div {
    font-size: 13px;
  }

  svg {
    font-size: 26px;
  }
}

// svg {
//   font-size: 26px;
// }
</style>
