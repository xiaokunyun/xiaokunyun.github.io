import 'virtual:windi.css'
import 'virtual:windi-devtools'
import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/font/iconfont.css'
import 'virtual:svg-icons-register'
import pinia from './store'
import router from './router'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import i18n from './locales/index'
import './assets/style/index.scss'
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
app.use(pinia)
app.use(router)
app.use(ArcoVue)
app.use(ArcoVueIcon)
app.use(i18n)
app.mount('#app')
