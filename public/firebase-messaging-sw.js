// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: 'AIzaSyCm4k4ENonrayMsqi7YCTc1MyePksYTVco',
  authDomain: 'radiant-mercury-240711.firebaseapp.com',
  databaseURL: 'https://radiant-mercury-240711.firebaseio.com',
  projectId: 'radiant-mercury-240711',
  storageBucket: 'radiant-mercury-240711.appspot.com',
  messagingSenderId: '599743808722',
  appId: '1:599743808722:web:9728f4127e6eb54773990b',
  measurementId: 'G-GS0T0R5NC9',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();