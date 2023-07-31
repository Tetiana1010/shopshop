<template>
  <li class="review-item">
    <div class="reviewer-info">
      <h4>{{ review.reviewer_name }}</h4>
      <time :datetime="review.created_at">{{ formattedDate }}</time>
    </div>
    <StarRating :rating="review.rating" />
    <p class="review-description">{{ review.review_text }}</p>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StarRating from './StarRating.vue';

export default defineComponent({
  name: 'ReviewItem',
  props: ['review'],
  components: {
    StarRating
  },
  computed: {
    formattedDate(): string {
      const date = new Date(this.review.created_at);
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    }
  }
});
</script>
<style>
.review-item {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #edf2f7;
}

.review-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.reviewer-info {
  display: flex;
  gap: 0.5rem;
}
</style>
