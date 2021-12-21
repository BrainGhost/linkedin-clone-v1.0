import AppsIcon from "@material-ui/icons/Apps";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import "./Header.css";
import HeaderOption from "./HeaderOption";

function Header() {
  return (
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
          avatar="https://www.clipartmax.com/png/middle/257-2572603_user-man-social-avatar-profile-icon-man-avatar-in-circle.png"
          title="Me"
        />
        <div className="verticalBar"></div>
        <HeaderOption Icon={AppsIcon} title="Work" />
        <a className="optionPremium">
          Try Premium for
          <br /> free
        </a>
      </div>
    </div>
  );
}

export default Header;
