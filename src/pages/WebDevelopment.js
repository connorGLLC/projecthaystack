import * as React from "react";
import {
  styled,
  useTheme,
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MainBanner from "./components/MainBanner";
import RecentPosts from "./components/RecentPosts";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import ImageListItem from "@mui/material/ImageListItem";
import ImageList from "@mui/material/ImageList";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CSSLogo from "./assets/devlogos/css.png";
import GITHUB from "./assets/devlogos/GITHUB.png";
import GRAPHQL from "./assets/devlogos/graphql.png";
import HTMLLOGO from "./assets/devlogos/HTMLLOGO.png";
import JSLOGO from "./assets/devlogos/JS.png";
import MUILOGO from "./assets/devlogos/muilogo.png";
import MYSQL from "./assets/devlogos/MYSQL.png";
import NODEJS from "./assets/devlogos/NODEJS.png";
import SHOPIFY from "./assets/devlogos/Shopify.png";
import SQL from "./assets/devlogos/SQL.png";
import SQUARESPACE from "./assets/devlogos/squarespace.png";
import ZOHO from "./assets/devlogos/ZOHO.png";
import REACTLOGO from "./assets/devlogos/REACTLOGO.png";
import WIXLOGO from "./assets/devlogos/WIXLOGO.png";

export default function Home() {
  const slider = (
    <AwesomeSlider bullets={false} backgroundColor="#fff" organicArrows={true}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            width="175px"
            src={`${item.img}`}
            srcSet={`${item.img}`}
            alt={item.title}
          />
        </ImageListItem>
      ))}
    </AwesomeSlider>
  );
  return (
    <>
      <Box sx={{ width: "90%", margin: "auto" }}>
        <Typography mb="25px" variant="h3">
          Are you in need of a Web Developer?
        </Typography>
        <Typography variant="h4">I can help.</Typography>
        <Box sx={{ m: "5px" }}>
          <Typography variant="subtitle">
            I recently completed a 6 month course at the University of Kansas
            building websites, web apps, databases, and so much more. My github
            portfolio showcases all the projects and homeworks I completed in
            that time.
          </Typography>
        </Box>

        <Button
          href="https://github.com/gannacon"
          target="blank"
          sx={{ m: "10px" }}
          variant="contained"
          size="large"
        >
          GitHub
        </Button>
        <br />
        {/* <Box sx={{ margin: "auto" }}>
          {slider}
          <br />
          <Box align="center" sx={{ align: "center", margin: "auto" }}> */}
        <Typography align="center" variant="h4">
          Here is a little bit of everything I can do:
          <br />
          <ArrowDownwardIcon />
        </Typography>
        <Box sx={{ width: "90%", maxWidth: "1080px", margin: "auto" }}>
          <ImageList variant="masonry" cols={4} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}`}
                  srcSet={`${item.img}`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        {/* <br />
          </Box>
        </Box> */}
        {/* <Button
          href="https://www.gannaway.org/"
          target="blank"
          sx={{ m: "10px" }}
          variant="contained"
          size="large"
        >
          Let's get to work
        </Button> */}
      </Box>
      <RecentPosts />
    </>
  );
}

const itemData = [
  {
    img: JSLOGO,
    title: "JS LOGO",
  },

  {
    img: REACTLOGO,
    title: "REACT LOGO",
  },
  {
    img: MUILOGO,
    title: "MUI LOGO",
  },
  {
    img: GRAPHQL,
    title: "GRAPHQL LOGO",
  },
  {
    img: GITHUB,
    title: "GITHUB LOGO",
  },
  {
    img: CSSLogo,
    title: "CSS LOGO",
  },
  {
    img: HTMLLOGO,
    title: "HTML LOGO",
  },

  {
    img: MYSQL,
    title: "MYSQL LOGO",
  },
  {
    img: SQL,
    title: "SQL LOGO",
  },
  {
    img: NODEJS,
    title: "NODE JS LOGO",
  },
  {
    img: SHOPIFY,
    title: "SHOPIFY LOGO",
  },

  {
    img: SQUARESPACE,
    title: "SQUARESPACE LOGO",
  },
  {
    img: ZOHO,
    title: "ZOHO LOGO",
  },
  {
    img: WIXLOGO,
    title: "WIX LOGO",
  },
];
