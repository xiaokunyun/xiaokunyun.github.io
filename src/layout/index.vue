<template>
  <div class="warps fixed h-screen w-screen top-0 left-0">
    <!-- 移动端样式 -->
    <div v-if="isMobileTerminal">
      <Mobile></Mobile>
    </div>
    <!-- pc 端样式 -->
    <div v-else>
      <PC></PC>
    </div>
  </div>
</template>

<script setup lang="ts">
//mobile
import Mobile from './components/mobile/index.vue';
//pc
import PC from './components/pc/index.vue';
import { isMobileTerminal } from '@/util/flex';
</script>
