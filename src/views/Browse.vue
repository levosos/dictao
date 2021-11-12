<template>
  <section>
    <h2 class="title">Browse</h2>
    <Tags :tags="tags" :selected="true" @input="selected_tags=$event" />
    <b-input rounded id="search" placeholder="Search" type="search" icon="magnify" v-model="filter" />
    <b>Total {{ filtered_data.length }}</b>
    <List id="list" :data="filtered_data" :removable="false" />
  </section>
</template>

<script>
import List from '../components/List.vue'
import Tags from '../components/Tags.vue'

export default {
  name: 'Browse',
  components: {
    List,
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
  created () {
    document.title = "Dictão | Browse";
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
}
</style>
