import './assets/tailwind.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

// Pinia 
import { createPinia } from 'pinia'
import { useCartStore } from './stores/cart'

const pinia = createPinia()

app.use(pinia)
