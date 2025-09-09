importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyAbYNks_Wbc5ta1DVxK677IUJro28_Xps8",
    authDomain: "razorpay-panels.firebaseapp.com",
    projectId: "razorpay-panels",
    storageBucket: "razorpay-panels.firebasestorage.app",
    messagingSenderId: "414111056846",
    appId: "1:414111056846:web:c0890b7d6a65e416d8e19f",
    measurementId: "G-2JBK6VNVK2"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: 'logo.png.jpg'
    });
});
