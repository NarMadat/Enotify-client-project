import Gans from '@/views/Gans.vue'
import Operators from '@/views/Operators.vue'
import Registration from '@/views/Registration.vue'
import Select from '@/views/Select.vue'
import Spr from '@/views/Spr.vue'
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
    },
	{
      path: '/select',
      name: 'select',
      component: Select,
    },
	{
      path: '/spr',
      name: 'spr',
      component: Spr,
    },
	{
      path: '/nop',
      name: 'nop',
      component: Operators,
    }
  ],
})

export default router
