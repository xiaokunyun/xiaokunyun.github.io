import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { isMobileTerminal } from '@/util/flex'
export const routerList: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/layout/index.vue'),
    meta: {
      // requiresAuth: true,
      title: '主页',
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
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/contact.vue'),
    meta: {
      requiresAuth: true,
      title: '联系',
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
]
export const mobileRoutes: Array<RouteRecordRaw> = [
  { path: '/', component: () => import('@/layout/index.vue') },
  { path: '/video/:id', component: () => import('@/views/Video/index.vue') },
]
const router = createRouter({
  history: createWebHistory(),
  routes: isMobileTerminal.value ? mobileRoutes : routerList,
})
export default router
