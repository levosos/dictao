<template>
  <div>
    <h2 class="title">{{ en }} &#8226; {{ pt }}</h2>
    <b-tabs v-model="tab" position="is-centered" type="is-toggle" :animated="false">
      <b-tab-item label="Practice">
        <Practice v-bind="$props" />
      </b-tab-item>
      <b-tab-item label="List">
        <List v-bind="$props" />
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
import List from '../components/List.vue'
import Practice from '../components/Practice.vue'

export default {
  components: {
    List,
    Practice,
  },
  data() {
    return { tab: 0 }
  },
  props: {
    'en': String,
    'pt': String,
    ...List.props,
    ...Practice.props,
  },
}
</script>
