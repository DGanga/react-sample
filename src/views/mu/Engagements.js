import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Block from 'react-blocks';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MenuItem from 'material-ui/MenuItem';



export default class Engagements extends Component {

  render(){
    return <div>


      <Table className="mui--align-right" style={{horizontalAlign: 'right',width:500}}>
  <TableHeader>
    <TableRow>
    <TableHeaderColumn>Engagement Name</TableHeaderColumn>
    <TableHeaderColumn>Status</TableHeaderColumn>
    </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>TL 2017 Bid</TableRowColumn>
        <TableRowColumn>Bid Package Creation</TableRowColumn>
      </TableRow>
    <TableRow>
    <TableRowColumn>LTL Bid</TableRowColumn>
    <TableRowColumn>Bidding</TableRowColumn>
    </TableRow>
    <TableRow>
    <TableRowColumn>Pepsi Bid</TableRowColumn>
    <TableRowColumn>Awarding</TableRowColumn>
    </TableRow>
    <TableRow>
    <TableRowColumn>Test BID</TableRowColumn>
    <TableRowColumn>Complete</TableRowColumn>
    </TableRow>

    </TableBody>
    </Table>
      </div>



  }
}
