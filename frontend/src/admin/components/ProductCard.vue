<template>
  <li class="product-catd">
    <div v-if="product.imagerURL" :style="{ 'background-image': 'url(' + product.imagerURL + ')' }" class="bg-image" />
    <ImageSkeleton v-else /> 
    <RouterLink :to="'/shop/' + product.id">
      <h3 class="product-title">{{product.name}}</h3>
    </RouterLink>
    <h4 v-if="product.price" class="product-price">{{product.price}} $</h4>
    <div class="product-actions">
      <button @click="deleteProduct(product.id)">Delete</button>
      <button>Edit</button>
    </div>
</li>
</template>

<script lang="ts">
  import { RouterLink } from 'vue-router';
  import ImageSkeleton from '../../common/components/ImageSkeleton.vue'
  import axios from 'axios';

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
  methods: {
    async deleteProduct(productId: string) {
      try {
        const response = await axios.delete(`http://localhost:7777/products/${productId}`);
        console.log(response.data);
        if(response.data.message === "Product deleted."){
          this.$emit('product-deleted');
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  components: {
    RouterLink,
    ImageSkeleton
  }
};
</script>

<style>
  li.product-catd {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border-radius: 0.5rem;
  }
  li.product-catd a {
    color: black;
  }
  li.product-catd div.bg-image {
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
  li.product-catd div.bg-image::before {
    content: "";
    display: block;
    padding-top: 100%;
  }
</style>
