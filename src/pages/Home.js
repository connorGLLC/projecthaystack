import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MainBanner from "./components/MainBanner";
import Hero from "./components/Hero";
import About from "./components/About";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";

import { Container } from "@mui/material";

export default function Home() {
  return (
    <>
      {/* <MainBanner /> */}
      <Container maxWidth="md">
        <Fade in={true} timeout={2000} style={{ transitionDelay: "100ms" }}>
          <Box sx={{ margin: "auto", paddingTop: "140px" }}>
            <Typography align="center" variant="h3">
              Ensure your Mainframe Security
            </Typography>
            <Typography align="center" variant="h4">
              with zSIEM Monitoring Solution
            </Typography>
          </Box>
        </Fade>
        <Container align="center" maxWidth="sm">
          <Fade in={true} timeout={2000} style={{ transitionDelay: "1000ms" }}>
            <Box sx={{ mt: "10px" }}>
              <Typography>
                The only security & compliance platform developed specifically
                for the z/OS operating system.
              </Typography>
            </Box>
          </Fade>

          <Button
            color="secondary"
            position="center"
            href=""
            target="blank"
            sx={{ m: "10px" }}
            variant="contained"
            size="large"
          >
            Buy Now{" "}
          </Button>
        </Container>
      </Container>

      <Hero />
      <About />
    </>
  );
}
