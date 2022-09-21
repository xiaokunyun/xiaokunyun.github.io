import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { isMobileTerminal } from '@/util/flex'
import 'vue-router'

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
    path: '/',
    name: 'index',
    component: () => import('@/layout/index.vue'),
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/index.vue'),
        meta: {
          requiresAuth: true,
          title: '主页',
        },
      },
      {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/contact.vue'),
        meta: {
          requiresAuth: true,
          title: '统计',
        },
      },
      {
        path: '/online',
        name: 'online',
        component: () => import('@/views/online.vue'),
        meta: {
          requiresAuth: true,
          title: '在线',
        },
      },
      {
        path: '/about',
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
export default router
