<template>
  <div>
    <div v-for="(obj, index) in data" :key="index">
      {{ english(obj) }} | {{ portuguese(obj) }}
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
  },
}
</script>
