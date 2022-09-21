<template>
  <div>
    contact
    <div class="flex justify-center items-center">
      <div class="w-1/4 m-4" v-for="(item,index) in DataList" :key="index">
        <div class="p1"> {{ item.title }}</div>
        <div class="p1">
          <a-statistic :title="item.title" :value="50.52" :precision="2" :value-from="0" :start="start" animation>
            <template #prefix>
              <icon-arrow-rise />
            </template>
            <template #suffix>%</template>
          </a-statistic>
          <a-button @click="start=true">Start</a-button>
          {{ item.number }}
        </div>
      </div>
    </div>
    <Line :title-data-props="DataList" />
  </div>
</template>
<script setup lang="ts">
    const start = ref(false);
const DataList = ref([
  {
    title: '概况数据',
    desc: '当天，概况数据',
    number: '0.00',
    field: 'refundAmount',
  },
  {
    title: '流量概览',
    desc: '当天，流量总数',
    number: '0.00',
    field: 'refundNumber',
  },
  {
    title: '访问数UV',
    desc: '当天，访客总数',
    number: '0.00',
    field: 'orderAmount',
  },
  {
    title: '浏览量PV',
    desc: '当天，浏览总数',
    number: '0.00',
    field: 'orderNumber',
  },
]);
</script>

<style scoped lang="scss">

</style>
