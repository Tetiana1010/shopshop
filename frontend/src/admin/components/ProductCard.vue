<template>
  <article class="product-card">
    <div v-if="product.imagerURL" :style="{ 'background-image': 'url(' + product.imagerURL + ')' }" class="bg-image" />
    <ImageSkeleton v-else /> 
    <RouterLink :to="'/shop/' + product.id">
      <h3 class="product-title">{{product.name}}</h3>
    </RouterLink>
    <h4 v-if="product.price" class="product-price">{{ formattedPrice(product.price) }}</h4>
    <div class="product-actions">
      <button @click="deleteProductById(product.id)">
        <IconTrash />
      </button>
      <button>
        <IconPencilSquare />
      </button>
    </div>
</article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import { mapActions } from 'pinia';
import { useProductStore } from '../../store/productStore';

import ImageSkeleton from '../../common/components/ImageSkeleton.vue';
import IconTrash from '../../common/icons/IconTrash.vue';
import IconPencilSquare from '../../common/icons/IconPencilSquare.vue'

export default defineComponent({
  name: 'ProductCard',
  props: ['product', 'imageUrl'],
  methods: {
    ...mapActions(useProductStore, ['deleteProductById', 'formattedPrice']),
  },
  components: {
    RouterLink,
    ImageSkeleton,
    IconTrash,
    IconPencilSquare
  }
})
</script>

<style>
  .product-actions {
    display: flex;
    gap: 0.5rem;
  }
  .product-actions button {
    padding: 0.5rem 0.7rem;
    border: none;
    color: white;
    text-align: center;
    border-radius: 0.4rem;
    background-color: var(--gray-dark);
    display: inline-block;
    transition: background-color 0.2s ease;
    margin-top: auto;
  }

.product-actions button:hover {
  background-color: black;
}
</style>
