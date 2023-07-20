<template>
  <div class="rating">
    <IconStar :fill="rating >= 1 ? true : false"/>
    <IconStar :fill="rating >= 2 ? true : false"/>
    <IconStar :fill="rating >= 3 ? true : false"/>
    <IconStar :fill="rating >= 4 ? true : false"/>
    <IconStar :fill="rating >= 5 ? true : false"/>
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
