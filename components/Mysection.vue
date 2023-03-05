<template>
  <section class="page-section min-vh-100" :class="{'section-sidebar': sidebar}">
    <b-container>
      <slot></slot>
    </b-container>
  </section>
</template>

<script>
export default {
  computed: {
    sidebar() {
      return this.$store.state.ui.sidebar
    }
  },
  name: 'Mysection'
}
</script>

<style lang="scss" scoped>
section.section-sidebar {
  padding-left: 300px;
}
</style>
