import { defineStore } from 'pinia';

interface Alert {
  message: string | null;
  type: 'success' | 'error' | null;
};

export const useAlertStore = defineStore('alertStore', {
  state: () => ({
    alert: {
      message: null,
      type: null,
    } as Alert,
  }),
  actions: {
    setAlert(message: string, type: 'success' | 'error') {
      this.alert.message = message;
      this.alert.type = type;
    },
    clearAlert() {
      setTimeout(() => {
        this.alert.message = null;
        this.alert.type = null;
      }, 1000)
    },
  },
});
