<script setup lang="ts">
  import MainBanner from '../components/MainBanner.vue'
  import ProductCards from '../components/ProductCards.vue'
</script>

<template>
  <main>
    <MainBanner />
    <ProductCards />
  </main>
</template>

<style>
  main {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>
