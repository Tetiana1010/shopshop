<template>
  <div class="message-list">
    <h2>Messages</h2>
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
import axios from 'axios';

interface Message {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  subject: string,
  message: string,
  created_at: string,
};

export default defineComponent({
  name: 'MessageList',
  data() {
    return {
      messages: [] as Message[],
    };
  },
  methods: {
    async fetchMessages() {
      try {
        const response = await axios.get('http://localhost:7777/messages');
        this.messages = response.data;
      } catch (error) {
        console.error(error);
      }
    },
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

