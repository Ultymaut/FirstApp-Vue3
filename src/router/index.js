import { createRouter, createWebHistory } from 'vue-router'
import Calculate from '@/views/Calculate.vue'
import Message from '@/views/Message.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      //route classqiue
      path: '/Calculate',
      name: 'Calculate',
      component: Calculate
    },

    {
      path: '/Message/:id',
      name: 'Message',
      component: Message
    }
  ]
})

export default router
