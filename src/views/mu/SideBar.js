import React,{Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import ActionHome from 'material-ui/svg-icons/action/home';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



export default class SideBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false, appWidth:'0'};
  }

  handleToggle = () => {
    let v= this.state.appWidth;
    if(v== 250) v= 0;
    else v= 250;
    this.setState({open: !this.state.open,appWidth:v});
   // if(this.state.open) this.setState(this.appWidth='80%')
  }

  render() {

    return (
 <div style={{}}>
   <div>
     <Drawer open={this.state.open} style={{height:'80%',width:'100'}}  >
       <div >
       <MenuItem ><Link to="/home"   style={{ textDecoration: 'none',fontSize: '13px',color: "black" }}>Home</Link></MenuItem>
       <MenuItem><Link to="/engagements" style={{ textDecoration: 'none',fontSize: '13px',color: "black" }}>Engagements</Link></MenuItem>
       <MenuItem><Link to="/locations" style={{ textDecoration: 'none',fontSize: '13px',color: "black" }}>Locations</Link></MenuItem>
       <MenuItem><Link to="/businessUnits" style={{ textDecoration: 'none',fontSize: '13px',color: "black" }}>BusinessUnits</Link></MenuItem>
       <MenuItem><Link to="/services" style={{ textDecoration: 'none',fontSize: '13px',color: "black" }}>Services</Link></MenuItem>
       <MenuItem><Link to="/tripLegs" style={{ textDecoration: 'none',fontSize: '13px',color: "black" }}>Trip Legs</Link></MenuItem>
       <MenuItem><Link to="/carriers" style={{ textDecoration: 'none',fontSize: '13px',color: "black" }}>Carriers</Link></MenuItem>
   </div>
     </Drawer>
   </div>
   <div style={{marginLeft:this.state.appWidth}}>
            <AppBar
            title="Logistics Procurement"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this.handleToggle}
            style={{ }}
          />
   </div>

      </div>
    );
  }
}
