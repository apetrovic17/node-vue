import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sneakers from '@/views/Sneakers.vue'
import NewSneakers from '@/views/NewSneakers.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/edit',
    name: 'newSneakers',
    component: NewSneakers
  },

  {
    path: '/edit/:id',
    name: 'newSneakers',
    component: NewSneakers
  },

  {
    path: '/sneakers/:id',
    name: 'sneakers',
    component: Sneakers
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
