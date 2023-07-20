<template>
  <li class="product-review">
    <h4>{{reviewer_name}}</h4>
    <small>6 May, 2020</small>
    <div class="rating">
      <StarRating :rating="rating" />
    </div>
    <p class="review-description">{{ review_text }}</p>
  </li>
</template>

<script lang="ts">
  import StarRating from './StarRating.vue'
  export default {
    name: 'ProductReview',
    props: {
      review_text: {
        type: String,
        required: true
      },
      reviewer_name: {
        type: String,
        required: true
      },
      rating: {
        type: Number,
        required: true
      }
    },
    components: {
      StarRating
    }
  }
</script>
