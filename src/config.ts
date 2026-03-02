import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
  apiKey: "AIzaSyAUx0KiLBzaz15KkCZF75DL8sNr5FUioNQ",
  authDomain: "memoapp-2026.firebaseapp.com",
  projectId: "memoapp-2026",
  storageBucket: "memoapp-2026.firebasestorage.app",
  messagingSenderId: "174875564418",
  appId: "1:174875564418:web:da76e384a92369f26f979b"
}

const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
const db = getFirestore(app)

export { app, auth, db }
