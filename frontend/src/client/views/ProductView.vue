<template>
  <main class="product-view">
    <div v-if="currentProduct !== null && currentProduct.imageURLs.length" class="img-gallery">
      <img :src="currentProduct.imageURLs[0]" />
    </div>
    <ImageSkeleton v-else/>
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
    data(){
      return {
        id: Number(this.$route.params.id)
      }
    },
    computed: {
      ...mapState(useProductStore, ['currentProduct']),
      ...mapState(useReviewStore, ['reviews'])
    },
    methods: {
      ...mapActions(useProductStore, ['fetchProductById']),
      ...mapActions(useReviewStore, ['fetchReviewsById'])
    },
    mounted() {
      this.fetchProductById(this.id);
      this.fetchReviewsById(this.id);
    },
    created() {
      this.$watch(
        () => this.$route.params,
        () => {
          this.fetchProductById(this.id);
          this.fetchReviewsById(this.id);
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
  .product-wrapper, .img-gallery {
    grid-column: 6 span;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
</style>
