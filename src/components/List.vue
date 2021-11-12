<template>
  <section class="list">
    <div class="row" v-for="word in data" :key="word.e + word.p">
      <b-button v-if="removable" type="is-text" icon-left="delete" @click="remove(word)" />
      <div class="text">
        <Word class="english" :word="word.e"/>
        <Word class="portuguese" :word="word.p" :pronunciation="word.pronunciation"/>
      </div>
    </div>
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
    'removable': {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    remove(word) {
      const index = this.data.indexOf(word)
      if (index !== -1) {
        this.data.splice(index, 1)
      }
    }
  }
}
</script>

<style scoped>
.list {
  margin-left: 5vw;
  margin-right: 5vw;
}
.row {
  display: flex;
}
.row .english {
  text-align: left;
}
.row .portuguese {
  text-align: right;
}
.text {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-self: center;
  font-size: large;
}
</style>
