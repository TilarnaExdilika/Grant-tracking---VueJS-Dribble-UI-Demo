import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import '@/assets/fonts/fonts.css'
import { colors } from '@/config/colors'

Object.entries(colors).forEach(([key, value]) => {
  document.documentElement.style.setProperty(`--${key}`, value)
})

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.mount('#app')
