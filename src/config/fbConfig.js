import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCKhl170JpWBbI-IFJNzz8BHOVeOm8nb-8",
  authDomain: "archaeoapp-1539547680569.firebaseapp.com",
  databaseURL: "https://archaeoapp-1539547680569.firebaseio.com",
  projectId: "archaeoapp-1539547680569",
  storageBucket: "archaeoapp-1539547680569.appspot.com",
  messagingSenderId: "585819667872"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase