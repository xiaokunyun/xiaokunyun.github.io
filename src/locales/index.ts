import { createI18n } from 'vue-i18n'
import { useStore } from "@/store/user";
import zhList from './lang/zh'
import enList from './lang/en'
import pinia from '@/store'
function language() {
  return useStore(pinia).locales
}
const i18n = createI18n({
  locale:language(),//useStore(pinia).locales,
  allowComposition: true, // you need to specify that!
  legacy: false,// 使用 Composition API 模式，则需要将其设置为false
  globalInjection: true,// 全局注入 $t 函数
  messages: {
    en: {
      hello: 'hello!',
        ...enList
    },
    zh: {
      hello: '你好',
        ...zhList
    }
  }
})
console.log("pinia",useStore(pinia).locales);
export default i18n
