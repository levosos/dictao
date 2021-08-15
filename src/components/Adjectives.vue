<template>
  <div>
    <div v-for="(adjective, index) in adjectives" v-bind:key="index">
      {{ adjective.e }} | {{ portuguese(adjective) }}
    </div>
  </div>
</template>

<script>
import adjectives from "@/assets/adjectives.json";

function portuguese(adjective) {
  if (typeof adjective.p === 'string') {
    return adjective.p + ' (u)'
  } else {
    return Object.keys(adjective.p).map(g => adjective.p[g] + ' (' + g + ')').join(' ')
  }
}
export default {
  name: 'Adjectives',
  data() {
    return {
      adjectives: adjectives,
    };
  },
  methods: {
    portuguese,
  }
}
</script>
