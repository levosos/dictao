<template>
  <section>
    <h2 class="title">Practice</h2>
    <section class="controls">
      <b-button @click="q_qa">{{ show.answers ? 'Q+A' : 'Q' }}</b-button>
      <b-button @click="en_pt">{{ lang.q }}</b-button>
      <b-button @click="star"><b-icon :icon="star_icon" /></b-button>
      <b-button @click="filter"><b-icon :icon="filter_icon" /></b-button>
      <span class="button">{{ filtered_data.length ? index + 1 : 0 }} / {{ filtered_data.length }}</span>
    </section>
    <section id="filter" v-if="filtering">
      <Tags :tags="tags" :selected="selected_tags" :reset="false" @input="tags_changed" />
      <b-checkbox-button @input="restart" v-for="letter in 'abcdefghijklmnopqrstuvwxyz'" :key="letter" v-model="filters" :native-value="letter" type="is-success">
        {{ letter }}
      </b-checkbox-button>
      <b-button @click="clear_filters" :disabled="filters.length === 0">
        <b>clear</b>
      </b-button>
    </section>
    <section id="words" v-on:click="click">
      <Word v-bind="question" :newline="true" />
      <Word class="answer" v-if="show.answer" v-bind="answer" />
    </section>
    <span style="flex: 1" />
    <List v-if="starred.length" :removable="true" v-bind="{ ...$props, data: this.starred }" />
  </section>
</template>

<script>
import Word from '../components/Word.vue'
import List from '../components/List.vue'
import Tags from '../components/Tags.vue'

import _ from 'lodash';

export default {
  name: 'Practice',
  components: {
    Word,
    List,
    Tags,
  },
  data() {
    return {
      shuffled_data: [],
      index: 0,
      lang: {
        q: 'en',
        a: 'pt',
      },
      show: {
        answer: false,
        answers: true,
      },
      starred: [],
      filtering: false,
      filters: [],
      selected_tags: [],
    }
  },
  props: {
    'data': Array,
    'tags': Array,
  },
  methods: {
    filter() {
      this.filtering = !this.filtering
    },
    shuffle() {
      this.shuffled_data = _.shuffle(this.data)
    },
    restart() {
      // reshuffle (all) the data
      this.shuffle()

      // start from the beginning (of the filtered data)
      this.index = 0

      // hide the answer if it is shown
      this.show.answer = false
    },
    next() {
      if (++this.index == this.filtered_data.length) {
        this.restart()
      }
    },
    previous() {
      if (this.index > 0) {
        this.index--
      }
    },
    click(event) {
      // the following should work but we protect from non existing event
      // properties just in case;
      // we currently do this manually but should consider using lodash instead.
      let x, width = undefined
      x = event.offsetX
      if (event.target) {
        width = event.target.offsetWidth
      }

      // go next if pressed on the rightmost 80% of the screen
      // or if could not tell where; otherwise go previous.
      if (!x || !width || x > width * 0.2) {
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
      } else {
        this.previous()
        this.show.answer = false
      }
    },
    en_pt() {
      // switch between question and answer languages
      [this.lang.q, this.lang.a] = [this.lang.a, this.lang.q]

      // we have to restart when filtering as data changes due to
      // the change of language.
      // therefore, we restart in all cases for consistency.
      this.restart()
    },
    q_qa() {
      this.show.answers = !this.show.answers
      this.show.answer = false
    },
    star() {
      if (this.word !== undefined) {
        const index = this.starred.indexOf(this.word);
        if (index === -1) {
          this.starred.unshift(this.word);
        } else {
          this.starred.splice(index, 1);
        }
      }
    },
    clear_filters() {
      this.filters = []
      this.restart()
    },
    props(lang) {
      if (this.word === undefined) {
        return { word: undefined }
      } else if (lang == 'en') {
        return { word: this.word.e }
      } else if (lang == 'pt') {
        return { word: this.word.p, pronunciation: this.word.pronunciation }
      }
    },
    tags_changed(tags) {
      this.selected_tags = tags
      this.restart()
    },
  },
  created() {
    document.title = "Dictão | Practice";
    this.shuffle()
  },
  computed: {
    question() {
      return this.props(this.lang.q)
    },
    answer() {
      return this.props(this.lang.a)
    },
    word() {
      return this.filtered_data[this.index]
    },
    star_icon() {
      return this.starred.indexOf(this.word) === -1 ? 'star-outline' : 'star'
    },
    filter_icon() {
      return this.filters.length || this.selected_tags.length ? 'filter' : 'filter-outline'
    },
    filtered_data() {
      const filter_text = function(word) {
        const translate = {
          // https://en.wikipedia.org/wiki/Portuguese_orthography#Diacritics
          'á': 'a',
          'â': 'a',
          'ã': 'a',
          'à': 'a',
          'ç': 'c',
          'é': 'e',
          'ê': 'e',
          'è': 'e',
          'í': 'i',
          'ì': 'i',
          'ó': 'o',
          'ô': 'o',
          'õ': 'o',
          'ò': 'o',
          'ú': 'u',
          'ù': 'u',
        };

        // extract the word depending on the language
        word = this.lang.q == 'en' ? word.e : word.p

        // take the first character
        let letter = word.charAt(0).toLowerCase()

        // ignore accents
        letter = translate[letter] || letter

        // see if it is filtered
        return this.filters.indexOf(letter) !== -1
      }.bind(this)

      const filter_tags = function(o) {
        return this.selected_tags.some(tag => o.tags.indexOf(tag) !== -1)
      }.bind(this)

      let result = this.shuffled_data

      if (this.filters.length) {
        result = result.filter(filter_text)
      }

      if (this.selected_tags.length) {
        result = result.filter(filter_tags)
      }

      return result
    }
  },
}
</script>

<style scoped>
#filter {
  display: flex;
  flex-wrap: wrap;
  justify-content: center
}
#words {
  min-height: 130px;
}
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
