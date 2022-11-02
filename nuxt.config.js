export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Shan Jiang - Front End Developer',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
			{ property: "og:site_name", content: "Shan Jiang - Front End Developer" },
			{ property: "og:title", content: "Portfolio Site" },
			{ property: "og:description", content: "Shan is a dynamic front-end web developer with over four years of professional experience building WordPress websites and web portals for various industries." },
			{ property: "og:image", content: "https://shanjiang.io/wp-content/themes/shanjiang/images/banner_photo.jpg" },
			{ property: "og:url", content: "https://shanjiang.io/" },
			{ property: "og:type", content: "website" },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
			{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'true' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap' }
		],
		script: [
			{ src: 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js' },
			{ src: 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.topology.min.js' }
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
