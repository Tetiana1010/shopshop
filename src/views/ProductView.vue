<template>
  <main>
    <AlertBanner :alertMessage="alertMessage" />
    <div class="image-gallery">
      <img
        v-for="image in productImages"
        :src="image.url"
        :key="image.id"
        :alt="image.alt"
        :class="isCurrentImage(image) ? 'current-image' : 'small-image'"
        @click="setCurrentImage(image)"
      />
    </div>
    <div class="product-info">
      <div>
        <h1>{{ productName }}</h1>
        <h2 class="price">{{ productPrice }}</h2>
      </div>
      <div>
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
      </div>
    </div>
  </main>
</template>

<script>
  import AlertBanner from '../components/AlertBanner.vue';
  export default {
    name: 'ProductView',
    data() {
      return {
        quantity: 0,
        currentImage: null,
        alertMessage: '',
        product: {
          id: 1,
          name: "Lira Earrings",
          price: "$ 20,00",
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.',
          additionalInformation:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.',
          reviews: [
            {
              id: 1,
              text:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ',
            },
            {
              id: 2,
              text:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ',
            },
          ],
          categories: ['Fashion', 'Style'],
          images: [
            {
              id: 1,
              url: './../src/assets/images/store/img-1.png',
              alt: '',
            },
            {
              id: 2,
              url: './../src/assets/images/store/img-2.png',
              alt: '',
            },
            {
              id: 3,
              url: './../src/assets/images/store/img-3.png',
              alt: '',
            },
            {
              id: 4,
              url: './../src/assets/images/store/img-4.png',
              alt: '',
            },
          ],
        },
      };
    },
    computed: {
      productImages() {
        return this.product.images;
      },
      productName() {
        return this.product.name;
      },
      productPrice() {
        return this.product.price;
      },
      productReview() {
        return this.product.reviews[0].text;
      },
      productCategories() {
        return this.product.categories;
      },
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
    },
    components: {
      AlertBanner
    },
    created() {
      this.currentImage = this.product.images[0];
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
