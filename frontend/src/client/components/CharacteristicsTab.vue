<template>
  <section class="characteristics">
    <ul>
      <li>
        <bdi>Weight:</bdi> {{currentProduct?.weight}}
      </li>
      <li>
        <bdi>Dimentions:</bdi> {{currentProduct?.dimentions}}
      </li>
      <li>
        <bdi>Colour:</bdi> {{currentProduct?.colour}}
      </li>
      <li>
        <bdi>Material:</bdi> {{currentProduct?.material}}
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { mapState } from 'pinia';
  import { useProductStore } from '../../store/productStore';

  export default defineComponent({
    name: 'CharacteristicsTab',
    computed: {
      ...mapState(useProductStore, ['currentProduct'])
    }
  });
</script>

<style scoped>
  .characteristics {
    padding: 1rem 0;
  }
  .characteristics ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0;
    list-style: none;
    color: var(--light-colors-dark-gray-light);
  }
</style>
