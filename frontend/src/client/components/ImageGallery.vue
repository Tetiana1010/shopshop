<template>
  <div class="product-gallery">
    <ul class="image-list">
      <li class="image-item">
        <img src="https://source.unsplash.com/W1yjvf5idqA">
      </li>
      <!-- <li class="image-item">
        <img src="https://source.unsplash.com/VgbUxvW3gS4">
      </li>
      <li class="image-item">
        <img src="https://source.unsplash.com/5WbYFH0kf_8">
      </li>
      <li class="image-item">
        <img src="https://source.unsplash.com/5WbYFH0kf_8">
      </li> -->
    </ul>
    <div class="product-image active"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ImageGallery',
  props: {
    productImages: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style scoped>
.product-gallery {
  display: flex;
  gap: 1rem;
}

.image-list {
  list-style: none;
  padding: 0;
}

.product-image {
  flex: 1;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.active {
  background-image: url("https://source.unsplash.com/W1yjvf5idqA");
}
img {
  height: 120px;
  width: 120px;
}
</style>


    <!-- <div class="image-gallery-wrapper">
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
    </div> -->
