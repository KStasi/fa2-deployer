import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Made with 💙 by "}
      <Link
        color="inherit"
        href="https://www.linkedin.com/in/kstasi/"
        target="_blank"
      >
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
      <Link color="inherit" href={link} target="_blank">
        {title}
      </Link>
    </Typography>
  );
}
function Footer() {
  return (
    <Box component="footer" sx={{ py: 5 }}>
      <Container maxWidth="lg">
        <Reference
          title="Smart Contracts"
          link="https://github.com/oxheadalpha/smart-contracts"
        ></Reference>
        <Reference
          title="Frontend"
          link="https://github.com/KStasi/fa2-deployer"
        ></Reference>
        <Copyright />
      </Container>
    </Box>
  );
}

export default Footer;
