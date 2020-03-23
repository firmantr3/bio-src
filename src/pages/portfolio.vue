<template>
  <div>
    <h3 class="mb-0">{{ $t('portfolio') }}</h3>
    <hr class="mt-0">
    <div class="row text-center">

      <div class="col-md-12 col-lg-4">
        <b-card class="mb-4">
          <div @click="showViewer('mobiltravel')">
            <b-card-img-lazy
              blank
              blank-color="#bbb"
              :src="imgAsset('mobiltravel/motaicon.png')"
              alt="Mobiltravel Icon"
            ></b-card-img-lazy>
          </div>

          <p class="mb-0 mt-2">
            <a rel="noreferrer" href="https://mobiltravel.id" target="_blank"><b class="text-dark">MobilTravel</b></a> {{ $t('mobiltravel_intro') }}.
          </p>
        </b-card>

        <b-card class="mb-4">
          <div @click="showViewer('sik')">
            <b-card-img-lazy
              class="cursor-pointer"
              blank
              blank-color="#bbb"
              alt="Qyta SIK Thumbnail"
              :src="imgAsset('sik/thumbs/200.qytasik.png')"
            ></b-card-img-lazy>
          </div>

          <p class="mb-0 mt-2">
            <a rel="noreferrer" href="https://mitra.qytatrans.com" target="_blank"><b class="text-dark">QytaTrans SIK</b></a>, {{ $t('qytasik_intro') }}.
          </p>
        </b-card>
      </div>

      <div class="col-md-12 col-lg-4">
        <b-card class="mb-4">
          <div @click="showViewer('qytaadmin')">
            <b-card-img-lazy
              class="cursor-pointer"
              blank
              blank-color="#bbb"
              alt="Qyta Admin Travel Thumbnail"
              :src="imgAsset('qytaadmin/thumbs/200.qytaadmin.png')"
            ></b-card-img-lazy>
          </div>

          <p class="mb-0 mt-2">
            <a rel="noreferrer" href="https://qytatrans.com" target="_blank"><b class="text-dark">QytaTrans Schedule &amp; Seat Management</b></a>, {{ $t('qytaadmin_intro') }}.
          </p>
        </b-card>

        <b-card class="mb-4">
          <div @click="showViewer('checklist')">
            <b-card-img-lazy
              class="cursor-pointer"
              blank
              blank-color="#bbb"
              alt="Qyta Checklist Thumbnail"
              :src="imgAsset('checklist/thumbs/200.qytachecklist.png')"
            ></b-card-img-lazy>
          </div>

          <p class="mb-0 mt-2">
            <a rel="noreferrer" href="https://checklistarmada.qytatrans.com" target="_blank"><b class="text-dark">QytaTrans Vehicle Checklist</b></a> {{ $t('qytachecklist_intro') }}.
          </p>
        </b-card>
      </div>

      <div class="col-md-12 col-lg-4">
        <b-card class="mb-4">
          <div @click="showViewer('sum')">
            <b-card-img-lazy
              class="cursor-pointer"
              blank
              blank-color="#bbb"
              alt="Syirkah Ummat Mulia"
              :src="imgAsset('sum/thumbs/200.front.png')"
            ></b-card-img-lazy>
          </div>

          <p class="mb-0 mt-2">
            <a rel="noreferrer" href="http://member.syirkahummatmulia.com" target="_blank"><b class="text-dark">Syirkah Ummat Mulia Web App & Mobile API</b></a> {{ $t('sum_intro') }}.
          </p>
        </b-card>

        <b-card class="mb-4">
          <div @click="showViewer('hris')">
            <b-card-img-lazy
              class="cursor-pointer"
              blank
              blank-color="#bbb"
              alt="Qyta HRIS Thumbnail"
              :src="imgAsset('hris/thumbs/200.qytahris.png')"
            ></b-card-img-lazy>
          </div>

          <p class="mb-0 mt-2">
            <a rel="noreferrer" href="https://hris.qytatransgroup.com" target="_blank"><b class="text-dark">QytaTrans HRIS</b></a> {{ $t('qytahris_intro') }}.
          </p>
        </b-card>

        <b-card class="mb-4">
          <div @click="showViewer('smanusa')">
            <b-card-img-lazy
              class="cursor-pointer"
              blank
              blank-color="#bbb"
              alt="SMANUSA Website Thumbnail"
              :src="imgAsset('smanusa/thumbs/200.smanusa.png')"
            ></b-card-img-lazy>
          </div>

          <p class="mb-0 mt-2">
            <a rel="noreferrer" href="https://smanusa.sch.id" target="_blank"><b class="text-dark">SMANUSA High School Website</b></a>,
            {{ $t('smanusa_intro') }}.
          </p>
        </b-card>
      </div>

      <div id="img-viewer" class="d-none" v-viewer>
        <img v-for="src in currentImages" :src="imgAsset(src)" :key="src">
      </div>

    </div>
  </div>
</template>

<script>
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import Vue from 'vue'
Vue.use(Viewer)

export default {
  metaInfo () {
    return { title: this.$t('portfolio') }
  },

  data: () => {
    return {
      currentImages: [],
      sum: {
        images: [
          'sum/front.png',
          'sum/home.png',
          'sum/accounts.png',
          'sum/reports.png',
          'sum/report-details.png',
          'sum/admin.png',
        ],
      },
      smanusa: {
        images: [
          'smanusa/smanusa.png',
          'smanusa/home.png',
          'smanusa/mobile.png',
        ],
      },
      mobiltravel: {
        images: [
          'mobiltravel/webhome.png',
          'mobiltravel/auth.png',
          'mobiltravel/search.png',
          'mobiltravel/ticket.png',
          'mobiltravel/mobile-1.jpg',
          'mobiltravel/mobile-2.jpg',
          'mobiltravel/mobile-3.jpg',
          'mobiltravel/mobile-4.jpg',
        ],
      },
      qytaadmin: {
        images: [
          'qytaadmin/qytaadmin.png',
          'qytaadmin/pemesanan-1.png',
          'qytaadmin/pemesanan-2.png',
          'qytaadmin/pemesanan-3.png',
          'qytaadmin/tiket.png',
          'qytaadmin/spj.png',
        ],
      },
      sik: {
        images: [
          'sik/qytasik.png',
          'sik/home.png',
          'sik/reports.png',
          'sik/income.png',
        ],
      },
      checklist: {
        images: [
          'checklist/qytachecklist.png',
          'checklist/home.png',
          'checklist/1.png',
          'checklist/2.png',
        ],
      },
      hris: {
        images: [
          'hris/qytahris.png',
          'hris/1.png',
        ],
      },
    }
  },

  methods: {

    imgAsset(filename) {
      return API_URL + '/img/' + filename
    },

    showViewer(collection) {
      this.currentImages = this[collection].images;
      let viewer = this.$el.querySelector('#img-viewer').$viewer;
      viewer.view(0).show();
    }

  }
}
</script>

<style lang="scss" scoped>
  .cursor-pointer {
    cursor: pointer;
  }
</style>
