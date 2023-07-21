<template>
  <div class="product-cards">
    <ul>
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
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
      currentProduct: null,
      products: [],
      imageBuffer: null,
      imageDataUrl: null,
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
    createImageBuffer() {
      this.imageBuffer = new Uint8Array([
        49, 54, 56, 57, 52, 57, 52, 57, 55, 48, 56, 57, 53, 45, 112, 104, 111, 116, 111, 95, 50, 48, 50, 51, 45, 48, 54, 45, 50, 55, 32, 49, 56, 46, 51, 54, 46, 53, 54, 46, 106, 112, 101, 103
      ]);
      this.convertBufferToImage();
    },
    convertBufferToImage() {
      try {
        const decoder = new TextDecoder('utf-8');
        const decodedString = decoder.decode(this.imageBuffer);
        const base64Image = btoa(decodedString);
        this.imageDataUrl = `data:image/png;base64,${base64Image}`;
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.fetchData();
  },
  created() {
    this.createImageBuffer();
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
