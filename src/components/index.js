import Vue from 'vue'
const Child = () => import('./Child').then(m => m.default || m)
const Mysection = () => import('./Mysection').then(m => m.default || m)
import { HasError, AlertError, AlertSuccess } from 'vform'

// Components that are registered globaly.
[
  Child,
  HasError,
  AlertError,
  AlertSuccess,
  Mysection
].forEach(Component => {
  Vue.component(Component.name, Component)
})
