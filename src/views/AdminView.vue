<template>
  <main class="admin-view">
    <AddNewProduct />
    <MessageList />
  </main>
</template>

<script lang="ts">
  import MessageList from '../components/MessageList.vue';
  import AddNewProduct from '../components/AddNewProduct.vue'

  export default {
    name: 'AdminView',
    components: {
      MessageList,
      AddNewProduct
    }
  };
</script>

<style scoped>
  .admin-view {
    display: flex;
    min-height: 100vh;
  }
</style>


