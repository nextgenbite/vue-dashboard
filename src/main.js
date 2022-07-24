import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'popper.js/dist/popper.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import "@fortawesome/fontawesome-free/css/all.css"

createApp(App).use(router).mount('#app')
