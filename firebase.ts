import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQyvM7yL4zMIgSkN0GMFQZeiRFeEo2rcE",
  authDomain: "notion-clone-e84db.firebaseapp.com",
  projectId: "notion-clone-e84db",
  storageBucket: "notion-clone-e84db.appspot.com",
  messagingSenderId: "405357081017",
  appId: "1:405357081017:web:ed8aea8d716f2d3a024668",
};

// If no apps are initialized, initialize it using the config otherwise get the app.
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
