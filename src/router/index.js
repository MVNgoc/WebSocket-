import { createRouter, createWebHistory } from 'vue-router'
import Chatroom from '../views/Chatroom.vue'
import Dashboard from '../views/Introduce.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/chatroom',
    name: 'chatroom',
    component: Chatroom
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router;