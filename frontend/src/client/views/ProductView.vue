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
        <StarRating :rating="3" />
        <p v-if="reviews.length" class="review-count">
          {{ reviews.length }} customer review{{ reviews.length > 1 ? 's' : '' }}
        </p>  
        <p v-if="reviews.length" class="review-description">{{ reviews[0].review_text }}</p>
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
      <div class="product-icon-container">
        <IconHeart />
        <IconDivider />
        <IconsSocialSet/>
      </div>
      <div class="product-details">
        <p v-if="product.SKU" class="product-SKU">SKU: <span>{{product.SKU}}</span></p>
        <p v-if="product.category" class="product-category">Category: <span>{{ product.category }}</span></p>
      </div>
    </div>
    <div class="product-tab">
      <div class="parent-container">
        <ul class="tab-list">
            <li class="tab-item">
                <span class="tab-text" @click="showTab('description')" :class="{ 'active-tab-text': activeTab === 'description' }">Description</span>
            </li>
            <li class="tab-item">
                <span class="tab-text" :class="{ 'active-tab-text': activeTab === 'additional' }" @click="showTab('additional')">Aditional information</span>
            </li>
            <li class="tab-item" >
                <span class="tab-text" @click="showTab('reviews')" :class="{ 'active-tab-text': activeTab === 'reviews'}">Reviews({{reviews.length}})</span>
            </li>
        </ul>
      </div>
      <div class="tab-content">
        <div v-if="product.description && activeTab === 'description'">
          {{product.description}}
        </div>
        <div v-else-if="activeTab === 'additional'">Additional information content goes here</div>
        <div v-else-if="reviews.length && activeTab === 'reviews'">
          <ul class="review-list">
            <ProductReview 
              v-for="review in reviews" 
              :key="review.id" 
              :review_text="review.review_text" 
              :rating="review.rating"
              :reviewer_name="review.reviewer_name"
            />
          </ul>
          <div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>


<script lang="ts">
  import axios from 'axios';
  import ProductReview from '../components/ProductReview.vue';
  import StarRating from '../components/StarRating.vue'
  import ImageSkeleton from '../../common/components/ImageSkeleton.vue';
  import IconHeart from '../../common/icons/IconHeart.vue';
  import IconDivider  from '../../common/icons/IconDivider.vue';
  import IconsSocialSet from '../../common/icons/IconsSocialSet.vue';

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
        activeTab: 'additional',
        product: Object as () => Product,
        reviews: [] as () => Review
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
      showTab(tab) {
        this.activeTab = tab;
      },
      async fetchData() {
        try {
          const responseProduct = await axios.get(`http://localhost:7777/products/${this.$route.params.id}`);
          const responseRewiew = await axios.get(`http://localhost:7777/reviews/${this.$route.params.id}`);
          this.product = responseProduct.data;
          this.reviews = responseRewiew.data;
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
        { immediate: true }
      )
    },
    components: {
      ProductReview,
      StarRating,
      ImageSkeleton,
      IconHeart,
      IconDivider,
      IconsSocialSet,
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

  .product-icon-container {
    display: flex;
    justify-content: start;
    gap: 3rem;
    align-items: center;
  }

  .product-tab {
    grid-column: span 2 / span 2;
  }

  .parent-container {
    font-size: 0.875rem; 
    font-weight: 500; 
    text-align: center;
    color: #a1a1aa; 
    border-bottom: 1px solid #edf2f7;
  }

.tab-list {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap; 
  margin-bottom: -2px;
  list-style: none;
  padding: 0;
}

.tab-item {
  margin-right: 0.5rem;
}

.tab-text {
  display: inline-block;
  padding: 1rem 0;
  border-bottom-width: 2px;
  border-color: transparent;
  color: inherit;
  text-decoration: none;
}

.active-tab-text, .tab-text:hover {
  color: black;
  border-bottom: 1px solid black; 
}

.disabled-tab-text {
  color: #cbd5e0;
  cursor: not-allowed;
}

.tab-content {
  padding: 1rem 0;
}

.review-list {
  list-style: none;
  padding: 0;
}

</style>
