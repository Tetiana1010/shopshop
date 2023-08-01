<template>
  <main>
    <h1>Contact Us</h1>
    <p>Say Hello send us your thoughts about our products or share your ideas with our Team!</p>
    <form class="form-container" @submit.prevent="addMessage">
      <input type="text" autocomplete="given-name" placeholder="First name" v-model="firstName"  required />
      <input type="text" autocomplete="family-name" placeholder="Last name" v-model="lastName"  required />
      <input type="email" autocomplete="off" placeholder="Email" v-model="email"  required/>
      <select v-model="subject"  required>
        <option disabled value="">Subject</option>
        <option value="cooperation">Cooperation</option>
        <option value="other">Other</option>
      </select>
      <textarea v-model="message" placeholder="Message"  required />
      <div class="button-wrapper">
        <button type="submit" class="form-button">SEND</button>
      </div>
    </form>
  </main>
</template>

<script lang="ts">
  import axios from 'axios';

  // interface FormData {
  //   firstName: string,
  //   lastName: string,
  //   email: string,
  //   subject: string,
  //   message: string
  // };

  export default {
    name: 'ContactView',
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      };
    },
    methods: {
      async addMessage() {
        try {
          const formData = new FormData();
          formData.append('firstName', this.firstName);
          formData.append('lastName', this.lastName);
          formData.append('email', this.email);
          formData.append('subject', this.subject);
          formData.append('message', this.message);

          await axios.post('http://localhost:7777/messages/new', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
</script>

<style scoped>
  main {
    text-align: center; 
  }
</style>
