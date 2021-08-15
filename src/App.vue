<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Nouns />
    <Verbs />
    <Adjectives />
  </div>
</template>

<script>
import Adjectives from './components/Adjectives.vue'
import Nouns from './components/Nouns.vue'
import Verbs from './components/Verbs.vue'

export default {
  name: 'App',
  components: {
    Adjectives,
    Nouns,
    Verbs
  },
  created() {
    document.title = 'Dictão'
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
