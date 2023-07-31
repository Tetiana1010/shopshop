import { defineStore } from 'pinia';
import axios from 'axios';

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
  message: any,
  reviews: Review[]
}

export const useReviewStore = defineStore('productReview', {
  state: (): ReviewTypes => ({
    message: false,
    reviews: [],
  }),
  actions: {
    async fetchReviewsById(productId: number): Promise<void> {
      try {
        const responseReviews = await axios.get(`${API_BASE_URL}/reviews/${productId}`);
        this.reviews = responseReviews.data;
        this.message = false;
      } catch (error: any) {
        this.message = error.message;
      }
    },
    async addReview(newReview: Review) {
        try {
          const response = await axios.post(`${API_BASE_URL}/reviews/new`, {
            product_id: newReview.product_id,
            reviewer_name: newReview.reviewer_name,
            email: newReview.email,
            review_text: newReview.review_text,
            rating: newReview.rating,
            save_email: Number(newReview.save_email)
          });
          if(response.status === 200){
            this.message = 'Your review was added';
          }
        } catch (error: any) {
          this.message =  error.message;
        }
      },
  },
});
