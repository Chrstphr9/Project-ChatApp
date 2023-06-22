import React from 'react'
import Add from "../images/addAvatar.png";

const Register = () => {
  return (
    <div className="formContainer">
    <div className="formWrapper">
      <span className="logo">Chrstphr Chat</span>
      <span className="title">Register</span>
      <form >
        <input type="text" placeholder="Display Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input style={{ display: "none" }} type="file" id="file" />
        <label htmlFor="file">
          <img src={Add} alt="" />
          <span>Add An Avatar</span>
        </label>
        <button>Sign Up</button>
        {/* {err && <span>Something Went Wrong</span>} */}
      </form>
      <p>You Do Have An Account? Login</p>
    </div>
  </div>
  )
}

export default Register