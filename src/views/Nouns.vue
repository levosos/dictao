<template>
  <Page en="Nouns" pt="Substantivos" v-bind="$data" />
</template>

<script>
import Page from '../components/Page.vue'
import nouns from "@/assets/nouns.json";

export default {
  components: {
    Page,
  },
  data() {
    return {
      data: nouns,
      portuguese(noun) {
        function _(p, g) {
          return p + ' (' + g + ')'
        }

        if (noun.g == 'b') {
          return Object.keys(noun.p).map(g => _(noun.p[g], g)).join(' ')
        } else {
          return _(noun.p, noun.g)
        }
      }
    }
  },
}
</script>
