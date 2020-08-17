<template>
  <div id="page-top" class="theme">
      <!-- Navigation-->
      <navbar />
      
      <firman />

      <div class="headpadding"></div>

      <child/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Firman from '@/components/Firman'
import {mapMutations} from 'vuex'
import _ from 'lodash'

export default {
  components: {
    Navbar,
    Firman
  },
  created () {
      let debouncedHandleScroll = _.debounce(this.handleScroll, 100);
      let debouncedHandleResize = _.debounce(this.handleResize, 100);
      window.addEventListener('scroll', debouncedHandleScroll);
      window.addEventListener('resize', debouncedHandleResize);
  },
  mounted() {
    this.updateSidebar(this.checkSidebar());
  },
  destroyed () {
      let debouncedHandleScroll = _.debounce(this.handleScroll, 100);
      let debouncedHandleResize = _.debounce(this.handleResize, 100);
      window.removeEventListener('scroll', debouncedHandleScroll);
      window.removeEventListener('resize', debouncedHandleResize);
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
