import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlV51w-J7tZeD97vsm_vGW5__n4Qvkozw",
  authDomain: "vue-blog-system-de11c.firebaseapp.com",
  projectId: "vue-blog-system-de11c",
  storageBucket: "vue-blog-system-de11c.appspot.com",
  messagingSenderId: "178343096141",
  appId: "1:178343096141:web:d4beea02d4e575abbe1104",
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export { db };
