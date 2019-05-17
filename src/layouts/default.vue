<template>
  <div class="main-layout">
    <navbar/>

    <b-container class="mt-4">
      <child/>
    </b-container>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'MainLayout',

  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
  .main-layout {
    margin-top: 80px;
  }
</style>

