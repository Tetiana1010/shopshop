<template>
  <div class="product-tab">
    <div class="parent-container">
      <ul class="tab-list">
          <li class="tab-item">
              <span class="tab-text" @click="showTab('description')" :class="{ 'active-tab-text': activeTab === 'description' }">Description</span>
          </li>
          <li class="tab-item">
              <span class="tab-text" :class="{ 'active-tab-text': activeTab === 'characteristics' }" @click="showTab('characteristics')">Characteristics</span>
          </li>
          <li class="tab-item" >
              <span class="tab-text" @click="showTab('reviews')" :class="{ 'active-tab-text': activeTab === 'reviews'}">Reviews ({{reviews.length}})</span>
          </li>
      </ul>
    </div>
    <div class="tab-content">
      <div v-if="description && activeTab === 'description'" class="description">
        {{ description }}
      </div>
      <CharacteristicsTab 
        v-else-if="activeTab === 'characteristics'"
      />
      <ReviewSection 
        v-else-if="activeTab === 'reviews'" 
        :productName="productName"
        :reviews="reviews" />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import ReviewSection from './ReviewSection.vue';
  import CharacteristicsTab from './CharacteristicsTab.vue';

  export default defineComponent({
    name: 'ProductTab',
    data(){
      return {
        activeTab: 'description',
      }
    },
    props: ['reviews', 'description', 'productName'],
    methods: {
      showTab(tab: string) {
        this.activeTab = tab;
      }
    },
    components: {
      ReviewSection,
      CharacteristicsTab
    },
  });
</script>

<style scoped>
  .product-view .product-tab {
    grid-column: 1 / -1;
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
  
  .description {
    padding: 1rem 0;
  }
</style>
