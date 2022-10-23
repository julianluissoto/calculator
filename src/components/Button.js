import React from "react";
import "../Styles/Button.css";
const Button = (props) => {
  const isOperator = (value) => {
    return isNaN(value) && value !== "." && value !== "="; // here analize if value is neither of those
    // values will return true or false
  };
  return (
    <div
      onClick={() => props.handleClick(props.children)}
      className={`button-container 
      ${isOperator(props.children) ? "operator" : ""}
  `.trimEnd()}
    >
      {props.children}
    </div>
  );
};

export default Button;
