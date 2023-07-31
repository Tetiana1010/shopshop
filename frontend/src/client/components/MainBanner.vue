<template>
  <div id="product-promo-banner" :style="{ 'background-image': 'url(' + currentImg.url + ')' }">
    <div class="product-promo-banner-text">
      <h1>Gold big hoops</h1>
      <h2>$ 68,00</h2>
      <button class="white-bordered">
        View project
      </button>
    </div>
    <div class="dots">
      <button
        v-for="(image, index) in images"
        :key="image.id"
        @click="updateCurrentImage(index)"
        class="dot"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Image {
  id: number;
  url: string;
}

interface ImageStore {
  currentImage: Image | null,
  images: Image[],
  timer:  any,
  currentIndex: number
}

export default defineComponent({
  name: 'MainBanner',
  data(): ImageStore {
    return {
      timer: null,
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
      currentIndex: 0
    }
  },
  created() {
    this.currentImage = this.images[0];
  },
  methods: {
    updateCurrentImage(index: number) {
      this.currentIndex = index;
    },
    startSlide(){
      this.timer = setInterval(this.next, 3000);
    },
    next: function() {
      this.currentIndex += 1;
    },
  },
  mounted: function() {
    this.startSlide();
  },
  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
});
</script>

<style scoped>
  #product-promo-banner {
    grid-column: 1 / -1;
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
