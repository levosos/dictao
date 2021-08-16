<template>
  <div>
    <h2>Adjectives &#8226; Adjetivos</h2>
    <Practice :data="adjectives" :portuguese="portuguese" />
    <List :data="adjectives" :portuguese="portuguese" />
  </div>
</template>

<script>
import adjectives from "@/assets/adjectives.json";
import List from '../components/List.vue'
import Practice from '../components/Practice.vue'

export default {
  components: {
    List,
    Practice,
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
