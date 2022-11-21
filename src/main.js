import { createApp } from 'vue'
import App from './App.vue'
import chartPlugin from "@/plugins/ChartPlugin";

createApp(App).use(chartPlugin).mount('#app')
