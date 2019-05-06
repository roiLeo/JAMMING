<template>
	<Layout>
		<div class="content">
			<div class="card" v-for="item in collection.releases">
				<div class="card-content columns">
					<div class="column is-2">
						<figure class="image is-128x128">
							<img class="is-rounded" :src="item.basic_information.thumb">
						</figure>
					</div>
					<div class="column">
						<p class="title"> {{ item.basic_information.title }}</p>
						<p class="subtitle"> <i class="has-text-dark">Artist:</i> {{ item.basic_information.artists_sort }}</p>
						<p class="subtitle"> <i class="has-text-dark">Year: </i> {{ item.basic_information.year }}</p>
					</div>
				</div>
			</div>

			<div class="columns">
			  <div class="column">
			  	<pagination
			  	    :meta_data="meta_data"
			  	    :onChange="onChange">
			  	</pagination>
			  </div>
			</div>

		</div>
	</Layout>
</template>

<script>
	import Pagination from '../components/Pagination'
	// import config from '../../config'
	import axios from 'axios'

	const request_token = {
		url: 'https://api.discogs.com/oauth/request_token',
		method: 'GET',
		cKey: process.env.GRIDSOME_CONSUMER_KEY,
		cSecret: process.env.GRIDSOME_CONSUMER_SECRET
	};

	var getCookie = cname => {
		var name = cname + '=';
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for(var i = 0; i <ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return '';
	}

	export default {
		name: 'Skeuds',
		components: {
			// Skeuds,
			Pagination
		},
		metaInfo: {
			title: 'Hello, world!'
		},
		data () {
			return {
				collection: {},
				baseUrl: 'https://api.discogs.com/users/' + process.env.GRIDSOME_API_USER + '/collection',
				meta_data: {
					lastPage: null,
					currentPage: 1,
					step: 2, // Number of pages to display (besides first and last)
					perPage: 5, // Items per page
					total: null,
				},
				page: 1
			}
		},
		mounted () {
			this.onChange()
		},
		methods: {
			onChange (page = 1) {
				axios({
					url: this.baseUrl + '?per_page=' + this.meta_data.perPage + '&page=' + page,
					method: 'get',
					params: {
						'oauth_consumer_key': request_token.cKey,
						'oauth_nonce': 'wteztjkqshfgl',
						'oauth_token': getCookie('oauth_token').split('&')[0],
						'oauth_signature': request_token.cSecret + '&' + getCookie('oauth_token').split('&')[1].split('=')[1],
						'oauth_signature_method': 'PLAINTEXT',
						'oauth_timestamp': new Date().getTime(),
					},
				}).then((response) => {
					console.log(response)
					this.collection = response.data
					this.meta_data.total = response.data.pagination.items
					this.meta_data.lastPage = response.data.pagination.pages
					this.meta_data.currentPage = response.data.pagination.page
					// this.meta_data.prev_page_url = response.data.urls.;
				}).catch((error) => {
					console.log(error)
				});
			},
		},
	}
</script>
