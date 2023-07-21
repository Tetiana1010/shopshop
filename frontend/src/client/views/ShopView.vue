<template lan>
  <main>
    <h1>Shop The Latest</h1>
    <SearchBar />
    <ProductCards />
  </main>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import SearchBar from '../components/SearchBar.vue';
  import ProductCards from '../components/ProductCards.vue'
  export default defineComponent({
    name: 'ShopView',
    components: {
      SearchBar,
      ProductCards
    }
  });
</script>

<style scoped>
  main {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
  }

  h1 {
    grid-column: span 6 / span 6;
  }

  main .product-cards {
    grid-column: span 4 / span 4;
  }
</style>
