import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = ({ updateToken }) => {
  const [signup, setSignup] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  // fetch logic here
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form was submitted");
    try {
      // Fetching to sign up a user
      const response = await fetch(`http://localhost:8080/users/${signup ? "signup" : "login"}`, {
        // Specifying HTTP method
        method: "POST",
        // Providing options with our request
        headers: {
          "Content-Type": "application/json",
        },
        // Request's body that will be sent to the server
        body: JSON.stringify({
          firstName: signup && firstNameRef.current.value,
          lastName: signup && lastNameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }),
      });
      // Json-ifying our response to see valid response json data
      const data = await response.json();

      console.log(data);
      if (data.Error) throw new Error(data.Error);

      updateToken(data.Token);
      navigate("/posts")
    } catch (err) {
      console.log(err);
      setErrorMsg(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{signup ? "Signup" : "Login"}</h2>
      <h4>{errorMsg}</h4>
      {signup && (
        <>
          <input ref={firstNameRef} placeholder="First Name" required />
          <input ref={lastNameRef} placeholder="Last Name" required />
        </>
      )}
      <input ref={emailRef} placeholder="Email" required />
      <input ref={passwordRef} placeholder="Password" required />

      <button>Submit</button>
      <button
        type="button"
        onClick={() => {
          setSignup(!signup);
          setErrorMsg("")
        }}
      >
        {signup ? "Need to login?" : "Need to signup?"}
      </button>
    </form>
  );
};

export default Auth;
