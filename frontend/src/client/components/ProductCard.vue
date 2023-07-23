<template>
  <li class="product-card">
    <div v-if="product.imagerURL" :style="{ 'background-image': 'url(' + product.imagerURL + ')' }" class="bg-image"/>
    <ImageSkeleton v-else /> 
    <RouterLink :to="'/shop/' + product.id">
      <h3 class="product-title">{{product.name}}</h3>
    </RouterLink>
    <h4 v-if="product.price" class="product-price">{{ formattedPrice(product.price) }}</h4>
  </li>
</template>

<script lang="ts">
  import { RouterLink } from 'vue-router';
  import { mapActions } from 'pinia';
  import { useProductStore } from '../../store/productStore';
  import ImageSkeleton from '../../common/components/ImageSkeleton.vue';

  export default {
    name: 'ProductCard',
    props: ['product', 'imageUrl'],
    methods: {
      ...mapActions(useProductStore, ['formattedPrice']),
    },
    components: {
      RouterLink,
      ImageSkeleton
    }
  };
</script>
