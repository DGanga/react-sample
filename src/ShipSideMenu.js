import React,{Component} from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import Lanes from './Lanes';
import LocationsView from './views/LocationsView';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';


export default class ShipSideMenu extends Component {

 render(){
   const size=10;



    const MySideNav = () => (

      <div style={{background: '#2c3e50', color: '#FFF', width: 150,height:400}}>

        <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' >
          <Nav id='Locations'>
            <NavText> <Link to="/">Locations</Link> </NavText>
          </Nav>
          <Nav id='Lanes'>
            <NavText> <Link to="/lanes">Lanes</Link> </NavText>
          </Nav>
        <Nav id='Business Units'>
          <NavText> Business Units </NavText>
        </Nav>
        <Nav id='Services'>
          <NavText> Services </NavText>
        </Nav>
          <Nav id='Trip Legs'>
            <NavText> Trip Legs </NavText>
          </Nav>
      </SideNav>



      </div>


    )


    return <MySideNav/>
  }
}
