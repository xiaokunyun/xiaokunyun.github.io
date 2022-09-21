<template>
  <div class="flex justify-center items-center w-3/4 h-20 text-xl">
    <div class="w-1/4 flex align-center justify-center">
      <Logo />
    </div>
    <div class="w-2/4 flex align-center justify-center flex-wrap" :class="{active:isMobileTerminal}">
      <div class="w-1/4" v-for="(item, index) in router.getRoutes().filter(v=>v.meta.requiresAuth)" :key="index">
        <RouterLink class="alink" :class="{alinktive:useStore().theme}" :to="item.path">
          {{item.meta.title}}
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
      <div @click="useStore().localesChange('en')">
        <icon-chinese-fill v-show="useStore().locales == 'zh'" />
      </div>
      <div @click="useStore().localesChange('zh')">
        <icon-english-fill v-show="useStore().locales == 'en'" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store/user'
import { RouteRecordRaw } from 'vue-router'
import { isMobileTerminal } from '@/util/flex'
const router = useRouter()
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
onMounted(() => {
  // themeChangel()
  console.log("list", list.value);
  console.log("router.getRoutes().filter(v=>v.meta.requiresAuth)", router.getRoutes().filter(v => v.meta.requiresAuth));
})
const list = ref<RouteRecordRaw[]>([])
const themeChangel = (val: boolean) => {//主题切换
  useStore().themeChange(val)
  let body = document.body
  body.className = useStore().theme == true ? '' : 'dark'
}
</script>

<style scoped lang="scss">
.active {
  font-size: 16px;
}
.alink{
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  border: 10px;
}
.alink:hover{
  border: 1px solid #333;
}
.alinktive:hover{
  border: 1px solid #fff;
}
</style>
