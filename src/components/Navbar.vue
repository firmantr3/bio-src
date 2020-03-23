<template>
  <div>
    <b-navbar fixed="top" toggleable="lg" type="light" variant="light">
      <b-navbar-brand id="navbrand" :to="{ name: 'welcome' }">{{ appName }}</b-navbar-brand>

      <b-navbar-toggle target="navbarToggler" />

      <b-collapse is-nav id="navbarToggler">
        <b-navbar-nav class="ml-auto">

          <locale-dropdown/>
          
          <li class="nav-item">
            <router-link :to="{ name: 'portfolio' }" class="nav-link" active-class="active">
              {{ $t('portfolio') }}
            </router-link>
          </li>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
const LocaleDropdown = () => import('./LocaleDropdown')

export default {
  components: {
    LocaleDropdown
  },

  data: () => ({
    appName: APP_NAME
  })
}
</script>

<style scoped>
.profile-photo {
  width: 2rem;
  height: 2rem;
  margin: -.375rem 0;
}

@media screen and (max-width: 320px) {
  #navbrand {
    max-width: 100px;
  }
}
</style>
