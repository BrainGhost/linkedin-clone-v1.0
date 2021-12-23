import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import SideBar from "./SideBar";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      <div className="app_body">
        <SideBar />
        <Feed />
        {/* feed */}
        {/* widget */}
      </div>
    </div>
  );
}

export default App;
