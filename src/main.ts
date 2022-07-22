import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'virtual:windi-devtools'
const app=createApp(App)
import router from "./router";
app.use(router)

app.mount('#app')
