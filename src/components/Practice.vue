<template>
  <div>
    <hr />
    <div v-on:click="click()">
      <p>{{ counter }} / {{ data.length }}</p>
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
      counter: 0,
      used: [],
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
      if (this.used.length == this.data.length) {
        this.used = []
        this.counter = 1
      } else {
        this.counter++
      }

      do {
        this.index = Math.floor(Math.random() * this.data.length)
      } while (this.used.includes(this.index))

      this.used.push(this.index)
    },
    click() {
      if (this.answer) {
        this.next()
      }

      this.answer = !this.answer
    }
  },
  created() { this.next() },
}
</script>

<style scoped>
hr {
  margin-right: 40px;
  margin-left: 40px;
}
</style>
