import { initializeApp } from "firebase/app";
import {
  getMessaging,
  getToken as _getToken,
  onMessage,
  MessagePayload,
} from "firebase/messaging";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const getPushToken = async (
  vapidKey: string
): Promise<string | null> => {
  try {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") throw new Error("Permission denied");

    const token = await _getToken(messaging, { vapidKey });
    if (!token) throw new Error("No push token returned");
    return token;
  } catch (err) {
    console.error("Token error:", err);
    return null;
  }
};

export const listenToForegroundMessages = (
  callback: (payload: MessagePayload) => void
) => {
  onMessage(messaging, callback);
};

export { messaging };
