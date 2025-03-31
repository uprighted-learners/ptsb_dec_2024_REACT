import { useState } from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";

function App() {
  const [token, setToken] = useState("");

  // Update state token variable, and store it in localStorage
  const updateToken = (passedToken) => {
    localStorage.setItem("token", passedToken);
    setToken(passedToken);
  };

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token")
    setToken("")
  }

  return (
    <>
      {token && <button style={{position:"absolute", top: 0, left: 0}} onClick={handleLogout}>Logout</button>}
      <Routes>
        <Route path="/" element={<Auth updateToken={updateToken} />} />
      </Routes>
    </>
  );
}

export default App;
