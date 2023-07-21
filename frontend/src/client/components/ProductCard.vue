<template>
  <li class="product-catd">
    <div v-if="product.imagerURL" :style="{ 'background-image': 'url(' + product.imagerURL + ')' }" class="bg-image"/>
    <ImageSkeleton v-else /> 
    <RouterLink :to="'/shop/' + product.id">
      <h3 class="product-title">{{product.name}}</h3>
    </RouterLink>
    <h4 v-if="product.price" class="product-price">{{ formattedPrice }}</h4>
  </li>
</template>

<script lang="ts">
  import { RouterLink } from 'vue-router';
  import ImageSkeleton from '../../common/components/ImageSkeleton.vue'

  interface Product {
    name: string;
    price: number;
    description: string;
    image: {
      type: string;
      data: number[];
     } | null;
  }

  export default {
    name: 'ProductCard',
    props: {
      product: {
        type: Object as () => Product,
        required: true,
      },
      imageUrl: {
        type: String,
        default: '',
      },
    },
    computed: {
      formattedPrice(){
        return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(this.product.price)
      }
    },
    components: {
      RouterLink,
      ImageSkeleton
    }
  };
</script>
