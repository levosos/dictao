<template>
  <Page en="Adverbs" pt="Advérbios" v-bind="$data" />
</template>

<script>
import Page from '../components/Page.vue'
import adverbs from "@/assets/adverbs.json";

export default {
  components: {
    Page,
  },
  data() {
    return { data: adverbs }
  },
}
</script>
