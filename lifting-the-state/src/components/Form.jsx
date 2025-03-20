import React from 'react'

const Form = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("form was submitted");
    // Do a fetch here to signup/login a user


    console.log("Sending data to the server", props.username, props.password);


    // "logged in"
    props.setLoggedIn(true)

  }

  return (
    <form className="auth-form col" onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input
            id='username'        
            required
            placeholder='Enter Username'
            // capture state here
            onChange={(e) => {
                props.setUsername(e.target.value)
            }}
        />
        <label htmlFor='password'>Password</label>
        <input
            id='password'        
            required
            placeholder='Enter Password'
            // capture state here
            onChange={(e) => {
                props.setPassword(e.target.value)
            }}
        />

        <button id="auth-form_btn" type="submit">SIGNUP</button>
    </form>
  )
}

export default Form