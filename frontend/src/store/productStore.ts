import { defineStore } from 'pinia';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:7777';

interface Product {
  id: number,
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
  message: any
}

export const useProductStore = defineStore('productStore', {
  state: (): Products => ({
    message: false,
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
        this.message = false;
      } catch (error: any) {
        this.message = error.message;
      }
    },
    async fetchProductById(productId: number): Promise<void> {
      try {
        const responseProduct = await axios.get(`${API_BASE_URL}/products/${productId}`);
        this.currentProduct = responseProduct.data;
        this.message = false;
      } catch (error: any) {
        this.message = error.message;
      }
    },
    async deleteProductById(productId: number): Promise<void> {
      try {
        await axios.delete(`${API_BASE_URL}/products/${productId}`);
        this.message = false;
      } catch (error: any) {
        this.message = error.message;
      }
    },
  },
});
