<template>
  <div class="product-details">
    <h1 v-if="currentProduct?.name" class="product-title">{{ currentProduct?.name }}</h1>
    <h2 v-if="currentProduct?.price" class="product-price">{{ formattedPrice(currentProduct?.price) }}</h2>
    <p v-if="currentProduct?.SKU" class="product-SKU">SKU: <span>{{ currentProduct?.SKU }}</span></p>
    <p v-if="currentProduct?.category" class="product-category">Category: <span>{{ currentProduct?.category }}</span></p>
    <div class="product-review">
      <StarRating :rating="3" />
      <p v-if="reviews.length" class="review-count">
        {{ reviews.length }} customer review{{ reviews.length > 1 ? 's' : '' }}
      </p>
      <p v-if="reviews.length" class="review-description">{{ reviews[0].review_text }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'pinia';
import { useProductStore } from '../../store/productStore';

import StarRating from '../components/StarRating.vue';

export default defineComponent({
  name: 'ProductDetails',
  props: ['currentProduct', 'reviews'],
  methods: {
    ...mapActions(useProductStore, ['formattedPrice']),
  },
  components: {
    StarRating,
  },
});
</script>

<style scoped>
.product-view .product-details {
  grid-area: 1 / 7 / 2 / 13;
}

.product-details span,
.review-count,
.review-description {
  color: var(--light-colors-dark-gray-light);
}

.product-review {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.rating {
  display: flex;
  gap: 0.4rem;
}

.review-count {
  flex: 1;
}

.review-description {
  flex-basis: 100%;
}
</style>
