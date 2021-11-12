import Vue from 'vue'
import VueRouter from 'vue-router'

// views
import Home from '../views/Home.vue'
import Browse from '../views/Browse.vue'

// components
import Page from '../components/Page.vue'

// collections
import adjectives from '../collections/adjectives'
import adverbs from '../collections/adverbs'
import conjunctions from '../collections/conjunctions'
import nouns from '../collections/nouns'
import verbs from '../collections/verbs'

import _ from 'lodash'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/browse',
    component: Browse
  },
  {
    path: '/random',
    redirect: () => {
      const options = [
        '/adjectives',
        '/adverbs',
        '/conjunctions',
        '/nouns',
        '/verbs',
      ]

      return _.sample(options)
    }
  },
  {
    path: '/adjectives',
    component: Page,
    props: {
      en: 'Adjectives',
      pt: 'Adjetivos',
      data: adjectives,
    }
  },
  {
    path: '/adverbs',
    component: Page,
    props: {
      en: 'Adverbs',
      pt: 'Advérbios',
      data: adverbs,
    }
  },
  {
    path: '/conjunctions',
    component: Page,
    props: {
      en: 'Conjunctions',
      pt: 'Conjunções',
      data: conjunctions,
    },
  },
  {
    path: '/nouns',
    component: Page,
    props: {
      en: 'Nouns',
      pt: 'Substantivos',
      data: nouns,
    }
  },
  {
    path: '/verbs',
    component: Page,
    props: {
      en: 'Verbs',
      pt: 'Verbos',
      data: verbs,
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
