<template>
  <div>
    <div class="list">
      <div
        v-for="(item, index) in titleListData"
        :key="index"
        class="item"
        :class="{ active: option.legend.selected[item.title] }"
        :style="{
          background: option.legend.selected[item.title] ? colorList[index] : 'transparent',
        }"
        @click="lineSWitch(item.title)"
      >
        <div class="info-text">
          <span style="margin-right: 5px"> {{ item.title }}</span>
          <el-popover placement="top-start" trigger="hover" :width="300" :content="item.desc">
            <template #reference>
              <el-icon><el-icon-QuestionFilled /></el-icon>
            </template>
          </el-popover>
        </div>
        <div class="number-text">
          {{ item.number }}
        </div>
      </div>
    </div>
    <div ref="echarts-box" class="echarts-box" />
  </div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted, watch } from "vue";
const { proxy } = getCurrentInstance();
const titleListData = ref([]); // 方块 titleList
const ListData = ref([]); // canvas list
const colorList = [
  "#69A6FD",
  "#FDD370",
  "#91CE85",
  "#ee6666",
  "#73c0de",
  "#3ba272",
  "#fc8452",
  "#9a60b4",
  "#ea7ccc",
];
const option = ref({});
option.value = {
  title: {},
  color: colorList,
  tooltip: {
    formatter: function (params) {
      let res = '<div class="custom-tooltip">';
      let x_text =
        params[0].name.length == 2
          ? params[0].name + ":00" + "~" + params[0].name + ":59"
          : params[0].name;
      res += '<div class="custom-tooltip-title">' + x_text + "</div>";
      params.forEach(function (item) {
        res += `<div class="custom-tooltip-item">
                        <span style="background-color:${item.color}"></span>
                        <b>${item.seriesName}</b>: ${item.value}
                </div>`;
      });
      res += "</div>";
      return res;
    },
    trigger: "axis",
  },
  legend: {
    data: [],
    selected: {},
    selectedMode: false,
    itemHeight: 12,
    itemWidth: 12,
    left: 0,
    top: 10,
    icon: "rect",
    textStyle: {
      color: "#666666",
      fontSize: 14,
    },
  },

  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    boundaryGap: true,
    axisTick: {
      // 刻度线
      alignWithLabel: true, // 刻度线和标签对齐，boundaryGap为true时有效
    },
    type: "category",
    data: [],
  },
  yAxis: {
    type: "value",
  },
  series: [],
};

const props = defineProps({
  titleDataProps: {
    type: Array,
    default: () => [],
  },
  listDataProps: {
    type: Array,
    default: () => [],
  },
});
// 点击显示隐藏线条
const lineSWitch = (line) => {
  option.value.legend.selected[line] = !option.value.legend.selected[line];
  echartsPrint();
};
// 数据格式化
const dataInit = () => {
  if (props.titleDataProps.length) {
    titleListData.value = props.titleDataProps;
  }
  if (props.listDataProps.length) {
    ListData.value = props.listDataProps;
  }
  option.value.legend.data = [];
  option.value.xAxis.data = [];
  option.value.legend.selected = {};
  titleListData.value.forEach((item, index) => {
    option.value.legend.data.push(item.title);
    if (index == 0) {
      option.value.legend.selected[item.title] = true;
    } else {
      option.value.legend.selected[item.title] = false;
    }

    option.value.series[index] = {
      name: item.title,
      type: "line",
      showSymbol: false,
      data: [],
    };
    ListData.value.forEach((e) => {
      if (index == 0) {
        option.value.xAxis.data.push(e.date);
      }
      option.value.series[index].data.push(e[item.field]);
    });
  });

  echartsPrint();
};
// 绘制canvas
const echartsPrint = () => {
  let chartDom = proxy.$refs["echarts-box"];
  let myChart = chartDom && echarts.init(chartDom);
  option.value && myChart && myChart.setOption(option.value);
};
watch(
  () => props.listDataProps,
  () => {
    console.log(props.listDataProps, "props.listDataProps");
    dataInit();
  },
  {
    deep: true,
  }
);
onMounted(() => {
  dataInit();
});
</script>
<style lang="scss" scoped>
.echarts-box {
  width: 100%;
  height: 450px;
  :deep(.custom-tooltip) {
    padding: 5px;
    .custom-tooltip-item {
      display: flex;
      align-items: center;
      span {
        display: block;
        width: 8px;
        height: 9px;
        border-radius: 50%;
        margin-right: 5px;
      }
    }
  }
}
.list {
  display: flex;
  cursor: pointer;
  .item {
    width: 140px;
    height: 70px;
    background: transparent;
    border-radius: 3px;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    justify-content: center;
    border: 1px solid #dfdfdf;
    span {
      color: #666;
    }
    &.active {
      color: #fff;
      span {
        color: #fff;
      }
    }
    .info-text {
      display: flex;
      align-items: center;
      margin-bottom: 5px;
    }
    .number-text {
      font-weight: 500;
      font-size: 16px;
    }
  }
}
</style>
