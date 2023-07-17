<template>
  <div class="product-cards">
    <h1>Products list</h1>
    <ul>
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @product-deleted="fetchData"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import ProductCard from './ProductCard.vue';
import axios from 'axios';

export default {
  name: 'ProductCards',
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('http://localhost:7777/products');
        console.log(response.data);
        this.products = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.fetchData();
  },
  components: {
    ProductCard,
  },
};
</script>

<style scoped>
  .product-cards {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    align-items: start;
    gap: 2rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  @media only screen and (max-width: 768px) {
    ul {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media only screen and (max-width: 481px) {
    ul {
      grid-template-columns: 1fr;
    }
  }
</style>
