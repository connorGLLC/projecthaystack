import * as React from "react";

import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { orange } from "@mui/material/colors";

const theme = createTheme({
  status: {
    danger: orange[500],
  },
});

function firstButton() {
  return <Button variant="contained">Hello World</Button>;
}

// const renderNav = () => {
//   return (
//     <>
//       <Navbar />
//       <Switch>
//         {/* <Route exact path="/" component={Home} />
//         <Route exact path="/photography" component={Photography} />
//         <Route exact path="/webdevopment" component={WebDevelopment} /> */}
//         {/* <Route exact path="/picking" component={PickingData} /> */}
//         {/* <Route exact path="/receiving" component={Receiving} />*/}
//         <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
//       </Switch>
//       <Footer />
//     </>
//   );
// };

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>{firstButton()}</ThemeProvider>
    </Router>
  );
}

export default App;
