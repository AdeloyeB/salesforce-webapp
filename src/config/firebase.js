import firebase from "firebase";
// Initialize Firebase
const config = {
  apiKey: "AIzaSyCrxG4yKWfk-nE2dFA1veZn2tFXYUstOBw",
  authDomain: "training-form-data.firebaseapp.com",
  databaseURL: "https://training-form-data.firebaseio.com",
  projectId: "training-form-data",
  storageBucket: "training-form-data.appspot.com",
  messagingSenderId: "994621330872"
};
firebase.initializeApp(config);
export default firebase;
