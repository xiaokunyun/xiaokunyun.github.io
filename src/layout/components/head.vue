<template>
  <div class="flex justify-center items-center w-3/4 h-20 text-xl">
    <div class="w-1/4 flex align-center justify-center">
      <LOGO />
    </div>
    <div class="w-2/4 flex align-center justify-center flex-wrap">
      <!-- <Border :text="" /> -->
      <i class="m-1 w-1/7" v-for="(item, index) in navgation" :key="index" :class="item.icon">
        {{ item.name }}
      </i>
    </div>
    <div class="w-1/4 flex align-center justify-center">
      <div @click="themeChange(false)">
        <icon-sun v-show="useStore().theme == true" />
      </div>
      <div @click="themeChange(true)">
        <icon-moon v-show="useStore().theme == false" />
      </div>
      <div>
        <icon-chinese-fill />
      </div>
      <div>
        <icon-english-fill />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LOGO from './logo.vue'
import { useStore } from '@/store/user'
const navgation = ref([
  { name: ' 主页', icon: 'iconfont icon-wenzhangguanli', path: '/exhibit' },
  {
    name: ' 文章列表',
    icon: 'iconfont icon-wenzhangguanli',
    path: '/articleList',
  },
  // { name: ' 听雨', icon: 'iconfont icon-xiangce', path: '/Rainy' },
  // { name: ' 关于我', icon: 'iconfont icon-liuyanban', path: '/self' },
  // { name: ' 留言版', icon: 'iconfont icon-liuyanban', path: '/message' },
  {
    name: ' Github',
    icon: 'iconfont icon-GitHub',
    path: 'https://github.com/qiheizhiya/myBlog',
  },
])
const themeChange = (val: boolean) => {
  useStore().themeChange(val)
  let body = document.body
  body.className = useStore().theme == true ? '' : 'dark'
}
</script>

<style scoped lang="scss">
.i {
  margin: 0.2rem;
}
</style>
