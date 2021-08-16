<template>
  <div>
    <div class="word" v-for="(obj, index) in data" :key="index">
      <span class="portuguese">{{ portuguese(obj) }}</span>
      <span class="pronunciation" v-if="pronunciation(obj)">{{pronunciation(obj)}}</span>
      <span class="english">{{ english(obj) }}</span>
    </div>
    <p>Total {{ data.length }}</p>
  </div>
</template>

<script>
export default {
  name: 'List',
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
.word :not(.pronunciation) {
  font-size: 130%;
}

span {
  margin-left: 5px;
  margin-right: 5px;
}

.portuguese {
  background-color: #42b983;
}

.pronunciation {
  opacity: 0.6;
}
</style>
