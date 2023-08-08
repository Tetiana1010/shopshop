import axios from 'axios';

import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';

import { defineStore, mapActions } from 'pinia';
import { useAlertStore } from './alertStore';

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
          return (
            product.name.toLowerCase().includes(query.toLowerCase()) && 
            product.price < price
          )}
        );
      }
    },
    formattedPrice(price: number): string {
      return new Intl.NumberFormat('de-DE', { 
        style: 'currency', 
        currency: 'EUR' 
      }).format(price);
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
        this.setAlert('Failed to fetch product images.', 'error');
      } finally {
        this.clearAlert();
      }
    },
    async fetchAllProducts(): Promise<void> {
      try {
        const response = await axios.get(`${API_BASE_URL}/products`);
        const productsWithImages = await Promise.all(
          response.data.map(async (item: any) => {
            const imageList = await this.fetchImageURLs(
              ref(storage, `images/${item.id}`)
            );
            return { ...item, imageURLs: imageList };
          })
        );

        this.products = productsWithImages;
        this.filtered = productsWithImages;

      } catch (error: any) {
        this.setAlert('Failed to fetch products.', 'error');
      } finally {
        this.clearAlert();
      }
    },
    async fetchProductById(productId: number): Promise<void> {
      try {
        this.setAlert('Fetching product...', 'success');

        const imageList = await this.fetchImageURLs(
          ref(storage, `images/${productId}`)
        );
        const response = await axios.get(`${API_BASE_URL}/products/${productId}`);

        this.currentProduct = {...response.data, imageURLs: imageList};

      } catch (error: any) {
        this.setAlert('An error occurred while fetching the product.', 'error');
      } finally {
        this.clearAlert();
      }
    },
    async addProduct(newProduct: Product) {
      try {
        const productData = {
          name: newProduct.name,
          price: newProduct.price.toString(),
          category: newProduct.category,
          SKU: newProduct.SKU,
          description: newProduct.description,
          weight: Number(newProduct.weight),
          dimentions: newProduct.dimentions,
          colour: newProduct.colour,
          material: newProduct.material,
        };
    
        const response = await axios.post(`${API_BASE_URL}/products/new`, productData);
        if (response.status === 200) {
          this.setAlert('Product added successfully.', 'success');
          await this.fetchAllProducts();
        };

        return response.data;
      } catch (error: any) {
        this.setAlert('An error occurred while adding the product.', 'error');
      } finally {
        this.clearAlert();
      }
    },    
    async updateProductById(productId: number, updatedProduct: Product){
      try {
        await axios.put(`${API_BASE_URL}/products/update/${productId}`, {
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
        this.setAlert('Product updated successfully', 'success');
        this.fetchAllProducts();
      } catch (error: any) {
        this.setAlert('An error occurred while updating the product.', 'error');
      } finally {
        this.clearAlert();
      }
    },
    async deleteProductById(productId: number): Promise<void> {
      try {
        await axios.delete(`${API_BASE_URL}/products/${productId}`)
        this.setAlert('Product deleted successfully.', 'success');
        this.fetchAllProducts();
      } catch (error: any) {
        this.setAlert('An error occurred while deleting the product.', 'error');
      } finally {
        this.clearAlert();
      }
    },
  },
});

