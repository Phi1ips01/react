import React, { Component } from 'react';

// import { users } from '../../api/users';

import ModifyTableButton from '../../Components/ModifyTableButton';
import InputButton from '../../Components/InputButton';
import InputField from '../../Components/InputField';
import TopNav from '../../Components/TopNav'
class Home extends Component {
  // state = {
  //   loading: false,
  //   error: false,
  //   userList: []
  // }
  // componentDidMount() {
  //   this.fetchUsers();
  // }
  // fetchUsers = () => {
  //   try {
  //     this.setState({ loading: true }, async () => {
  //       const data = await users();
  //       this.setState({ loading: false, error: false, userList: data.data.data });
  //     });
  //   } catch (error) {
  //     /* Derive proper parse error logic based on context */
  //     this.setState({ loading: false, error: JSON.stringify(error) });
  //   }
  // }
  render() {
    // const { userList, loading, error } = this.state;
    return (
      <div>
        <TopNav/>
        <div className="trip-main">
            <form action="/" className="trip-form">
              <h3>Enter the Trip details here</h3>
                <InputField type="text" id="operator_id" name="operator_id"  className="trip-form-input" placeholder="Enter the bus operator ID.."/>
                <InputField type="text" id="bus_id" name="bus_id" className="trip-form-input" placeholder="Enter the bus ID.."/>
                <InputField type="text" id="trip_id" name="trip_id" className="trip-form-input" placeholder="Enter the trip ID.."/>
                <InputField type="text" id="CName" name="CName" className="trip-form-input" placeholder="Enter the Customer Name"/>
                <InputField type="text" id="contact" name="contact" className="trip-form-input" placeholder="Enter the contact"/>
                <InputField type="text" id="acontact" name="acontact" className="trip-form-input" placeholder="Enter the alternate contact"/>
                <InputField type="text" id="age" name="age" className="trip-form-input" placeholder="Enter the age"/>

              <InputField type="text" id="starting_point" name="starting_point" className="trip-form-input" placeholder="Enter the starting point..."/>
              <InputField type="text" id="destination" name="destination" className="trip-form-input" placeholder="Enter the Destination..."/>
                <InputField type="text" id="address" name="address" className="trip-form-input" placeholder="Enter the Address"/>
                <InputField type="text" id="num_tickets" name="num_tickets" className="trip-form-input" placeholder="Enter the Number of Tickets"/>
                <InputField type="text" id="total_amount" name="total_amount" className="trip-form-input" placeholder="Enter the total amount.."/>
                <InputField type="text" id="paid" name="paid" className="trip-form-input" placeholder="Enter the paid amount.."/>
                <InputButton className="trip-form-submit" value="Submit"/>
            </form>
        </div>
        <div className="table-responsive">
          <table className="table table-dark table-striped w-75 container">
              <thead>
                  <tr>
                      <th>Operator ID</th>
                      <th>Trip ID</th>
                      <th>Bus ID</th>
                      <th>Customer Name</th>
                      <th>Contact</th>
                      <th>Alternate Contact</th>
                      <th>Starting Point</th>
                      <th>Destination</th>
                      <th>Address</th>
                      <th>Age</th>
                      <th>No. of tickets</th>
                      <th>Total Amount</th>
                      <th>Paid</th>
                      <th>Edit/Delete</th>
                  </tr>
              </thead>
             <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                  <ModifyTableButton/>

                  </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                <ModifyTableButton/>
                </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
              <ModifyTableButton/>
              </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <ModifyTableButton/>
            </td>
        </tr>
              
              </tbody>
          </table>
      </div>
      </div>
    );
  }
}
export default Home;
