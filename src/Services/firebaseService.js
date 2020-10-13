import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCQjExn8Aput4C_0ETVaRLS62mR4tnR4Xk",
    authDomain: "quizapp-e1e11.firebaseapp.com",
    databaseURL: "https://quizapp-e1e11.firebaseio.com",
    projectId: "quizapp-e1e11",
    storageBucket: "quizapp-e1e11.appspot.com",
    messagingSenderId: "363222700179",
    appId: "1:363222700179:web:f1015f4b1e8d312acc7d66"
  };

  firebase.initializeApp(firebaseConfig)

  const messaging=firebase.messaging();

export function initNotification(){
    Notification.requestPermission().then((permission)=>{
        console.log(permission)
        if(permission==="granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("Token => ", currentToken)
                } else {
                  console.log('No Instance ID token available. Request permission to generate one.');
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
        }
    })
}