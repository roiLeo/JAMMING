<template>
  <div>
		<AppHeader></AppHeader>

    <div class="container is-widescreen has-text-centered">
        <slot/>
    </div>

		<AppFooter></AppFooter>

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
    import AppHeader from '~/components/AppHeader.vue'
    import AppFooter from '~/components/AppFooter.vue'

    export default {
        components: {
            AppHeader,
            AppFooter
        }
    }
</script>
