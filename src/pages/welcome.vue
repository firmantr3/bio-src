<template>
  <div>
    <div class="basic-layout d-flex align-items-center justify-content-center m-0">
      <div class="text-center">
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

        <p class="mt-4">
          {{ $t('hi_my_name_is') }} <b>{{ title }}</b>, 
          {{ $t('short_intro') }}.
        </p>

        <p>
          <a rel="noreferrer" class="mr-2 github-color" href="https://github.com/firmantr3" target="_blank" :title="$t('contact_me_via') + ' Github'">
            <i class="fa fa-2x fa-github"></i>
          </a>

          <a rel="noreferrer" class="mr-2 gitlab-color" href="https://gitlab.com/firmantr3" target="_blank" :title="$t('contact_me_via') + ' Gitlab'">
            <i class="fa fa-2x fa-gitlab"></i>
          </a>

          <a rel="noreferrer" class="mr-2 telegram-color" href="https://t.me/firmantr3" target="_blank" :title="$t('contact_me_via') + ' Telegram'">
            <i class="fa fa-2x fa-telegram"></i>
          </a>

          <a rel="noreferrer" class="mr-2 whatsapp-color" href="https://wa.me/6281138702880" target="_blank" :title="$t('contact_me_via') + ' Whatsapp'">
            <i class="fa fa-2x fa-whatsapp"></i>
          </a>

          <a rel="noreferrer" class="mr-2 facebook-color" href="https://www.facebook.com/ondenkz" target="_blank" :title="$t('contact_me_via') + ' Facebook'">
            <i class="fa fa-2x fa-facebook-square"></i>
          </a>

          <a rel="noreferrer" class="linkedin-color" href="https://www.linkedin.com/in/firman-taruna-nugraha-982409b1" target="_blank" :title="$t('contact_me_via') + ' Linkedin'">
            <i class="fa fa-2x fa-linkedin-square"></i>
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo () {
    return { title: this.$t('home') }
  },

  data: () => ({
    title: APP_NAME
  })
}
</script>

<style scoped>
.top-right {
  position: absolute;
  right: 10px;
  top: 18px;
}

.title {
  font-size: 85px;
}

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
