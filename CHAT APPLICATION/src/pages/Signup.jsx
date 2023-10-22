import React from "react";
import Add from '../images/add-user.png';


function Signup() {
  return (
    <>
      <div className="form__container">
        <div className="form__wrapper">
          <span className="logo">Live Chat - With Friends</span>
          <span className="title">Sign Up</span>
          <form>
            <input type="text" placeholder="username" autoComplete="off" />
            <input type="password" placeholder="password" />
            <input type="email" placeholder="email" autoComplete="off" />
            <input className="addUser" type="file" id="addAvatar" />
            <label htmlFor="addAvatar">
              <img src={Add} alt="" />
              <span>add an avatar</span>
            </label>
            <button className="btn">Sign up</button>
          </form>
          <p>Already have an account? Login</p>
        </div>
      </div>
    </>
  );
}

export default Signup;
