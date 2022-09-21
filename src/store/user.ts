import { defineStore } from 'pinia'
export const useStore = defineStore('main', {
  state: () => ({
    count: 0,
    theme: true,//主题切换  true ：亮色， false : 暗色
    locales: 'zh',//语言切换 'zh' ：中文， 'en' : 英文
    // language:zh,
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
      // if (value=='zh') {
      //   this.language = zh
      // } else {
      //   this.language = en
      // }
    },
  },
})
