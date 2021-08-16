<template>
  <div>
    <h2>Adverbs &#8226; Advérbios</h2>
    <List :data="adverbs" />
  </div>
</template>

<script>
import adverbs from "@/assets/adverbs.json";
import List from '../components/List.vue'

export default {
  components: {
    List,
  },
  data() {
    return { adverbs: adverbs }
  },
}
</script>
