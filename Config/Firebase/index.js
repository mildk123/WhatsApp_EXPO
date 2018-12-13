import * as firebase from 'firebase'

 var config = {
    apiKey: "AIzaSyCry3u_h-j9iEiy4loJns4Sfj1QKdqoCMo",
    authDomain: "whatsapp-rn.firebaseapp.com",
    databaseURL: "https://whatsapp-rn.firebaseio.com",
    projectId: "whatsapp-rn",
    storageBucket: "whatsapp-rn.appspot.com",
    messagingSenderId: "668948376662"
  };
  firebase.initializeApp(config);

  export default firebase