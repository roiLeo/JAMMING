// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import 'bulma/css/bulma.css'
import '@fortawesome/fontawesome-free/css/all.css'

import '~/assets/scss/main.scss'


export default function (Vue, {router, head, isClient}) {
	// Import Font
	head.link.push({
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css?family=Lato:400,700|Montserrat:400,600,700'
	})

	// Set default layout as a global component
	Vue.component('Layout', DefaultLayout)
}

