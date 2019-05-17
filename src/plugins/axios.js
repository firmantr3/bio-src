import axios from 'axios'
import store from '@/store'
import swal from 'sweetalert2'
import i18n from '@/plugins/i18n'

axios.defaults.params = {}

// Request interceptor
axios.interceptors.request.use(request => {
  request.baseURL = API_URL

  const token = store.getters['auth/token']
  if (token && AUTH_TOKEN_HEADER) {
    request.headers.common['Authorization'] = `Bearer ${token}`
  }
  if (token && !AUTH_TOKEN_HEADER) {
    request.params.token = token
  }

  const locale = store.getters['lang/locale']
  if (locale) {
    request.headers.common['Accept-Language'] = locale
  }

  // request.headers['X-Socket-Id'] = Echo.socketId()

  return request
})

// Response interceptor
axios.interceptors.response.use(response => response, error => {
  const { status } = error.response

  if (status >= 500) {
    swal({
      type: 'error',
      title: i18n.t('error_alert_title'),
      text: i18n.t('error_alert_text'),
      reverseButtons: true,
      confirmButtonText: i18n.t('ok'),
      cancelButtonText: i18n.t('cancel')
    })
  }

  return Promise.reject(error)
})
