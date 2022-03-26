import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import l1 from "./assets/gallery/l1.jpg";
import l2 from "./assets/gallery/l2.jpg";
import l3 from "./assets/gallery/l3.jpg";
import l4 from "./assets/gallery/l4.jpg";
import l5 from "./assets/gallery/l5.jpg";
import l6 from "./assets/gallery/l6.jpg";
import l7 from "./assets/gallery/l7.jpg";
import l8 from "./assets/gallery/l8.jpg";
import l9 from "./assets/gallery/l9.jpg";
import l10 from "./assets/gallery/l10.jpg";
import l11 from "./assets/gallery/l11.jpg";
import l12 from "./assets/gallery/l12.jpg";
// import l13 from "./assets/gallery/l13.jpg";
import l14 from "./assets/gallery/l14.jpg";
import l15 from "./assets/gallery/l15.jpg";
import l16 from "./assets/gallery/l16.jpg";
import l17 from "./assets/gallery/l17.jpg";
import l18 from "./assets/gallery/l18.jpg";
import l19 from "./assets/gallery/l19.jpg";
import l20 from "./assets/gallery/l20.jpg";
import l21 from "./assets/gallery/l21.jpg";
import l22 from "./assets/gallery/l22.jpg";
import l23 from "./assets/gallery/l23.jpg";
import l24 from "./assets/gallery/l24.jpg";
import l25 from "./assets/gallery/l25.jpg";

export default function Lifestyle() {
  return (
    <Box sx={{ width: "90%", maxWidth: "1080px", margin: "auto" }}>
      <Box sx={{ maxWidth: 800, margin: "auto" }}>
        <Divider>
          <Typography align="center" variant="h4">
            LIFESTYLE
          </Typography>
        </Divider>
      </Box>
      <ImageList variant="masonry" cols={2} gap={8}>
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
  );
}

const itemData = [
  {
    img: l1,
    title: "CG GALLERY",
  },
  {
    img: l2,
    title: "CG GALLERY",
  },
  {
    img: l3,
    title: "CG GALLERY",
  },
  {
    img: l4,
    title: "CG GALLERY",
  },
  {
    img: l5,
    title: "CG GALLERY",
  },
  {
    img: l6,
    title: "CG GALLERY",
  },
  {
    img: l7,
    title: "CG GALLERY",
  },
  {
    img: l8,
    title: "CG GALLERY",
  },
  {
    img: l9,
    title: "CG GALLERY",
  },
  {
    img: l10,
    title: "CG GALLERY",
  },
  {
    img: l11,
    title: "CG GALLERY",
  },
  {
    img: l12,
    title: "CG GALLERY",
  },
  // {
  //   img: l13,
  //   title: "CG GALLERY",
  // },
  {
    img: l14,
    title: "CG GALLERY",
  },
  {
    img: l15,
    title: "CG GALLERY",
  },
  {
    img: l16,
    title: "CG GALLERY",
  },
  {
    img: l17,
    title: "CG GALLERY",
  },
  {
    img: l18,
    title: "CG GALLERY",
  },
  {
    img: l19,
    title: "CG GALLERY",
  },
  {
    img: l20,
    title: "CG GALLERY",
  },
  {
    img: l21,
    title: "CG GALLERY",
  },
  {
    img: l22,
    title: "CG GALLERY",
  },
  {
    img: l23,
    title: "CG GALLERY",
  },
  {
    img: l24,
    title: "CG GALLERY",
  },
  {
    img: l25,
    title: "CG GALLERY",
  },
];
