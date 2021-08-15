import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Adjectives from '../views/Adjectives.vue'
import Adverbs from '../views/Adverbs.vue'
import Conjunctions from '../views/Conjunctions.vue'
import Nouns from '../views/Nouns.vue'
import Verbs from '../views/Verbs.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/adjectives',
    name: 'Adjectives',
    component: Adjectives
  },
  {
    path: '/adverbs',
    name: 'Adverbs',
    component: Adverbs
  },
  {
    path: '/conjunctions',
    name: 'Conjunctions',
    component: Conjunctions
  },
  {
    path: '/nouns',
    name: 'Nouns',
    component: Nouns
  },
  {
    path: '/verbs',
    name: 'Verbs',
    component: Verbs
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
