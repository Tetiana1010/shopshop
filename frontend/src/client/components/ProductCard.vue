<template>
  <article class="product-card">
    <img v-if="product.imageURLs.length" :src="product.imageURLs[0]"/>
    <ImageSkeleton v-else /> 
    <h3 class="product-title">
      <RouterLink :to="'/shop/' + product.id">
        {{product.name}}
      </RouterLink>
    </h3>
    <h4 v-if="product.price" class="product-price">{{ formattedPrice(product.price) }}</h4>
  </article>
</template>

<script lang="ts">
  import { RouterLink } from 'vue-router';
  import { mapActions } from 'pinia';
  import { useProductStore } from '../../store/productStore';
  import ImageSkeleton from '../../common/components/ImageSkeleton.vue';

  export default {
    name: 'ProductCard',
    props: ['product'],
    methods: {
      ...mapActions(useProductStore, ['formattedPrice']),
    },
    components: {
      RouterLink,
      ImageSkeleton
    }
  };
</script>
