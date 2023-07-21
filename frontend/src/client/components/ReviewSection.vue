<template>
  <div class="reviews-container">
    <div class="product-reviews">
      <h3>{{ reviewCountText }} for {{ productName }}</h3>
      <ul class="review-list">
        <ReviewItem v-for="review in reviews" :key="review.id" :review="review" />
      </ul>
    </div>
    <AddReview />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ReviewItem from './ReviewItem.vue';
import AddReview from './AddReview.vue';

interface Review {
  id: number;
  product_id: number;
  rating: number;
  review_text: string;
  reviewer_name: string;
}

export default defineComponent({
  name: 'ReviewSection',
  props: {
    reviews: Array as () => Review[],
    productName: String,
  },
  components: {
    ReviewItem,
    AddReview,
  },
  computed: {
    reviewCountText(): string {
      const count = this.reviews.length;
      return `${count} review${count !== 1 ? 's' : ''}`;
    },
  },
});
</script>
<style>
.reviews-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  gap: 2rem;
  padding: 1rem 0;
}

@media only screen and (max-width: 768px) {
  .reviews-container {
    grid-template-columns: 1fr;
  }
}

.product-reviews {
  display: flex;
  flex-direction: column;
}

.review-list {
  list-style: none;
  padding: 0;
}
</style>
