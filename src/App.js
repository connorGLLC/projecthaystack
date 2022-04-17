import * as React from "react";

import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Gear from "./pages/Gear";
import Support from "./pages/Support";
import Knowledge from "./pages/Knowledge";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import { grey } from "@mui/material/colors";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function App(ScrollToTop) {
  const [mode, setMode] = React.useState("light");

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
                  light: grey[500],
                  main: "#fff",
                },
                secondary: {
                  light: grey[500],
                  main: "#314F76",
                },
                divider: grey[300],
                text: {
                  primary: grey[800],
                  secondary: grey[800],
                },
              }
            : {
                // palette values for dark mode
                // primary: grey,
                // divider: grey[700],
                // background: {
                //   default: grey[900],
                //   paper: grey[900],
                // },
                // text: {
                //   primary: grey[500],
                //   secondary: grey[500],
                // },
              }),
        },
        typography: {
          fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            "Helvetica Neue",
            "Segoe UI",
            "Roboto",
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
    <ThemeProvider theme={theme}>
      <Nav />
      <Routes>
        <Route exact path="gear" element={<Gear />} />
        <Route exact path="support" element={<Support />} />
        <Route exact path="Knowledge" element={<Knowledge />} />
        {/* <Route exact path="footer" element={<Footer />} /> */}
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}
