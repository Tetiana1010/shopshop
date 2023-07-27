<template>
  <main class="admin-view">
    <ProductCards />
    <AddNewProduct />
    <MessageList />
  </main>
</template>

<script lang="ts">
  import MessageList from '../components/MessageList.vue';
  import ProductCards from '../components/ProductCards.vue';
  import AddNewProduct from '../components/AddNewProduct.vue';

  export default {
    name: 'AdminView',
    components: {
      MessageList,
      AddNewProduct,
      ProductCards
    }
  };
</script>

<style scoped>
</style>


