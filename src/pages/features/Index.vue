<template>
  <Layout>
    <section class="hero is-primary is-fullheight">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">
                <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
              </a>
              <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroA" class="navbar-menu">
              <div class="navbar-end">
                <g-link class="navbar-item" :exact-active-class="'is-active'" :to="{ name: 'home'}">Home</g-link>
                <g-link class="navbar-item" :exact-active-class="'is-active'" :to="{ name: 'exemples' }">Exemples</g-link>
                <g-link class="navbar-item" :exact-active-class="'is-active'" :to="{ name: 'about' }">About</g-link>
                <span class="navbar-item">
                  <a class="button is-primary is-inverted" href="https://github.com/roiLeo" target="_blank">
                    <span class="icon">
                      <i class="fab fa-github"></i>
                    </span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Title
          </h1>
          <h2 class="subtitle">
            <g-link to="/">{{ $static.metaData.siteName }}</g-link>
          </h2>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Features'
  }
}
</script>
