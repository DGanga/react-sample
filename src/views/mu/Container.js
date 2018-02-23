import React, { Component } from 'react';
import Chart from './Chart';
import Locations from './Locations';
import BusinessUnits from './BusinessUnits';
import Engagements from './Engagements';
import Workflow from './Workflow';
import Workflow1 from './Workflow';
import Workflow2 from './BidWorkflow';

import Block from 'react-blocks';
import {
  BrowserRouter as Router,
  Route,Switch
} from 'react-router-dom'



export default class Container extends Component {

  render(){
    return <div style={{marginLeft:250}}>
      <Switch>
        <Route exact path="/" component={Workflow2}/>
        <Route exact path="/LPApp" component={Workflow2}/>
        <Route exact path="/home" component={Workflow2}/>
        <Route exact path="/workflow1" component={Workflow1}/>
        <Route exact path="/workflow2" component={Workflow2}/>
        <Route exact path="/chart" component={Chart}/>
        <Route path="/locations" component={Locations}/>
        <Route path="/businessUnits" component={BusinessUnits}/>
        <Route path="/engagements" component={Engagements}/>
      </Switch>
    </div>

  }
}
