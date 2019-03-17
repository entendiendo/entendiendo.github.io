importScripts('/_nuxt/workbox.js')

workbox.clientsClaim()
workbox.skipWaiting()








workbox.googleAnalytics.initialize()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst(), 'GET')

workbox.routing.registerRoute(new RegExp('https://api.cuandorindo.com/.*'), workbox.strategies.staleWhileRevalidate(), 'GET')

workbox.routing.registerRoute(new RegExp('/members/.*'), workbox.strategies.cacheFirst({
  'cacheName': 'cuando-rindo-members',
  'cacheExpiration': {
    'maxEntries': 10000,
    'maxAgeSeconds': 2592000
  }
}), 'GET')

workbox.routing.registerRoute(new RegExp(/^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/), workbox.strategies.cacheFirst({
  'cacheName': 'cuando-rindo-font-vuetify',
  'cacheExpiration': {
    'maxEntries': 10000,
    'maxAgeSeconds': 31536000
  }
}), 'GET')

workbox.routing.registerRoute(new RegExp('https://use.fontawesome.com/.*'), workbox.strategies.cacheFirst({
  'cacheName': 'cuando-rindo-font-awesome',
  'cacheExpiration': {
    'maxEntries': 10000,
    'maxAgeSeconds': 31536000
  }
}), 'GET')


workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
