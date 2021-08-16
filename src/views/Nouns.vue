<template>
  <div>
    <h2>Nouns &#8226; Substantivos</h2>
    <List :data="nouns" :portuguese="portuguese" />
  </div>
</template>

<script>
import nouns from "@/assets/nouns.json";
import List from '../components/List.vue'

export default {
  components: {
    List,
  },
  data() {
    return { nouns: nouns }
  },
  methods: {
    portuguese(noun) {
      function _(p, g) {
        return p + ' (' + g + ')'
      }

      if (noun.g == 'b') {
        return Object.keys(noun.p).map(g => _(noun.p[g], g)).join(' ')
      } else {
        return _(noun.p, noun.g)
      }
    },
  },
}
</script>
