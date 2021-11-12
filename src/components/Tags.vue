<template>
  <b-taglist>
    <b-tag rounded size="is-medium" v-for="tag in tags" :key="tag" :type="type(tag)" @click.native="clicked(tag)">
      {{ tag }}
    </b-tag>
  </b-taglist>
</template>

<script>
export default {
  name: 'Tags',
  props: {
    tags: Array,
    selected: {
      default: false,
    },
  },
  data() {
    return {
      selected_tags: [],
    }
  },
  created() {
    if (typeof this.selected == 'boolean') {
      if (this.selected === true) {
        this.selected_tags = [...this.tags]
      }
    } else {
      // assumed to be an array of tags
      this.selected_tags = this.selected
    }

    this.emit()
  },
  methods: {
    type(tag) {
      return this.selected_tags.indexOf(tag) === -1 ? 'is-success is-light' : 'is-success'
    },
    clicked(tag) {
      const index = this.selected_tags.indexOf(tag)
      if (index === -1) {
        this.selected_tags.push(tag)
      } else {
        this.selected_tags.splice(index, 1)
      }

      this.emit()
    },
    emit() {
      this.$emit('input', this.selected_tags)
    },
  },
}
</script>

<style scoped>
.tags {
  justify-content: center;
}
</style>
