importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0dfb537e0140e51175d6.css",
    "revision": "e324bfcb83cde916b8ab079b5c8bb5c9"
  },
  {
    "url": "/_nuxt/14006ace2750483f9c75.js",
    "revision": "42c2a6258251f36ec12b4a154a1ccbb3"
  },
  {
    "url": "/_nuxt/2019b18abfd501e9edb5.js",
    "revision": "169f3e145431a346f6336da8afb32179"
  },
  {
    "url": "/_nuxt/2ebed122c54a524625ab.js",
    "revision": "bff31269b21ec187954b2ce6e57b99fd"
  },
  {
    "url": "/_nuxt/40fef6bcd04d9bee1124.js",
    "revision": "13f1e341344e2a1d22b5413529a831f7"
  },
  {
    "url": "/_nuxt/46b7f83aba4030059894.js",
    "revision": "5e7c1408a7b5b3860a180fd1cd69c0b5"
  },
  {
    "url": "/_nuxt/4e7e41a6cfdae5598c17.js",
    "revision": "31704a0edaf84eb6d7cde413ca28e669"
  },
  {
    "url": "/_nuxt/5952757a66aa2b605e23.css",
    "revision": "8f8ef545d323d4d3f0c4060a15a1a605"
  },
  {
    "url": "/_nuxt/627a6d81f7ccc69b7707.js",
    "revision": "61a621e624fcaf4ca72c54d6162cbf6a"
  },
  {
    "url": "/_nuxt/6f27e6a1eea8ddbe821e.js",
    "revision": "0c35b8c06f88e67a96a7db5fe55083fe"
  },
  {
    "url": "/_nuxt/7cdfa21b6bf07b542f38.js",
    "revision": "373f3d3963e9787b73ddbae8560ff237"
  },
  {
    "url": "/_nuxt/85da2c36c7e7b1c6737e.js",
    "revision": "e32435d02c5e1b1f84fcd328a999275a"
  },
  {
    "url": "/_nuxt/85f8881515327db11cbf.js",
    "revision": "7bf78a035282e09dbdff645ba45554fc"
  },
  {
    "url": "/_nuxt/8921a4e4c7df2169ba49.js",
    "revision": "3096501e20904e9f7bcc6a8752b30f67"
  },
  {
    "url": "/_nuxt/8aea9cf7c2bcd3f78a39.css",
    "revision": "569a504e96874e24c39307d789f90051"
  },
  {
    "url": "/_nuxt/98b74560dd7d9b89a361.css",
    "revision": "44d9beb345d23e83106048ce430e0127"
  },
  {
    "url": "/_nuxt/993b96da626274953776.js",
    "revision": "073507b705486e6a46d03e91f38b181c"
  },
  {
    "url": "/_nuxt/a613113a96f377a714e9.css",
    "revision": "2c8e90b6a0b3011844f4b0e4c165a0d8"
  },
  {
    "url": "/_nuxt/a6e02d545535d8204ab7.js",
    "revision": "628da93aa1847f3eac360f7bc53ea2a9"
  },
  {
    "url": "/_nuxt/b4813f06f9e766c01943.js",
    "revision": "67cf217dc82b62b58de74b7b23cc09bd"
  },
  {
    "url": "/_nuxt/b4994210bdf318f9fe2e.js",
    "revision": "ab296f071ab93f30a26446e218c244bd"
  },
  {
    "url": "/_nuxt/bafffd866ce98deac9aa.js",
    "revision": "1267a34b6a52c2eb33f259d197e562e6"
  },
  {
    "url": "/_nuxt/db1a05863839832d9669.js",
    "revision": "5398e0d71b6419dc1008d66d39a3ba3e"
  },
  {
    "url": "/_nuxt/e48d182bcc89435d63fb.js",
    "revision": "30394a2c4118801f9e1e6b4bb5717271"
  },
  {
    "url": "/_nuxt/e4e71c233d31260533e0.js",
    "revision": "a288296cb4087fcba7f724ceec7f531d"
  },
  {
    "url": "/_nuxt/e4f0766abbd4f64b4856.css",
    "revision": "53690d12bd2c538a086ce2b0a71f4e2b"
  },
  {
    "url": "/_nuxt/e5f534d07182ee56df8b.js",
    "revision": "2ca9d2795f870054dfbaa042d8431b85"
  },
  {
    "url": "/_nuxt/edc174eaff281b2a1a7c.js",
    "revision": "e3e99103ab06115807680322b36fe1b9"
  },
  {
    "url": "/_nuxt/f3aaf6eaf7fa5bd02395.js",
    "revision": "d941470272c7ba1758f896195090c372"
  },
  {
    "url": "/_nuxt/f48f4b7dd4d1bb529319.js",
    "revision": "06ecbb4666d7d3ed95d48020920cf3dc"
  },
  {
    "url": "/_nuxt/fb1712810963916e5470.css",
    "revision": "3fc6637f158290c7d80c330170719c18"
  },
  {
    "url": "/_nuxt/fbf0d467688304956861.js",
    "revision": "8607b40302caf17186defedd583d4411"
  },
  {
    "url": "/_nuxt/fc19b090049c8b5f335d.js",
    "revision": "29ed595e97bac679299ec49c99b40158"
  }
], {
  "cacheId": "cuando-rindo",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('https://api.cuandorindo.com/.*'), workbox.strategies.staleWhileRevalidate({}), 'GET')

workbox.routing.registerRoute(new RegExp('/members/.*'), workbox.strategies.cacheFirst({"cacheName":"cuando-rindo-members","cacheExpiration":{"maxEntries":10000,"maxAgeSeconds":2592000}}), 'GET')

workbox.routing.registerRoute(new RegExp('/^https://fonts.(?:googleapis|gstatic).com/(.*)/'), workbox.strategies.cacheFirst({"cacheName":"cuando-rindo-font-vuetify","cacheExpiration":{"maxEntries":10000,"maxAgeSeconds":31536000}}), 'GET')

workbox.routing.registerRoute(new RegExp('https://use.fontawesome.com/.*'), workbox.strategies.cacheFirst({"cacheName":"cuando-rindo-font-awesome","cacheExpiration":{"maxEntries":10000,"maxAgeSeconds":31536000}}), 'GET')
