import {
  NavbarPlugin,
  DropdownPlugin,
  CardPlugin,
  ImagePlugin,
  LayoutPlugin,
  ModalPlugin,
  CollapsePlugin,
  BadgePlugin,
  VBScrollspy
} from 'bootstrap-vue'
import Vue from 'vue'

Vue.use(LayoutPlugin);
Vue.use(NavbarPlugin);
Vue.use(DropdownPlugin);
Vue.use(CardPlugin);
Vue.use(ImagePlugin);
Vue.use(ModalPlugin);
Vue.use(CollapsePlugin);
Vue.use(BadgePlugin);
Vue.directive('b-scrollspy', VBScrollspy)
