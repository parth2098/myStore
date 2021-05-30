import React from "react";
import CachedIcon from "@material-ui/icons/Cached";
import "./MessageBox.css";
function MessageBox(props) {
  return (
    <div classname="messagebox">
      <div className={`alert alert-${props.variant || "info"}`}>
        {props.variant}
      </div>
    </div>
  );
}

export default MessageBox;
