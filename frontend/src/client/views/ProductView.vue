<template>
  <main>
    <!-- <div class="image-gallery">
      <img
        v-for="image in productImages"
        :src="image.url"
        :key="image.id"
        :alt="image.alt"
        :class="isCurrentImage(image) ? 'current-image' : 'small-image'"
        @click="setCurrentImage(image)"
      />
    </div> -->
    <ImageSkeleton />
    <div class="product-info">
      <div class="product-details">
        <h1 v-if="product.name" class="product-title">{{ product.name }}</h1>
        <h2 v-if="product.price" class="product-price">{{ product.price }} $</h2>
      </div>
      <div class="product-review">
        <div class="rating">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_888_1330)">
              <path d="M17.9529 6.90409C17.8344 6.53961 17.5111 6.28156 17.1302 6.24709L11.9341 5.77536L9.88059 0.967661C9.72898 0.614445 9.384 0.386475 9.00002 0.386475C8.61605 0.386475 8.27093 0.614445 8.12028 0.967661L6.06676 5.77536L0.869868 6.24709C0.488911 6.28225 0.166319 6.54029 0.0471156 6.90409C-0.0714014 7.26856 0.0380517 7.66833 0.326173 7.92102L4.25399 11.3652L3.09587 16.4659C3.01114 16.841 3.15671 17.2288 3.4679 17.4537C3.63517 17.5753 3.83169 17.636 4.0289 17.636C4.19837 17.636 4.36797 17.5909 4.51945 17.5003L9.00002 14.8212L13.4798 17.5003C13.8084 17.6967 14.2216 17.6787 14.5321 17.4537C14.8433 17.2288 14.9889 16.841 14.9042 16.4659L13.7461 11.3652L17.6739 7.92102C17.9619 7.66833 18.0714 7.26939 17.9529 6.90409Z" fill="black"/>
            </g>
            <defs>
              <clipPath id="clip0_888_1330">
                <rect width="18" height="18" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_888_1330)">
              <path d="M17.9529 6.90409C17.8344 6.53961 17.5111 6.28156 17.1302 6.24709L11.9341 5.77536L9.88059 0.967661C9.72898 0.614445 9.384 0.386475 9.00002 0.386475C8.61605 0.386475 8.27093 0.614445 8.12028 0.967661L6.06676 5.77536L0.869868 6.24709C0.488911 6.28225 0.166319 6.54029 0.0471156 6.90409C-0.0714014 7.26856 0.0380517 7.66833 0.326173 7.92102L4.25399 11.3652L3.09587 16.4659C3.01114 16.841 3.15671 17.2288 3.4679 17.4537C3.63517 17.5753 3.83169 17.636 4.0289 17.636C4.19837 17.636 4.36797 17.5909 4.51945 17.5003L9.00002 14.8212L13.4798 17.5003C13.8084 17.6967 14.2216 17.6787 14.5321 17.4537C14.8433 17.2288 14.9889 16.841 14.9042 16.4659L13.7461 11.3652L17.6739 7.92102C17.9619 7.66833 18.0714 7.26939 17.9529 6.90409Z" fill="black"/>
            </g>
            <defs>
              <clipPath id="clip0_888_1330">
                <rect width="18" height="18" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_888_1330)">
              <path d="M17.9529 6.90409C17.8344 6.53961 17.5111 6.28156 17.1302 6.24709L11.9341 5.77536L9.88059 0.967661C9.72898 0.614445 9.384 0.386475 9.00002 0.386475C8.61605 0.386475 8.27093 0.614445 8.12028 0.967661L6.06676 5.77536L0.869868 6.24709C0.488911 6.28225 0.166319 6.54029 0.0471156 6.90409C-0.0714014 7.26856 0.0380517 7.66833 0.326173 7.92102L4.25399 11.3652L3.09587 16.4659C3.01114 16.841 3.15671 17.2288 3.4679 17.4537C3.63517 17.5753 3.83169 17.636 4.0289 17.636C4.19837 17.636 4.36797 17.5909 4.51945 17.5003L9.00002 14.8212L13.4798 17.5003C13.8084 17.6967 14.2216 17.6787 14.5321 17.4537C14.8433 17.2288 14.9889 16.841 14.9042 16.4659L13.7461 11.3652L17.6739 7.92102C17.9619 7.66833 18.0714 7.26939 17.9529 6.90409Z" fill="black"/>
            </g>
            <defs>
              <clipPath id="clip0_888_1330">
                <rect width="18" height="18" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_888_1330)">
              <path d="M17.9529 6.90409C17.8344 6.53961 17.5111 6.28156 17.1302 6.24709L11.9341 5.77536L9.88059 0.967661C9.72898 0.614445 9.384 0.386475 9.00002 0.386475C8.61605 0.386475 8.27093 0.614445 8.12028 0.967661L6.06676 5.77536L0.869868 6.24709C0.488911 6.28225 0.166319 6.54029 0.0471156 6.90409C-0.0714014 7.26856 0.0380517 7.66833 0.326173 7.92102L4.25399 11.3652L3.09587 16.4659C3.01114 16.841 3.15671 17.2288 3.4679 17.4537C3.63517 17.5753 3.83169 17.636 4.0289 17.636C4.19837 17.636 4.36797 17.5909 4.51945 17.5003L9.00002 14.8212L13.4798 17.5003C13.8084 17.6967 14.2216 17.6787 14.5321 17.4537C14.8433 17.2288 14.9889 16.841 14.9042 16.4659L13.7461 11.3652L17.6739 7.92102C17.9619 7.66833 18.0714 7.26939 17.9529 6.90409Z" fill="black"/>
            </g>
            <defs>
              <clipPath id="clip0_888_1330">
                <rect width="18" height="18" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_888_1330)">
              <path d="M17.9529 6.90409C17.8344 6.53961 17.5111 6.28156 17.1302 6.24709L11.9341 5.77536L9.88059 0.967661C9.72898 0.614445 9.384 0.386475 9.00002 0.386475C8.61605 0.386475 8.27093 0.614445 8.12028 0.967661L6.06676 5.77536L0.869868 6.24709C0.488911 6.28225 0.166319 6.54029 0.0471156 6.90409C-0.0714014 7.26856 0.0380517 7.66833 0.326173 7.92102L4.25399 11.3652L3.09587 16.4659C3.01114 16.841 3.15671 17.2288 3.4679 17.4537C3.63517 17.5753 3.83169 17.636 4.0289 17.636C4.19837 17.636 4.36797 17.5909 4.51945 17.5003L9.00002 14.8212L13.4798 17.5003C13.8084 17.6967 14.2216 17.6787 14.5321 17.4537C14.8433 17.2288 14.9889 16.841 14.9042 16.4659L13.7461 11.3652L17.6739 7.92102C17.9619 7.66833 18.0714 7.26939 17.9529 6.90409Z" fill="black"/>
            </g>
            <defs>
              <clipPath id="clip0_888_1330">
                <rect width="18" height="18" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>
        <p v-if="reviews.length" class="review-count">
          {{ reviews.length }} customer review{{ reviews.length > 1 ? 's' : '' }}
        </p>  
        <p class="review-description">{{ reviews[0].review_text }}</p>
      </div>
      <div class="product-actions">
        <div class="quantity-control">
          <button class="quantity-decrease" @click="decreaseQuantity">-</button>
          <span class="quantity-value">{{ quantity }}</span>
          <button class="quantity-increase" @click="increaseQuantity">+</button>
        </div>
        <button class="add-to-cart-button" @click="addToCart">
          ADD TO CART
        </button>
      </div>
      <div class="product-details">
        <p v-if="product.SKU" class="product-SKU">SKU: <span>{{product.SKU}}</span></p>
        <p v-if="product.category" class="product-category">Category: <span>{{ product.category }}</span></p>
      </div>
    </div>
  </main>
