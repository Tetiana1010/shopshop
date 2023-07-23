<template>
  <div class="product-actions">
    <div class="quantity-control">
      <button class="quantity-button" @click="updateQuantity(-1)">-</button>
      <span class="quantity-value">{{ quantity }}</span>
      <button class="quantity-button" @click="updateQuantity(1)">+</button>
    </div>
    <button class="add-to-cart-button" @click="addToCart">
      ADD TO CART
    </button>
    <div class="product-icon-container">
      <IconHeart />
      <IconDivider />
      <IconsSocialSet />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import IconHeart from '../../common/icons/IconHeart.vue';
import IconDivider from '../../common/icons/IconDivider.vue';
import IconsSocialSet from '../../common/icons/IconsSocialSet.vue';

interface MyComponentData {
  quantity: number;
}

export default defineComponent({
  name: 'ProductActions',
  data(): MyComponentData {
    return {
      quantity: 0,
    };
  },
  methods: {
    updateQuantity(amount: number) {
      this.quantity = Math.max(0, this.quantity + amount);
    },
    addToCart() {
      // Implement the addToCart logic here
    },
  },
  components: {
    IconHeart,
    IconDivider,
    IconsSocialSet,
  },
});
</script>

<style scoped>
.product-view .product-actions{
    grid-area: 2 / 7 / 3 / 13;
}
.product-actions {
  display: flex;
  flex-direction: column;
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

.quantity-value {
  font-size: 1.4rem;
  padding: 0 1rem;
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
</style>
