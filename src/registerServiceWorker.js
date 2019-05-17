/* eslint-disable no-console */

import { register } from 'register-service-worker'

const notifyUserAboutUpdate = (worker) => {
  worker.postMessage({ action: 'skipWaiting' })
}

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    registrationOptions: { scope: SW_SCOPE },
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updated (registration) {
      console.log('New content is available; please refresh.')
      notifyUserAboutUpdate(registration.waiting)
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}

var refreshing
navigator.serviceWorker.addEventListener('controllerchange', function () {
  if (refreshing) return
  window.location.reload()
  refreshing = true
})
