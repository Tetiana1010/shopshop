import axios from 'axios';
import { defineStore, mapActions } from 'pinia';
import { useAlertStore } from './alertStore';

const API_BASE_URL = 'http://localhost:7777';

interface Message {
  id?: number,
  firstName: string,
  lastName: string,
  email: string,
  subject: string,
  message: string,
  created_at?: string,
}

interface MessageTypes {
  messages: Message[]
}

export const useMessageStore = defineStore('productMessage', {
  state: (): MessageTypes => ({
    messages: [],
  }),
  actions: {
    ...mapActions(useAlertStore, ['setAlert', 'clearAlert']),

    async addMessage(newMessage: Message) {
      try {
        const response = await axios.post(`${API_BASE_URL}/messages/new`, newMessage);

        if (response.status === 200){
          this.setAlert('Your message was delivered successfully.', 'success');
        }
      } catch (error: any) {
        this.setAlert('An error occurred while adding the message.', 'error');
      } finally {
        this.clearAlert();
      }
    },
    async fetchMessages() {
      try {
        const response = await axios.get(`${API_BASE_URL}/messages`);
        this.messages = response.data;
      } catch (error) {
        this.setAlert('An error occurred while fetching the messages.', 'error');
      }
    },
  }
});
