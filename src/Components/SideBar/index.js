import React, { Component } from 'react';
import logo from '../../images/logo.png'


export default class ButtonElement extends Component {
  render() {
    return (
      <div>
        
        <div className="sidenav">
        <a href='/'>
        <div className="logo-topnav">
        <img className="logo-topnav-img" src={logo} alt='logo'/>
        <h3>Logo</h3>
        </div>
        </a>
          <ul>
            <br/><br/>
            <li><a href='/tripData'>Trip Data</a></li>
            <li><a href="/bus">Bus</a></li>
            <li><a href="/busOperator">Bus Operator</a></li>
            <li><a href="/user">User</a></li>
            {/* <li><a href="/operatorUpdate">Operator Update</a></li> */}
          </ul>
        </div>
      </div>
    );
  }
}
