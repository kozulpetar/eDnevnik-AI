import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import cors from 'cors'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

app.use(VueAxios, axios)
app.use(router)
app.use(cors({ origin: true }));

app.mount('#app')
