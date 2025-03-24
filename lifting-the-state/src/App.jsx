import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Nav from "./components/Nav";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //? Helper function that can set state in parent, and get called elsewhere
  const handleLogout = () => {
    setUsername("");
    setPassword("");
    setLoggedIn(false);
  };

  return (
    <>
    
      <Nav
        username={username}
        loggedIn={loggedIn}
        handleLogout={handleLogout}
      />

      {loggedIn ? (
        <>welcome home</>
      ) : (
        <Form
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          setLoggedIn={setLoggedIn}
        />
      )}
    </>
  );
}

export default App;
