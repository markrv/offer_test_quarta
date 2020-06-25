import Vue from 'vue'
import Router from 'vue-router'
import Task from './views/Task'
// import login from './views/Login'

// import { TokenService } from '@/services/storage.service'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'task',
      component: Task
    }
  ]
})

export default router