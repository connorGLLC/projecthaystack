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
import CHSLogo from "../assets/images/CHSLOGO.jpg";
import pbm from "../assets/images/pbm.jpg";
import pbmlogo from "../assets/images/pbmlogo.png";
import VikingLogo from "../assets/images/vikinglogo.jpg";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";

function FeaturedPost() {
  const theme = useTheme();

  return (
    <ParallaxProvider>
      <Box
        sx={{
          width: "100%",
          margin: "auto",
          position: "relative",
          p: { xs: 3, md: 9 },
        }}
      >
        <Box margin="auto" sx={{ maxWidth: "1080px" }}>
          <Typography
            component="h1"
            variant="h3"
            color="inherit"
            gutterBottom
            pb="45px"
          >
            Some of my most recent development projects:
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Parallax y={[20, -30]}>
                <Card elevation="24" sx={{ maxWidth: 345, margin: "auto" }}>
                  <CardActionArea
                    target="_blank"
                    href="https://www.vikingathleticgoods.com/"
                  >
                    <CardMedia
                      component="img"
                      width="140"
                      image={VikingLogo}
                      alt="Missouri Valley College"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Viking Athletic Goods
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Website redesign.
                      </Typography>
                      <Typography variant="subtitle1" color="Inherit">
                        Tap to see the final product
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Parallax>
            </Grid>
            <Grid item xs={12} md={4}>
              <Parallax y={[20, -30]}>
                <Card elevation="24" sx={{ maxWidth: 345, margin: "auto" }}>
                  <CardActionArea
                    target="_blank"
                    href="https://www.curtishomesolutions.com/"
                  >
                    <CardMedia
                      component="img"
                      width="140"
                      image={CHSLogo}
                      alt="CHS Logo"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Curtis Home Solutions
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        New business startup. Website, CRM, Email, Invoicing,
                        Brand and Logo Design.
                      </Typography>
                      <Typography variant="subtitle1" color="Inherit">
                        Tap to see the final product
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Parallax>
            </Grid>
            <Grid item xs={12} md={4}>
              <Parallax y={[20, -30]}>
                <Card elevation="24" sx={{ maxWidth: 345, margin: "auto" }}>
                  <CardActionArea
                    target="_blank"
                    href="https://www.photosbymalaina.com/"
                  >
                    <CardMedia
                      component="img"
                      width="140"
                      image={pbmlogo}
                      alt="Malaina Logo"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Photos by Malaina
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Photography Portfolio. Website, Email, Logo Design.
                      </Typography>
                      <Typography variant="subtitle1" color="Inherit">
                        Tap to see the final product
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Parallax>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ParallaxProvider>
  );
}

export default FeaturedPost;
