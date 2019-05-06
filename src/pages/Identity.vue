<template>
	<Layout>
		<div class="container is-widescreen has-text-centered">
			hello
			<p>
				{{ info }}
			</p>

			<div class="columns">
				<div class="column is-half is-offset-one-quarter">

					<div class="card">
						<header class="card-header">
							<p class="card-header-title">
								Component
							</p>
							<a href="#" class="card-header-icon" aria-label="more options">
								<span class="icon">
									<i class="fas fa-angle-down" aria-hidden="true"></i>
								</span>
							</a>
						</header>
						<div class="card-content">
							<div class="content">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
								<a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
								<br>
								<time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
							</div>
						</div>
						<footer class="card-footer">
							<a href="#" class="card-footer-item">{{ collection.minimum }}</a>
							<a href="#" class="card-footer-item">{{ collection.median }}</a>
							<a href="#" class="card-footer-item">{{ collection.maximum }}</a>
						</footer>
					</div>

				</div>
			</div>

		</div>
	</Layout>
</template>

<script>
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
		metaInfo: {
			title: 'Hello, world!'
		},
		data () {
			return {
				info: 'YO',
				collection: 0
			}
		},
		mounted () {
			axios({
				url: 'https://api.discogs.com/users/'+ process.env.GRIDSOME_API_USER +'/collection/value',
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
				this.collection = response.data;
			}).catch((error) => {
				console.log(error);
			});
		},
	}
</script>
