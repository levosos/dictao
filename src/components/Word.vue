<template>
  <span class="word" v-if="word">
    {{ word }}
    <span class="pronunciation" v-if="pronounced && pronunciation"> {{ pronunciation }}</span>
    <b-tag rounded size="is-medium" v-for="tag in tags" :key="tag" type="is-light"> {{ tag }} </b-tag>
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
    'tags': {
      type: Array,
      default: null,
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
