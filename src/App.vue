<script setup lang="ts">
import enUS from '@arco-design/web-vue/es/locale/lang/en-us';
import zhCN from '@arco-design/web-vue/es/locale/lang/zh-cn';
import { useStore } from '@/store/user'
console.log("useStore().locales", useStore().locales);
const locale = computed(() => {
  switch (useStore().locales) {
    case 'zh':
      return zhCN;
    case 'en':
      return enUS;
    default:
      return zhCN;
  }
});
</script>
<template>
  <a-config-provider :locale="zhCN">
    <RouterView />
  </a-config-provider>
</template>
