import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAuU48Y5nmWIHlNIJcCBqqLwveU_Vw3m-Q",
  authDomain: "rn-dorm.firebaseapp.com",
  projectId: "rn-dorm",
  storageBucket: "rn-dorm.appspot.com",
  messagingSenderId: "262501176537",
  appId: "1:262501176537:web:3d95b1809111186d091ac8",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = app.auth();
const db = app.firestore();
var database = app.database();

export { firebase, auth, db, database }
