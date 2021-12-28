import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/counter/userSlice";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  // we need to track if the fields have a value, therefore we create a state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();
  const loginToApp = (e) => {
    e.preventDefault();
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
  const registerToApp = async () => {
    if (!name) {
      return alert("Please insert a full name");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        const loggedUser = userAuth.user;

        updateProfile(loggedUser, {
          displayName: name,
          photoURL: profilePic,
        }).then(() => {
          dispatch(
            login({
              email: loggedUser.email,
              uid: loggedUser.uid,
              displayName: name,
              photoURL: profilePic,
            })
          );
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };
  return (
    <div className="login">
      <img src="./link-Logo.png" alt="" />
      <form>
        <h2>Make the most of your professional life</h2>
        <label>Full Name (Required if registering)</label>
        <input
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Profile image (Optional)</label>
        <input
          type="profile"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
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
        <p>
          By clicking Agree & join, you agree to the LinkedIn{" "}
          <span className="login_register">User agreement privacy Policy,</span>{" "}
          and Cookie Policy
        </p>
        <button className="btn-login" onClick={loginToApp}>
          Agree & Join
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
