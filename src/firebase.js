import { initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {Firestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyD2j4kMxdIQnYTfL8NxnFhCINue6Pz4qqU",
  authDomain: "movieapp-7dfe6.firebaseapp.com",
  projectId: "movieapp-7dfe6",
  storageBucket: "movieapp-7dfe6.appspot.com",
  messagingSenderId: "72596317544",
  appId: "1:72596317544:web:7276ea55e3f7a97ec362dd",
};

const app=initializeApp(firebaseConfig);
const auth=getAuth();
const db=new Firestore(app);

export {app,auth,db};
