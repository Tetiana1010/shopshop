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
.product-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.quantity-control {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: var(--light-gray-light);
  padding: 0.6rem 1.5rem;
  flex-basis: calc(30% - 1.5rem);
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
  flex: 1;
  display: flex;
  justify-content: center;
  background: transparent;
  border: 2px solid black;
  font-size: 1.4rem;
  padding: 0.8rem;
  border-radius: 6px;
  color: black;
}

.product-icon-container {
  display: flex;
  justify-content: start;
  gap: 3rem;
  align-items: center;
  flex-basis: 100%;
}
</style>