</template>


<script lang="ts">
  import axios from 'axios';
  import ImageSkeleton from '../../common/components/ImageSkeleton.vue'

  interface Product {
    name: string;
    price: number;
  }

  interface Review {
    id: number;
    product_id: number,
    rating: number
    review_text: string,
    reviewer_name: string,
  }

  interface MyComponentData {
    quantity: number;
    currentImage: string | null;
    product: Product,
    reviews: Review[];
  }


  export default {
    name: 'ProductView',
    data(): MyComponentData {
      return {
        quantity: 0,
        currentImage: null,
        product: Object as () => Product,
        reviews: [] as Review[]
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
        if(this.quantity === 0){
          return;
        } else {
           this.quantity--;
        }
      },
      increaseQuantity() {
        this.quantity++;
      },
      async fetchData() {
        try {
          const responseProduct = await axios.get(`http://localhost:7777/products/${this.$route.params.id}`);
          this.product = responseProduct.data;

          const responseRewiew = await axios.get(`http://localhost:7777/products/reviews/${this.$route.params.id}`);
          this.reviews = responseRewiew.data;
          console.log(responseRewiew);
        } catch (error) {
          console.error(error);
        }
      },
    },
    created() {
    this.$watch(
        () => this.$route.params,
        () => {
          this.fetchData();
        },
        // fetch the data when the view is created and the data is
        // already being observed
        { immediate: true }
      )
    },
    components: {
      ImageSkeleton
    },
  };
</script>

<style scoped>
  main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }

  @media only screen and (max-width: 768px) {
    main {
      grid-template-columns: 1fr;
    }
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

  .small-image {
    max-width: 120px;
    height: 100%;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .product-details span,
  .review-count,
  .review-description {
    color: var(--light-colors-dark-gray-light);
  }

  .product-review {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .rating {
    display: flex;
    gap: 0.4rem;
  }

  .review-count {
    flex: 1;
  }

  .review-description {
    flex-basis: 100%;
  }

  .product-actions {
    display: flex;
    gap: 1.5rem;
  }
  
  .quantity-control {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background: var(--light-colors-light-gray-light);
    padding: 0.8rem 2rem;
  }

  .quantity-control button {
    background-color: transparent;
    border: none;
  }

  .add-to-cart-button {
    background: transparent;
    border: 2px solid black;
    font-size: 1.4rem;
    padding: 0.8rem 2rem;
    border-radius: 6px;
    color: black;
    flex: 1;
  }
</style>
