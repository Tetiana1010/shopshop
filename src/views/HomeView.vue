<template>
  <main>
    <MainBanner />
    <ProductCards />
  </main>
</template>

<script lang="ts">
import MainBanner from '../components/MainBanner.vue';
import ProductCards from '../components/ProductCards.vue';

export default {
  components: {
    MainBanner,
    ProductCards,
  }
};
</script>

<style>
  main {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>

