<template>
  <li class="product-card">
    <div v-if="product.imagerURL" :style="{ 'background-image': 'url(' + product.imagerURL + ')' }" class="bg-image" />
    <ImageSkeleton v-else /> 
    <RouterLink :to="'/shop/' + product.id">
      <h3 class="product-title">{{product.name}}</h3>
    </RouterLink>
    <h4 v-if="product.price" class="product-price">{{ formattedPrice(product.price) }}</h4>
    <div class="product-actions">
      <button @click="deleteProductById(product.id)">Delete</button>
      <button>Edit</button>
    </div>
</li>
</template>

<script lang="ts">
  import { RouterLink } from 'vue-router';
  import ImageSkeleton from '../../common/components/ImageSkeleton.vue';

  import { mapActions } from 'pinia';
  import { useProductStore } from '../../store/productStore';

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
    ...mapActions(useProductStore, ['deleteProductById', 'formattedPrice']),
  },
  components: {
    RouterLink,
    ImageSkeleton
  }
};
</script>

<style>
  li.product-card {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border-radius: 0.5rem;
  }
  li.product-card a {
    color: black;
  }
  li.product-card div.bg-image {
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
  li.product-card div.bg-image::before {
    content: "";
    display: block;
    padding-top: 100%;
  }
</style>
