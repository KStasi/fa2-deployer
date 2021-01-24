import React, { useState } from "react";

import "./DeployButton.css";
import Button from "react-bootstrap/Button";

const DeployButton = ({ onClick, text }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      <Button className="d-btn px-10 py-1 my-2" onClick={onClick}>
        {text}
      </Button>
    </>
  );
};

export default DeployButton;
