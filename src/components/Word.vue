<template>
  <span>
    {{ word }}
    <span class="pronunciation" v-if="pronounced && pronunciation"> {{ pronunciation }}</span>
    <br v-if="newline" />
  </span>
</template>

<script>
export default {
  name: 'Word',
  props: {
    'word': {
      type: String,
    },
    'pronunciation': {
      type: String,
      default: null,
    },
    'pronounced': {
      type: Boolean,
      default: true,
    },
    'newline': {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.pronunciation {
  font-size: 70%;
  font-weight: lighter;
  opacity: 0.9;
}
</style>
