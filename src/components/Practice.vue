<template>
  <section>
    <section class="controls">
      <b-button @click="q_qa">{{ show.answers ? 'Q+A' : 'Q' }}</b-button>
      <b-button @click="en_pt">{{ lang.q }}</b-button>
      <b-button @click="star"><b-icon :icon="star_icon" /></b-button>
      <span class="button">{{ counter }} / {{ data.length }}</span>
    </section>
    <section v-on:click="click()">
      <Word v-bind="question" :newline="true" />
      <Word class="answer" v-if="show.answer" v-bind="answer" />
    </section>
    <List v-if="starred.length" :total="false" v-bind="{ ...$props, data: this.starred }" />
  </section>
</template>

<script>
import Word from './Word.vue'
import List from './List.vue'

export default {
  name: 'Practice',
  components: {
    Word,
    List,
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
      starred: [],
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
    star() {
      const index = this.starred.indexOf(this.word);
      if (index === -1) {
        this.starred.push(this.word);
      } else {
        this.starred.splice(index, 1);
      }
    },
    props(lang) {
      if (lang == 'en') {
        return { word: this.english(this.word) }
      } else if (lang == 'pt') {
        return { word: this.portuguese(this.word), pronunciation: this.pronunciation(this.word) }
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
    word() {
      return this.data[this.index]
    },
    star_icon() {
      return this.starred.indexOf(this.word) === -1 ? 'star-outline' : 'star'
    }
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
