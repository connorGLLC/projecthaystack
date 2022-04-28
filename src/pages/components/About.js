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
      <Divider />
      <Box sx={{ marginBottom: "100px", mt: "100px" }}>
        <Box sx={{ width: "90%", margin: "auto" }}>
          <Typography variant="h3">What is zSIEM?</Typography>
          <Box sx={{ m: "10px" }}>
            <Typography variant="subtitle">
              zSIEM helps clients collect, in real-time, information pertaining
              to security events, database related events, transaction
              processing events and more. The technology pinpoints, filters,
              collects, reports mainframe events and then makes the events
              available to all major SIEM technologies.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ marginTop: "100px" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 1, sm: 8, md: 12 }}
          >
            <Grid item xs={12} sm={6} md={3}>
              <Card
                elevation="12"
                sx={{
                  borderRadius: 3,
                  height: "285px",
                  maxWidth: 345,
                  margin: "auto",
                }}
              >
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
            <Grid item xs={2} sm={6} md={3}>
              <Card
                elevation="12"
                sx={{
                  borderRadius: 3,
                  height: "285px",
                  maxWidth: 345,
                  margin: "auto",
                }}
              >
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
            <Grid item xs={2} sm={6} md={3}>
              <Card
                elevation="12"
                sx={{
                  borderRadius: 3,
                  height: "285px",
                  maxWidth: 345,
                  margin: "auto",
                }}
              >
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
            <Grid item xs={2} sm={6} md={3}>
              <Card
                elevation="12"
                sx={{
                  borderRadius: 3,
                  height: "285px",
                  maxWidth: 345,
                  margin: "auto",
                }}
              >
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
      </Box>

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
