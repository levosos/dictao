<template>
  <div class="home">
    <h1 class="title">Welcome to Dictão</h1>
    <div><router-link to="/nouns">Substantivos</router-link></div>
    <div><router-link to="/verbs">Verbos</router-link></div>
    <div><router-link to="/adjectives">Adjetivos</router-link></div>
    <div><router-link to="/adverbs">Advérbios</router-link></div>
    <div><router-link to="/conjunctions">Conjunções</router-link></div>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style scoped>
a {
  font-size: 140%;
  text-decoration: none;
  color: #42b983;
}
</style>
