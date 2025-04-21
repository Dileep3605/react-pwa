import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import FoodItems from "./pages/FoodItems";
import "./index.css";
import React from "react";
import AppNavbar from "./pages/Navbar";
import { Button } from "@heroui/react";

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
        </Routes>
      </main>
    </>
  );
}

export default App;
