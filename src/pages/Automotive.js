import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";

import p1 from "./assets/automotive/p1.jpg";
import p2 from "./assets/automotive/p2.jpg";
import p3 from "./assets/automotive/p3.jpg";
import p4 from "./assets/automotive/p4.jpg";
import p5 from "./assets/automotive/p5.jpg";
import p6 from "./assets/automotive/p6.jpg";
import p7 from "./assets/automotive/p7.jpg";
import p8 from "./assets/automotive/p8.jpg";
import p9 from "./assets/automotive/p9.jpg";
import p10 from "./assets/automotive/p10.jpg";
import p11 from "./assets/automotive/p11.jpg";
import p12 from "./assets/automotive/p12.jpg";
import p13 from "./assets/automotive/p13.jpg";
import p14 from "./assets/automotive/p14.jpg";
import p15 from "./assets/automotive/p15.jpg";
import p16 from "./assets/automotive/p16.jpg";
import p17 from "./assets/automotive/p17.jpg";
import p18 from "./assets/automotive/p18.jpg";
import p19 from "./assets/automotive/p19.jpg";
import p20 from "./assets/automotive/p20.jpg";
import p21 from "./assets/automotive/p21.jpg";
// import l19 from "./assets/automotive/l19.jpg";
// import l20 from "./assets/automotive/l20.jpg";
// import l21 from "./assets/automotive/l21.jpg";
// import l22 from "./assets/automotive/l22.jpg";
// import l23 from "./assets/automotive/l23.jpg";
// import l24 from "./assets/automotive/l24.jpg";
export default function Automotive() {
  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: "1080px",
        margin: "auto",
      }}
    >
      <Box sx={{ maxWidth: 800, margin: "auto" }}>
        <Divider>
          <Typography align="center" variant="h4">
            AUTOMOTIVE
          </Typography>
        </Divider>
      </Box>
      <ImageList variant="masonry" cols={1} gap={8}>
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
    img: p1,
    title: "CG AUTO",
  },
  {
    img: p2,
    title: "CG AUTO",
  },

  {
    img: p3,
    title: "CG AUTO",
  },
  {
    img: p4,
    title: "CG AUTO",
  },
  {
    img: p5,
    title: "CG AUTO",
  },
  {
    img: p6,
    title: "CG AUTO",
  },
  {
    img: p7,
    title: "CG AUTO",
  },
  {
    img: p8,
    title: "CG AUTO",
  },

  {
    img: p9,
    title: "CG AUTO",
  },
  {
    img: p10,
    title: "CG AUTO",
  },
  {
    img: p11,
    title: "CG AUTO",
  },
  {
    img: p12,
    title: "CG AUTO",
  },
  {
    img: p13,
    title: "CG AUTO",
  },
  {
    img: p14,
    title: "CG AUTO",
  },
  {
    img: p15,
    title: "CG AUTO",
  },
  {
    img: p16,
    title: "CG AUTO",
  },
  {
    img: p17,
    title: "CG AUTO",
  },
  {
    img: p18,
    title: "CG AUTO",
  },
  {
    img: p19,
    title: "CG AUTO",
  },
  {
    img: p20,
    title: "CG AUTO",
  },
  {
    img: p21,
    title: "CG AUTO",
  },
];
