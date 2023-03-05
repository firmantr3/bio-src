<template>
  <mysection id="contact" class="text-center">
    <!-- Contact Section Heading-->
    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">{{ $t('contact_me') }}</h2>
    <!-- Icon Divider-->
    <div class="divider-custom">
      <div class="divider-custom-line"></div>
      <div class="divider-custom-icon">
        <font-awesome-icon :icon="['fas', 'star']"></font-awesome-icon>
      </div>
      <div class="divider-custom-line"></div>
    </div>
    <!-- Contact Section Form-->

    <p v-for="(paragraph, index) in $t(`find_me_on`).split('\\n\\n')" :key="index">
      {{ paragraph }}
    </p>
    
    <p>
      <a rel="noreferrer" class="mr-2 github-color" href="https://github.com/firmantr3" target="_blank" :title="$t('contact_me_via') + ' Github'">
        <font-awesome-icon :icon="['fab', 'github']" size="2x"></font-awesome-icon>
      </a>

      <a rel="noreferrer" class="mr-2 gitlab-color" href="https://gitlab.com/firmantr3" target="_blank" :title="$t('contact_me_via') + ' Gitlab'">
        <font-awesome-icon :icon="['fab', 'gitlab']" size="2x"></font-awesome-icon>
      </a>

      <a rel="noreferrer" class="mr-2 telegram-color" href="https://t.me/firmantr3" target="_blank" :title="$t('contact_me_via') + ' Telegram'">
        <font-awesome-icon :icon="['fab', 'telegram']" size="2x"></font-awesome-icon>
      </a>

      <a rel="noreferrer" class="mr-2 whatsapp-color" href="https://wa.me/6281138702880" target="_blank" :title="$t('contact_me_via') + ' Whatsapp'">
        <font-awesome-icon :icon="['fab', 'whatsapp']" size="2x"></font-awesome-icon>
      </a>

      <a rel="noreferrer" class="mr-2 facebook-color" href="https://www.facebook.com/ondenkz" target="_blank" :title="$t('contact_me_via') + ' Facebook'">
        <font-awesome-icon :icon="['fab', 'facebook-square']" size="2x"></font-awesome-icon>
      </a>

      <a rel="noreferrer" class="linkedin-color" href="https://www.linkedin.com/in/firman-taruna-nugraha-982409b1" target="_blank" :title="$t('contact_me_via') + ' Linkedin'">
        <font-awesome-icon :icon="['fab', 'linkedin']" size="2x"></font-awesome-icon>
      </a>
    </p>
  </mysection>
</template>

<style scoped>
.telegram-color {
  color: #0088CC;
}
.whatsapp-color {
  color: #25D366;
}
.facebook-color {
  color: #3b5999;
}
.linkedin-color {
  color: #0077B5;
}
.github-color {
  color: #333;
}
.gitlab-color {
  color: #fc6d26;
}
</style>
