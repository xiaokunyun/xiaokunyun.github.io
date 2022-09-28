<template>
  <div class="flex justify-center items-center w-3/4 h-20 text-xl">
    <div class="w-1/4 flex align-center justify-center">
      <Logo />
    </div>
    <div class="w-2/4 flex align-center justify-center flex-wrap" :class="{ active: isMobileTerminal }">
      <div class="w-1/4" v-for="(item, index) in router.getRoutes().filter(v => v.meta.requiresAuth)" :key="index">
        <RouterLink class="alink" :class="{ alinktive: useStore().theme }" :to="item.path">
          <div v-show="item.meta.title == '主页'">{{ $t('home') }}</div>
          <div v-show="item.meta.title == '统计'">{{ $t('Statistics') }}</div>
          <div v-show="item.meta.title == '在线'">{{ $t('online') }}</div>
          <div v-show="item.meta.title == '关于'">{{ $t('about') }}</div>
        </RouterLink>
      </div>
    </div>
    <div class="w-1/4 flex align-center justify-center">
      <div @click="themeChangel(false)">
        <icon-sun v-show="useStore().theme == true" />
      </div>
      <div @click="themeChangel(true)">
        <icon-moon v-show="useStore().theme == false" />
      </div>
      <div @click="localesChange1('en')">
        <icon-chinese-fill v-show="useStore().locales == 'zh'" />
      </div>
      <div @click="localesChange1('zh')">
        <icon-english-fill v-show="useStore().locales == 'en'" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store/user'
import { RouteRecordRaw } from 'vue-router'
import { isMobileTerminal } from '@/util/flex'
import { useI18n } from 'vue-i18n'
const i18n = useI18n()
const { t } = useI18n()
const router = useRouter()
onMounted(() => {
  console.log("router.getRoutes().filter(v=>v.meta.requiresAuth)", router.getRoutes().filter(v => v.meta.requiresAuth));
})
const list = ref<RouteRecordRaw[]>([])
const themeChangel = (val: boolean) => {//主题切换
  useStore().themeChange(val)
  let body = document.body
  if (useStore().theme == true) {
    body.className = ''
    // 恢复亮色主题
    document.body.removeAttribute('arco-theme');
  } else {
    body.className = 'dark'
    // 设置为暗黑主题
    document.body.setAttribute('arco-theme', 'dark')
  }
}
const localesChange1 = (val: string) => {//语言切换
  useStore().localesChange(val)
  console.log("useStore().locales", useStore().locales);
  i18n.locale.value = val
}
</script>

<style scoped lang="scss">
.active {
  // font-size: 1px;
  // width: 50px;
  div {
    font-size: 18px;
  }

  svg {
    font-size: 26px;
  }
}
svg {
  font-size: 26px;
}

.alink {
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  // border: 1px solid #333;
}
</style>
