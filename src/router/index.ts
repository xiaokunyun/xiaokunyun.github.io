import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { isMobileTerminal } from '@/util/flex'
import 'vue-router'
import { useStore } from '@/store/user'
import pinia from '@/store'
declare module 'vue-router' {
  interface RouteMeta {
    // 是可选的
    isAdmin?: boolean
    // 每个路由都必须声明
    requiresAuth: boolean
    title: string
  }
}
export const routerList: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/login/index.vue')
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/index.vue'),
        meta: {
          requiresAuth: true,
          title: '主页',
        },
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('@/views/contact.vue'),
        meta: {
          requiresAuth: true,
          title: '统计',
        },
      },
      {
        path: 'online',
        name: 'online',
        component: () => import('@/views/online.vue'),
        meta: {
          requiresAuth: true,
          title: '在线',
        },
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/about.vue'),
        meta: {
          requiresAuth: true,
          title: '关于',
        },
      },
    ]
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes: routerList,//isMobileTerminal.value ? mobileRoutes :
})
// const isAuthenticated=useStore(pinia).isAuthenticated
// console.log("isAuthenticated",isAuthenticated);
// router.beforeEach(async(to, from,next) => {
//   if (to.name !== 'login' && !useStore(pinia).isAuthenticated) next({ name: 'login' })
//   else next()
// })
export default router
