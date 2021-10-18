import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Made with 💙 by "}
      <Link color="inherit" href="https://www.linkedin.com/in/kstasi/">
        KStasi
      </Link>
    </Typography>
  );
}

function Reference({ title, link }) {
  return (
    <Typography
      variant="subtitle1"
      align="center"
      color="text.secondary"
      component="p"
    >
      <Link color="inherit" href={link}>
        {title}
      </Link>
    </Typography>
  );
}
function Footer({ description, title }) {
  return (
    <Box component="footer" sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Sources
        </Typography>
        <Reference title="Smart Contracts" link=""></Reference>
        <Reference title="Frontend" link=""></Reference>
        <Copyright />
      </Container>
    </Box>
  );
}

export default Footer;
