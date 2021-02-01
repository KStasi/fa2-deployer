import React from "react";

import "./Footer.css";
import Image from "react-bootstrap/Image";

const Footer = () => {
  return (
    <div className="footer py-5">
      <a href="https://github.com/KStasi/fa2-deployer">
        <Image
          src="https://rajlab.org/icons/github_white.png"
          roundedCircle
          className="img-md "
        />
      </a>
    </div>
  );
};

export default Footer;
