import Vue from 'vue'
import { HasError, AlertError, AlertSuccess } from 'vform'
const Child = () => import('./Child').then(m => m.default || m);
const Mysection = () => import('./Mysection').then(m => m.default || m);

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
