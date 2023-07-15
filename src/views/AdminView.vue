<template>
  <div class="admin-view">
    <div class="form-container">
      <input v-model="productName" type="text" placeholder="Product Name" class="input-field" required>
      <input v-model="productPrice" type="number" placeholder="Product Price" class="input-field" min="0" required>
      <textarea v-model="productDescription" type="text" placeholder="Product Description" class="input-field" required></textarea>
      <input @change="handleImageUpload" type="file" class="input-field" accept="image/*" required/>
      <div class="input-field" v-if="productImage">
        <img :src="productImageURL" alt="Product Image" width="100" />
        <button @click="removeImage" class="create-button">Remove image</button>
      </div>
      <button @click="addProduct" class="create-button">Create a new item</button>
    </div>
  </div>
</template>

<script lang="ts">
  import axios from 'axios';

  export default {
    name: 'AdminView',
    data() {
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
      handleImageUpload(event){
        this.productImage = event.target.files[0];
        this.productImageURL = URL.createObjectURL(this.productImage);
      },
      async addProduct() {
        try {
          const formData = new FormData();
          formData.append('name', this.productName);
          formData.append('price', this.productPrice);
          formData.append('description', this.productDescription);
          formData.append('image', this.productImage);

          const response = await axios.post('http://localhost:7777/products/new', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
</script>

<style scoped>
  .admin-view {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .form-container {
    display: flex;
    flex-direction: column;
  }
  .input-field {
    margin-bottom: 10px;
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
  }
  .create-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  .create-button:hover {
    background-color: #0056b3;
  }
</style>


