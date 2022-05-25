import { createRouter, createWebHistory } from 'vue-router'
import Chatroom from '../views/Chatroom.vue'
import Dashboard from '../views/Introduce.vue'
import Messenger from '../views/Messenger.vue'

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
  {
    path: '/messenger',
    name: 'messenger',
    component: Messenger
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router;