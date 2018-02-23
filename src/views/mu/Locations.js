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

export default class Locations extends Component {

  render(){
    return     <Table className="mui--align-right" style={{horizontalAlign: 'right',width:500}}>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>State</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableRowColumn>1</TableRowColumn>
          <TableRowColumn>Hyderabad</TableRowColumn>
          <TableRowColumn>Telangana</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>2</TableRowColumn>
          <TableRowColumn>Banglore</TableRowColumn>
          <TableRowColumn>Karnataka</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>3</TableRowColumn>
          <TableRowColumn>Chennai</TableRowColumn>
          <TableRowColumn>TN</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>4</TableRowColumn>
          <TableRowColumn>Mumbai</TableRowColumn>
          <TableRowColumn>Maharastra</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>5</TableRowColumn>
          <TableRowColumn>Vijayawada</TableRowColumn>
          <TableRowColumn>AP</TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>

  }
}
