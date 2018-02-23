import React, {Component} from "react";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import SideBar from "./views/mu/SideBar";

import ToolBarLP from "./views/mu/ToolBarLP";
import injectTapEventPlugin from "react-tap-event-plugin";
import Container from "./views/mu/Container";
import {BrowserRouter as Router} from "react-router-dom";



class LPApp extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
      <div>
        <SideBar/>
        <ToolBarLP/>

        <Container/>

        </div>
      </Router>
      </MuiThemeProvider>
    );
  }
}

export default LPApp;
