<template>
  <div class="add-new-product">
    <h2>Add new product</h2>
    <form class="form-container" @submit.prevent="handleSubmit">
      <input v-model="formData.name" type="text" placeholder="Product Name" required />
      <textarea v-model="formData.description" placeholder="Product Description" required></textarea>
      <fieldset>
        <legend>Product Details</legend>
        <input v-model="formData.price" type="number" placeholder="Product Price" min="1" required />
        <input v-model="formData.category" type="text" placeholder="Category" required />
        <input v-model="formData.SKU" type="text" placeholder="SKU" required />
      </fieldset>
      <fieldset>
        <legend>Product Specifications</legend>
        <input v-model="formData.weight" type="number" placeholder="Weight" min="1" required />
        <input v-model="formData.dimentions" type="text" placeholder="dimentions" required />
        <input v-model="formData.colour" type="text" placeholder="colour" required />
        <input v-model="formData.material" type="text" placeholder="Material" required />
      </fieldset>
      <!-- <input @change="handleImageUpload" type="file" accept="image/*" required /> -->
      <!-- <div v-if="productImage">
        <img :src="productImageURL" alt="Product Image" width="100" />
        <button @click="removeImage" class="create-button">Remove image</button>
      </div> -->
      <div class="button-wrapper">
        <button type="submit">Create a new item</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { mapActions } from 'pinia';
  import { useProductStore } from '../../store/productStore'

  interface FormData {
    name: string,
    price: number,
    category: string,
    SKU: string,
    description: string,
    weight: number,
    dimentions: string,
    colour: string,
    material: string
    // productImage: string | undefined,
    // productImageURL: string |  undefined,
  };

  const initialFormData: FormData = {
    name: '',
    price: 1,
    category: '',
    SKU: '',
    description: '',
    weight: 1,
    dimensions: '',
    color: '',
    material: '',
  };


  export default defineComponent({
    name: 'AddNewProduct',
    data() {
      return {
        formData: { ...initialFormData }
      };
    },
    methods: {
      async handleSubmit(){
        await this.addProduct(this.formData);
        this.resetForm();
      },
      resetForm() {
        this.formData = { ...initialFormData };
      },
      ...mapActions(useProductStore, ['addProduct']),
    }
  });
</script>

<style scoped>
  .add-new-product {
    grid-column: 1 / -1;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>
