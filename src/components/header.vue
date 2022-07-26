<template>
  <div class="fixed top-0 w-11/12 h-16">
    <!-- 移动 -->
    <div v-if="isMobileTerminal" class="flex justify-between items-center">
      <div>
        <img src="@/assets/images/logo.png" alt="logo">
      </div>
      <div>
       <div v-for="(item,index) in titleList" :key="index">{{item.title}}</div>
      </div>
    </div>
    <!-- pc -->
    <div v-else class="flex justify-center items-center">
       <div v-for="(item,index) in titleList" :key="index">{{item.title}}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { isMobileTerminal } from '@/util/flex'
const titleList=ref([
  {title:"home"},
  {title:"my"},
  {title:"home"},
  {title:"home"},
])
</script>

<style scoped>
</style>
