<template>
  <main>
    <h1>Product Management</h1>
    <AddNewProduct />
    <ProductCards />
  </main>
</template>

<script lang="ts">
  import ProductCards from '../components/ProductCards.vue';
  import AddNewProduct from '../components/AddNewProduct.vue';
 export default {
  name: 'ProductManagementView',
  components: {
    AddNewProduct,
    ProductCards,
  }
};
</script>
