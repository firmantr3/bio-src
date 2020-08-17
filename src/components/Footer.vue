<template>
  <footer class="footer text-center" :class="{'section-sidebar': sidebar}">
    <b-container>
      <slot></slot>
    </b-container>
  </footer>
</template>

<script>
export default {
  computed: {
    sidebar() {
      return this.$store.state.ui.sidebar
    }
  }
}
</script>

<style lang="scss" scoped>
footer.section-sidebar {
  padding-left: 300px;
}
</style>
