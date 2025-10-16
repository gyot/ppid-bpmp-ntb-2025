import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head'
import './style.css'
import '@fortawesome/fontawesome-free/css/all.min.css'


const head = createHead()
createApp(App).use(router,head).mount('#app')
