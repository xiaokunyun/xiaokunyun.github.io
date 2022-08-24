import api from './index'
// 卡片列表
// export const getCardList = (data?: object): postType => {
//   return api.request('post', '/api/navList', { data });
// };
// interface IMockConfig {
//   body: string | null;
//   type: string;
//   url: string;
// }
export const navList = (data?: object) => {
  return api({
    url: '/api/navList',
    method: 'post',
    data,
  })
}
