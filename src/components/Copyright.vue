<template>
  <div class="copyright py-4 text-center text-white" :class="{'section-sidebar': sidebar}">
      <div class="container"><small>Copyright © Firman Taruna Nugraha 2020</small></div>
  </div>
  
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
.copyright.section-sidebar {
  padding-left: 300px;
}
</style>
