import { createRouter, createWebHistory } from 'vue-router'
import { SplashConfig } from '@/config/splashConfig'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: () => {
        return SplashConfig.enable_splash ? '/splash' : '/dashboard'
      },
    },
    {
      path: '/splash',
      component: () => import('@/views/SplashScreen.vue'),
    },
    {
      path: '/dashboard',
      component: () => import('@/views/DashBoard.vue'),
    },
  ],
})

export default router
