<template>
  <b-navbar toggleable="lg" type="dark" class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" :class="{'navbar-shrink': shrink}" id="mainNav" v-b-scrollspy="60">
    <b-container>
      <h1 style="font-size: 1em;"><b-navbar-brand href="#" v-scroll-to="'#page-top'">Firman Taruna Nugraha</b-navbar-brand></h1>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-item href="#portfolio" v-scroll-to="'#portfolio'">{{ $t('portfolio') }}</b-nav-item>
          <b-nav-item href="#about" v-scroll-to="'#about'">{{ $t('about') }}</b-nav-item>
          <b-nav-item href="#contact" v-scroll-to="'#contact'">{{ $t('contact') }}</b-nav-item>

          <LocaleDropdown />

        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
const LocaleDropdown = () => import('./LocaleDropdown').then(m => m.default || m);

export default {
  components: {
    LocaleDropdown
  },
  computed: {
    shrink() {
      return this.$store.state.ui.shrink
    }
  }
}
</script>
