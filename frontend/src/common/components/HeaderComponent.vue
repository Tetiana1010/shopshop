<script setup lang="ts">
import { RouterLink } from 'vue-router';
import IconSearch from '../icons/IconSearch.vue';
import IconShoppingCart from '../icons/IconShoppingCart.vue'
import IconUser from '../icons/IconUser.vue'
</script>

<template>
  <header>
    <RouterLink to="/">
      <img alt="Shoshop logo" class="logo" src="@/assets/logo.svg" />
    </RouterLink>
    <nav class="main-nav">
      <RouterLink to="/shop">Shop</RouterLink>
      <RouterLink to="/blog">Blog</RouterLink>
      <RouterLink to="/our-story">Our Story</RouterLink>
    </nav>
    <div>
      <nav>
        <IconSearch />
        <IconShoppingCart />
        <IconUser />
      </nav>
    </div>
  </header>
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

@media only screen and (max-width: 768px) { 
  nav {
    gap: 2rem;
  }
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
  font-weight: 400;
  line-height: 27px;
}

@media only screen and (max-width: 768px) { 
  .main-nav {
    display: none;
  }
}
</style>


