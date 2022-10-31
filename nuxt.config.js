export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'shan-jiang',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
	  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
	  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'true' },
	  { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap' }
    ],
	script: [
		{src: 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js'},
		{src: 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js'},
		{src: 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.topology.min.js'}
	]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
	'~/assets/styles/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
