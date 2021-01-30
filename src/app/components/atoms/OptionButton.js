import React from "react";

import "./DeployButton.css";
import ToggleButton from "react-bootstrap/ToggleButton";

const OptionButton = ({ onChange, text, className, checked, value }) => {
  className = className || "";
  return (
    <>
      <ToggleButton
        className={"d-btn px-10 py-1 my-2 " + className}
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
      >
        {text}
      </ToggleButton>
    </>
  );
};

export default OptionButton;
