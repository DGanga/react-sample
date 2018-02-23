import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import ShipSideMenu from  './ShipSideMenu';
import CentralView from './CentralView';
import Lanes from './Lanes';
import LocationsView from './views/LocationsView';
import workflow from './views/workflow'

import {
  BrowserRouter as Router,
  Route,Switch
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <table><tbody>
        <Router >

        <tr>
            <td>        <ShipSideMenu/>
            </td>
            <td>
              <tr>
              <div className="App-header">
                { /* <img src={logo} className="App-logo" alt="logo" />*/}
                <h3>Logistics Procurement</h3>
              </div>
              </tr>
              <tr>
                  <div>

                    <Switch>
                      <Route exact path="/" component={workflow}/>
                      <Route path="/lanes" component={workflow}/>
                      <Route path="/locations" component={LocationsView}/>
                    </Switch>

                  </div>
              </tr>

            </td>
          </tr>
        </Router>

        </tbody>

        </table>


      </div>

    );
  }
}

export default App;
