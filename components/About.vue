<template>
  <Mysection id="about" class="bg-primary text-white text-center">
    <!-- About Section Heading-->
    <h2 class="page-section-heading text-center text-uppercase text-white">{{ $t('about') }}</h2>
    <!-- Icon Divider-->
    <div class="divider-custom divider-light">
      <div class="divider-custom-line"></div>
      <div class="divider-custom-icon">
        <font-awesome-icon :icon="['fas', 'star']"></font-awesome-icon>
      </div>
      <div class="divider-custom-line"></div>
    </div>
    <!-- About Section Content-->
    <p>
      {{ $t('hi_my_name_is') }} <b>Firman Taruna Nugraha</b>, 
    </p>
    <p v-for="(paragraph, index) in $t(`short_intro`).split('\\n\\n')" :key="index">
      {{ paragraph }}
    </p>

  </Mysection>
</template>

<script>
export default {
  
}
</script>

