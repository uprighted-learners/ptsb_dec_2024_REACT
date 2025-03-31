import React, { useRef, useState } from "react";

const Auth = ( {updateToken} ) => {
  const [signup, setSignup] = useState(true);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  // fetch logic here
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("Form was submitted");
    try {
        // Fetching to sign up a user
        const response = await fetch("http://localhost:8080/users/signup", {
            // Specifying HTTP method
            method: "POST",
            // Providing options with our request
            headers: {
                "Content-Type" : "application/json"
            },
            // Request's body that will be sent to the server
            body: JSON.stringify({
                firstName: firstNameRef.current.value,
                lastName: lastNameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value
            })
        })
        // Json-ifying our response to see valid data
        const data = await response.json()

        console.log(data);
        updateToken(data.Token)

    } catch(err){
        console.log(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{signup ? "Signup" : "Login"}</h2>

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
        }}
      >
        {signup ? "Need to login?" : "Need to signup?"}
      </button>
    </form>
  );
};

export default Auth;
