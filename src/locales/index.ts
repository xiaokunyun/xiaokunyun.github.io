import { createI18n } from 'vue-i18n'
import { useStore } from "@/store/user";
import { computed } from 'vue'
import pinia from '@/store'
// const locale = computed(() => {
//   switch (useStore(pinia).locales) {
//     case 'zh':
//       return zhCN;
//     case 'en':
//       return enUS;
//     default:
//       return zhCN;
//   }
// });
const i18n = createI18n({
  locale:useStore(pinia).locales,//useStore(pinia).locales,
  allowComposition: true, // you need to specify that!
  legacy: false,// 使用 Composition API 模式，则需要将其设置为false
  globalInjection: true,// 全局注入 $t 函数
  messages: {
    en: {
      hello: 'hello!'
    },
    zh: {
      hello: '你好'
    }
  }
})
console.log("pinia",useStore(pinia).locales);
export default i18n
