import Mock from 'mockjs'
import navList from './data/navList'
import swiperList from './data/swiperList'
import videosList from './data/videosList'
import recommendList from './data/recommendList'
import commentsList from './data/commentsList'
import videoDetailList from './data/videoDetailList'
import { MockMethod } from 'vite-plugin-mock'
export default [
  // {
  //   url: '/api/swiperList',
  //   method: 'get',
  //   response: ({ query }) => {
  //     return {
  //       code: 0,
  //       data: {
  //         name: 'vben',
  //       },
  //     };
  //   },
  // },
  {
    url: '/navList',
    method: 'post',
    timeout: 2000,
    response: {
      code: 200,
      data: navList,
    },
  },
  {
    url: '/swiperList',
    method: 'post',
    timeout: 2000,
    response: {
      code: 200,
      data: swiperList,
    },
  },
  {
    url: '/videosList',
    method: 'post',
    timeout: 2000,
    response: {
      code: 200,
      data: videosList,
    },
  },
  // {
  //   url: '/api/text',
  //   method: 'post',
  //   rawResponse: async (req, res) => {
  //     let reqbody = '';
  //     await new Promise((resolve) => {
  //       req.on('data', (chunk) => {
  //         reqbody += chunk;
  //       });
  //       req.on('end', () => resolve(undefined));
  //     });
  //     res.setHeader('Content-Type', 'text/plain');
  //     res.statusCode = 200;
  //     res.end(`hello, ${reqbody}`);
  //   },
  // },
] as MockMethod[]
// mock的配置
// Mock.setup({
//   // 随机延时50-1000毫秒
//   timeout: '50-1000',
// });

// // 轮播图
// Mock.mock(/\/swiperList/, 'get', () => {
//   return {
//     code: 0,
//     result: swiperList,
//   };
// });

// // 频道菜单
// Mock.mock(/\/navList/, 'get', () => {
//   return {
//     code: 0,
//     result: navList,
//   };
// });

// Mock.mock(/\/videosList/, 'get', () => {
//   return {
//     code: 0,
//     result: videosList,
//   };
// });

// Mock.mock(/\/recommendList/, 'get', () => {
//   return {
//     code: 0,
//     result: recommendList,
//   };
// });

// Mock.mock(/\/commentsList/, 'get', () => {
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
// Mock.mock(/\/videoDetail/, 'get', ({ url }: IMockConfig) => {
//   const querystr = url.split('?')[1];
//   const queryObj = new URLSearchParams(querystr);
//   const id = queryObj.get('id');
//   return Mock.mock({
//     code: 0,
//     result: function () {
//       return videoDetailList.find((item) => item.id === id);
//     },
//   });
// });
