<script setup lang="ts">
import en from '@arco-design/web-vue/es/locale/lang/en-us';
import zhCN from '@arco-design/web-vue/es/locale/lang/zh-CN';
import { useStore } from '@/store/user'
console.log("useStore().locales",useStore().locales);
</script>
<template>
  <a-config-provider :locale="zhCN">
    <RouterView />
  </a-config-provider>
</template>
