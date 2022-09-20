import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'en',
  allowComposition: true, // you need to specify that!
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  messages: {
    en: {
      hello: 'hello!'
    },
    zh: {
      hello: '你好'
    }
  }
})
export default i18n
