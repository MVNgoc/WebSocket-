import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '../views/Dashboard'
import Message from '../views/Messages.vue'
import Overview from '../views/Overview.vue'

const routes = [{
  path: '',
  component: dashboard,
  children:[
  {
    path: '/',
    name: 'Overview',
    component: Overview
  },
  {
    path: '/messages',
    name: 'messages',
    component: Message
  },
  
]
}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router;