import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MainBanner from "./components/MainBanner";
import RecentPosts from "./components/RecentPosts";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <>
      {/* <MainBanner /> */}
      <Container maxWidth="md">
        <Box sx={{ margin: "auto", paddingTop: "140px" }}>
          <Typography align="center" variant="h3">
            Ensure your Mainframe Security
          </Typography>
          <Typography align="center" variant="h4">
            with zSIEM Monitoring Solution
          </Typography>
        </Box>
        <Container align="center" maxWidth="sm">
          <Box sx={{ mt: "10px" }}>
            <Typography>
              The only security & compliance platform developed specifically for
              the z/OS operating system.
            </Typography>
          </Box>{" "}
          <Button
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

      <RecentPosts />
    </>
  );
}
