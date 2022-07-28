import { createApp } from "vue";
import App from "./App.vue";
import "virtual:windi-devtools";
import "virtual:windi.css";
// import './assets/style/index.scss'
const app = createApp(App);
// import { useREM } from './util/flex'
// // 设置 rem
// useREM()
import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";
app.use(ArcoVue);

import router from "./router";
app.use(router);
app.mount("#app");
