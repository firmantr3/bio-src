<template>
  <b-nav-item-dropdown :text="locales[locale]">
    <b-dropdown-item v-for="(value, key) in locales" :key="key" @click.prevent="setLocale(key)">
      {{ value }}
    </b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
import { mapGetters } from 'vuex'
import { loadMessages } from '@/plugins/i18n'
import axios from 'axios'

export default {
  computed: {
    ...mapGetters({
      locale: 'lang/locale',
      locales: 'lang/locales',
      localeIsSet: 'lang/localeIsSet'
    })
  },

  methods: {
    setLocale (locale) {
      if (this.$i18n.locale !== locale) {
        loadMessages(locale)

        this.$store.dispatch('lang/setLocale', { locale })
      }
    }
  },

  created() {
    if(!this.localeIsSet) {
      try {
        axios.get('https://extreme-ip-lookup.com/json/')
          .then((response) => {
            if(response.status === 200) {
              if(response.data.countryCode === 'ID') {
                this.setLocale('id')
              }
              else {
                this.setLocale('en')
              }
            }
          })
      }
      catch(e) {
        // console.log(e);
      }
    }
  }

}
</script>
