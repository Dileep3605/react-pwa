importScripts(
  "https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js"
);

// Use env vars as strings if you want to inject from .env manually at build time
firebase.initializeApp({
  apiKey: "AIzaSyDFzs3ExCgnqkxeqlUsdvWyVbmnRZwPFGs",
  authDomain: "fir-notification-3b355.firebaseapp.com",
  projectId: "fir-notification-3b355",
  storageBucket: "fir-notification-3b355.firebasestorage.app",
  messagingSenderId: "389249577586",
  appId: "1:389249577586:web:007319d8ff3f65e7c008eb",
  measurementId: "G-PEZMXF7YKM",
});

const messaging = firebase.messaging();

// Handle background push messages
messaging.onBackgroundMessage(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message:",
    payload
  );

  const notificationTitle = payload.notification?.title || "Notification";
  const notificationOptions = {
    body: payload.notification?.body,
    icon: "/icons/icon-192x192.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
