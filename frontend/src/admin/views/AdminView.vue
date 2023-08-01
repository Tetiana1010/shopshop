<template>
  <main class="admin-view">
    <h1 class="admin-title">Admin page</h1>
    <div class="admin-blocks">
      <div class="admin-block">
        <h2 class="admin-block-title">
          <IconWrenchScrewdriver />
          Product Management
        </h2>
        <p class="admin-block-description">
          Here, administrators can efficiently manage products for the "shopshop" project. This page provides a comprehensive set of tools to create new products, edit existing ones, and even remove products from the system.
        </p>
        <router-link to="/admin/product-management" class="admin-link">Go to Product Management</router-link>
      </div>
      <div class="admin-block">
        <h2 class="admin-block-title">
          <IconMessage />
          Messages Management
        </h2>
        <p class="admin-block-description">
          This page is designed to facilitate seamless communication with our valuable users. As an administrator, you can easily access and respond to user inquiries and messages here.
        </p>
        <router-link to="/admin/messages-management" class="admin-link">Go to Messages Management</router-link>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router';
import IconMessage from '../../common/icons/IconMessage.vue';
import IconWrenchScrewdriver from '../../common/icons/IconWrenchScrewdriver.vue'

export default {
  name: 'AdminView',
  components: {
    RouterLink,
    IconMessage,
    IconWrenchScrewdriver
  },
};
</script>

<style scoped>
.admin-blocks {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
}

.admin-block {
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1.5rem;
  padding: 1rem;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
}

.admin-block-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
}

.admin-link {
  padding: 0.7rem;
  text-decoration: none;
  color: white;
  text-align: center;
  border-radius: 0.4rem;
  background-color: var(--gray-dark);
  display: inline-block;
  transition: background-color 0.2s ease;
  margin-top: auto;
}

.admin-link:hover {
  background-color: black;
}
</style>
