<template>
  <div>
    <h2>Adverbs &#8226; Advérbios</h2>
    <div v-for="(adverb, index) in adverbs" v-bind:key="index">
      {{ adverb.e }} | {{ adverb.p }}
    </div>
  </div>
</template>

<script>
import adverbs from "@/assets/adverbs.json";

export default {
  name: 'Adverbs',
  data() {
    return {
      adverbs: adverbs,
    };
  }
}
</script>
