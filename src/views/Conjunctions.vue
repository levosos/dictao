<template>
  <Page en="Conjunctions" pt="Conjunções" v-bind="$data" />
</template>

<script>
import Page from '../components/Page.vue'
import conjunctions from "@/assets/conjunctions.json";

export default {
  components: {
    Page,
  },
  data() {
    return { data: conjunctions }
  },
}
</script>
