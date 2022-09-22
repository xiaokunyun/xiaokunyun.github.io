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
export interface LoginData {
  username: string;
  password: string;
}
export const login  = (data: LoginData) => {
  return api({
    url: '/sys/login',
    method: 'post',
    data,
  })
}
