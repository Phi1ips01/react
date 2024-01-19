import React from 'react';
import InputField from '../../Components/InputField';
import InputButton from '../../Components/InputButton';
import ModifyTableButton from '../../Components/ModifyTableButton';
import SideBar from '../../Components/SideBar'
import DropDown from '../../Components/DropDown'
import { Component } from 'react';
class BusOperator extends Component  {
    state = {
        loading: false,
        error: false,
        showBusOperator: []
      }
      componentDidMount() {
        this.fetchBusOperator();
      }
      async fetchBusOperator() {
        try {
            console.log("busoperator fech",this.props)
            await this.props.showBusOperator();
            const busOperatorData = this.props.showBusOperator; // Access data correctly
            console.log("busOperatorData",busOperatorData);
        } catch (error) {
            console.error(error);
            // Handle error here
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        this.props.postBus(formData); // Dispatch the action
        console.log(formData,".,.,.,.,")
    }
    render(){
    return (
        <div>
             <DropDown/>
            <SideBar/>
           <div className="default-main">
        <form action="/" className="default-form">
          <h3>Enter the Bus Operator details here</h3>
            <InputField type="text" id="trip_id" name="operator_id"  className="default-form-input" placeholder="Enter the bus operator ID.."/>
            <InputField type="text" id="name" name="name" className="default-form-input" placeholder="Enter the Name"/>
            <InputField type="text" id="contact" name="contact" className="default-form-input" placeholder="Enter the contact"/>
            <InputField type="text" id="bus_operator_total_payment" name="bus_operator_total_payment" className="default-form-input" placeholder="Total bus operator amount" disabled/>
            <InputField type="text" id="bus_operator_profit" name="bus_operator_profit" className="default-form-input" placeholder="Profit recieved" disabled/>

            <InputField type="text" id="bus_operator_paid" name="bus_operator_paid" className="default-form-input" placeholder="Amount paid" disabled/>
            <InputField type="text" id="remaining_payment" name="remaining_payment" className="default-form-input" placeholder="remaining payment" disabled/>

            <InputButton type="submit" onSubmit={this.handleSubmit} className="default-form-submit" value="Submit"/>
        </form>
        <div className="table-responsive">
            <table className="table table-dark table-striped w-75 container">
                <thead>
                    <tr>
                        <th>Operator ID</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Edit/Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                <tr>
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
        <td>
            <ModifyTableButton/>
        </td>
        </tr>
        </tbody>
        </table>
        </div>
    </div>
        </div>
    );
};
}
export default BusOperator