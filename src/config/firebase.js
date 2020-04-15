import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCshnZGoU85lEEcPr47-uY3lPa_LX9CRMM",
  authDomain: "stock-controller-944a7.firebaseapp.com",
  databaseURL: "https://stock-controller-944a7.firebaseio.com",
  projectId: "stock-controller-944a7",
  storageBucket: "stock-controller-944a7.appspot.com",
  messagingSenderId: "478100758045",
  appId: "1:478100758045:web:38ad40441d2500c7e6f0f4"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);