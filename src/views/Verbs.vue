<template>
  <div>
    <h2>Verbs &#8226; Verbos</h2>
    <Practice :data="verbs" />
    <List :data="verbs" />
  </div>
</template>

<script>
import verbs from "@/assets/verbs.json";
import List from '../components/List.vue'
import Practice from '../components/Practice.vue'

export default {
  components: {
    List,
    Practice,
  },
  data() {
    return { verbs: verbs }
  },
}
</script>
