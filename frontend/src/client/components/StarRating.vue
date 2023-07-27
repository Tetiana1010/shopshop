<template>
  <div class="star-rating">
    <IconStar 
      v-for="i in 5" 
      :key="i" :fill="rating >= i ? true : false" 
    />
  </div>
</template>

<script lang="ts">
  import IconStar from '../../common/icons/IconStar.vue';
  export default {
    name: 'StarRating',
    props: {
      rating: {
        type: Number,
        required: true
      }
    },
    components: {
      IconStar
    }
  }
</script>

<style>
  label ~ .star-rating {
    padding-top: 1rem;
  }
  .star-rating {
    display: flex;
    gap: 0.5rem;
  }
</style>
