import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBxVk5eF_RamM_CvR6TXnQG-bYE_aCNQ_E",
  authDomain: "shopshop-817ca.firebaseapp.com",
  projectId: "shopshop-817ca",
  storageBucket: "shopshop-817ca.appspot.com",
  messagingSenderId: "702904532433",
  appId: "1:702904532433:web:a72780d3b8b96a9c7274f0",
  measurementId: "G-SCZ20H8PFC"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)
