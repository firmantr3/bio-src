import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import store from '@/store'
import i18n from '@/plugins/i18n'
import router from '@/router'
import Navbar from '@/components/Navbar.vue'
import Welcome from '@/pages/welcome.vue'

import '@/plugins'
import '@/components'

const localVue = {
  i18n,
  store,
  router
}

describe('Navbar.vue', () => {
  it('renders APP_NAME global variable', () => {
    const brand = APP_NAME
    const wrapper = shallowMount(Navbar, { ...localVue })
    expect(wrapper.text()).to.include(brand)
  })
})

describe('welcome.vue', () => {
  it('renders APP_NAME global variable', () => {
    const brand = APP_NAME
    const wrapper = shallowMount(Welcome, { ...localVue })
    expect(wrapper.text()).to.include(brand)
  })
})
