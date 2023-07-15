<template>
  <div id="product-promo-banner" :style="{ 'background-image': 'url(' + imageStore.currentImage.url + ')' }">
    <div class="product-promo-banner-text">
      <h1>Gold big hoops</h1>
      <h2>$ 68,00</h2>
      <button class="white-bordered" @click="viewProject">
        View project
      </button>
    </div>
    <div class="dots">
      <button
        v-for="image in imageStore.images"
        :key="image.id"
        @click="updateCurrentImage(image)"
        class="dot"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainBanner',
  data() {
    return {
      imageStore: {
        currentImage: null,
        images: [
          {
            id: 1,
            url: 'src/assets/images/main-1.png',
          },
          {
            id: 2,
            url: 'src/assets/images/main-2.png',
          },
          {
            id: 3,
            url: 'src/assets/images/main-3.png',
          },
        ],
      },
    };
  },
  created() {
    this.imageStore.currentImage = this.imageStore.images[0];
  },
  methods: {
    updateCurrentImage(image) {
      this.imageStore.currentImage = image;
    },
    viewProject() {
      // Handle the "View project" button click
    },
  },
};
</script>

<style scoped>
  #product-promo-banner {
    position: relative;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    height: 646px;
    background-position: right;
    color: var(--light-colors-white-light, #FFF);
    background-repeat: no-repeat;
    padding: 3rem;
  }
  .product-promo-banner-text {
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 1rem;
  }
  button {
    opacity: 0.8;
  }
  button:hover {
    opacity: 1;
  }
  button.white-bordered {
    background: transparent;
    border: 2px solid white;
    font-size: 1.4rem;
    padding: 1rem 2rem;
    border-radius: 6px;
    color: var(--light-colors-white-light, #FFF);
  }
  .dots {
    position: absolute;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1rem;
    gap: 1rem;
    bottom: 3rem;
    margin: auto;
  }
  .dot {
    display: flex;
    width: 1rem;
    height: 1rem;
    background-color: white;
    border-radius: 100px;
    border: none;
  }
</style>
