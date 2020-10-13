importScripts('https://www.gstatic.com/firebasejs/7.21.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.21.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyCQjExn8Aput4C_0ETVaRLS62mR4tnR4Xk",
    authDomain: "quizapp-e1e11.firebaseapp.com",
    databaseURL: "https://quizapp-e1e11.firebaseio.com",
    projectId: "quizapp-e1e11",
    storageBucket: "quizapp-e1e11.appspot.com",
    messagingSenderId: "363222700179",
    appId: "1:363222700179:web:f1015f4b1e8d312acc7d66"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();