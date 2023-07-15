<template>
  <li>
    <div :style="{ 'background-image': 'url(' + this.product.imagerURL + ')' }" />
    <h3>{{this.product.title}}</h3>
    <h4 class="price">{{this.product.price}}</h4>
  </li>
</template>

<script lang="ts">
  export default {
    name: 'ProductCard',
    props: ['product'],
    created() {
      console.log(this.product)
    }
  }
</script>

<style scoped>
  li {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border-radius: 0.5rem;
  }
  div {
    background-repeat: none;
    align-items: center;
    background-position: center;
    color: var(--light-colors-white-light, #FFF);
    background-repeat: no-repeat;
    background-size: cover;
    padding: 0;
    width: 100%;
    margin-bottom: 0.5rem;
    border-radius: 0.5rem;
    position: relative;
  }
  div::before {
    content: "";
    display: block;
    padding-top: 100%;
  }
</style>
