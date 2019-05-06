<template>
  <Layout>
    <section class="hero is-primary is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ $static.metaData.siteDescription }}
          </h1>
          <h2 class="subtitle">
            <g-link to="/">{{ $static.metaData.siteName }}</g-link>
          </h2>
        </div>
      </div>
    </section>

    <div class="container is-widescreen has-text-centered">

      <!-- Learn how to use images here: https://gridsome.org/docs/images -->
      <g-image alt="Example image" src="~/favicon.png" width="135" />

      <h1>OKAY</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
      </p>

      <p class="home-links">
        <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
        <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
      </p>
    </div>

  </Layout>
</template>

<static-query>
  query {
    metaData {
      siteName
      siteDescription
    }
  }
</static-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
