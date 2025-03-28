import { createApp, type App } from 'vue'
import './style.css'

import Application from './App.vue'
import router from './router'
import store from './store'

const app :App = createApp(Application)

app.use(store)
app.use(router)
app.mount('#app')
