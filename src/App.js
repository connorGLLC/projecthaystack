import * as React from "react";

import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import Automotive from "./pages/Automotive";
import People from "./pages/People";
import Commercial from "./pages/Commercial";
import Photography from "./pages/Photography";
import Gear from "./pages/Gear";
import WebDevelopment from "./pages/WebDevelopment";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon";
import { Routes, Route } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import { grey } from "@mui/material/colors";

import ScrollToTop from "./components/ScrollToTop";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function DarkButton() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.secondary",
      }}
    >
      {theme.palette.mode} mode
      <IconButton
        sx={{ ml: 0 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
}

export default function App(ScrollToTop) {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // primary: grey,
                // divider: grey[700],
                // background: {
                //   default: grey[900],
                //   paper: grey[900],
                // },
                // text: {
                //   primary: "#fff",
                //   secondary: grey[500],
                // },
                // palette values for light mode
                primary: {
                  light: grey[50],
                  main: "#fff",
                  contrastText: "#000",
                },
                divider: grey[300],
                text: {
                  primary: grey[900],
                  secondary: grey[800],
                },
              }
            : {
                // palette values for dark mode
                primary: grey,
                divider: grey[700],
                background: {
                  default: grey[900],
                  paper: grey[900],
                },
                text: {
                  primary: "#fff",
                  secondary: grey[500],
                },
              }),
        },
        typography: {
          fontFamily: [
            "Montserrat",
            "Roboto",
            '"Helvetica Neue"',
            '"Segoe UI"',
            "-apple-system",
            "BlinkMacSystemFont",
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(","),
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Nav />
        <Routes>
          <Route exact path="gallery" element={<Gallery />} />
          <Route exact path="automotive" element={<Automotive />} />
          <Route exact path="people" element={<People />} />
          <Route exact path="commercial" element={<Commercial />} />
          <Route exact path="gear" element={<Gear />} />
          <Route exact path="webdevelopment" element={<WebDevelopment />} />
          <Route exact path="photography" element={<Photography />} />
          {/* <Route exact path="footer" element={<Footer />} /> */}
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
        <DarkButton />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
