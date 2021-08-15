<template>
  <div>
    <h2>Verbs &#8226; Verbos</h2>
    <div v-for="(verb, index) in verbs" v-bind:key="index">
      {{ verb.e }} | {{ verb.p }}
    </div>
  </div>
</template>

<script>
import verbs from "@/assets/verbs.json";

export default {
  name: 'Verbs',
  data() {
    return {
      verbs: verbs,
    };
  }
}
</script>
