<template>
  <Page en="Verbs" pt="Verbos" v-bind="$data" />
</template>

<script>
import Page from '../components/Page.vue'
import verbs from "@/assets/verbs.json";

export default {
  components: {
    Page,
  },
  data() {
    return { data: verbs }
  },
}
</script>
