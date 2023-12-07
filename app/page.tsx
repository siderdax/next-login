'use client'

import React, { useEffect } from 'react'
import { getMessaging, getToken, onMessage } from 'firebase/messaging'
import { initializeApp } from 'firebase/app'

export default async function Home() {
  useEffect(() => {
    if (window.Notification) {
      if (Notification.permission === 'granted') {
        console.log('Notification granted')
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission((permission) => {
          if (permission === 'granted') {
            console.log('Notification granted')
          }
        })
      }
    }

    if (navigator.serviceWorker) {
      // Register the SW
      console.log('start service worker')
      navigator.serviceWorker
        .register('/firebase-messaging-sw.js')
        .then((registration) => {
          const firebaseConfig = {
            apiKey: 'AIzaSyCm4k4ENonrayMsqi7YCTc1MyePksYTVco',
            authDomain: 'radiant-mercury-240711.firebaseapp.com',
            databaseURL: 'https://radiant-mercury-240711.firebaseio.com',
            projectId: 'radiant-mercury-240711',
            storageBucket: 'radiant-mercury-240711.appspot.com',
            messagingSenderId: '599743808722',
            appId: '1:599743808722:web:9728f4127e6eb54773990b',
            measurementId: 'G-GS0T0R5NC9',
          }

          // Initialize Firebase
          console.log('Initialize Firebase')
          const app = initializeApp(firebaseConfig)

          // Initialize Firebase Cloud Messaging and get a reference to the service
          console.log('getMessaging')
          const messaging = getMessaging()

          onMessage(messaging, (payload) => {
            // Customize notification here
            const notificationTitle = 'F:' + payload.notification?.title
            const notificationOptions = {
              body: payload.notification?.body,
              icon: payload.notification?.icon,
            }

            registration.showNotification(
              notificationTitle,
              notificationOptions
            )
          })

          // Get registration token. Initially this makes a network call, once retrieved
          // subsequent calls to getToken will return from cache.
          getToken(messaging, {
            vapidKey:
              'BKtMoYycCRHYXFn8JyhAzbtj6N_uZUliN2h8Hvwh37WaVvFheojPJU_ABAxs3tt-MH8zYGw7tP0TBgVk7-yifyU',
          })
            .then((currentToken) => {
              if (currentToken) {
                console.log('FCM token: ' + currentToken)
              } else {
                // Show permission request UI
                console.log(
                  'No registration token available. Request permission to generate one.'
                )
                // ...
              }
            })
            .catch((err) => {
              console.log('An error occurred while retrieving token. ', err)
              // ...
            })
        })
        .catch(console.log)
    }
  }, [])

  return <div> home </div>
}
