<template>
    <nav class="navbar is-primary">
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
</template>

<script>
export default {
    name: 'AppHeader',
};
</script>
