<template>
  <div class="add-new-product">
    <h2>Add new product</h2>
    <form class="form-container" @submit.prevent="handleSubmit">
      <fieldset>
        <legend>Basic Information</legend>
        <input v-model="formData.name" type="text" placeholder="Product Name" required />
        <textarea v-model="formData.description" placeholder="Product Description" required></textarea>
        <div class="image-upload">
          <input id="product-image" @change="onFileSeleted" type="file" accept="image/*" />
          <img v-if="imageUrl" :src="imageUrl || formData.imageURLs" />
          <button v-if="imageUrl" @click="removeImage">Remove image</button>
        </div>
      </fieldset>
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
      <div class="button-wrapper">
        <button type="submit">Create a new item</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { mapActions } from 'pinia';
  import { storage } from '../../firebase';
  import { ref, uploadBytes } from 'firebase/storage';
  import { useProductStore } from '../../store/productStore';

  interface FormData {
    name: string,
    price: number,
    category: string,
    SKU: string,
    description: string,
    weight: number,
    dimentions: string,
    colour: string,
    material: string,
    imageURLs: any
  };

  interface AddNewProduct {
    selectedFile: any,
    imageUrl: string | null,
    formData: FormData
  }

  const initialFormData: FormData = {
    name: '',
    price: 1,
    category: '',
    SKU: '',
    description: '',
    weight: 1,
    dimentions: '',
    colour:'',
    material: '',
    imageURLs: [],
  };


  export default defineComponent({
    name: 'AddNewProduct',
    data(): AddNewProduct {
      return {
        selectedFile: null,
        imageUrl: null,
        formData: { ...initialFormData }
      };
    },
    methods: {
      onFileSeleted(event: any){
        this.selectedFile = event.target.files[0];
        if (this.selectedFile) {
          this.imageUrl = URL.createObjectURL(this.selectedFile).toString();
        }
      },
      async onUpload(productId: number){
        if(this.selectedFile === null) return;
        const imageRef = ref(storage, `images/${productId}/${this.selectedFile.name}`);
        await uploadBytes(imageRef, this.selectedFile).then((data) => {
          this.formData.imageURLs = data.metadata.fullPath;
        });
      },
      async handleSubmit(){
        await this.addProduct(this.formData).then(async(data) => await this.onUpload(data.insertId))
        this.resetForm();
      },
      removeImage(){
        this.selectedFile = null,
        this.imageUrl = null
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
