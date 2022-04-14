import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

export default function Support() {
  const [value, setValue] = React.useState("Controlled");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <Box
        sx={{
          pt: "150px",
          justifyContent: "center",
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            maxWidth: 400,
          },
        }}
      >
        <Paper elevation={6}>
          <Box sx={{ margin: "20px", paddingTop: "40px" }}>
            <Typography align="center" variant="h5">
              Please fill out the form below
              <br></br> and we will respond within 24 hours.
            </Typography>
          </Box>
          <Box
            maxWidth="250px"
            component="form"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              margin: "auto",

              pt: "50px",
              pb: "100px",
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              id="outlined-required"
              label="Email"
              helperText="* Indicates Required"
            />
            <div>
              <TextField id="outlined-input" label="First Name" type="text" />
            </div>
            <div>
              <TextField id="outlined-input" label="Last Name" type="text" />
            </div>
            <TextField
              id="outlined-input"
              label="Account Number"
              type="accountnumber"
            />
            <div>
              <TextField
                id="outlined-textarea"
                label="Message"
                placeholder="How may we help?"
                multiline
                rows={4}
              />
            </div>
          </Box>
        </Paper>
      </Box>
    </>
  );
}
