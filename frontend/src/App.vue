<script setup lang="ts">
import { RouterView } from 'vue-router';
import FooterComponent from './common/components/FooterComponent.vue';
import HeaderComponent from './common/components/HeaderComponent.vue'
</script>

<template>
  <HeaderComponent />
  <RouterView />
  <FooterComponent />
</template>

