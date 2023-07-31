import { defineStore } from 'pinia';
import axios from 'axios';
const API_BASE_URL = 'http://localhost:7777';
export const useProductStore = defineStore('productStore', {
    state: () => ({
        message: null,
        currentProduct: null,
        products: [],
        filtered: []
    }),
    actions: {
        filterProducts(query, price) {
            if (!query) {
                this.filtered = this.products;
            }
            else {
                this.filtered = this.products.filter(product => {
                    return product.name.toLowerCase().includes(query.toLowerCase())
                        && product.price < price;
                });
            }
        },
        formattedPrice(price) {
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price);
        },
        async fetchAllProducts() {
            try {
                const response = await axios.get(`${API_BASE_URL}/products`);
                this.products = response.data;
                this.filtered = response.data;
                this.message = null;
            }
            catch (error) {
                this.message = error.message;
            }
        },
        async fetchProductById(productId) {
            try {
                const responseProduct = await axios.get(`${API_BASE_URL}/products/${productId}`);
                this.currentProduct = responseProduct.data;
                this.message = null;
            }
            catch (error) {
                this.message = error.message;
            }
        },
        async deleteProductById(productId) {
            try {
                await axios.delete(`${API_BASE_URL}/products/${productId}`);
                this.message = null;
            }
            catch (error) {
                this.message = error.message;
            }
        },
    },
});
