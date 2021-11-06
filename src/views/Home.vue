<template>
  <div class="home">
    <h1 class="title">Welcome to Dictão</h1>
    <b-button id="practice" type="is-success" size="is-large" tag="router-link" to="/random">Practice something</b-button>
    <p>You can also just go somewhere</p>
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
#practice {
  width: 90%;

  /* top header has a margin-bottom of 1.5 rem */
  margin-top: 1.5rem;
  margin-bottom: 3rem;
}
a {
  font-size: 140%;
  text-decoration: none;
  color: #42b983;
}
</style>
