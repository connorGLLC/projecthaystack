import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

function Copyright() {
  return (
    <Typography p="20px" variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      zSIEM {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          E: Email
          <br />
          P: Phone
          <br />
          {/* <Grid
            item
            color="inherit"
            component={"a"}
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.instagram.com/gannacon/"
          >
            <InstagramIcon color="text.secondary" />
          </Grid>
          <Grid
            item
            color="inherit"
            component={"a"}
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/gannacon"
          >
            <GitHubIcon color="text.secondary" />
          </Grid>{" "} */}
        </Typography>

        <Copyright />
      </Container>
    </Box>
  );
}

export default Footer;
