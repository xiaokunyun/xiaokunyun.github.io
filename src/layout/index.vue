<template>
  <div class="warps fixed h-screen w-screen top-0 left-0">
    <!-- 移动端样式 -->
    <div v-if="isMobileTerminal">
      <!-- 头部组件 -->
      <AppHeader />
      <!-- 频道组件 -->
      <HomeChannel />
      <!-- 轮播组件 -->
      <HomeSwipe />
      <!-- 视频列表 -->
      <HomeVideoList />
    </div>
    <!-- pc 端样式 -->
    <div v-else>
      <div>
        <Header />
        <div class="mt-16 flex justify-center items-center h-screen w-screen">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//mobile
import AppHeader from "./components/mobile/app-header.vue";
import HomeChannel from "./components/mobile/home-channel.vue";
import HomeSwipe from "./components/mobile/home-swipe.vue";
import HomeVideoList from "./components/mobile/home-video-list.vue";
//pc
import Header from "./components/pc/Header.vue";
import { isMobileTerminal } from "@/util/flex";
</script>

<style scoped></style>
