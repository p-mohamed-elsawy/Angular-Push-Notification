importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');

firebase.initializeApp({
apiKey: "AIzaSyCbFMmkMsWez1G3W6osg9rHp9zwH_Qy6wo",
    authDomain: "quizzo-b322d.firebaseapp.com",
    databaseURL: "https://quizzo-b322d.firebaseio.com",
    projectId: "quizzo-b322d",
    storageBucket: "quizzo-b322d.appspot.com",
    messagingSenderId: "130939783051",
    appId: "1:130939783051:web:47081b9bd7ac55903b518e"
});

const messaging = firebase.messaging();