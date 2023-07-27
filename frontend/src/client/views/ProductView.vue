<template>
  <main class="product-view">
    <ImageSkeleton />
    <div class="product-wrapper">
      <ProductDetails v-if="currentProduct !== null" :currentProduct="currentProduct" :reviews="reviews" />
      <ProductActions v-if="currentProduct !== null" />
    </div>
    <ProductTab  v-if="currentProduct !== null" :productName="currentProduct.name" :description="currentProduct.description" :reviews="reviews" />
  </main>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { mapState, mapActions } from 'pinia'; 
  import { useProductStore } from '../../store/productStore';
  import { useReviewStore } from '../../store/reviewStore';
  
  import ProductDetails from '../components/ProductDetails.vue';
  import ProductActions from '../components/ProductActions.vue';
  import ProductTab from '../components/ProductTab.vue';
  import ImageSkeleton from '../../common/components/ImageSkeleton.vue';

  export default defineComponent({
    name: 'ProductView',
    computed: {
      ...mapState(useProductStore, ['currentProduct']),
      ...mapState(useReviewStore, ['reviews'])
    },
    methods: {
      ...mapActions(useProductStore, ['fetchProductById']),
      ...mapActions(useReviewStore, ['fetchReviewsById'])
    },
    mounted() {
      this.fetchProductById(this.$route.params.id);
      this.fetchReviewsById(this.$route.params.id);
    },
    created() {
      this.$watch(
        () => this.$route.params,
        () => {
          this.fetchProductById(this.$route.params.id);
          this.fetchReviewsById(this.$route.params.id);
        },
        { immediate: true }
      );
    },
    components: {
      ImageSkeleton,
      ProductDetails,
      ProductActions,
      ProductTab,
    }
  });
</script>

<style scoped>
  .product-wrapper {
    grid-column: 6 span;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
</style>
