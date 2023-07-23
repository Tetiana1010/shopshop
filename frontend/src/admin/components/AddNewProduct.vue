<template>
  <div class="add-new-product">
    <h2>Add new product</h2>
    <div class="form-container">
      <input v-model="productName" type="text" placeholder="Product Name" class="input-field" required>
      <input v-model="productPrice" type="number" placeholder="Product Price" class="input-field" min="0" required>
      <textarea v-model="productDescription" type="text" placeholder="Product Description" class="input-field" required></textarea>
      <input @change="handleImageUpload" type="file" class="input-field" accept="image/*" required/>
      <div class="input-field" v-if="productImage">
        <img :src="productImageURL" alt="Product Image" width="100" />
        <button @click="removeImage" class="create-button">Remove image</button>
      </div>
      <div class="button-wrapper">
        <button @click="addProduct" class="form-button">Create a new item</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import axios from 'axios';

  interface NewProduct {
    productName: String,
    productPrice: Number,
    productDescription: String,
    productImage: String | null,
    productImageURL: String |  null,
  }

  export default {
    name: 'AddNewProduct',
    data(): NewProduct {
      return {
        productName: '',
        productPrice: 0,
        productDescription: '',
        productImage: null,
        productImageURL: null,
      };
    },
    methods: {
      removeImage(){
        this.productImage = null;
        this.productImageURL = null;
      },
      handleImageUpload(event: any){
        this.productImage = event.target.files[0];
        this.productImageURL = URL.createObjectURL(this.productImage);
      },
      async addProduct() {
        try {
          const formData = new FormData();
          formData.append('name', this.productName);
          formData.append('price', this.productPrice);
          formData.append('description', this.productDescription);
          // formData.append('image', this.productImage);
          formData.append('image', null);

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
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>
