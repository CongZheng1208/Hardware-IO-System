import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import MainPage from '../views/MainPage.vue';


const routes = [
  {
    path: '/',
    redirect: '/MainPage'
  },
  {
    path: '/MainPage',
    component: MainPage,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
