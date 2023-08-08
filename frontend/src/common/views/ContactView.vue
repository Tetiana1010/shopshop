<template>
  <main class="contact-view">
    <h1>Contact Us</h1>
    <p>Say Hello send us your thoughts about our products or share your ideas with our Team!</p>
    <form class="form-container" @submit.prevent="handleSubmit">
      <input type="text" autocomplete="given-name" placeholder="First name" v-model="formData.firstName" required />
      <input type="text" autocomplete="family-name" placeholder="Last name" v-model="formData.lastName" required />
      <input type="email" autocomplete="off" placeholder="Email" v-model="formData.email"  required/>
      <select v-model="formData.subject" required>
        <option disabled value="">Subject</option>
        <option value="cooperation">Cooperation</option>
        <option value="other">Other</option>
      </select>
      <textarea v-model="formData.message" placeholder="Message" required />
      <div class="button-wrapper">
        <button type="submit" class="form-button">SEND</button>
      </div>
    </form>
  </main>
</template>

<script lang="ts">
  import { mapActions } from 'pinia';
  import { useMessageStore } from '../../store/messageStore';

  export default {
    name: 'ContactView',
    data() {
      return {
        formData:  {
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        }
      };
    },
    methods: {
      ...mapActions(useMessageStore, ['addMessage']),
      handleSubmit(){
        this.addMessage(this.formData);

        this.formData = {
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          ratmessageing: ''
        };
      }
    },
  };
</script>

<style scoped>

  .contact-view > * {
    grid-column: 1 / -1;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>

