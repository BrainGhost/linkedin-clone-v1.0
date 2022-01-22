import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";
import "./SideBar.css";

function SideBar() {
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );
  const user = useSelector(selectUser);
  const [randomNumber, setRandomNumber] = useState(0);
  useEffect(() => {
    randomClick();
  }, []);

  const randomClick = () => {
    const min = 500;
    const max = 4500;
    setRandomNumber(Math.floor(Math.random() * (max - min + 1) + min));
  };
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src="./splash.jpg" alt="" />
        <Avatar
          sx={{ width: 80, height: 80 }}
          src={user.photoURL}
          className="sidebar_avatar"
        >
          {user.email[0].toUpperCase()}
        </Avatar>
        <h2>{user.displayName}</h2>
        <p>{user.email}</p>
        {/* userDescription__title */}
        <p>{".description"}</p>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>
            Connections <br /> <span>Grow you network</span>
          </p>
          <p className="sidebar_statNumber">{randomNumber}</p>
        </div>
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">{Math.floor(randomNumber / 5)}</p>
        </div>
      </div>
      <div className="sidebar_stats_2">
        <p>Access exclusivess tools & insights</p>
        <h4>
          <span>
            <img src="./square-stop.svg" alt="square" />
          </span>
          Get hired Faster, Try Premium Free
        </h4>
      </div>
      <div className="sidebar_stats_3">
        <h4>
          <BookmarkIcon />
          My Items
        </h4>
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
