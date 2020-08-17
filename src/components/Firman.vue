<template>
  <!-- Masthead-->
  <header class="masthead bg-light text-dark text-center" :class="{'header-sidebar': sidebar, 'masthead-shrink': shrink}">
      <div class="container d-flex align-items-center flex-column">
          <!-- Masthead Avatar Image-->
          <!-- <img class="masthead-avatar mb-5" src="https://gravatar.com/avatar/85c9a1594c2d324183364fd303ba0ae4?s=300" alt="" /> -->
          <b-img-lazy
            class="rounded-circle"
            fluid
            thumbnail
            width="300"
            rounded
            blank
            blank-color="#bbb"
            src="https://gravatar.com/avatar/85c9a1594c2d324183364fd303ba0ae4?s=300"
            alt="My Avatar"
          ></b-img-lazy>
          <!-- Masthead Heading-->
          <!-- <h1 class="masthead-heading text-uppercase mb-0">Start Bootstrap</h1> -->
          <!-- Icon Divider-->
          <div class="divider-custom divider-dark">
              <div class="divider-custom-line"></div>
              <div class="divider-custom-icon">
                <font-awesome-icon :icon="['fas', 'star']"></font-awesome-icon>
              </div>
              <div class="divider-custom-line"></div>
          </div>
          <!-- Masthead Subheading-->
          <p class="masthead-subheading font-weight-light mb-0">Backend API Programmer • Full Stack Web Developer</p>
      </div>
  </header>
</template>

<script>
export default {
  computed: {
    sidebar() {
      return this.$store.state.ui.sidebar
    },
    shrink() {
      return this.$store.state.ui.shrink
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  position: relative;
}

header.header-sidebar {
  position: fixed;
  width: 300px;

  .masthead-subheading {
    font-size: 1rem;
  }
}

header {
  transition: all 0.3s ease;
}
</style>
