import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBM9r3Mwck1kGG5VUf0OFc3PDfZyibSd3M",
    authDomain: "expensetrackerapp-11051.firebaseapp.com",
    databaseURL: "https://expensetrackerapp-11051.firebaseio.com",
    projectId: "expensetrackerapp-11051",
    storageBucket: "expensetrackerapp-11051.appspot.com",
    messagingSenderId: "193911369383",
    appId: "1:193911369383:web:11297fcfc690665314b582"
  };

  firebase.initializeApp(firebaseConfig);
  const messaging=firebase.messaging();

  export function initNotification(){
      Notification.requestPermission.then((permission)=>{
          console.log(permission)
          if(permission==="granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("Token=> " , currentToken)
                } else {
                  // Show permission request.
                  console.log('No Instance ID token available. Request permission to generate one.');
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
          }
      })
  }