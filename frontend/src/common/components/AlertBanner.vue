<template>
  <div class="alert-container">
    <div v-if="alert.message" :class="`alert ${alert.type}`">
      <IconsSuccess />
      <p>{{ alert.message }}</p>
      <button class="x-button" @click="removeAlert(alert)">
        <IconClose />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'pinia';
import { useAlertStore } from '../../store/AlertStore';
import IconClose from '../icons/IconClose.vue';
import IconsSuccess from '../icons/IconsSuccess.vue'

export default defineComponent({
  name: 'AlertBanner',
  computed: {
    ...mapState(useAlertStore, ['alert']),
  },
  components: {
    IconClose,
    IconsSuccess
  }
});
</script>

<style scoped>
.alert-container {
  position: fixed;
  height: 2rem;
  inset: 2rem 2rem 2rem;
  max-width: 1280px;
}

.alert {
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
  border-top: 1.5px solid var(--accent-light);
  background-color: var(--lightgray-light);
}

.alert p {
  flex-basis: 100%;
}

.success {
  background-color: var(--lightgray-light);
}

.error {
  background-color: var(--lightgray-light);
}

</style>
