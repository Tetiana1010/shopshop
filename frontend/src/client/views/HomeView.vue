<template>
  <main class="home">
    <MainBanner />
    <AlertBanner />
    <ProductCards />
  </main>
</template>

<script setup lang="ts">
import MainBanner from '../components/MainBanner.vue';
import ProductCards from '../components/ProductCards.vue';
import AlertBanner from '../../common/components/AlertBanner.vue';
</script>


