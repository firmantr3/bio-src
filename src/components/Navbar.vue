<template>
  <b-navbar toggleable="lg" type="dark" class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" :class="{'navbar-shrink': shrink}" id="mainNav" v-b-scrollspy="60">
    <b-container>
      <b-navbar-brand href="#" v-scroll-to="'#page-top'">Firman Taruna Nugraha</b-navbar-brand>

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
import LocaleDropdown from './LocaleDropdown'

export default {
  components: {
    LocaleDropdown
  },
  computed: {
    shrink() {
      return this.$store.state.ui.shrink
    }
  },
  methods: {
    scrollIntoView(evt) {
      evt.preventDefault()
      const href = evt.target.getAttribute('href')
      const el = href ? document.querySelector(href) : null
      console.log(document.getElementById('#nav-scroller'));
      document.getElementById('#nav-scroller').scrollTop = el.offsetTop
    }
  }
}
</script>
