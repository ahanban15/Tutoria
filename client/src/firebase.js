// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: 'mern-blog-b327f.firebaseapp.com',
//   projectId: 'mern-blog-b327f',
//   storageBucket: 'mern-blog-b327f.appspot.com',
//   messagingSenderId: '699397991367',
//   appId: '1:699397991367:web:88ff565ef72a182d6b87e2',
// };
const firebaseConfig = {
  apiKey: "AIzaSyD_zNv8Y5ZiSyingUn1FsgOzkv4mlT_g4I",
  authDomain: "tutoria-a60eb.firebaseapp.com",
  projectId: "tutoria-a60eb",
  storageBucket: "tutoria-a60eb.appspot.com",
  messagingSenderId: "579269905100",
  appId: "1:579269905100:web:31d378b5b9cf4ab3855069",
  measurementId: "G-DW5SC00FNZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);