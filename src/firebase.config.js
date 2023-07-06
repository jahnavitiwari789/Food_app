import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCWEOkygExFVtbJ3t-OCnlhEn1Z6yi-jHo",
    authDomain: "restaurantapp-413aa.firebaseapp.com",
    databaseURL: "https://restaurantapp-413aa-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-413aa",
    storageBucket: "restaurantapp-413aa.appspot.com",
    messagingSenderId: "654672025241",
    appId: "1:654672025241:web:7b922ffd569304a2704a08"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };