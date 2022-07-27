import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
export const routerList: RouteRecordRaw[] = [
  {
    path: "/",
    name: "index",
    component: () => import("@/views/index.vue"),
    meta: {
      requiresAuth: true,
      title: "主页",
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/about.vue"),
    meta: {
      requiresAuth: true,
      title: "关于",
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/contact.vue"),
    meta: {
      requiresAuth: true,
      title: "联系",
    },
  },
  {
    path: "/online",
    name: "online",
    component: () => import("@/views/online.vue"),
    meta: {
      requiresAuth: true,
      title: "在线",
    },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes: routerList,
});
export default router;
