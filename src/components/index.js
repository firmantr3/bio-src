import Vue from 'vue'
import Child from './Child'
import { HasError, AlertError, AlertSuccess } from 'vform'
import Mysection from './Mysection'

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
