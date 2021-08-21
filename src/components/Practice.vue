<template>
  <section>
    <section class="controls">
      <b-button @click="q_qa">{{ show.answers ? 'Q+A' : 'Q' }}</b-button>
      <b-button @click="en_pt">{{ lang.q }}</b-button>
      <span class="button">{{ counter }} / {{ data.length }}</span>
    </section>
    <section v-on:click="click()">
      <Word v-bind="question" :newline="true" />
      <Word class="answer" v-if="show.answer" v-bind="answer" />
    </section>
  </section>
</template>

<script>
import Word from './Word.vue'

export default {
  name: 'Practice',
  components: {
    Word,
  },
  data() {
    return {
      counter: 0,
      index: 0,
      used: [],
      lang: {
        q: 'en',
        a: 'pt',
      },
      show: {
        answer: false,
        answers: true,
      },
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
    'pronunciation': {
      type: Function,
      default: obj => obj.pronunciation,
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
      if (this.show.answers) {
        if (this.show.answer) {
          this.next()
          this.show.answer = false
        } else {
          this.show.answer = true
        }
      } else {
        this.next()
      }
    },
    en_pt() {
      [this.lang.q, this.lang.a] = [this.lang.a, this.lang.q]
    },
    q_qa() {
      this.show.answers = !this.show.answers
      this.show.answer = false
    },
    props(lang) {
      const word = this.data[this.index];

      if (lang == 'en') {
        return { word: this.english(word) }
      } else if (lang == 'pt') {
        return { word: this.portuguese(word), pronunciation: this.pronunciation(word) }
      }
    },
  },
  created() { this.next() },
  computed: {
    question() {
      return this.props(this.lang.q)
    },
    answer() {
      return this.props(this.lang.a)
    },
  },
}
</script>

<style scoped>
.word {
  font-size: xx-large;
}

.answer {
  background-color: #42b983;
}

.controls {
  margin-bottom: 16px;
}
</style>
