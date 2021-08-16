<template>
  <div>
    <hr />
    <div v-on:click="next()">
      <p>{{ index + 1 }} / {{ data.length }}</p>
      <h1>{{ english(data[index]) }}</h1>
      <h1 v-if="answer">{{ portuguese(data[index]) }}</h1>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'Practice',
  data() {
    return {
      index: 0,
      answer: false,
    }
  },
  props: {
    'data': Array,
    'english': {
      type: Function,
      default: obj => obj.e,
    },
    'portuguese': {
      type: Function,
      default: obj => obj.p,
    },
  },
  methods: {
    next() {
      if (this.answer) {
        this.index = (this.index + 1) % this.data.length
      }

      this.answer = !this.answer
    }
  }
}
</script>

<style scoped>
hr {
  margin-right: 40px;
  margin-left: 40px;
}
</style>
