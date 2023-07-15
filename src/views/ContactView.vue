<template>
    <main>
        <h1>Contact Us</h1>
        <p>Say Hello send us your thoughts about our products or share your ideas with our Team!</p>
        <form class="form-container">
            <input type="text" autocomplete="given-name" placeholder="First name" v-model="firstName" class="input-field"/>
            <input type="text" autocomplete="family-name" placeholder="Last name" v-model="lastName" class="input-field"/>
            <input type="email" autocomplete="off" placeholder="Email" v-model="email" class="input-field" />
            <!-- <label>Option name -->
            <select v-model="subject" class="input-field">
                <option value="cooperation" disabled selected>Cooperation</option>
                <option value="other">Other</option>
            </select>
            <!-- </label> -->
            <textarea v-model="message" placeholder="Message" class="input-field" />
        </form>
    </main>
</template>

<script lang="ts">
  interface FormData {
    firstName: string,
    lastName: string,
    email: string,
    subject: string,
    message: ''
  };

  export default {
    name: 'ContactView',
    data(): FormData {
      return {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      };
    },
  };
</script>

<style scoped>
    main {
        text-align: center; 
    }
</style>
