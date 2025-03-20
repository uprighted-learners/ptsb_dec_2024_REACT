import React, { useState } from "react";

const SimpleForm = () => {
 
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form Submitted", username, email)
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
      
      <label htmlFor="username">Username</label>
      <input
        id="username"
        value={username}
        onChange={handleUsernameChange}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        value={email}
        onChange={handleEmailChange}
      />

      <button>Submit</button>
    </form>
  );
};

export default SimpleForm;
