import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAO5cQoi4OvaT75yg_WYEQHbC1B3hLiwJA",
  authDomain: "healthpredict-ai-41155.firebaseapp.com",
  projectId: "healthpredict-ai-41155",
  storageBucket: "healthpredict-ai-41155.firebasestorage.app",
  messagingSenderId: "810594350475",
  appId: "1:810594350475:web:f74e04061c4ea2df9aab8e",
  measurementId: "G-5LN8S11KVS",
  databaseURL: "https://healthpredict-ai-41155-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);