import 'virtual:windi.css'
import 'virtual:windi-devtools'
import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/font/iconfont.css'

// import 'virtual:svg-icons-register'
const app = createApp(App)
// import { useREM } from './util/flex'
// // 设置 rem
// useREM()
// import Vant from 'vant';
// import 'vant/lib/index.css';
// app.use(Vant);
// import { Tab, Tabs, Swipe, SwipeItem } from 'vant';
// // 注册Vant组件
// app.use(Tab);
// app.use(Tabs);
// app.use(Swipe);
// app.use(SwipeItem);
// import "@/mock/index";
import i18n from './locales/index'
app.use(i18n)
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
app.use(ArcoVue)

import router from './router'
app.use(router)

import './assets/style/index.scss'
app.mount('#app')
