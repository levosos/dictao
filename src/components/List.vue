<template>
  <section>
    <p v-if="total">Total {{ data.length }}</p>
    <b-table :data="data" :mobile-cards="false" :striped="true" :narrowed="true">
      <b-table-column label="Portuguese" :centered="true" width="65%" v-slot="props">
        <Word :word="portuguese(props.row)" :pronunciation="pronunciation(props.row)" />
      </b-table-column>
      <b-table-column label="English" :centered="true" width="35%" v-slot="props">
        <Word :word="english(props.row)" />
      </b-table-column>
    </b-table>
  </section>
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
    'total': {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style scoped>
.word {
  font-size: larger;
}
</style>
