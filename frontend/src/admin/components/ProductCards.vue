<template>
  <article class="product-cards">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </article>
</template>

<script lang="ts">
import ProductCard from './ProductCard.vue';
import { mapState, mapActions } from 'pinia';
import { useProductStore } from '../../store/productStore';

export default {
  name: 'ProductCards',
  computed: {
    ...mapState(useProductStore, ['products'])
  },
  methods: {
    ...mapActions(useProductStore, ['fetchAllProducts']),
  },
  mounted() {
    this.fetchAllProducts();
  },
  components: {
    ProductCard,
  },
};
</script>
