<template>
  <section>
    <h2 class="title">Browse</h2>
    <Tags :tags="tags" :selected="true" @input="selected_tags=$event" />
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
import Tags from '../components/Tags.vue'

export default {
  name: 'Browse',
  components: {
    Word,
    Tags,
  },
  props: {
    'data': Array,
    'tags': Array,
  },
  data() {
    return {
      filter: '',
      selected_tags: [],
    }
  },
  computed: {
    filtered_data() {
      const filter_text = function(o) {
        const filter_lowercase = this.filter.toLowerCase()

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

      const filter_tags = function(o) {
        return this.selected_tags.some(tag => o.tags.indexOf(tag) !== -1)
      }.bind(this)

      return this.data.filter(filter_tags).filter(filter_text)
    },
  }
}
</script>

<style scoped>
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
