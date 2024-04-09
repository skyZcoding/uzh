import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from './router'
import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App);

app.use(Router).use(MotionPlugin).mount('#app');
