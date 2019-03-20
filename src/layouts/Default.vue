<template>
  <div>
		<Header></Header>

    <div class="container is-widescreen has-text-centered">
        <slot/>
    </div>

		<Footer></Footer>

  </div>
</template>

<static-query>
  query {
    metaData {
      siteName
    }
  }
</static-query>

<script>
    import Header from '~/components/Header.vue'
    import Footer from '~/components/Footer.vue'

    export default {
        components: {
            Header,
            Footer
        }
    }
</script>
