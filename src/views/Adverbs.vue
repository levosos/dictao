<template>
  <div>
    <h2>Adverbs &#8226; Advérbios</h2>
    <Practice :data="adverbs" />
    <List :data="adverbs" />
  </div>
</template>

<script>
import adverbs from "@/assets/adverbs.json";
import List from '../components/List.vue'
import Practice from '../components/Practice.vue'

export default {
  components: {
    List,
    Practice,
  },
  data() {
    return { adverbs: adverbs }
  },
}
</script>
