<template>
  <div class="home">
    <h1 class="title">Welcome to Dictão</h1>
    <b-button type="is-success" size="is-large" tag="router-link" to="/browse">Browse</b-button>
    <b-button type="is-success" size="is-large" tag="router-link" to="/practice">Practice</b-button>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style scoped>
.button {
  width: 90%;

  /* top header has a margin-bottom of 1.5 rem */
  margin: 0.5rem;
}
</style>
