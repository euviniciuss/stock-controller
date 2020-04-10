import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDGtei5X90jizYrzeteUjx5WDPe4HdACkc",
    authDomain: "stock-controller-8527a.firebaseapp.com",
    databaseURL: "https://stock-controller-8527a.firebaseio.com",
    projectId: "stock-controller-8527a",
    storageBucket: "stock-controller-8527a.appspot.com",
    messagingSenderId: "644876370254",
    appId: "1:644876370254:web:09457ec6039e8d8e72de1f"
  };
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);