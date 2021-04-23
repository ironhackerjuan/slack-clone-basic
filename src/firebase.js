import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDp2ir2M9fZqqi6ELztfrvTbq69ecv4AIA",
    authDomain: "slack-clone-ironhackerjuan.firebaseapp.com",
    projectId: "slack-clone-ironhackerjuan",
    storageBucket: "slack-clone-ironhackerjuan.appspot.com",
    messagingSenderId: "3164436540",
    appId: "1:3164436540:web:392ab81c1f051c03be2b39"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()


  export { auth, provider}
  export default db;