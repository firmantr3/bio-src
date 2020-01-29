<template>
  <div>
    <h3 class="mb-0">{{ $t('portfolio') }}</h3>
    <hr class="mt-0">
    <div class="row text-center">

      <div class="col">
        <b-card class="mb-4">
          <b-card-img-lazy
            blank
            blank-color="#bbb"
            :src="imgAsset('motaicon.png')"
            alt="Mobiltravel Icon"
          ></b-card-img-lazy>

          <p class="mb-0 mt-2">
            <a rel="noreferrer" href="https://mobiltravel.id" target="_blank"><b>MobilTravel</b></a> {{ $t('mobiltravel_intro') }}.
          </p>
        </b-card>

        <b-card class="mb-4">
          <b-card-img-lazy
            class="cursor-pointer"
            blank
            blank-color="#bbb"
            alt="Qyta SIK Thumbnail"
            :src="imgAsset('qytasik.resized.png')"
            v-b-modal.modal-qytasik
          ></b-card-img-lazy>
          <b-modal id="modal-qytasik" size="xl" title="QytaTrans Sistem Informasi Kemitraan">
            <div class="text-center">
              <b-img-lazy
                fluid
                blank
                blank-color="#bbb"
                alt="Qyta SIK"
                :src="imgAsset('qytasik.png')"
              ></b-img-lazy>
            </div>
          </b-modal>

          <p class="mb-0 mt-2">
            <b>QytaTrans SIK</b>, {{ $t('qytasik_intro') }}.
          </p>
        </b-card>
      </div>

      <div class="col">
        <b-card class="mb-4">
          <b-card-img-lazy
            class="cursor-pointer"
            v-b-modal.modal-qytaadmin
            blank
            blank-color="#bbb"
            alt="Qyta Admin Travel Thumbnail"
            :src="imgAsset('qytaadmin.resized.png')"
          ></b-card-img-lazy>
          <b-modal id="modal-qytaadmin" size="xl" title="QytaTrans Schedule &amp; Seat Management">
            <div class="text-center">
              <b-img-lazy
                fluid
                blank
                blank-color="#bbb"
                alt="Qyta Admin Travel"
                :src="imgAsset('qytaadmin.png')"
              ></b-img-lazy>
            </div>
          </b-modal>

          <p class="mb-0 mt-2">
            <b>QytaTrans Schedule &amp; Seat Management</b>, {{ $t('qytaadmin_intro') }}.
          </p>
        </b-card>

        <b-card class="mb-4">
          <b-card-img-lazy
            class="cursor-pointer"
            v-b-modal.modal-qytachecklist
            blank
            blank-color="#bbb"
            alt="Qyta Checklist Thumbnail"
            :src="imgAsset('qytachecklist.png')"
          ></b-card-img-lazy>
          <b-modal id="modal-qytachecklist" size="xl" title="QytaTrans Vehicle Checklist">
            <div class="text-center">
              <b-img-lazy
                fluid
                blank
                blank-color="#bbb"
                alt="Qyta Checklist"
                :src="imgAsset('qytachecklist.png')"
              ></b-img-lazy>
            </div>
          </b-modal>

          <p class="mb-0 mt-2">
            <b>QytaTrans Vehicle Checklist</b> {{ $t('qytachecklist_intro') }}.
          </p>
        </b-card>
      </div>

      <div class="col">
        <b-card class="mb-4">
          <b-card-img-lazy
            class="cursor-pointer"
            v-b-modal.modal-qytahris
            blank
            blank-color="#bbb"
            alt="Qyta HRIS Thumbnail"
            :src="imgAsset('qytahris.resized.png')"
          ></b-card-img-lazy>
          <b-modal id="modal-qytahris" size="xl" title="QytaTrans Human Resource Information System">
            <div class="text-center">
              <b-img-lazy
                fluid
                blank
                blank-color="#bbb"
                alt="Qyta HRIS"
                :src="imgAsset('qytahris.png')"
              ></b-img-lazy>
            </div>
          </b-modal>

          <p class="mb-0 mt-2">
            <b>QytaTrans HRIS</b> {{ $t('qytahris_intro') }}.
          </p>
        </b-card>

        <b-card class="mb-4">
          <b-card-img-lazy
            class="cursor-pointer"
            v-b-modal.modal-smanusa
            blank
            blank-color="#bbb"
            alt="SMANUSA Website Thumbnail"
            :src="imgAsset('smanusa.resized.png')"
          ></b-card-img-lazy>
          <b-modal id="modal-smanusa" size="xl" title="SMANUSA High School Website">
            <div class="text-center">
              <b-img-lazy
                fluid
                blank
                blank-color="#bbb"
                alt="SMANUSA Website"
                :src="imgAsset('smanusa.png')"
              ></b-img-lazy>
            </div>
          </b-modal>

          <p class="mb-0 mt-2">
            <a rel="noreferrer" href="https://smanusa.sch.id" target="_blank"><b>SMANUSA High School Website</b></a>,
            {{ $t('smanusa_intro') }}.
          </p>
        </b-card>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  metaInfo () {
    return { title: this.$t('portfolio') }
  },

  data: () => {
    return {

    }
  },

  methods: {

    imgAsset(filename) {
      return API_URL + '/img/' + filename
    }

  }
}
</script>

<style lang="scss" scoped>
  .cursor-pointer {
    cursor: pointer;
  }
</style>
