import axios from 'axios';
import { defineStore, mapActions } from 'pinia';
import { useAlertStore } from './alertStore';

const API_BASE_URL = 'http://localhost:7777';

interface Review {
  id: number,
  product_id: number,
  review_text: string,
  rating: number,
  reviewer_name: string,
  email: string,
  save_email: boolean,
  created_at?: string
}

interface ReviewTypes {
  reviews: Review[]
}

export const useReviewStore = defineStore('productReview', {
  state: (): ReviewTypes => ({
    reviews: [],
  }),
  actions: {
    ...mapActions(useAlertStore, ['setAlert', 'clearAlert']),

    async fetchReviewsById(productId: number): Promise<void> {
      try {
        const response = await axios.get(`${API_BASE_URL}/reviews/${productId}`);
        this.reviews = response.data;
      } catch (error: any) {
        this.setAlert('An error occurred while fetching reviews', 'error');
      }
    },
    async addReview(newReview: Review) {
      try {
        const response = await axios.post(`${API_BASE_URL}/reviews/new`, newReview);

        if(response.status === 200) {
          this.setAlert('Your review was added successfully.', 'success');
          await this.fetchReviewsById(newReview.product_id);
        };
      } catch (error: any) {
        this.setAlert('An error occurred while adding the review.', 'error');
      } finally {
        this.clearAlert();
      }
    },
  },
});
