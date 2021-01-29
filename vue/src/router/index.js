import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sneakers from '@/views/Sneakers.vue'
import NewSneakers from '@/views/NewSneakers.vue'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import ShowSneakers from '@/views/ShowSneakers.vue'

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
    path: '/register',
    name: 'Register',
    component: Register
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
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
  },
  {
    path: '/show',
    name: 'sneakers',
    component: ShowSneakers
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
