import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const meta = import.meta.env;
const firebaseConfig = {
  apiKey: meta.VITE_FIREBASE_API_KEY,
  authDomain: meta.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: meta.VITE_FIREBASE_PROJECT_ID,
  storageBucket: meta.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: meta.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: meta.VITE_FIREBASE_APP_ID,
  measurementId: meta.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
