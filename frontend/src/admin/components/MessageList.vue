<template>
  <div class="message-list">
    <ul>
      <li v-for="message in messages" :key="message.id" class="message-item">
        <p><strong>Name:</strong> {{ message.firstName }} {{ message.lastName }}</p>
        <p><strong>Email:</strong> <a :href="'mailto:' + message.email"> {{ message.email }}</a></p>
        <p><strong>Subject:</strong> {{ message.subject }}</p>
        <p><strong>Message:</strong> {{ message.message }}</p>
        <p><strong>Date:</strong> {{ message.created_at }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapActions } from 'pinia';
import { useMessageStore } from '../../store/messageStore';

export default defineComponent({
  name: 'MessageList',
  computed: {
    ...mapState(useMessageStore, ['messages'])
  },
  methods: {
    ...mapActions(useMessageStore, ['fetchMessages'])
  },
  mounted() {
    this.fetchMessages();
  },
});
</script>

<style scoped>

.message-list {
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.message-list ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.message-item {
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  padding: 10px;
  width: 100%;
}

.message-item p {
  margin: 0;
}

.message-item p strong {
  font-weight: bold;
}
</style>

