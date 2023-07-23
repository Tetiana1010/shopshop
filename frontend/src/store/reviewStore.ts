import { defineStore } from 'pinia';
import axios from 'axios';

interface Review {
  id: number;
  product_id: number;
  rating: number;
  review_text: string;
  reviewer_name: string;
}

interface ReviewTypes {
  message: string | unknown,
  reviews: Review[]
}

export const useReviewStore = defineStore('productReview', {
  state: (): ReviewTypes => ({
    message: '',
    reviews: [],
  }),
  actions: {
    async fetchReviewsById(productId: number): Promise<void> {
      try {
        const responseReviews = await axios.get(`http://localhost:7777/reviews/${productId}`);
        this.reviews = responseReviews.data;
        console.log('responseReviews:', this.reviews);
      } catch (error) {
        console.error(error);
      }
    },
    async addReview(
      id: number,
      reviewerName: string,
      email: string,
      reviewText: string,
      rating: number,
      saveEmail: boolean
    ) {
        try {
          const response = await axios.post('http://localhost:7777/reviews/new', {
            product_id: id,
            reviewer_name: reviewerName,
            email: email,
            review_text: reviewText,
            rating: rating,
            save_email: Number(saveEmail)
          });
          this.message =  response.data;
          console.log(response.data);
        } catch (error) {
          this.message =  error;
          console.error(error);
        }
      },
  },
});
