import React from "react";
import "./Register.css";

function Register() {
  return (
    <div className="register">
      <img src="./link-Logo.png" alt="" />
      <form>
        <h2>Sign in</h2>
        <h5>Stay updtaed on your professional world</h5>
        <label>Email</label>
        <input type="email" />
        <label>Password (6 or more characters)</label>
        <input type="password" />
        <span className="register-forgot">Forgot passoword?</span>{" "}
        <button className="btn-register">Sign in</button>
        <button className="btn-google">Sign in with Github</button>
        <p>
          New on LinkedIn? <span className="login_register">Join now</span>
        </p>
      </form>
    </div>
  );
}

export default Register;
