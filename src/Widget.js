import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InfoIcon from "@mui/icons-material/Info";
import { Avatar } from "@mui/material";
import React from "react";
import "./Widgets.css";
import WidgetsButton from "./WidgetsButton";

function Widget() {
  const singleWidgets = (title, details) => (
    <div className="single_widgets">
      <Avatar
        sx={{
          width: 50,
          height: 50,
          backgroundColor: "white",
          color: "#0a66c2",
          border: "1px solid #0a66c2",
        }}
        src={""}
      >
        {title[0].toUpperCase()}
      </Avatar>
      <div className="single_widgets_description">
        <h2>{title}</h2>
        <p>
          Company{" . "}
          {details}
        </p>
        <WidgetsButton Icon={AddIcon} title="Follow" />
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>Add to you feed</h2>
        <InfoIcon />
      </div>
      <div className="widgets_body">
        {singleWidgets("Web Developer", "Program Development")}
        {singleWidgets("GeeksforGeeks", "Computer Software")}
        {singleWidgets("React Jobs", "Staffings and Recruiting")}
      </div>
      <div className="widgets_footer">
        <button>
          View all recommendation
          <ArrowForwardIcon />
        </button>
      </div>
    </div>
  );
}

export default Widget;
