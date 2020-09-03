<template>
  <mysection id="portfolio" class="portfolio">
    <!-- Portfolio Section Heading-->
    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">{{ $t('portfolio') }}</h2>
    <!-- Icon Divider-->
    <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon">
          <font-awesome-icon :icon="['fas', 'star']"></font-awesome-icon>
        </div>
        <div class="divider-custom-line"></div>
    </div>
    <!-- Portfolio Grid Items-->
    <b-card-group columns>
      <!-- Portfolio Item 1-->
      <b-card
        v-for="(portfolio, key) in portfolios"
        :key="key"
        :title="$t(`${portfolio.name}.title`)"
        :img-src="portfolio.image"
        :img-alt="$t(`${portfolio.name}.title`)"
        class="portfolio-item"
        v-b-modal="`modal-${key}`"
      >
          <template v-slot:footer>
            <template v-for="(type, typeKey) in portfolio.types">
              <b-badge class="mr-1" :key="typeKey" :variant="type[1]">{{type[0]}}</b-badge>
            </template>
          </template>

          <b-card-text>
            {{ shorten($t(`${portfolio.name}.intro`), 100) }} ...
          </b-card-text>

          <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div class="portfolio-item-caption-content text-center text-white">
                <font-awesome-icon :icon="['fas', 'eye']"></font-awesome-icon>
                <br>
                {{ $t('show_details') }}
              </div>
          </div>

          <b-modal no-close-on-esc :id="`modal-${key}`" :title="$t('portfolio_details')" size="lg">
            <div class="text-center">
              <!-- Portfolio Modal - Title-->
              <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" :id="`portfolioModal${key}Label`">
                {{$t(`${portfolio.name}.title`)}}
              </h2>
              <!-- Icon Divider-->
              <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon">
                  <font-awesome-icon :icon="['fas', 'star']"></font-awesome-icon>
                </div>
                <div class="divider-custom-line"></div>
              </div>
              <!-- Portfolio Modal - Image-->
              <b-img-lazy
                fluid
                thumbnail
                rounded
                blank
                blank-color="#bbb"
                :src="portfolio.image"
                :alt="$t(`${portfolio.name}.title`)"
                class="mb-2"
                width="400px"
                height="300px"
              ></b-img-lazy>
              <!-- Portfolio Modal - Text-->
              <p>
                {{ $t(`${portfolio.name}.intro`) }}
              </p>

              <hr>

              <div class="row justify-content-center align-items-center mt-2 mb-3">
                <div class="col">
                  Status:
                  <b-badge class="mr-2" :variant="portfolio.statusVariant">{{portfolio.status}}</b-badge>
                </div>
                <div class="col">
                  {{ $t('category') }}:
                  <template v-for="(type, typeKey) in portfolio.types">
                    <b-badge class="mr-2" :key="typeKey" :variant="type[1]">{{type[0]}}</b-badge>
                  </template>
                </div>
                <div class="col">
                  <a target="_blank" :href="portfolio.link">
                    {{ $t('visit_link') }}
                    <font-awesome-icon fixed-width :icon="['fas', 'external-link-alt']"></font-awesome-icon>
                  </a>
                </div>
              </div>

              <hr>

              <h3>{{ $t('screenshots') }}:</h3>
              <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon">
                  <font-awesome-icon :icon="['fas', 'star']"></font-awesome-icon>
                </div>
                <div class="divider-custom-line"></div>
              </div>

              <div :id="`img-viewer-${key}`" v-viewer>
                
                <b-card-group columns>

                  <b-card
                    v-for="(detailImage, detailKey) in portfolio.images"
                    :key="detailKey"
                    :img-src="detailImage"
                    :img-alt="$t(`${portfolio.name}.title`) + ` Image #${detailKey}`"
                    img-top
                    class="cursor-pointer"
                  >
                  </b-card>
                </b-card-group>
              </div>

            </div>
            <template v-slot:modal-footer>
              <div class="text-center w-100">
                <button class="btn btn-primary" @click="$bvModal.hide(`modal-${key}`)">
                  <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
                  {{ $t('close_window') }}
                </button>
              </div>
            </template>
          </b-modal>
      </b-card>
    </b-card-group>
  </mysection>
</template>

<script>
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import Vue from 'vue'
Vue.use(Viewer)

const imgAsset = (filename) => {
  return API_URL + '/img/' + filename
}

