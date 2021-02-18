<template>
<Layout>
    <div class="container is-widescreen has-text-centered">
        hello
        <p>
            {{ info }}
        </p>
    </div>
</Layout>
</template>

<script>
	import config from '../../config'
	import axios from 'axios'

	const request_token = {
		url: 'https://api.discogs.com/oauth/request_token',
		method: 'GET',
		cKey: config.consumer_key,
		cSecret: config.consumer_secret
	};

    var getQueryStringParams = query => {
        return query
        ? (/^[?#]/.test(query) ? query.slice(1) : query)
        .split('&')
        .reduce((params, param) => {
            let [key, value] = param.split('=');
            params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
            return params;
        }, {}
        )
        : {}
    };

    var getCookie = cname => {
        var name = cname + '=';
        var decodedCookie = typeof document !== 'undefined' && decodeURIComponent(document.cookie).split(';');
        for(var i = 0; i <decodedCookie.length; i++) {
            var c = decodedCookie[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
    }

    var oauth = typeof window !== 'undefined' && getQueryStringParams(window.location.href.split('?')[1]);
    console.log(oauth)
	if (oauth) {
		oauth.oauth_token_secret = getCookie('oauth_token_secret');
	}

    const access_token = {
        url: 'https://api.discogs.com/oauth/access_token',
        method: 'POST',
    };


    axios({
        url: access_token.url,
        method: access_token.method,
        params: {
            'oauth_consumer_key': request_token.cKey,
            'oauth_nonce': 'wteztjkqshfgl',
            'oauth_token': oauth.oauth_token,
            'oauth_signature': request_token.cSecret + '&' + oauth.oauth_token_secret, // add oauth_token_secret here
            'oauth_signature_method': 'PLAINTEXT',
            'oauth_timestamp': new Date().getTime(),
            'oauth_verifier': oauth.oauth_verifier
        },
    }).then((response) => {
        console.log(response);
        var token = getQueryStringParams(response.data)
        console.log(token)

		if (typeof document !== 'undefined') {
			document.cookie = response.data;
		}

    }).catch((error) => {
        console.log(error);
    });


export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  data () {
      return {
          info: 'YO'
      }
  },
}
</script>
