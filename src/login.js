import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/counter/userSlice";
import { auth } from "./firebase";
import "./Register.css";

function Login({ handleSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const loginToApp = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Please, Can not be Empty!!");
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        const loggedUser = userAuth.user;
        dispatch(
          login({
            email: loggedUser.email,
            uid: loggedUser.uid,
            displayName: loggedUser.displayName,
            photoURL: loggedUser.photoURL,
          })
        );
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="register">
      <img src="./LinkedIn_Logo.svg" alt="" />

      <div className="form">
        <h2>Sign in</h2>
        <h5>Stay updtaed on your professional world</h5>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password (6 or more characters)</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="register-forgot">Forgot passoword?</span>{" "}
        <button className="btn-register" onClick={loginToApp}>
          Sign in
        </button>
        <button className="btn-google">Sign in with Apple</button>
        <p>
          New on LinkedIn?{" "}
          <span className="login_register" onClick={handleSwitch}>
            Join now
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
