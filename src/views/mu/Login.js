import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import {Redirect} from 'react-router-dom'
import LPApp from './../../LPApp'
import {
  BrowserRouter as Router,
  Route,Switch
} from 'react-router-dom'


export default class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {redirect:false}

  }
  render(){
    const responseGoogle = (response) => {
     // alert(response.profileObj.email);
      console.log(response);
    this.setState({redirect:true})
    }
    if(this.state.redirect) {
      return  <Redirect to='/LPApp'/>;
    }
    else {
      return <div>
        <table>
          <tr>
            <td>
        <div style={{marginRight:100}}>
           <img src="gd1.png" alt="LP" height="650"/>
        </div>
            </td>
            <td>
      <div style={{marginLeft:50}}>  <br /> <br />
      <GoogleLogin
        clientId="552784351360-n36cr8idasl0ihccikcndd8tstk7e38o.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        redirectUri="/LPApp"
      />
        </div>
            </td>
            </tr>
            </table>
      </div>
    }
  }

}
