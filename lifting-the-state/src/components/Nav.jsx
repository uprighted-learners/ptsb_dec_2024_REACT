import React from "react";

const Nav = (props) => {
  return (
    <nav>
      <p>
        <a>Home</a>
      </p>
      <p>Link</p>
      <p>Link</p>
      <p>Link</p>

      {/* Show logged in status here */}
      {/* {props.loggedIn ? "hello" : null } */}

      {props.loggedIn && (
        <div className="row nav-user">
          <h5 style={{ margin: 0 }}>👤{props.username}</h5>
          <button onClick={() => props.handleLogout()}>LOGOUT</button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
