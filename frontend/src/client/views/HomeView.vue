<template>
  <main>
    <MainBanner />
    <ProductCards />
  </main>
</template>

<script setup lang="ts">
import MainBanner from '../components/MainBanner.vue';
import ProductCards from '../components/ProductCards.vue';
</script>

<style>
  main {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>

