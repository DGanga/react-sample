import React, { Component } from 'react';
import EngagementStageStepper from './EngagementStageStepper';
import BidStepper from './BidStepper'
import EngagementSetupStepper from './EngagementSetupStepper'
import {
  BrowserRouter as Router,
  Route,Switch
} from 'react-router-dom'



export default class Workflow extends Component {
  constructor(props){
    super(props)
  }
  render(){
    let status1 = 1;
    return       <div>
       <EngagementStageStepper/>
      {/* <BidStepper/>*/}
      <EngagementSetupStepper/>
    </div>

  }
  }
