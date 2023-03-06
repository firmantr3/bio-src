<template>
  <div id="page-top" class="theme">
      <!-- Navigation-->
      <navbar />
      
      <firman />

      <div class="headpadding"></div>

      <slot></slot>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import { debounce } from 'lodash'

export default {
  created () {
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', debounce(this.handleScroll, 1000));
      window.addEventListener('resize', debounce(this.handleResize, 1000));
      this.updateSidebar(this.checkSidebar());
    })
  },
  destroyed () {
      window.removeEventListener('scroll', debounce(this.handleScroll, 1000));
      window.removeEventListener('resize', debounce(this.handleResize, 1000));
  },
  methods: {
    handleScroll () {
      this.updateShrink(window.scrollY > 100);
    },
    handleResize () {
      this.updateSidebar(this.checkSidebar());
    },
    checkSidebar() {
      return window.innerWidth >= 992;
    },
    ...mapMutations({
      updateShrink: 'ui/updateShrink',
      updateSidebar: 'ui/updateSidebar'
    })
  }
}
</script>

<style>
.headpadding {
  display: none;
}
@media (min-width: 992px) {
  .headpadding {
    padding-top: 104px;
    display: block;
  }
}
</style>
