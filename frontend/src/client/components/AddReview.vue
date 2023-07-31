<template>
  <section class="add-review">
    <h3>Add a Review</h3>
    <p>Your email address will not be published. Required fields are marked.</p>
    <form @submit.prevent="handleSubmit" class="form-container">
      <input type="text" v-model="formData.review_text" placeholder="Your Review*" class="input-field review-field" required />
      <input type="text" v-model="formData.reviewer_name" placeholder="Enter your name*" class="input-field review-field" required />
      <input type="email" v-model="formData.email" placeholder="Enter your Email*" class="input-field review-field" required />
      <div class="input-field review-field">
        <input type="checkbox" v-model="formData.save_email" id="save_email" />
        <label for="save_email">Save my name, email, and website in this browser for the next time I comment</label>
      </div>
      <div class="input-field review-field">
        <label>Rating:</label>
        <div class="star-rating">
          <label v-for="ratingValue in 5" :key="ratingValue" class="star-label">
            <input type="radio" v-model="formData.rating" :value="ratingValue" :id="'star' + ratingValue" required />
            <IconStar :fill="formData.rating >= ratingValue" />
          </label>
        </div>
      </div>
      <button class="form-button" type="submit">Submit</button>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'pinia';
import { useReviewStore } from '../../store/reviewStore';
import IconStar from '../../common/icons/IconStar.vue';

interface FormData {
  id: number;
  reviewer_name: string;
  email: string;
  review_text: string;
  save_email: boolean;
  rating: number;
}

export default defineComponent({
  name: 'AddProductReview',
  data() {
    return {
      product_id: Number(this.$route.params.id),
      formData:  {
        reviewer_name: '',
        email: '',
        review_text: '',
        save_email: false,
        rating: 0,
      } as FormData,
    };
  },
  methods: {
    handleSubmit(){
      this.addReview({
        ...this.formData, 
        product_id: this.product_id
      });
    },
    ...mapActions(useReviewStore, ['addReview'])
  },
  components: {
    IconStar,
  },
});
</script>

<style>
.add-review {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.star-label {
  display: inline-block;
  width: 18px;
  height: 18px;
  cursor: pointer;
}
</style>
