<template>
  <div>
    contact
    <Line :title-data-props="DataList" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const DataList = ref([
  {
    title: "帮卖订单金额",
    desc: "别人帮卖成功支付的订单金额,不剔除退款金额",
    number: "0.00",
    field: "orderAmount",
  },
  {
    title: "帮卖订单数",
    desc: "别人帮卖成功支付的订单金额,不剔除退款金额",
    number: "0.00",
    field: "orderNumber",
  },
  {
    title: "帮卖退款订单数",
    desc: "别人帮卖成功支付的订单金额,不剔除退款金额",
    number: "0.00",
    field: "refundNumber",
  },
  {
    title: "帮卖退款金额",
    desc: "别人帮卖产生的退款金额",
    number: "0.00",
    field: "refundAmount",
  },
]);
</script>

<style scoped lang="scss"></style>
