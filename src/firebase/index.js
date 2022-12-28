import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAZnS7YmhL6l2hO_hpuia7jo0vt5zHJ0b4",
  authDomain: "uitwatch.firebaseapp.com",
  projectId: "uitwatch",
  storageBucket: "uitwatch.appspot.com",
  messagingSenderId: "12172166743",
  appId: "1:12172166743:web:9d45bc634619e7e6044512",
  measurementId: "G-RMTRW1R6WW"
};

export const firebase = initializeApp(firebaseConfig);
export const storage = getStorage(firebase);
