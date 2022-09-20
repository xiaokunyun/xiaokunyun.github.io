import { defineStore } from 'pinia'
export const useStore = defineStore('main', {
  state: () => ({
    count: 0,
    theme: false,//主题切换  true ：亮色， false : 暗色
    locales: 'zh',//语言切换 true ：亮色， false : 暗色
  }),
  actions: {
    increment() {
      this.count++
    },
    themeChange(value: boolean) {
      this.theme = value
    },
    localesChange(value: string) {
      this.locales = value
    },
  },
})
