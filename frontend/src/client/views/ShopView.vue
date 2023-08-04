<template lan>
  <main class="shop">
    <h1>Shop The Latest</h1>
    <SearchBar />
    <ProductCards />
  </main>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import SearchBar from '../components/SearchBar.vue';
  import ProductCards from '../components/ProductCards.vue';
  
  export default defineComponent({
    name: 'ShopView',
    components: {
      SearchBar,
      ProductCards
    }
  });
</script>
