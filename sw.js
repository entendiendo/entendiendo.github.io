importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/006ba292e0c42e71e18e.js",
    "revision": "5f66df78b9cbdd090756de99a6b40005"
  },
  {
    "url": "/_nuxt/0089afbc95293dd4e740.js",
    "revision": "31f8a773dee073c735b1c0d4c1d12871"
  },
  {
    "url": "/_nuxt/03ca8c2858f55a7215ba.js",
    "revision": "bca3376735b9c881615aeb552f2bb8b7"
  },
  {
    "url": "/_nuxt/1bc8871f0b0ccdb65b33.js",
    "revision": "c0099a2904181a60c2dde8d4aeda6322"
  },
  {
    "url": "/_nuxt/46b7f83aba4030059894.js",
    "revision": "5e7c1408a7b5b3860a180fd1cd69c0b5"
  },
  {
    "url": "/_nuxt/54ffda9e05f74fed6917.js",
    "revision": "82e2b5131f23760c39c94f0b0ba9d6d4"
  },
  {
    "url": "/_nuxt/55e1cdd4e5bc08bc75f7.js",
    "revision": "ded52a221b0de751aecce495b3ec0639"
  },
  {
    "url": "/_nuxt/5952757a66aa2b605e23.css",
    "revision": "8f8ef545d323d4d3f0c4060a15a1a605"
  },
  {
    "url": "/_nuxt/59ecbd4c1adb0f9d56b0.js",
    "revision": "37402af0a9e78d3ec6603a55f3573055"
  },
  {
    "url": "/_nuxt/6ccd3f52a45f2f386766.js",
    "revision": "c289add02d60d55428c38971a5c4fde5"
  },
  {
    "url": "/_nuxt/7908a0b650b1d206cf7a.js",
    "revision": "5e7ca0efa54a9e7831e5b7a6a0b4bd5c"
  },
  {
    "url": "/_nuxt/7fb63f46924a4550e107.js",
    "revision": "f1c53b0f1358c56dc4123502adcfbc56"
  },
  {
    "url": "/_nuxt/81456207b8f1d6bd1747.js",
    "revision": "eaeaef0e535442e75765fd74f8906aa3"
  },
  {
    "url": "/_nuxt/8807daa87b6cf6c3a998.js",
    "revision": "4d4da96d4c1a07be69d911e9791a056a"
  },
  {
    "url": "/_nuxt/8aea9cf7c2bcd3f78a39.css",
    "revision": "569a504e96874e24c39307d789f90051"
  },
  {
    "url": "/_nuxt/8d459be11f8e3d6b4b35.css",
    "revision": "ecac1a226ba76134656e72a78d1d6d74"
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
    "url": "/_nuxt/9946daa7f39c7544f957.js",
    "revision": "98df3d946dbf33cda80d72a876502ebb"
  },
  {
    "url": "/_nuxt/a0b945724640d5f249dc.js",
    "revision": "33142c802878e9f981591117fb465d5c"
  },
  {
    "url": "/_nuxt/a4411e60b7e490fe7f2b.js",
    "revision": "e1bad32e7264eb5a68485377dc3a1994"
  },
  {
    "url": "/_nuxt/a8744db78ce8eba5cfda.js",
    "revision": "a3e32715d77c4fa5bc35e0d86634f98e"
  },
  {
    "url": "/_nuxt/bb1560bb9b71383b89cc.js",
    "revision": "fc2c77bc0b616523bc7cd4164e4d465b"
  },
  {
    "url": "/_nuxt/bf6c0d7f938d19236220.js",
    "revision": "4785fca248cd3bad28402871b933435c"
  },
  {
    "url": "/_nuxt/c3cb9a3d3b615c279dd6.css",
    "revision": "77fb7cd6072f73935cd250ad285d6090"
  },
  {
    "url": "/_nuxt/cc0c0096875e14d557cd.js",
    "revision": "d0b9dd17ed9fd1b004eb6df0aee46296"
  },
  {
    "url": "/_nuxt/d84557de39df18ffd59c.js",
    "revision": "69c9d8a4df1cbe5950eb228392f3d7de"
  },
  {
    "url": "/_nuxt/e4f0766abbd4f64b4856.css",
    "revision": "53690d12bd2c538a086ce2b0a71f4e2b"
  },
  {
    "url": "/_nuxt/e565936f947221fee8a1.js",
    "revision": "6f2d0f0cf4dcaf927daef4792f6434ec"
  },
  {
    "url": "/_nuxt/f74c9b0a7dad52380f4d.js",
    "revision": "0d6b2c8e4bb91204b0c1a476f699db0c"
  },
  {
    "url": "/_nuxt/f8df423a6f3297ad0169.js",
    "revision": "8c07e0b5685d21cf8488b9cd1dc58a92"
  },
  {
    "url": "/_nuxt/fb1712810963916e5470.css",
    "revision": "3fc6637f158290c7d80c330170719c18"
  },
  {
    "url": "/_nuxt/fcbd177b201122091b77.js",
    "revision": "ef1dc20deb1fdf7ba0bfdf48e4e1e0b4"
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
