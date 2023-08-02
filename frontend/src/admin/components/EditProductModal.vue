<template>
  <div class="modal">
    <div class="edit-box">
      <h1>Edit product</h1>
      <button class="x-button" @click="$emit('editToggle')">
        <IconClose />
      </button>
      <form class="form-container" @submit.prevent="handleSubmit">
        <fieldset>
          <legend>Basic Information</legend>
          <input v-model="formData.name" type="text" placeholder="Product Name" required />
          <textarea v-model="formData.description" placeholder="Product Description" rows="4" required></textarea>
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
          <input v-model="formData.colour" type="text" placeholder="Color" required />
          <input v-model="formData.material" type="text" placeholder="Material" required />
        </fieldset>
        <div class="button-wrapper">
          <button type="submit">Save changes</button>
          <button @click="resetForm">Discard changes</button>
        </div>
      </form>
    </div>
    <div class="overlay" @click="$emit('editToggle')"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapActions } from 'pinia';
import { useProductStore } from '../../store/productStore';

import IconClose from '../../common/icons/IconClose.vue';

export default defineComponent({
  name: 'EditProductModal',
  data() {
    return {
      formData: {
        name: '',
        price: 0,
        category: '',
        SKU: '',
        description: '',
        weight: 0,
        dimentions: '',
        colour: '',
        material: ''
      }
    };
  },
  props: ['productId'],
  emits: ['editToggle'],
  computed: {
    ...mapState(useProductStore, ['currentProduct']),
  },
  methods: {
    ...mapActions(useProductStore, ['fetchProductById', 'updateProductById']),
    resetForm() {
      Object.assign(this.formData, this.currentProduct);
    },
    async handleSubmit() {
      await this.updateProductById(this.productId, this.formData);
      this.$emit('editToggle');
    }
  },
  async mounted() {
    await this.fetchProductById(this.productId);
    this.resetForm();
  },
  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchProductById(this.productId);
      },
      { immediate: true }
    );
  },
  components: {
    IconClose
  }
});
</script>

<style scoped>
.modal {
  position: fixed;
  inset: 0;
  padding: 2rem;
  z-index: 40; 
}

.overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 50; 
}

.modal .edit-box {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: white;
  padding: 2rem;
  gap: 1.5rem;
  border-radius: 0.5rem;
  max-width: 1280px;
  z-index: 60;
}

.modal form {
  flex-basis: 100%;
}

.x-button {
  background: none;
  border: none;
}
</style>
