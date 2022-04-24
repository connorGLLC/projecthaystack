import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import Typography from "@mui/material/Typography";
import MainframeIcon from "../assets/images/mainframeicon.png";
import GraphIcon from "../assets/images/graph.png";
import LockIcon from "../assets/images/lock.png";
import TargetIcon from "../assets/images/target.png";

// import gear5 from "./assets/images/gear5.jpg";
export default function TitlebarBelowImageList() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "md",
        maxWidth: "1080px",
        margin: "auto",
      }}
    >
      <Box sx={{ marginBottom: "200px" }}>
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
          <Divider />
          <Typography
            marginTop="200px"
            marginBottom="25px"
            align="left"
            variant="h4"
          >
            What is zSIEM?{" "}
          </Typography>
          <Typography flex="left" variant="h7">
            zSIEM helps clients collect, in real-time, information pertaining to
            security events, database related events, transaction processing
            events and more. The technology pinpoints, filters, collects,
            reports mainframe events and then makes the events available to all
            major SIEM technologies.
          </Typography>
        </Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={3} md={3}>
            <Card elevation="6" sx={{ borderRadius: 3, maxWidth: 345 }}>
              <CardMedia
                component="img"
                sx={{ width: 100, margin: "auto", pt: "10px" }}
                image={GraphIcon}
                alt="Live from space album cover"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  SIEM Growth
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Enterprises that are implementing Security Information and
                  Event Management (SIEM) realize the importance of visibility
                  into the mainframe.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2} sm={3} md={3}>
            <Card elevation="6" sx={{ borderRadius: 3, maxWidth: 345 }}>
              <CardMedia
                component="img"
                sx={{ width: 100, margin: "auto", pt: "10px" }}
                image={MainframeIcon}
                alt="Live from space album cover"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Mainframe Market
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Enterprises are struggling to find and keep zOS resources.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2} sm={3} md={3}>
            <Card elevation="6" sx={{ borderRadius: 3, maxWidth: 345 }}>
              <CardMedia
                component="img"
                sx={{ width: 100, margin: "auto", pt: "10px" }}
                image={TargetIcon}
                alt="Live from space album cover"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Mission Critical
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Companies that have an IBM mainframe platform run their most
                  mission critical workload and store their most valuable data
                  on the mainframe.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2} sm={3} md={3}>
            <Card elevation="6" sx={{ borderRadius: 3, maxWidth: 345 }}>
              <CardMedia
                component="img"
                sx={{ width: 100, margin: "auto", pt: "10px" }}
                image={LockIcon}
                alt="Live from space album cover"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Compliance
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Enterprises that are implementing Security Information and
                  Event Management (SIEM) realize the importance of visibility
                  into the mainframe.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Divider />

      <Box>
        <Grid pt="100px" container spacing={2}>
          <Grid xs={12} md={4}>
            <Card elevation="24">
              <CardMedia
                component="img"
                image={MainframeIcon}
                elevation="24"
                outline="none"
              ></CardMedia>
            </Card>
          </Grid>
          <Grid pl="25px" align="left" xs={12} md={8}>
            <Typography variant="h6">Main Computer</Typography>
            <Typography p="20px" m="10px" variant="paragraph">
              This is my 2021 MacBook Pro. With the amount of photo editing I do
              I wanted speed, power, and a large screen. So naturally I had to
              go for the 16" with the i9. <br /> Does it work? <br /> Yes.{" "}
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
          <Card flex="end" elevation="24">
            <CardMedia
              component="img"
              image={MainframeIcon}
              elevation="24"
              outline="none"
            ></CardMedia>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid xs={12} md={4}>
          <Card flex="end" elevation="24">
            <CardMedia
              component="img"
              image={MainframeIcon}
              elevation="24"
              outline="none"
            ></CardMedia>
          </Card>
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
      <Divider />
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
