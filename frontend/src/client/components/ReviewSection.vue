<template>
  <div class="reviews-container">
    <ul class="review-list">
      <ReviewItem v-for="review in reviews" :key="review.id" :review="review" />
    </ul>
    <AddReview />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ReviewItem from './ReviewItem.vue';
import AddReview from './AddReview.vue';

 interface Review {
  id: number,
  product_id: number,
  rating: number,
  review_text: string,
  reviewer_name: string,
  created_at: string
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
  }
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

.review-list {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
}
</style>
