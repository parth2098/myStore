import React from "react";
import "./Input.css";
function Input({ type, id, placeHolder }) {
  return (
    <div className="input">
      <input
        type={type}
        id={id}
        className="form-control"
        placeholder={placeHolder}
      />
    </div>
  );
}

export default Input;
