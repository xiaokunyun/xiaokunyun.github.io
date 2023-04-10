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
          @click="handleClick"
        >
          <span class="sr-only">Open main menu</span>
          <icon-menu-fold v-show="pc" />
          <!-- <icon-close v-show="!pc" /> -->
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <RouterLink
          class="text-2xl leading-6 text-gray-900 hover: focus:outline-black"
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
    <a-drawer
      :width="340"
      :height="340"
      :visible="visible"
      placement="top"
      @ok="handleOk"
      @cancel="handleCancel"
      unmountOnClose
    
    >
      <template #title>
        <icon-menu-fold v-show="pc" />
      </template>
      <div class="space-y-2 py-6">
        <RouterLink
          class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover: focus:outline-black"
          v-for="(item, index) in router.getRoutes().filter((v) => v.meta.requiresAuth)"
          :key="index"
          to="#"
          @click="goGet(item)"
        >
          <div v-show="item.meta.title == '主页'">{{ $t("home") }}</div>
          <div v-show="item.meta.title == '统计'">{{ $t("Statistics") }}</div>
          <div v-show="item.meta.title == '在线'">{{ $t("online") }}</div>
          <div v-show="item.meta.title == '关于'">{{ $t("about") }}</div>
        </RouterLink>
      </div>
      <!-- You can customize modal body text by the current situation. This modal will be closed
      immediately once you press the OK button. -->
    </a-drawer>
  </header>
</template>

<script setup lang="ts">
import { useStore } from "@/store/user";
import { RouteRecordRaw } from "vue-router";
import { isMobileTerminal } from "@/util/flex";
import { useI18n } from "vue-i18n";
// import { Dialog, DialogPanel } from '@headlessui/vue'
const i18n = useI18n();
const { t } = useI18n();
const router = useRouter();
const pc = ref(true);
const visible = ref(false);
const handleClick = () => {
  visible.value = true;
};
const handleOk = () => {
  visible.value = false;
};
const handleCancel = () => {
  visible.value = false;
};
const goGet = (item: any) => {
  console.log("item", item);
  router.push(item.path);
  handleCancel();
};
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
// >>>.arco-drawer-footer{
//   display: none;
//   background: red;
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
