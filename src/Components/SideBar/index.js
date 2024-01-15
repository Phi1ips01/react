import React, { Component } from 'react';
export default class ButtonElement extends Component {
  render() {
    return (
      <div>
        
        <div className="sidenav">
          <ul>
            <br/><br/>
            <li><a href="/bus">Bus</a></li>
            <li><a href="/busOperator">Bus Operator</a></li>
            <li><a href="/user">User</a></li>
            <li><a href="/operatorUpdate">Operator Update</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
