import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/case/big-animation',
    name: 'BigAnimation',
    component: () => import('../views/Case/BigAnimation.vue')
  },
  {
    path: '/case/canvas-demo',
    name: 'CanvasDemo',
    component: () => import('../views/Case/CanvasDemo.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHashHistory(), // 修改为 Hash 模式
  routes
})

export default router
