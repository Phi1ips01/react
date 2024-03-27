import React, { Component } from 'react';
import logo from '../../images/logo sigma.png'
import './dropdown.css'
export default class DropDown extends Component {
  handleLogOut = (e)=>{
    e.preventDefault()
console.log(this.props)
    this.props.logout()
    window.location.href = "/"
  }
  render() {
    return (
      <div className='dropdown-content'>        
          <div className="nav-logo">
          <a href='/'><img src={logo} alt="Logo" /></a>
        </div>
        <div className="links">
          <a href="/home">CUSTOMER TRIP</a>
          <a href="/tripData">ADMIN PANEL</a>
          <a href = "/" onClick={this.handleLogOut}>LOG OUT</a>      
        </div>
        
        </div>
    );
  }
}
