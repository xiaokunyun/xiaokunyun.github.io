<script setup lang="ts">
import en from '@arco-design/web-vue/es/locale/lang/en-us';
import zh from '@arco-design/web-vue/es/locale/lang/zh-CN';
import { useStore } from '@/store/user'
</script>
<template>
  <a-config-provider :locale="useStore().locales=='zh'?zh:en">
      <RouterView />
  </a-config-provider>
</template>
