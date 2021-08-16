<template>
  <div>
    <h2>Verbs &#8226; Verbos</h2>
    <List :data="verbs" />
  </div>
</template>

<script>
import verbs from "@/assets/verbs.json";
import List from '../components/List.vue'

export default {
  components: {
    List,
  },
  data() {
    return { verbs: verbs }
  },
}
</script>
