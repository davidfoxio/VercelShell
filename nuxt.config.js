const siteName = 'How Now'

module.exports = {
  target: 'static',
  router: {
    base: '/'
  },
  dir: {
    static: 'static'
  },
  head: {
    htmlAttrs: {
      lang: 'en-GB'
    },
    title: `${siteName}`,
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'application-name',
        content: `${siteName}`
      },
      {
        name: 'msapplication-TileColor',
        content: '#232629'
      },
      {
        name: 'msapplication-TileImage',
        content: `/images/meta/mstile-144x144.png`
      },
      {
        name: 'msapplication-square70x70logo',
        content: `/images/meta/mstile-70x70.png`
      },
      {
        name: 'msapplication-square150x150logo',
        content: `/images/meta/mstile-150x150.png`
      },
      {
        name: 'msapplication-wide310x150logo',
        content: `/images/meta/mstile-310x150.png`
      },
      {
        name: 'msapplication-square310x310logo',
        content: `/images/meta/mstile-310x310.png`
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:site_name',
        content: `${siteName}`
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: `/images/meta/favicon.ico`
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '57x57',
        href: `/images/meta/apple-touch-icon-57x57.png`
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '114x114',
        href: `/images/meta/apple-touch-icon-114x114.png`
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '72x72',
        href: `/images/meta/apple-touch-icon-72x72.png`
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '144x144',
        href: `/images/meta/apple-touch-icon-144x144.png`
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '60x60',
        href: `/images/meta/apple-touch-icon-60x60.png`
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '120x120',
        href: `/images/meta/apple-touch-icon-120x120.png`
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '76x76',
        href: `/images/meta/apple-touch-icon-76x76.png`
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '152x152',
        href: `/images/meta/apple-touch-icon-152x152.png`
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: `/images/meta/favicon-196x196.png`,
        sizes: '196x196'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: `/images/meta/favicon-96x96.png`,
        sizes: '96x96'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: `/images/meta/favicon-32x32.png`,
        sizes: '32x32'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: `/images/meta/favicon-16x16.png`,
        sizes: '16x16'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: `/images/meta/favicon-128.png`,
        sizes: '128x12'
      }
    ],
    script: [
      {
        src: 'https://polyfill.io/v3/polyfill.min.js?features=Element.prototype.classList%2CURL%2Cdefault%2CIntersectionObserver%2CPromise%2Cfetch%2CObject.assign%2CObject.entries%2CObject.keys%2CObject.values',
        body: false
      },
      {
        src: '/js/adhoc.js',
        async: true,
        defer: true,
        body: true
      },
      {
        src: 'https://static.cdn.prismic.io/prismic.min.js',
        async: false,
        defer: false,
        body: true
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js',
        body: false
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/ScrollMagic.min.js',
        body: false
      },
      // {
      //   src: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/plugins/debug.addIndicators.min.js',
      //   body: false
      // },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/plugins/animation.gsap.min.js',
        body: false
      }
    ]
  },
  // Or use our own component? e.g. '~/components/AppLoader.vue'
  // loading: {
  //   color: '#3138BE',
  //   failedColor: '#FF4646',
  //   height: '5px',
  //   throttle: 200
  // },
  loading: false,
  css: [],
  modules: [
    '@nuxtjs/prismic',
    // With options
    ['nuxt-facebook-pixel-module', {
      /* module options */
      track: 'PageView',
      pixelId: '397052070927653',
      disabled: false
    }]
  ],
  plugins: [
    {
      src: '@/plugins/vuelidate',
      mode: 'server'
    },
    {
      src: '@/plugins/vuex-store',
      mode: 'client'
    },
    {
      src: '@/plugins/directives',
      mode: 'client'
    },
    {
      src: '@/plugins/vue-touch-events',
      mode: 'client'
    }
  ],
  serverMiddleware: [
    '~/api/index.js'
  ],
  prismic: {
    endpoint: 'https://hownow.prismic.io/api/v2',
    modern: true,
    linkResolver: (doc) => {
      switch (doc.type) {
        case 'page':
          return doc.uid === 'home' ? '/' : `/${doc.uid}`
        case 'project':
          return `/work/${doc.uid}`
        default:
          return `/${doc.uid}`
      }
    }
  },
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        // 'postcss-url': false,
        // 'postcss-nested': {},
        // 'postcss-responsive-type': {},
        // 'postcss-hexrgba': {}
      },
      preset: {
        autoprefixer: {
          flexbox: true,
          grid: true
        }
      }
    }
  }
}
