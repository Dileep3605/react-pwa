import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import FoodItems from "./pages/FoodItems";
import "./index.css";
import React, { useEffect } from "react";
import AppNavbar from "./components/Navbar";
import { Button } from "@heroui/react";
import { getPushToken, listenToForegroundMessages } from "./firebase";
import { MessagePayload } from "firebase/messaging";
import NearBy from "./pages/NearBy";
import Restaurants from "./pages/Restaurants";

const vapidKey = import.meta.env.VITE_FIREBASE_VAPID_KEY; // From Firebase console

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  // For demo purposes
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  useEffect(() => {
    const fetchToken = async () => {
      const fcmToken = await getPushToken(vapidKey);
      if (fcmToken) {
        console.log("Push token:", fcmToken);
      }
    };

    fetchToken();
    listenToForegroundMessages((payload: MessagePayload) => {
      console.log(payload.notification?.body || "New message received");
    });
  }, []);

  return (
    <>
      {/* Header */}
      <>
        <AppNavbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <div className="flex items-start justify-center py-8">
          <div className="w-full max-w-6xl px-4">
            {/* Demo toggle button - remove in production */}
            <Button className="mb-4" color="primary" onPress={toggleLogin}>
              Toggle Login State (Demo)
            </Button>
          </div>
        </div>
      </>
      {/* Pages */}
      <main className="h-[100vh]">
        <Routes>
          <Route path="/" element={<FoodItems />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/foods" element={<FoodItems />} />
          <Route path="/nearby" element={<NearBy />} />
          <Route path="/restaurants" element={<Restaurants />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
