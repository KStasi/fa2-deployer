import React from "react";

import "./Footer.css";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <Row className="m-0 p-0">
      <Col className="m-0 p-0">
        <div className="footer py-5">
          <a href="https://github.com/KStasi/fa2-deployer">
            <Image
              src="https://rajlab.org/icons/github_white.png"
              roundedCircle
              className="img-md "
            />
          </a>
        </div>
      </Col>
    </Row>
  );
};

export default Footer;
