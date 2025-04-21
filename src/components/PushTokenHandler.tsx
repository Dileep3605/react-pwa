import { useEffect, useState } from "react";
import { getPushToken, listenToForegroundMessages } from "../firebase";

const vapidKey = import.meta.env.VITE_FIREBASE_VAPID_KEY; // from Firebase → Project Settings → Cloud Messaging

const PushTokenHandler = () => {
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      const fcmToken = await getPushToken(vapidKey);
      if (fcmToken) {
        setToken(fcmToken);
        console.log("Push token:", fcmToken);
      } else {
        setError("Failed to get token. Check console for details.");
      }
    };

    fetchToken();

    listenToForegroundMessages((payload: unknown) => {
      const notificationPayload = payload as {
        notification?: { body?: string };
      };
      console.log("Foreground message:", notificationPayload);
      setMessage(
        notificationPayload.notification?.body || "You received a new message!"
      );
    });
  }, []);

  const copyToClipboard = async () => {
    if (!token) return;
    try {
      await navigator.clipboard.writeText(token);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err: unknown) {
      setError(`Could not copy token. ${err}`);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">🔐 Push Notification Token</h2>

      {token ? (
        <>
          <textarea
            readOnly
            value={token}
            className="w-full p-2 text-sm border rounded mb-2"
            rows={4}
          />
          <button
            onClick={copyToClipboard}
            className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded"
          >
            {copied ? "Copied!" : "📋 Copy Token"}
          </button>
        </>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <p className="text-gray-600">
          Requesting permission & fetching token...
        </p>
      )}

      {message && (
        <div className="mt-4 p-3 bg-green-100 text-green-800 rounded">
          Notification: {message}
        </div>
      )}
    </div>
  );
};

export default PushTokenHandler;
