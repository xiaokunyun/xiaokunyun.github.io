import api from './index';

// // import Mock from "mockjs";
// // import navList from "./data/navList";
import swiperList from '@/mock/data/swiperList';
// // import videosList from "./data/videosList";
// // import recommendList from "./data/recommendList";
// // import commentsList from "./data/commentsList";
// // import videoDetailList from "./data/videoDetailList";
// export const mapJson = (params?: object) => {
//   return api.request("get", "/swiperList", { params });
// };
export function accountrefundDetail(data: any) {
  return api({
    url: '/swiperList',
    method: 'post',
    data,
  });
}
// export const demoListApi = (params: DemoParams) =>{}
//   defHttp.get<DemoListGetResultModel>({
//     url: Api.DEMO_LIST,
//     params,
//     headers: {
//       // @ts-ignore
//       ignoreCancelToken: true,
//     },
//   });

// // // mock的配置
// // Mock.setup({
// //   // 随机延时50-1000毫秒
// //   timeout: "50-1000",
// // });

// // 轮播图
// Mock.mock(/\/swiperList/, "get", () => {
//   return {
//     code: 0,
//     result: swiperList,
//   };
// });

// // 频道菜单
// Mock.mock(/\/navList/, "get", () => {
//   return {
//     code: 0,
//     result: navList,
//   };
// });

// Mock.mock(/\/videosList/, "get", () => {
//   return {
//     code: 0,
//     result: videosList,
//   };
// });

// Mock.mock(/\/recommendList/, "get", () => {
//   return {
//     code: 0,
//     result: recommendList,
//   };
// });

// Mock.mock(/\/commentsList/, "get", () => {
//   return {
//     code: 0,
//     result: {
//       count: 454,
//       items: commentsList,
//     },
//   };
// });

// interface IMockConfig {
//   body: string | null;
//   type: string;
//   url: string;
// }
// Mock.mock(/\/videoDetail/, "get", ({ url }: IMockConfig) => {
//   const querystr = url.split("?")[1];
//   const queryObj = new URLSearchParams(querystr);
//   const id = queryObj.get("id");
//   return Mock.mock({
//     code: 0,
//     result: function () {
//       return videoDetailList.find((item) => item.id === id);
//     },
//   });
// });
