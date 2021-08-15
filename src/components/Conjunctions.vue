<template>
  <div>
    <div v-for="(conjunction, index) in conjunctions" v-bind:key="index">
      {{ conjunction.e }} | {{ conjunction.p }}
    </div>
  </div>
</template>

<script>
import conjunctions from "@/assets/conjunctions.json";

export default {
  name: 'Conjunctions',
  data() {
    return {
      conjunctions: conjunctions,
    };
  }
}
</script>
