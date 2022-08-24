<template>
  <div>
    <div ref="line" id="line"></div>
  </div>
</template>
<script setup lang="ts">
// import * as echarts from "echarts";
// // import { getCurrentInstance } from "vue";
// type EChartsOption = echarts.EChartsOption;
// const proxy: any = getCurrentInstance();
// let option: EChartsOption;
// option = {
//   xAxis: {
//     type: "category",
//     data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//   },
//   yAxis: {
//     type: "value",
//   },
//   series: [
//     {
//       data: [150, 230, 224, 218, 135, 147, 260],
//       type: "line",
//     },
//   ],
// };
// let chartDom = proxy.$refs["line"];
// let myChart = echarts.init(chartDom);
// option && myChart.setOption(option);
import * as echarts from 'echarts'
type EChartsOption = echarts.EChartsOption

var chartDom = document.getElementById('line')!
var myChart = echarts.init(chartDom)
var option: EChartsOption

option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
    },
  ],
}

option && myChart.setOption(option)
</script>

<style scoped lang="scss"></style>
