import { defineStore } from 'pinia';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:7777';

interface Product {
  id?: number,
  name: string,
  price: number,
  SKU: string,
  category: string,
  description: string,
  image?: {
    type: string;
    data: number[];
   } | null,
  weight: number,
  dimentions: string,
  colour: string,
  material: string
}

interface Products {
  currentProduct: Product | null,
  products: Product[],
  filtered: Product[],
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
    async addProduct(newProduct: Product){
      try {
        const response = await axios.post(`${API_BASE_URL}/products/new`, {
          name: newProduct.name,
          price: newProduct.price.toString(),
          category: newProduct.category,
          SKU: newProduct.SKU,
          description: newProduct.description,
          weight: Number(newProduct.weight),
          dimentions: newProduct.dimentions,
          colour: newProduct.colour,
          material: newProduct.material,
          image: newProduct.image
        });
        if(response.status === 200){
          this.message = 'Your review was added';
          this.fetchAllProducts()
        }
      } catch (error: any) {
        this.message =  error.message;
      }
    },
    async updateProductById(productId: number, updatedProduct: Product){
      try {
        const response = await axios.put(`${API_BASE_URL}/products/update/${productId}`, {
          name: updatedProduct.name,
          price: updatedProduct.price.toString(),
          category: updatedProduct.category,
          SKU: updatedProduct.SKU,
          description: updatedProduct.description,
          weight: Number(updatedProduct.weight),
          dimentions: updatedProduct.dimentions,
          colour: updatedProduct.colour,
          material: updatedProduct.material,
          image: updatedProduct.image
        });
        if(response.status === 200){
          this.message = 'Your review was added';
          this.fetchAllProducts()
        }
      } catch (error: any) {
        this.message =  error.message;
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
