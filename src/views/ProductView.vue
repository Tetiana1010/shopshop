<template>
  <main>
    <AlertBanner :alertMessage="alertMessage" />
    <!-- <div class="image-gallery">
      <img
        v-for="image in productImages"
        :src="image.url"
        :key="image.id"
        :alt="image.alt"
        :class="isCurrentImage(image) ? 'current-image' : 'small-image'"
        @click="setCurrentImage(image)"
      />
    </div>-->
    <div class="product-info">
      <div>
        <h1>{{ product.name }}</h1>
        <h2 class="price">{{ product.price }}</h2>
      </div>
      <!-- <div>
        <p>{{ productReview }}</p>
      </div>
      
      <div>
        <div class="quantity">
          <button @click="decreaseQuantity">-</button>
          <span>{{ quantity }}</span>
          <button @click="increaseQuantity">+</button>
        </div>
        <button class="black-bordered" @click="addToCart">
          ADD TO CART
        </button>
      </div>
      <div>
        <p>
          Categories:
          <span v-for="(category, index) in productCategories" :key="index">
            {{ category + ' ' }}
          </span>
        </p>
      </div> -->
    </div>
  </main>
</template>

<script lang="ts">
  import AlertBanner from '../components/AlertBanner.vue';
  import axios from 'axios';

  interface Product {
    name: string;
    price: number;
  }

  interface MyComponentData {
    alertMessage: string;
    quantity: number;
    currentImage: string | null;
    product: Product
  }

  export default {
    name: 'ProductView',
    data(): MyComponentData {
      return {
        quantity: 0,
        currentImage: null,
        alertMessage: '',
        product: {},
      };
    },
    methods: {
      isCurrentImage(image) {
        return this.currentImage === image;
      },
      setCurrentImage(image) {
        this.currentImage = image;
      },
      decreaseQuantity() {
        this.quantity--;
      },
      increaseQuantity() {
        this.quantity++;
      },
      addToCart() {
        this.alertMessage = 'The item added to your Shopping bag.'
        setTimeout(() => {
          this.alertMessage = ''
        }, 2000);
      },
      async fetchData() {
        try {
          const response = await axios.get(`http://localhost:7777/products/${this.$route.params.id}`);
          console.log(response.data);
          this.product = response.data;
        } catch (error) {
          console.error(error);
        }
      },
    },
    components: {
      AlertBanner
    },
    // created() {
    //   this.currentImage = this.product.images[0];
    // },
    mounted() {
      this.fetchData();
    },
  };
</script>
<style scoped>
  main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  .image-gallery {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    max-height: 380px;
    grid-column-gap: 0rem;
    grid-row-gap: 2rem; 
  }

  .current-image {
    grid-area: 1 / 2 / 4 / 5;
    height: 100%;
  }

  @media only screen and (max-width: 768px) {
    .current-image {
      grid-area: 1 / 1 / 3 / 5
    }
  }

  .small-image {
    max-width: 120px;
    height: 100%;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .quantity {
    border-radius: 4px;
    background: var(--light-colors-light-gray-light);
    padding: 1rem;
  }

  .quantity button {
    background-color: transparent;
    border: none;
  }

  button.black-bordered {
    background: transparent;
    border: 2px solid black;
    font-size: 1.4rem;
    padding: 1rem 2rem;
    border-radius: 6px;
    color: black;
  }
</style>
