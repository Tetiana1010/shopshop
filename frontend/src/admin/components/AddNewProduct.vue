<template>
  <div class="add-new-product">
    <h2>Add new product</h2>
    <form class="form-container">
      <input v-model="productName" type="text" placeholder="Product Name" required>
      <input v-model="productPrice" type="number" placeholder="Product Price"  min="1" required>
      <textarea v-model="productDescription" type="text" placeholder="Product Description"  required></textarea>
      <!-- <input @change="handleImageUpload" type="file"  accept="image/*" required/> -->
      <!-- <div v-if="productImage">
        <img :src="productImageURL" alt="Product Image" width="100" />
        <button @click="removeImage" class="create-button">Remove image</button>
      </div> -->
      <div class="button-wrapper">
        <button @click="addProduct" type="submit">Create a new item</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
  import axios from 'axios';

  interface NewProduct {
    productName: string,
    productPrice: number,
    productDescription: string,
    // productImage: string | undefined,
    // productImageURL: string |  undefined,
  }

  export default {
    name: 'AddNewProduct',
    data(): NewProduct {
      return {
        productName: '',
        productPrice: 0,
        productDescription: '',
        // productImage: undefined,
        // productImageURL: undefined,
      };
    },
    methods: {
      // removeImage(){
      //   this.productImage = undefined;
      //   this.productImageURL = undefined;
      // },
      // handleImageUpload(event: any){
      //   this.productImage = event.target.files[0];
      //   this.productImageURL = URL.createObjectURL(this.productImage);
      // },
      async addProduct() {
        try {
          const formData = new FormData();
          formData.append('name', this.productName);
          formData.append('price', this.productPrice.toString());
          formData.append('description', this.productDescription);
          // formData.append('image', this.productImage);
          // formData.append('image', null);

          const response = await axios.post('http://localhost:7777/products/new', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
</script>

<style scoped>
  .add-new-product {
    grid-column: 1 / -1;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>
