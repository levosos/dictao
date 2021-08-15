<template>
  <div class="home">
    <h1>Welcome to Dictão</h1>
    <div><router-link to="/nouns">Nouns</router-link></div>
    <div><router-link to="/verbs">Verbs</router-link></div>
    <div><router-link to="/adjectives">Adjectives</router-link></div>
    <div><router-link to="/adverbs">Adverbs</router-link></div>
    <div><router-link to="/conjunctions">Conjunctions</router-link></div>
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
