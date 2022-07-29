<template>
  <!-- <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="item in list" :key="item.imgSrc">
      <img :src="item.imgSrc"  />
    </van-swipe-item>
  </van-swipe> -->
  <a-carousel
    :style="{
      width: '100%',
      height: '200px',
    }"
    :default-current="2"
    @change="handleChange"
  >
    <a-carousel-item v-for="item in list" :key="item.imgSrc">
      <!-- <img :src="item.imgSrc" :style="{
        width: '100%',
      }" /> -->
      <a-image width="100%" :src="item.imgSrc" />
    </a-carousel-item>
  </a-carousel>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { Swipe, SwipeItem } from "vant";
interface ISwiper {
  imgSrc: string;
  link: string;
}
// ref 函数用于定义模板中使用的响应式数据，相当于 Vue2 的 data
const list = ref<ISwiper[]>([]);
axios({
  url: "/swiperList",
  method: "get",
}).then((res) => {
  console.log("轮播图数据", res.data.result);
  list.value = res.data.result;
});
const handleChange = (value: any) => {
  console.log(value);
};
</script>

<style lang="less" scoped>
.my-swipe {
  img {
    width: 100%;
  }
}
</style>
