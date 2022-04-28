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

import Modulespic from "../assets/images/modules.png";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { Container } from "@mui/material";

function FeaturedPost() {
  const theme = useTheme();

  return (
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
          <Card elevation="0" sx={{ maxWidth: 700, margin: "auto" }}>
            <CardMedia
              component="img"
              width="140"
              image={Modulespic}
              alt="z/OS mainframe"
            />
          </Card>
        </Box>
      </Box>
    </Container>
  );
}

export default FeaturedPost;
