import { defineStore } from 'pinia';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:7777';

interface Product {
  name: string;
  price: number;
  description: string;
  image: {
    type: string;
    data: number[];
   } | null;
}

interface Products {
  currentProduct: Product | null;
  products: Product[];
  filtered: Product[];
}

export const useProductStore = defineStore('productStore', {
  state: (): Products => ({
    currentProduct: null,
    products: [],
    filtered: []
  }),
  actions: {
    filterProducts(query: string, price: number){
      if (!query) {
        this.filtered = this.products;
      } else {
        this.filtered = this.products.filter(product => {
          return product.name.toLowerCase().includes(query.toLowerCase()) 
          && product.price < price
          }
        );
      }
    },
    formattedPrice(price: number): string {
      return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price);
    },
    async fetchAllProducts(): Promise<void> {
      try {
        const response = await axios.get(`${API_BASE_URL}/products`);
        this.products = response.data;
        this.filtered = response.data;
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchProductById(productId: number): Promise<void> {
      try {
        const responseProduct = await axios.get(`${API_BASE_URL}/products/${productId}`);
        this.currentProduct = responseProduct.data;
        console.log('currentProduct:', this.currentProduct);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteProductById(productId: number): Promise<void> {
      try {
        await axios.delete(`${API_BASE_URL}/products/${productId}`);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
