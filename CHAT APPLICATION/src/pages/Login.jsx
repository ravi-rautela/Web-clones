import React from "react";

const Login = () => {
  return (
    <div>
      <div className="form__container">
        <div className="form__wrapper">
          <span className="logo">Live Chat - With Friends</span>
          <span className="title">Sign In</span>
          <form>
            <input type="password" placeholder="password" />
            <input type="email" placeholder="email" autoComplete="off" />
            <button className="btn">Sign In</button>
          </form>
          <p>You don't have an account? Sign up</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
