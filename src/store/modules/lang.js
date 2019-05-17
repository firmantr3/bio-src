import Cookies from 'js-cookie'
import * as types from '../mutation-types'
import { locales } from '@/config'

// state
export const state = {
  locale: Cookies.get('locale') || APP_LOCALE,
  locales: locales,
  localeIsSet: typeof(Cookies.get('locale')) !== 'undefined'
}

// getters
export const getters = {
  locale: state => state.locale,
  locales: state => state.locales,
  localeIsSet: state => state.localeIsSet
}

// mutations
export const mutations = {
  [types.SET_LOCALE] (state, { locale }) {
    state.locale = locale
    state.localeIsSet = true
  }
}

// actions
export const actions = {
  setLocale ({ commit }, { locale }) {
    commit(types.SET_LOCALE, { locale })

    Cookies.set('locale', locale, { expires: 365 })
  }
}
