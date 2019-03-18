importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/094a5bdd9d316420cc46.js",
    "revision": "850c27dc7fd6e0822d96a2a6925cd1ca"
  },
  {
    "url": "/_nuxt/138f2d0d12226df8be42.css",
    "revision": "cd3b1d8a08c9659c19572a57a15cba93"
  },
  {
    "url": "/_nuxt/215e2ea794b622b6d6ad.js",
    "revision": "d52b57bf87a58585af0e1b7cf41586e5"
  },
  {
    "url": "/_nuxt/292357dd63ead556bfd3.js",
    "revision": "bb4b1455a33c4770112063958f8b43cf"
  },
  {
    "url": "/_nuxt/3496930ecb5ed423d822.js",
    "revision": "52b3be99c532f720a7a0c42ee67e65f2"
  },
  {
    "url": "/_nuxt/358b688b193f87759dfe.js",
    "revision": "25b753020267a9ca70f2afa3eb7c68a4"
  },
  {
    "url": "/_nuxt/391e8b9f8c9dbceba174.css",
    "revision": "569a504e96874e24c39307d789f90051"
  },
  {
    "url": "/_nuxt/45e38c91cd83031b9100.js",
    "revision": "f42a67cb1e9bf057e069aab9e341e8c8"
  },
  {
    "url": "/_nuxt/5952757a66aa2b605e23.css",
    "revision": "8f8ef545d323d4d3f0c4060a15a1a605"
  },
  {
    "url": "/_nuxt/5ec8637efa79e2b4a2ec.js",
    "revision": "9255b2f83217a85208ed0dc4674824fc"
  },
  {
    "url": "/_nuxt/689dd8f01d2f675ca9e3.css",
    "revision": "b91934bada5bf82953d11b4c64489802"
  },
  {
    "url": "/_nuxt/76412563cc5ff4cdc95f.js",
    "revision": "a85ee157756f256fb78f66213f8090c1"
  },
  {
    "url": "/_nuxt/79e120209e5de5b62bd2.js",
    "revision": "c1076b2759f7412ab7cfbd946ba4be35"
  },
  {
    "url": "/_nuxt/7ae08e3c47b452f20731.js",
    "revision": "c7a3645a52b50c42a4f2980e0de616aa"
  },
  {
    "url": "/_nuxt/86a321cc896a7bae5adb.js",
    "revision": "00b76fa72582fb506a4edc03c1a9ce08"
  },
  {
    "url": "/_nuxt/9a81ab061587cc8c0bb6.js",
    "revision": "68c07decc53a5e6776b627b0d160688f"
  },
  {
    "url": "/_nuxt/ad19ac5e41552c172881.js",
    "revision": "91d856d264ed0702fe26ea4564d34f13"
  },
  {
    "url": "/_nuxt/b00f35e455478f1f6a4c.js",
    "revision": "e02856f48aee0b01693f60372ce44927"
  },
  {
    "url": "/_nuxt/b4af5437d00ef42cce66.js",
    "revision": "073507b705486e6a46d03e91f38b181c"
  },
  {
    "url": "/_nuxt/c18c8c11f4450466cb04.js",
    "revision": "cf0eb8adc8d5ebc6abe05fe1302e97f0"
  },
  {
    "url": "/_nuxt/c1c79df6ed741cf772d6.js",
    "revision": "5460ce348536fc559db7bf62b93e130a"
  },
  {
    "url": "/_nuxt/c67e677051782c097ee6.css",
    "revision": "cb9f59574048929cb37aac0deb3a5c29"
  },
  {
    "url": "/_nuxt/cb6b73b83ad82a92946e.js",
    "revision": "f3596c26c0bf78412cfc90ac98629e3a"
  },
  {
    "url": "/_nuxt/d0b6c141f5c62e84b85a.js",
    "revision": "7038ac5a50e192efbc9422a965a156d0"
  },
  {
    "url": "/_nuxt/d3de67f814e59c7c43b1.js",
    "revision": "ed46fe70dbfc7603ee0b455c68ba680d"
  },
  {
    "url": "/_nuxt/d894903b32b9fe5ca30b.js",
    "revision": "215ebd59c77d367acc92635c5d696fb6"
  },
  {
    "url": "/_nuxt/dc8036d9fca624c1bb3c.js",
    "revision": "c67b8634cd6c8cb3e69ab6e2f63f0c13"
  },
  {
    "url": "/_nuxt/e4d3e252dcc0060bc043.js",
    "revision": "379f970aee2b1ced80f3c4ed0caedda2"
  },
  {
    "url": "/_nuxt/e4f0766abbd4f64b4856.css",
    "revision": "53690d12bd2c538a086ce2b0a71f4e2b"
  },
  {
    "url": "/_nuxt/e728c0318b8bb1588f16.js",
    "revision": "08fb29d7e3bdbc4c7bbf13ac9d681f3b"
  },
  {
    "url": "/_nuxt/eac068e8f0e2ceca516a.js",
    "revision": "f1a22cc1cb81f5f9184a99bde2d4e1be"
  },
  {
    "url": "/_nuxt/fb1712810963916e5470.css",
    "revision": "3fc6637f158290c7d80c330170719c18"
  },
  {
    "url": "/_nuxt/ff8af808eb999bef3b8c.js",
    "revision": "4f7209a657b5855d7e259243658e4391"
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
