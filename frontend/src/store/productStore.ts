import { defineStore } from 'pinia';
import axios from 'axios';

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
}

export const useProductStore = defineStore('productStore', {
  state: (): Products => ({
    currentProduct: null,
    products: [],
  }),
  actions: {
    formattedPrice(price: number): string {
      return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price);
    },
    async fetchAllProducts(): Promise<void> {
      try {
        const response = await axios.get('http://localhost:7777/products');
        this.products = response.data;
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchProductById(productId: number): Promise<void> {
      try {
        const responseProduct = await axios.get(`http://localhost:7777/products/${productId}`);
        this.currentProduct = responseProduct.data;
        console.log('currentProduct:', this.currentProduct);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteProductById(productId: number): Promise<void> {
      try {
        await axios.delete(`http://localhost:7777/products/${productId}`);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
