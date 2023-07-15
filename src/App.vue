<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
    <header>
      <RouterLink to="/">
        <img alt="Shoshop logo" class="logo" src="@/assets/logo.svg" />
      </RouterLink>
      <nav>
        <RouterLink to="/shop">Shop</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
        <RouterLink to="/our-story">Our Story</RouterLink>
      </nav>
      <div>
        <nav>
        
        </nav>
      </div>
    </header>
    <RouterView />
    <FooterComponent />
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  max-height: 100vh;
  width: 100%;
}

.logo {
  display: block;
}

nav {
  display: flex;
  gap: 4rem;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  color: var(--light-colors-black-light, #000);
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
}
</style>
