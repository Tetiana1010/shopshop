<template>
  <article class="product-card">
    <img v-if="product.imageURLs.length" :src="product.imageURLs[0]" />
    <ImageSkeleton v-else /> 
    <RouterLink :to="'/shop/' + product.id">
      <h3 class="product-title">{{product.name}}</h3>
    </RouterLink>
    <h4 v-if="product.price" class="product-price">{{ formattedPrice(product.price) }}</h4>
    <div class="product-actions">
      <button @click="deleteProductById(product.id)">
        <IconTrash />
      </button>
      <button @click="toggleEdit()">
        <IconPencilSquare />
      </button>
    </div>
    <EditProductModal v-if="edit" @edit-toggle="toggleEdit" :productId="product.id"/>
</article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import { mapActions } from 'pinia';
import { useProductStore } from '../../store/productStore';

import ImageSkeleton from '../../common/components/ImageSkeleton.vue';
import IconTrash from '../../common/icons/IconTrash.vue';
import IconPencilSquare from '../../common/icons/IconPencilSquare.vue';
import EditProductModal from './EditProductModal.vue';

export default defineComponent({
  name: 'ProductCard',
  data(){
    return {
      edit: false,
    }
  },
  props: ['product'],
  methods: {
    toggleEdit(){
      console.log('editToggle')
      this.edit = !this.edit;
    },
    ...mapActions(useProductStore, ['deleteProductById', 'formattedPrice']),
  },
  components: {
    EditProductModal,
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
    color: white;
  }
</style>
