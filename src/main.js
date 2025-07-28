import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import router from './router'
import Vue3TouchEvents from "vue3-touch-events"

createApp(App).use(router).use(i18n).use(Vue3TouchEvents).mount('#app')
