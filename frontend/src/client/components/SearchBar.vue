<template>
  <aside class="search-bar">
    <form class="form-container">
      <div>
        <input type="search" placeholder="Search" v-model="searchKeyword" list="jewelry" />
        <datalist id="jewelry">
          <option value="Ring"></option>
          <option value="Earring"></option>
          <option value="Bracelet"></option>
          <option value="Brooch"></option>
          <option value="Anklet"></option>
        </datalist>
      </div>
      <div>
        <label for="price"><bdi>Price:</bdi> {{ price }} $</label>
        <input v-model="price" type="range" min="1" max="100" id="price" name="price" />
      </div>
      <div>
        <select v-model="sortBy">
          <option disabled value="">Sort By</option>
          <option value="price">Cooperation</option>
          <option value="other">Other</option>
        </select>
      </div>
    </form>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'pinia';
import { useProductStore } from '../../store/productStore';

export default defineComponent({
  name: 'SearchBar',
  data() {
    return {
      searchKeyword: '',
      price: 50,
      sortBy: ''
    };
  },
  computed: {
    ...mapState(useProductStore, ['filtered'])
  },
  methods: {
    ...mapActions(useProductStore, ['filterProducts']),
  },
  created() {
    this.$watch(
      () => this.searchKeyword,
      () => {
        this.filterProducts(this.searchKeyword, this.price);
      },
      { immediate: true }
    );
  },
  });
</script>

<style scoped>
  .search-bar  {
    grid-column: span 3;
  }

  @media only screen and (max-width: 768px) {
    .search-bar  {
      grid-column: span 6;
    }
  }
  .form-container {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 3rem;
  }
</style>
