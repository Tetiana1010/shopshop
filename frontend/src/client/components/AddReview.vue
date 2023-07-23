<template>
  <div class="add-review">
    <h3>Add a Review</h3>
    <p>Your email address will not be published. Required fields are marked.</p>
    <form class="form-container" @submit.prevent="handleSubmit">
      <input type="text" v-model="formData.reviewText" placeholder="Your Review*" class="input-field review-field" required />
      <input type="text" v-model="formData.reviewerName" placeholder="Enter your name*" class="input-field review-field" required />
      <input type="email" v-model="formData.email" placeholder="Enter your Email*" class="input-field review-field" required />
      <div class="input-field review-field">
        <input type="checkbox" v-model="formData.saveEmail" id="saveEmail" />
        <label for="saveEmail">Save my name, email, and website in this browser for the next time I comment</label>
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'pinia';
import { useReviewStore } from '../../store/reviewStore';
import IconStar from '../../common/icons/IconStar.vue';

interface FormData {
  id: number;
  reviewerName: string;
  email: string;
  reviewText: string;
  saveEmail: boolean;
  rating: number;
}

export default defineComponent({
  name: 'AddProductReview',
  data() {
    return {
      formData:  {
        reviewerName: '',
        email: '',
        reviewText: '',
        saveEmail: false,
        rating: 0,
      } as FormData,
    };
  },
  methods: {
    handleSubmit(){
      this.addReview({ ...this.formData, id: this.$route.params.id, });
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
  gap: 1rem;
}

.form-container .review-field {
  grid-column: span 2 / span 2 !important;
}

input[type="checkbox"] {
  margin-right: 0.5rem;
}

.star-label {
  display: inline-block;
  width: 18px;
  height: 18px;
  cursor: pointer;
}

input[type="radio"] {
  position: absolute;
  opacity: 0;
}
</style>
