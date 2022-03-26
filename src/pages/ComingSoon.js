import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Portrait from "./assets/images/portrait.jpg";
import Logo from "./assets/images/logow.png";
import Link from "@mui/material/Link";

import useMediaQuery from "@mui/material/useMediaQuery";

export default function Home() {
  const theme = useTheme();
  const coverStyle = {
    backgroundImage: `url(${Portrait})`,
  };

  return (
    <>
      <div className="coverimg" style={coverStyle} theme={theme}>
        <Typography
          style={{
            textAlign: "center",
            position: "fixed",
            left: "50%",
            top: "65%",
            transform: "translate(-50%, -50%)",
          }}
          color="white"
          component="div"
        >
          <img src={Logo} alt="profile pic" height="100px" width="100px" />
          <br />
          <br />
          <Typography variant="h6">Connor Created</Typography>
          <br />
          <Typography variant="h5">COMING SOON</Typography>
          <br />
          <Typography variant="h7">
            photo by: <Link href="https://www.bokehbohm.com/">bokehbhom</Link>
          </Typography>
        </Typography>
      </div>
    </>
  );
}
