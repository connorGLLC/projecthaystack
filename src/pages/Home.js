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

export default function Home() {
  return (
    <>
      <MainBanner />

      <Box sx={{ width: "90%", margin: "auto" }}>
        <Typography variant="h3">
          Hello, my name is Connor and I create stuff.
        </Typography>
        <Box sx={{ m: "10px" }}>
          <Typography variant="subtitle">
            I’m a web developer, photographer, and engineer from Kansas City,
            Kansas.
            <br />
            My passion is helping businesses establish an online presence
            through web development and photography.
          </Typography>
          <br />
          <br />
          <br />
          <Typography variant="subtitle">
            This is strictly my portfolio and creative playground. If you are
            interested in working together visit my organization's page for
            inquiries:
          </Typography>
        </Box>

        <Button
          href="https://www.gannaway.org/"
          target="blank"
          sx={{ m: "10px" }}
          variant="contained"
          size="large"
        >
          Let's get to work
        </Button>
      </Box>

      <RecentPosts />
    </>
  );
}
