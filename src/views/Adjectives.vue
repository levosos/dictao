<template>
  <Page en="Adjectives" pt="Adjetivos" v-bind="$data" />
</template>

<script>
import Page from '../components/Page.vue'
import adjectives from "@/assets/adjectives.json";

export default {
  components: {
    Page,
  },
  data() {
    return {
      data: adjectives,
      portuguese(adjective) {
        if (typeof adjective.p === 'string') {
          return adjective.p + ' (u)'
        } else {
          return Object.keys(adjective.p).map(g => adjective.p[g] + ' (' + g + ')').join(' ')
        }
      },
    }
  },
}
</script>
