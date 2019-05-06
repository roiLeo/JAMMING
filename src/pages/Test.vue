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
    const axios = require('axios')

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

    const request_token = {
      url: 'https://api.discogs.com/oauth/request_token',
      method: 'GET',
      cKey: 'PcOTvXfoPpbhQTFTaCpv',
      cSecret: 'YPBqixlnwZJtaZKcvYtgnIgWToGAhyUy'
    };

    axios({
        url: request_token.url,
        method: request_token.method,
        params: {
            'oauth_consumer_key': request_token.cKey,
            'oauth_nonce': 'wteztjkqshfgl',
            'oauth_signature': request_token.cSecret + '&',
            'oauth_signature_method': 'PLAINTEXT',
            'oauth_timestamp': new Date().getTime(),
            'oauth_callback': 'http://localhost:8080/Access'
        },
    }).then((res) => {
        var oauth = getQueryStringParams(res.data);
        document.cookie = 'oauth_token_secret=' + oauth.oauth_token_secret

        window.location = 'https://discogs.com/oauth/authorize?oauth_token=' + oauth.oauth_token

        //+ '&oauth_token_secret=' + oauth.oauth_token_secret
    }).catch(error => {
        console.log(error);
    });


    export default {
        name: 'discogsList',
        data () {
            return {
                info: null
            }
        },
        // mounted () {
        //     axios
        //     .get('https://api.discogs.com/users/roiLeo/collection/value')
        //          .then(response => (this.info = response))
        // }
        // mounted () {

        // }
    };
</script>
