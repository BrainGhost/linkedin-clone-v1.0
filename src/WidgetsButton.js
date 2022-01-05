import React from "react";
import "./WidgetsButton.css";

function WidgetsButton({ title, Icon, RemoveImage }) {
  return (
    <button className="widgetsButton" onClick={RemoveImage}>
      {Icon && <Icon />}
      {title}
    </button>
  );
}

export default WidgetsButton;
