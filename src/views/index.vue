<template>
  <div>
    <a-carousel :autoPlay="true" animation-name="card" show-arrow="hover" indicator-type="line"
      indicator-position="bottom"  :default-current="2" @change="handleChange" :style="{
        width: '100%',
        height: isMobileTerminal==true?'100px':'300px',
      }">
      <a-carousel-item v-for="image in images" :key="image" :style="{ width: '60%' }">
        <img :src="image" :style="{
          width: '100%',
        }" />
      </a-carousel-item>
    </a-carousel>
    <div class="flex justify-center items-center">
      <Longjie />
    </div>
  </div>
</template>

<script setup lang="ts">
import { isMobileTerminal } from '@/util/flex'
const images = ref([
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp',
])
const handleChange = (value: any) => {
  console.log(value)
}
</script>

<style scoped lang="scss">

</style>
