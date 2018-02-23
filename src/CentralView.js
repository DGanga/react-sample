/**
 * Created by j1008197 on 7/13/2017.
 */
import React, {Component} from 'react';
import Lanes from './Lanes';
import LocationsView from './views/LocationsView';
import {
  BrowserRouter as Router,
  Route,Switch
} from 'react-router-dom'



export default class CentralView extends Component {

  render() {
    const router1 = () =>{
   //   var browserHistory = ReactRouter.browserHistory;
      <Router >
        <div>
          /*<Lanes/>
          <LocationsView/>*/
          <Switch>
            <Route exact path="/" component={LocationsView}/>
            <Route path="/lanes" component={Lanes}/>
            <Route path="/locations" component={LocationsView}/>
          </Switch>

        </div>
      </Router>
    };
    return <router1/>;
  }
}
