import React from "react";
import Add from "../images/addAvatar.png";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chrstphr Chat</span>
        <span className="title">Log In</span>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button>Sign In</button>
          {/* {err && <span>Something Went Wrong</span>} */}
        </form>
        <p>Don't Have An Account? Sign Up</p>
      </div>
    </div>
  );
};

export default Login;
