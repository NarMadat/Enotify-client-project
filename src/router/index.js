import Gans from '@/views/Gans.vue'
import Registration from '@/views/Registration.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'reg',
      component: Registration,
    },
    {
      path: '/gans',
      name: 'gans',
      component: Gans,
    }
  ],
})

export default router
