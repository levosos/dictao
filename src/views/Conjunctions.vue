<template>
  <div>
    <h2>Conjunctions &#8226; Conjunções</h2>
    <Practice :data="conjunctions" />
    <List :data="conjunctions" />
  </div>
</template>

<script>
import conjunctions from "@/assets/conjunctions.json";
import List from '../components/List.vue'
import Practice from '../components/Practice.vue'

export default {
  components: {
    List,
    Practice,
  },
  data() {
    return { conjunctions: conjunctions }
  },
}
</script>
