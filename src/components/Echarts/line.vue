<template>
  <div>
    <div ref="line" id="line"></div>
  </div>
</template>
<script setup lang="ts">
// import * as echarts from 'echarts'
// type EChartsOption = echarts.EChartsOption
// // const { proxy } = getCurrentInstance()
// // 绘制canvas
// const echartsPrint = () => {
//     // let chartDom = proxy.$refs['line']
//     let chartDom = document.getElementById('line')
//     let myChart = echarts.init(chartDom)
//     option.value && myChart && myChart.setOption(option.value)
// }

import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption

var chartDom = document.getElementById('line')!;
var myChart = echarts.init(chartDom);
var option: EChartsOption;

option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
};

option && myChart.setOption(option);

</script>

<style scoped lang="scss"></style>
