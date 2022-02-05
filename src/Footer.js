import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer_container">
        {/* <FooterOption Icon={HomeIcon} title="Home" /> */}
        <div className="footerOption">
          <HomeIcon className="footerOption_icon" />
          <h4 className="footerOption_title">Home</h4>
        </div>
        <div className="footerOption">
          <SupervisorAccountIcon className="footerOption_icon" />
          <h4 className="footerOption_title">Network</h4>
        </div>
        <div className="footerOption">
          <BusinessCenterIcon className="footerOption_icon" />
          <h4 className="footerOption_title">Jobs</h4>
        </div>
        <div className="footerOption">
          <ChatIcon className="footerOption_icon" />
          <h4 className="footerOption_title">Messaging</h4>
        </div>
        <div className="footerOption">
          <NotificationsIcon className="footerOption_icon" />
          <h4 className="footerOption_title">Notification</h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;
