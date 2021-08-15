<template>
  <div>
    <h2>Nouns &#8226; Substantivos</h2>
    <div v-for="(noun, index) in nouns" v-bind:key="index">
      {{ noun.e }} | {{ portuguese(noun) }}
    </div>
  </div>
</template>

<script>
import nouns from "@/assets/nouns.json";

function portuguese(noun) {
  function _(p, g) {
    return p + ' (' + g + ')'
  }

  if (noun.g == 'b') {
    return Object.keys(noun.p).map(g => _(noun.p[g], g)).join(' ')
  } else {
    return _(noun.p, noun.g)
  }
}

export default {
  name: 'Nouns',
  data() {
    return {
      nouns: nouns,
    };
  },
  methods: {
    portuguese
  }
}
</script>
