importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCQe2H3YBOve8rJtGakTItqeYFIIAXxieM",
  authDomain: "unication-9af0d.firebaseapp.com",
  projectId: "unication-9af0d",
  storageBucket: "unication-9af0d.firebasestorage.app",
  messagingSenderId: "365505602833",
  appId: "1:365505602833:web:3cec281f3d33967b2198b0"
});

const messaging = firebase.messaging();

// onBackgroundMessage は削除
// Cloud Functions (sendPushNotification) が通知を送るため、ここでは不要
