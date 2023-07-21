<template>
  <form class="form-container">
    <input type="text" placeholder="Search" v-model="searchKeyword" />
    <ul>
      <li v-for="product in filteredProducts" :key="product.id">
        {{ product.name }}
      </li>
    </ul>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchBar',
  data() {
    return {
      products: [
        { id: 1, name: 'Product A' },
        { id: 2, name: 'Product B' },
      ],
      searchKeyword: '',
    };
  },
  computed: {
    filteredProducts() {
      const query = this.searchKeyword.toLowerCase();
      if (!query) {
        return this.products;
      } else {
        return this.products.filter(product =>
          product.name.toLowerCase().includes(query)
        );
      }
    },
  },
});
</script>

<style scoped>
  .form-container {
    grid-column: span 2 / span 2;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 3rem;
  }
  input {
    display: flex;
    height: 40px;
  }
</style>
