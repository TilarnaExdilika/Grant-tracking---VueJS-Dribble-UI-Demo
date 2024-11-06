import { createRouter, createWebHistory } from 'vue-router'
import SplashScreen from '@/views/SplashScreen.vue'
import Dashboard from '@/views/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'Splash',
    component: SplashScreen,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
