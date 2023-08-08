<template>
  <main>
    <h1>Product Management</h1>
    <AddNewProduct />
    <AlertBanner />
    <ProductCards />
  </main>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import ProductCards from '../components/ProductCards.vue';
  import AddNewProduct from '../components/AddNewProduct.vue';
  import AlertBanner from '../../common/components/AlertBanner.vue';

  export default defineComponent({
    name: 'ProductManagementView',
    components: {
      AddNewProduct,
      ProductCards,
      AlertBanner
    }
  });
</script>
