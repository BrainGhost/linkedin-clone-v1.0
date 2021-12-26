import React from "react";
import "./Login.css";

function Login() {
  const loginToApp = () => {};
  const registerToApp = () => {};
  return (
    <div className="login">
      <img src="./link-Logo.png" alt="" />
      <form>
        <h2>Make the most of your professional life</h2>
        <label>Email</label>
        <input type="email" />
        <label>Password (6 or more characters)</label>
        <input type="password" />
        <p>
          By clicking Agree & join, you agree to the LinkedIn{" "}
          <span className="login_register">User agreement privacy Policy,</span>{" "}
          and Cookie Policy
        </p>
        <button className="btn-login" onClick={loginToApp}>
          Agree & Joing
        </button>
        <button className="btn-google">Join with Google</button>
        <p>
          Already on LinkedIn?{" "}
          <span className="login_register" onClick={registerToApp}>
            Sign in
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
