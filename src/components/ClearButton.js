import React from "react";
import "../Styles/Clear.css";

const ClearButton = (props) => {
  return (
    <div onClick={() => props.handleClear()} className="clear">
      {props.children}
    </div>
  );
};

export default ClearButton;
