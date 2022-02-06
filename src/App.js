import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "../src/Login";
import "./App.css";
import { login, logout, selectUser } from "./features/counter/userSlice";
import Feed from "./Feed";
import { auth } from "./firebase";
import Footer from "./Footer";
import Header from "./Header";
import Register from "./Register";
import SideBar from "./SideBar";
import Widget from "./Widget";

function App() {
  const [switchPage, setswitchPage] = useState(false);
  const handleSwitch = () => {
    setswitchPage(!switchPage);
  };
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (loggedUser) => {
      if (loggedUser) {
        //The user is log in
        dispatch(
          login({
            email: loggedUser.email,
            uid: loggedUser.uid,
            displayName: loggedUser.displayName,
            photoURL: loggedUser.photoURL,
          })
        );
      } else {
        //The user is log out
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className="app">
      {!user ? (
        !switchPage ? (
          <Register handleSwitch={handleSwitch} />
        ) : (
          <Login handleSwitch={handleSwitch} />
        )
      ) : (
        <>
          <Header />
          <div className="app_body">
            <SideBar />
            <div className="app_feed_widget">
              <Feed />
              <Widget />
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
