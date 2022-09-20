import { defineStore } from 'pinia'
export const useStore = defineStore('main', {
  // other options...
  state: () => ({
    count: 0,
    theme: true,
  }),
  actions: {
    increment() {
      this.count++
    },
    themeChange(value: boolean) {
      this.theme = value
    },
  },
})
