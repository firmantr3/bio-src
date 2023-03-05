import Cookies from 'js-cookie'

const locales = {
  "id": "ID",
  "en": "EN"
}

// state
export const state = () => ({
  locale: Cookies.get('locale') || process.env.APP_LOCALE,
  locales: locales,
  localeIsSet: typeof(Cookies.get('locale')) !== 'undefined'
})

// getters
export const getters = {
  locale: state => state.locale,
  locales: state => state.locales,
  localeIsSet: state => state.localeIsSet
}

// mutations
export const mutations = {
  switchLocale(state, { locale }) {
    state.locale = locale
    state.localeIsSet = true
  }
}

// actions
export const actions = {
  setLocale ({ commit }, { locale }) {
    commit('switchLocale', { locale })

    Cookies.set('locale', locale, { expires: 365 })
  }
}
