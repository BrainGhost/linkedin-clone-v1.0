import React from "react";
import "./WidgetsButton.css";

function WidgetsButton({ title, Icon }) {
  return (
    <button className="widgetsButton">
      {Icon && <Icon />}
      {title}
    </button>
  );
}

export default WidgetsButton;
