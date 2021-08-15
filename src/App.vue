<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Nouns />
  </div>
</template>

<script>
import Nouns from './components/Nouns.vue'

export default {
  name: 'App',
  components: {
    Nouns
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
