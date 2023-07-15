<template>
  <div class="product-cards">
    <h1>Shop The Latest</h1>
    <ul>
      <ProductCard 
        v-for="product in productStore.products"
        :key="product.id"
        :product="product"
      />
    </ul>
  </div>
</template>

<script lang="ts">
  import ProductCard from './ProductCard.vue';

  export default {
    name: 'MainBanner',
    data() {
      return {
        productStore: {
          currentProduct: null,
          products: [
            {
              id: 1,
              imagerURL: 'src/assets/images/store/img-1.png',
              title: 'Lira Earrings',
              price: '$ 20,00'
            },
            {
              id: 2,
              imagerURL: 'src/assets/images/store/img-2.png',
              title: 'Hal Earrings',
              price: '$ 25,00'
            },
            {
              id: 3,
              imagerURL: 'src/assets/images/store/img-3.png',
              title: 'Kaede Hair Pin Set Of 3',
              price: '$ 30,00'
            },
          ],
        },
      };
    },
    components: {
      ProductCard,
    },
  }
</script>

<style scoped>
  .product-cards {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
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
