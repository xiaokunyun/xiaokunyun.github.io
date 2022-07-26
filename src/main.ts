import { createApp } from 'vue'
import App from './App.vue'
// import 'virtual:windi-devtools'
import 'virtual:windi.css'
// import './assets/style/index.scss'
const app=createApp(App)
import router from "./router";
app.use(router)

app.mount('#app')
