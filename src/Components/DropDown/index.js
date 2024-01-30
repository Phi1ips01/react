import React, { Component } from 'react';
export default class DropDown extends Component {
  render() {
    return (
      <div>
            <div className="dropdown">
        <button className="dropdown-btn">&#9776;</button>
        <div className="dropdown-content">
          <a href="/home">Trip Details</a>
          <a href="/tripData">Admin Panel</a>
          <a href="/">Log Out</a>
          <div className="clear"></div>
        </div>
    </div>
        </div>
    );
  }
}