export default {
  data: () => ({
    portfolios: [
      {
        name: 'mobiltravel',
        image: imgAsset('mobiltravel/thumb.png'),
        types: [
          ['API', 'success'],
        ],
        images: [
          imgAsset('mobiltravel/contribution.png'),
          imgAsset('mobiltravel/webhome.png'),
          imgAsset('mobiltravel/auth.png'),
          imgAsset('mobiltravel/search.png'),
          imgAsset('mobiltravel/ticket.png'),
          imgAsset('mobiltravel/mobile-1.jpg'),
          imgAsset('mobiltravel/mobile-2.jpg'),
          imgAsset('mobiltravel/mobile-3.jpg'),
          imgAsset('mobiltravel/mobile-4.jpg'),
        ],
        link: 'http://mobiltravel.id',
        status: 'Active',
        statusVariant: 'success',
      },
      {
        name: 'qytasik',
        image: imgAsset('sik/thumb.jpg'),
        types: [
          ['Full Stack', 'primary'],
          ['SPA', 'secondary'],
          ['API', 'success'],
        ],
        images: [
          imgAsset('sik/home.png'),
          imgAsset('sik/reports.png'),
          imgAsset('sik/income.png'),
        ],
        link: 'http://mitra.qytatrans.com',
        status: 'Active',
        statusVariant: 'success',
      },
      {
        name: 'qytaadmin',
        image: imgAsset('qytaadmin/thumb.jpg'),
        types: [
          ['Full Stack', 'primary'],
        ],
        images: [
          imgAsset('qytaadmin/contribution.png'),
          imgAsset('qytaadmin/qytaadmin.png'),
          imgAsset('qytaadmin/pemesanan-1.png'),
          imgAsset('qytaadmin/pemesanan-2.png'),
          imgAsset('qytaadmin/pemesanan-3.png'),
          imgAsset('qytaadmin/tiket.png'),
          imgAsset('qytaadmin/spj.png'),
        ],
        link: 'http://cs.qytatrans.com',
        status: 'Active',
        statusVariant: 'success',
      },
      {
        name: 'qytachecklist',
        image: imgAsset('checklist/thumb.png'),
        types: [
          ['Full Stack', 'primary'],
          ['PWA', 'secondary'],
          ['API', 'success'],
        ],
        images: [
          imgAsset('checklist/qytachecklist.png'),
          imgAsset('checklist/home.png'),
          imgAsset('checklist/1.png'),
          imgAsset('checklist/2.png'),
        ],
        link: 'http://checklistarmada.qytatrans.com',
        status: 'Active',
        statusVariant: 'success',
      },
      {
        name: 'sum',
        image: imgAsset('sum/thumb.png'),
        types: [
          ['API', 'success'],
          ['Full Stack', 'primary'],
        ],
        images: [
          imgAsset('sum/contribution.png'),
          imgAsset('sum/front.png'),
          imgAsset('sum/home.png'),
          imgAsset('sum/accounts.png'),
          imgAsset('sum/reports.png'),
          imgAsset('sum/report-details.png'),
          imgAsset('sum/admin.png'),
        ],
        link: 'http://member.syirkahummatmulia.com',
        status: 'Active',
        statusVariant: 'success',
      },
      {
        name: 'qytahris',
        image: imgAsset('hris/thumb.png'),
        types: [
          ['Full Stack', 'primary'],
        ],
        images: [
          imgAsset('hris/qytahris.png'),
          imgAsset('hris/1.png'),
        ],
        link: 'http://hris.qytatrans.com',
        status: 'Active',
        statusVariant: 'success',
      },
      {
        name: 'qytabot',
        image: imgAsset('qytabot/thumb20200903.png'),
        types: [
          ['API', 'success'],
        ],
        images: [
          imgAsset('qytabot/customer1.png'),
          imgAsset('qytabot/customer2.png'),
          imgAsset('qytabot/ops1.png'),
          imgAsset('qytabot/ops2.png'),
          imgAsset('qytabot/checker1.png'),
          imgAsset('qytabot/checker2.png'),
        ],
        link: 'http://t.me/qytatransbot',
        status: 'Active',
        statusVariant: 'success',
      },
      {
        name: 'idiymotor',
        image: imgAsset('idiymotor/thumb.png'),
        types: [
          ['Full Stack', 'primary'],
        ],
        images: [
          imgAsset('idiymotor/home.png'),
        ],
        link: 'http://insurediy.com.my/car-insurance',
        status: 'Active',
        statusVariant: 'success',
      },
      {
        name: 'smanusa',
        image: imgAsset('smanusa/thumbs/200.smanusa.png'),
        types: [
          ['Full Stack', 'primary'],
        ],
        images: [
          imgAsset('smanusa/smanusa.png'),
          imgAsset('smanusa/home.png'),
          imgAsset('smanusa/mobile.png'),
        ],
        link: 'http://smanusa.sch.id',
        status: 'Replaced',
        statusVariant: 'warning',
      },
    ]
  }),
  methods: {
    shorten(str, maxLen, separator = ' ') {
      if (str.length <= maxLen) return str;
      return str.substr(0, str.lastIndexOf(separator, maxLen));
    }
  }
}
</script>

<style scoped>
  .cursor-pointer {
    cursor: pointer;
  }
</style>
