importScripts('https://www.gstatic.com/firebasejs/7.21.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.21.1/firebase-messaging.js');
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
  firebase.messaging();