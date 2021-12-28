import AppsIcon from "@mui/icons-material/Apps";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/counter/userSlice";
import { auth } from "./firebase";
import "./Header.css";
import HeaderOption from "./HeaderOption";

function Header() {
  const dispatch = useDispatch();
  const logoutFromApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  const user = useSelector(selectUser);
  return (
    <div className="header-container">
      <div className="header">
        <div className="header_left">
          <img src="./logo.svg" alt="logo" />
          <div className="header_search">
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="header_right">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOption Icon={ChatIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notification" />
          <HeaderOption
            avatar={true}
            title={user.displayName}
            onClick={logoutFromApp}
          />
          <div className="verticalBar"></div>
          <HeaderOption Icon={AppsIcon} title="Work" />
          <button className="optionPremium">
            Get Hired Faster,
            <br />
            Try Premium free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
