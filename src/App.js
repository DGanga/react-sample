import React, {Component} from "react";
import "./App.css";
import LPApp from "./LPApp";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import SideBar from "./views/mu/SideBar";
import Login from "./views/mu/Login";

import ToolBarLP from "./views/mu/ToolBarLP";
import injectTapEventPlugin from "react-tap-event-plugin";
import Container from "./views/mu/Container";
import {
  BrowserRouter as Router,
  Route,Switch
} from 'react-router-dom'



/*injectTapEventPlugin();*/


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/LPApp" component={LPApp}/>
          </Switch>

        </div>
      </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
