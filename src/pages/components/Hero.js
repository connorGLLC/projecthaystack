import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

import Mainframe from "../assets/images/mainframe.png";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { Container } from "@mui/material";

function FeaturedPost() {
  const theme = useTheme();

  return (
    <ParallaxProvider>
      <Container align="center">
        <Box
          sx={{
            width: "100%",
            margin: "auto",
            position: "relative",
            p: { xs: 3, md: 9 },
          }}
        >
          <Box margin="auto" sx={{ maxWidth: "1080px" }}>
            <Parallax y={[20, -30]}>
              <Card elevation="0" sx={{ maxWidth: 345, margin: "auto" }}>
                <CardMedia
                  component="img"
                  width="100"
                  image={Mainframe}
                  alt="z/OS mainframe"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Mainframe{" "}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    SubText{" "}
                  </Typography>
                  <Typography variant="subtitle1" color="Inherit">
                    More subtext{" "}
                  </Typography>
                </CardContent>
              </Card>
            </Parallax>
          </Box>
        </Box>
      </Container>
    </ParallaxProvider>
  );
}

export default FeaturedPost;
