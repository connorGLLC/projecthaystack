import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Portrait from "./assets/images/portrait.jpg";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const divStyle = {
  maxWidth: "100%",
  height: "800px",
  backgroundImage: `url(${Portrait})`,
  backgroundSize: "cover",
};
export default function BasicGrid() {
  return (
    <>
      <div className="Component" style={divStyle}>
        <Typography
          variant="h6"
          style={{
            textAlign: "right",
            position: "absolute",
            left: "50%",
            top: "75%",
            transform: "translate(-40%, -25%)",
          }}
          color="white"
          component="div"
        >
          Welcome! This is my little space on the internet for creating and
          displaying everything I do.
        </Typography>
      </div>

      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid item xs={6} md={4}></Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
      </Grid>
    </>
  );
}
