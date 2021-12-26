import { useSelector } from "react-redux";
import "./App.css";
import { selectUser } from "./features/counter/userSlice";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import SideBar from "./SideBar";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app_body">
            <SideBar />
            <Feed />
            {/* widget */}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
