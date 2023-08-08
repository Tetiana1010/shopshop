import { defineStore } from 'pinia';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';
import axios from 'axios';

import { useAlertStore } from './alertStore';
import { mapActions } from 'pinia';

const API_BASE_URL = 'http://localhost:7777';

interface Product {
  id?: number,
  name: string,
  price: number,
  SKU: string,
  category: string,
  description: string,
  imageURLs?: any,
  weight: number,
  dimentions: string,
  colour: string,
  material: string
}

interface Products {
  currentProduct: Product | null,
  products: Product[],
  filtered: Product[],
}

export const useProductStore = defineStore('productStore', {
  state: (): Products => ({
    currentProduct: null,
    products: [],
    filtered: []
  }),
  actions: {
    ...mapActions(useAlertStore, ['setAlert', 'clearAlert']),
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
    async fetchImageURLs(imageListRef: any) {
      try {
        const response = await listAll(imageListRef);

        const imagePromises = response.items.map(item => {
          return getDownloadURL(item);
        });

        const urls = await Promise.all(imagePromises);

        return urls;
      } catch (error: any) {
        console.error('Error getting image URLs:', error);
      }
    },
    async fetchAllProducts(): Promise<void> {
      this.setAlert('loading', 'success');
      try {
        const response = await axios.get(`${API_BASE_URL}/products`);
        const prod = await Promise.all(
          response.data.map(async (item: any) => {
            const imageList = await this.fetchImageURLs(ref(storage, `images/${item.id}`));
            return { ...item, imageURLs: imageList };
          })
        );
        this.products = prod;
        this.filtered = prod;
        this.setAlert('fetched', 'success');
      } catch (error: any) {
        this.setAlert('something went wrong', 'error');
      } finally {
        this.clearAlert();
      }
    },
    async fetchProductById(productId: number): Promise<void> {
      this.setAlert('loading', 'success');
      try {
        const imageList = await this.fetchImageURLs(ref(storage, `images/${productId}`));
        const responseProduct = await axios.get(`${API_BASE_URL}/products/${productId}`);
        this.currentProduct = {...responseProduct.data, imageURLs: imageList};
        this.setAlert('fetched', 'success');
      } catch (error: any) {
        this.setAlert('something went wrong', 'error');
      } finally {
        this.clearAlert();
      }
    },
    async addProduct(newProduct: Product){
      this.setAlert('loading', 'success');
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
        });
        if(response.status === 200){
          this.setAlert('product added', 'success');
          this.fetchAllProducts()
        }
        return response.data;
      } catch (error: any) {
        this.setAlert('something went wrong', 'error');
      } finally {
        this.clearAlert();
      }
    },
    async updateProductById(productId: number, updatedProduct: Product){
      this.setAlert('loading', 'success');
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
          material: updatedProduct.material
        });
        if(response.status === 200){
          this.setAlert('product updated', 'success');
          this.fetchAllProducts()
        }
      } catch (error: any) {
        this.setAlert('something went wrong', 'error');
      } finally {
        this.clearAlert();
      }
    },
    async deleteProductById(productId: number): Promise<void> {
      try {
        const responce = await axios.delete(`${API_BASE_URL}/products/${productId}`);
        console.log('hjs')
        this.setAlert(responce.data.message, 'success');
        this.fetchAllProducts()
      } catch (error: any) {
        this.setAlert('Something went wrong. Unable to delete product.', 'error');
      } finally {
        this.clearAlert();
      }
    },
  },
});
