import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

import Typography from "@mui/material/Typography";
import gear1 from "./assets/images/gear1.jpg";
import gear2 from "./assets/images/gear2.jpg";
import gear3 from "./assets/images/gear3.jpg";
import gear4 from "./assets/images/gear4.jpg";
// import gear5 from "./assets/images/gear5.jpg";
export default function TitlebarBelowImageList() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: "1080px",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          margin: "auto",

          pb: "75px",
          [theme.breakpoints.down("md")]: {
            pb: "100px",
          },
          [theme.breakpoints.down("sm")]: {
            pb: "40px",
          },
        }}
      >
        <Typography align="left" variant="h2">
          My Gear
        </Typography>
        <Divider />
        <Typography align="left" variant="h4">
          Does gear really matter?
        </Typography>
        <Typography flex="left" variant="h7">
          Yes. It does. To be able to provide the best to my clients I stay up
          to date on the latest technology and trends. I invest heavily in my
          gear which allows me to produce faster with better quality.
        </Typography>
      </Box>

      <ParallaxProvider>
        <Box>
          <Grid pb="20px" container spacing={2}>
            <Grid xs={12} md={4}>
              <Parallax y={[20, -20]}>
                <Card elevation="24">
                  <CardMedia
                    component="img"
                    image={gear3}
                    elevation="24"
                    outline="none"
                  ></CardMedia>
                </Card>
              </Parallax>
            </Grid>
            <Grid pl="25px" align="left" xs={12} md={8}>
              <Typography variant="h6">Main Computer</Typography>
              <Typography p="20px" m="10px" variant="paragraph">
                This is my 2021 MacBook Pro. With the amount of photo editing I
                do I wanted speed, power, and a large screen. So naturally I had
                to go for the 16" with the i9. <br /> Does it work? <br /> Yes.{" "}
                <br />
                It's fast, bright, and never freezes. The trackpad is unmatched
                and multitasking is incredible. <br /> Do I recommend it? <br />{" "}
                No.
                <br />
                This is a screaming space heater. Just exporting from Adobe
                Lightroom starts the turbines. Working in laptop mode while
                developing on localhost my palms have to elevate to avoid third
                degree burns. I eagerly await an M1.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Grid container spacing={2}>
          <Grid pr="25px" align="right" xs={12} md={8}>
            <Typography variant="h6">Camera Body</Typography>
            <Typography align="right" variant="paragraph">
              Sony A7iii
              <br />
              Full frame. Everything you'll need.
            </Typography>
          </Grid>
          <Grid pb="45px" xs={12} md={4}>
            <Parallax y={[20, -20]}>
              <Card flex="end" elevation="24">
                <CardMedia
                  component="img"
                  image={gear1}
                  elevation="24"
                  outline="none"
                ></CardMedia>
              </Card>
            </Parallax>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid xs={12} md={4}>
            <Parallax y={[20, -30]}>
              <Card flex="end" elevation="24">
                <CardMedia
                  component="img"
                  image={gear2}
                  elevation="24"
                  outline="none"
                ></CardMedia>
              </Card>
            </Parallax>
          </Grid>
          <Grid pl="25px" align="left" xs={12} md={8}>
            <Typography variant="h6">Lenses</Typography>
            <Typography align="left" variant="paragraph">
              Loawa 15mm f/4
              <br />
              -I use this lense heavily for commercial work and it does a great
              job. The manual focus is a chore but forces me to focus more on
              getting the perfect photo.
              <br />
              Sigma 35mm f1.4
              <br />
              -My favorite. Most all the portraits you see in my photography
              portfolio is taken from this beauty. It's perfect for every
              situation.
              <br />
              Sony 70-200mm f4
              <br />
              -Necessary but does not get used as much as I want. While in
              Colorado I use it daily but in Kansas there isn't much except
              compressing automotive photography.
            </Typography>
          </Grid>
        </Grid>
      </ParallaxProvider>
    </Box>
  );
}

// const itemData = [
//   {
//     img: gear3,
//     title: "2021 MacBook Pro 16 i9",
//   },
//   {
//     img: gear4,
//     title: "iPad Pro 12.9in 3rd Gen",
//   },
//   {
//     img: gear1,
//     title: "Camera Body",
//     subtitle: "Sony A7iii",
//   },
//   {
//     img: gear2,
//     title: "Glass",
//     subtitle: "Sony 70-200mm F4, Sigma 35mm F1.4, Laowa 16mm F4",
//   },
// ];
