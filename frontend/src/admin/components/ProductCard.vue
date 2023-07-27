<template>
  <article class="product-card">
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
</article>
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
