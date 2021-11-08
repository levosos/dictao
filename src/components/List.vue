<template>
  <section>
    <p v-if="total">Total {{ data.length }}</p>
    <b-table :data="data" :mobile-cards="false" :striped="true" :narrowed="true">
      <b-table-column label="Portuguese" :centered="true" width="65%" v-slot="props">
        <Word :word="props.row.p" :pronunciation="props.row.pronunciation" />
      </b-table-column>
      <b-table-column label="English" :centered="true" width="35%" v-slot="props">
        <Word :word="props.row.e" />
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
