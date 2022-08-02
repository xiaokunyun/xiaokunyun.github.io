<template>
  <div class="h-screen w-screen">
    <!-- 头部组件 -->
    <AppHeader />
    <!-- 频道组件 -->
    <HomeChannel />
    <!-- 轮播组件 -->
    <HomeSwipe />
    <!-- 视频列表 -->
    <HomeVideoList />
  </div>
</template>

<script setup lang="ts">
import AppHeader from './app-header.vue';
import HomeChannel from './home-channel.vue';
import HomeSwipe from './home-swipe.vue';
import HomeVideoList from './home-video-list.vue';
</script>
