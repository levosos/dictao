<template>
  <div>
    <div class="word" v-for="(obj, index) in data" :key="index">
      <Word class="portuguese" :word="portuguese(obj)" :pronunciation="pronunciation(obj)" />
      <Word class="english" :word="english(obj)" />
    </div>
    <p>Total {{ data.length }}</p>
  </div>
</template>

<script>
import Word from './Word.vue'

export default {
  name: 'List',
  components: {
    Word,
  },
  props: {
    'data': Array,
    'english': {
      type: Function,
      default: obj => obj.e,
    },
    'portuguese': {
      type: Function,
      default: obj => obj.p,
    },
    'pronunciation': {
      type: Function,
      default: obj => obj.pronunciation,
    },
  },
}
</script>

<style scoped>
.word {
  font-size: larger;
}

.portuguese {
  background-color: #42b983;
}
</style>
