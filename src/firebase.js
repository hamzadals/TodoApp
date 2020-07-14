
 import firebase from 'firebase';

 const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCoIW43McZNzgBtmt50KGBzsHR7NpCp-E4",
  authDomain: "todo-app-fd9cb.firebaseapp.com",
  databaseURL: "https://todo-app-fd9cb.firebaseio.com",
  projectId: "todo-app-fd9cb",
  storageBucket: "todo-app-fd9cb.appspot.com",
  messagingSenderId: "827020916445",
  appId: "1:827020916445:web:899ad8ca535e64841fcd34",
  measurementId: "G-1VWLFZSCKH"
 });

 const db = firebaseApp.firestore();

 export default db ;