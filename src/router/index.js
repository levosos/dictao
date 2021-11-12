import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Browse from '../views/Browse.vue'
import Practice from '../views/Practice.vue'

import data from '../collections/all'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/browse',
    component: Browse,
    props: data,
  },
  {
    path: '/practice',
    component: Practice,
    props: data,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
