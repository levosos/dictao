<template>
  <div>
    <h2>Adjectives &#8226; Adjetivos</h2>
    <List :data="adjectives" :portuguese="portuguese" />
  </div>
</template>

<script>
import adjectives from "@/assets/adjectives.json";
import List from '../components/List.vue'

export default {
  components: {
    List,
  },
  data() {
    return { adjectives: adjectives }
  },
  methods: {
    portuguese(adjective) {
      if (typeof adjective.p === 'string') {
        return adjective.p + ' (u)'
      } else {
        return Object.keys(adjective.p).map(g => adjective.p[g] + ' (' + g + ')').join(' ')
      }
    },
  },
}
</script>
