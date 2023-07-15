<template>
  <li>
    <div :style="{ 'background-image': 'url(' + product.imagerURL + ')' }" />
    <RouterLink :to="'/shop/' + product.id">
      <h3>{{product.name}}</h3>
    </RouterLink>
    <h4 class="price">{{product.price}}</h4>
    <!-- <button @click="deleteProduct(product.id)">Delete</button> -->
  </li>
</template>

<script lang="ts">
  import { RouterLink } from 'vue-router';
  // import axios from 'axios';

  interface Product {
    name: string;
    price: number;
    description: string;
    image: {
      type: string;
      data: number[];
     } | null;
  }

  export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object as () => Product,
      required: true,
    },
    imageUrl: {
      type: String,
      default: '',
    },
  },
  // methods: {
  //   async deleteProduct(productId: string) {
  //     try {
  //       const response = await axios.delete(`http://localhost:7777/products/${productId}`);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   },
  // },
  components: {
    RouterLink
  }
};
</script>

<style scoped>
  li {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border-radius: 0.5rem;
  }
  li a {
    color: black;
  }
  div {
    background-repeat: none;
    align-items: center;
    background-position: center;
    color: var(--light-colors-white-light, #FFF);
    background-color: #f4f4f4;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 0;
    width: 100%;
    margin-bottom: 0.5rem;
    border-radius: 0.5rem;
    position: relative;
  }
  div::before {
    content: "";
    display: block;
    padding-top: 100%;
  }
</style>
