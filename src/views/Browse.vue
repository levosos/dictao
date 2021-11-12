<template>
  <section>
    <h2 class="title">Browse</h2>
    <b-taglist>
      <b-tag rounded size="is-medium" v-for="tag in tags" :key="tag" :type="tag_type(tag)" @click.native="tag_clicked(tag)">
        {{ tag }}
      </b-tag>
    </b-taglist>
    <b-input rounded placeholder="Search" type="search" icon="magnify" v-model="filter"></b-input>
    <b>Total {{ filtered_data.length }}</b>
    <section id="list">
      <div class="translation" v-for="word in filtered_data" :key="word.e + word.p">
        <Word :word="word.e"/>
        <Word :word="word.p" :pronunciation="word.pronunciation"/>
      </div>
    </section>
  </section>
</template>

<script>
import Word from '../components/Word.vue'

import collections from '../collections/all'

export default {
  name: 'Browse',
  components: {
    Word,
  },
  props: {
    'data': Array,
  },
  data() {
    return {
      filter: '',
      tags: [],
      selected_tags: [],
    }
  },
  created() {
    // find all available tags
    this.tags = [...new Set([].concat(...(([].concat(...collections)).map(o => o.tags || []))))]

    // select all of them initially
    this.selected_tags = [...this.tags]
  },
  methods: {
    tag_type(tag) {
      return this.selected_tags.indexOf(tag) === -1 ? 'is-success is-light' : 'is-success'
    },
    tag_clicked(tag) {
      const index = this.selected_tags.indexOf(tag)
      if (index === -1) {
        this.selected_tags.push(tag)
      } else {
        this.selected_tags.splice(index, 1)
      }
    },
  },
  computed: {
    filtered_data() {
      const filter_lowercase = this.filter.toLowerCase()

      const filter = function(o) {
        const english = o.e.toLowerCase()
        if (english.indexOf(filter_lowercase) !== -1) {
          return true
        }

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
        var re = /[áâãàçéêèíìóôõòúù]/g;
        const portuguese = o.p.toLowerCase().replace(re, match => translate[match]);
        if (portuguese.indexOf(filter_lowercase) !== -1) {
          return true
        }

        return false
      }.bind(this)

      let result = []

      for (const collection of collections) {
        result.push(...collection.filter(filter))
      }

      return result.filter(o => this.selected_tags.some(tag => o.tags.indexOf(tag) !== -1))
    },
  }
}
</script>

<style scoped>
.tags {
  justify-content: center;
}
#list {
  margin-top: 1rem;
  margin-left: 5vw;
  margin-right: 5vw;
}
.translation {
  display: flex;
  justify-content: space-between;
}
</style>
