<template>
  <div id="nav-scroller" ref="content">
    <!-- Portfolio Section-->
    <Portfolio />
    <!-- About Section-->
    <About />
    <!-- Contact Section-->
    <Contact />
    <!-- Copyright Section-->
    <Copyright />
    <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes)-->
    <transition name="fade">
        <div class="scroll-to-top d-lg-none position-fixed" v-if="shrink" :style="{'display': sidebar ? 'none' : 'block'}">
            <a class="js-scroll-trigger d-block text-center text-white rounded" href="#page-top" v-scroll-to="'#page-top'">
                <font-awesome-icon :icon="['fas', 'arrow-up']"></font-awesome-icon>    
            </a>
        </div>
    </transition>
  </div>
</template>

<script>
const Portfolio = () => import('@/pages/portfolio').then(m => m.default || m);
const About = () => import('@/pages/about').then(m => m.default || m);
const Contact = () => import('@/pages/contact').then(m => m.default || m);
const Copyright = () => import('@/components/Copyright').then(m => m.default || m);

export default {
  components: {
    Portfolio,
    About,
    Contact,
    Copyright
  },
  computed: {
    shrink() {
      return this.$store.state.ui.shrink
    },
    sidebar() {
      return this.$store.state.ui.sidebar
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
