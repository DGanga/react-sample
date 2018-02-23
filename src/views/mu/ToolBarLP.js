import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import Workflow1 from './Workflow';
import Workflow2 from './BidWorkflow';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import Notify from './Notify';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

export default class ToolbarLP extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1}><Link to="/workflow1" style={{ textDecoration: 'none',fontSize: '13px',color: "black" }}>Summary1</Link></MenuItem>
            <MenuItem value={2}><Link to="/workflow2" style={{ textDecoration: 'none',fontSize: '13px',color: "black" }}>Summary2</Link></MenuItem>

          </DropDownMenu>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarTitle text="" />
          <FontIcon className="muidocs-icon-custom-sort" />
          <Link to="/workflow2" style={{ textDecoration: 'none',fontSize: '13px',color: "black" }}><RaisedButton label="Summary" primary={true}/></Link>
          {/*  <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
            <MenuItem primaryText="Download" />
            <MenuItem primaryText="More Info" />
          </IconMenu>*/}
        </ToolbarGroup>

        <Notify></Notify>

      </Toolbar>
    );
  }
}
