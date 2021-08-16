<template>
  <div>
    <h2>Conjunctions &#8226; Conjunções</h2>
    <List :data="conjunctions" />
  </div>
</template>

<script>
import conjunctions from "@/assets/conjunctions.json";
import List from '../components/List.vue'

export default {
  components: {
    List,
  },
  data() {
    return { conjunctions: conjunctions }
  },
}
</script>
