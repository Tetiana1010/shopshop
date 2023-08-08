<script setup lang="ts">
import { RouterView } from 'vue-router';
import FooterComponent from './common/components/FooterComponent.vue';
import HeaderComponent from './common/components/HeaderComponent.vue';
import AlertBanner from './common/components/AlertBanner.vue';
</script>

<template>
  <HeaderComponent />
  <AlertBanner />
  <RouterView />
  <FooterComponent />
</template>

