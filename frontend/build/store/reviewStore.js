import { defineStore } from 'pinia';
import axios from 'axios';
const API_BASE_URL = 'http://localhost:7777';
export const useReviewStore = defineStore('productReview', {
    state: () => ({
        message: '',
        reviews: [],
    }),
    actions: {
        async fetchReviewsById(productId) {
            try {
                const responseReviews = await axios.get(`${API_BASE_URL}/reviews/${productId}`);
                this.reviews = responseReviews.data;
                this.message = null;
            }
            catch (error) {
                this.message = error.message;
            }
        },
        async addReview(id, reviewerName, email, reviewText, rating, saveEmail) {
            try {
                await axios.post(`${API_BASE_URL}/reviews/new`, {
                    product_id: id,
                    reviewer_name: reviewerName,
                    email: email,
                    review_text: reviewText,
                    rating: rating,
                    save_email: Number(saveEmail)
                });
                this.message = null;
            }
            catch (error) {
                this.message = error.message;
            }
        },
    },
});
