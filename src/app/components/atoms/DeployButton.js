import React from "react";

import "./DeployButton.css";
import Button from "react-bootstrap/Button";

const DeployButton = ({ onClick, text, className, type }) => {
  className = className || "";
  type = type || "button";
  return (
    <>
      <Button
        type={type}
        className={"d-btn px-10 py-1 my-2 " + className}
        onClick={onClick}
      >
        {text}
      </Button>
    </>
  );
};

export default DeployButton;
