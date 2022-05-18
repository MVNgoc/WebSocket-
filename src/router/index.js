import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '../views/Dashboard'
import Message from '../views/Messages.vue'
import Introduce from '../views/Introduce.vue'

const routes = [{
  path: '',
  component: dashboard,
  children:[
  {
    path: '/introduce',
    name: 'Introduce',
    component: Introduce
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