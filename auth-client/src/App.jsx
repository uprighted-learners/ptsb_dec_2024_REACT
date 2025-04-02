import { useState, useEffect } from "react";

import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./components/Auth";
import PostIndex from "./components/PostIndex";

function App() {
  const [token, setToken] = useState("");

  // Update state token variable, and store it in localStorage
  const updateToken = (passedToken) => {
    localStorage.setItem("token", passedToken);
    setToken(passedToken);
  };

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <>
      {token && (
        <button
          style={{ position: "absolute", top: 0, left: 0 }}
          onClick={handleLogout}
        >
          Logout
        </button>
      )}
      <Routes>
        <Route
          path="/"
          element={
            !token ? (
              <Auth updateToken={updateToken} />
            ) : (
              <Navigate to="/posts" />
            )
          }
        />

        <Route
          path="/posts"
          element={token ? <PostIndex /> : <Navigate to="/" />}
        />
  

      </Routes>
    </>
  );
}

export default App;
