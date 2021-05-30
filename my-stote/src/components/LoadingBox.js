import React from "react";
import CachedIcon from "@material-ui/icons/Cached";
import "./LoadingBox.css";
function LoadingBox() {
  return (
    <div classname="loadingBox">
      <i className="fa fa-spinner fa-spin">Loading...</i>
    </div>
  );
}

export default LoadingBox;
