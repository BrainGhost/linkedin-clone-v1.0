import { Avatar } from "@material-ui/core";
import React from "react";
import "./SideBar.css";

function SideBar() {
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src="./splash.jpg" alt="" />
        <Avatar className="sidebar_avatar" />
        <h2>BrainGhost</h2>
        <h4>Juniorbalamage@gmail.com</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Connections</p>
          <p className="sidebar_statNumber">2,454</p>
        </div>
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2,554</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("ReactJS")}
        {recentItem("Algorithm")}
        {recentItem("Programming")}
        {recentItem("JavaScript")}
        {recentItem("Laravel")}
      </div>
    </div>
  );
}

export default SideBar;
