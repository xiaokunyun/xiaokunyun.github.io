<template>
  <div class="relative w-screen h-screen">
    <div class="flex justify-center items-center w-9/10">
      <a-statistic class="flex justify-center items-center w-1/4 " v-for="(item,index) in DataList" :key="index"
        :title="item.title" :value="50.52" :precision="2" :value-from="0" :start="true" animation>
        <template #prefix>
          <icon-arrow-rise />
        </template>
        <!-- <template #suffix>%</template> -->
      </a-statistic>
      <!-- </div> -->
    </div>
    <p>{{ $t('hello') }}</p>
    <p>{{ t('hello') }}</p>
    <Line />
    <!-- :title-data-props="DataList" -->
  </div>
</template>
<script setup lang="ts">
import { isMobileTerminal } from '@/util/flex'
import { useI18n } from 'vue-i18n'
const { t } = useI18n() // use as global scope
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
