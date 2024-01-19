import React, { Component } from 'react';
import ModifyTableButton from '../../Components/ModifyTableButton'
import InputField from '../../Components/InputField'
import InputButton from '../../Components/InputButton'
import SideBar from '../../Components/SideBar'
import DropDown from '../../Components/DropDown'

    class OperatorUpdate extends Component {
        state = {
            loading: false,
            error: false,
            showOperatorUpdate: []
          }
        //   constructor (props){
        //     super(props);
        //     this.fetchBus=this.fetchBus.bind(this);
        //     this.handleSubmit=this.handleSubmit.bind(this);
        //   }
          componentDidMount() {
            this.fetchOperatorUpdate();
          }
          async fetchOperatorUpdate() {
            try {
                await this.props.showOperatorUpdate();
                const operatorUpdateData = this.props.showOperatorUpdate; // Access data correctly
                console.log(operatorUpdateData);
            } catch (error) {
                console.error(error);
                // Handle error here
            }
        }
        handleSubmit(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            this.props.postOperatorUpdate(formData); // Dispatch the action
            console.log(formData,".,.,.,.,")
        }
render(){
    return (
        <div>
             <DropDown/>
            <SideBar/>
            <div className="default-main">
        <form action="/" className="default-form">
          <h3>Enter the Operator Update details here</h3>
            <InputField type="text" id="trip_id" name="trip_id"  className="default-form-input" placeholder="Enter the trip ID.."/>
            <InputField type="text" id="bus_id" name="bus_id" className="default-form-input" placeholder="Enter the bus ID.."/>
            <InputField type="text" id="total_amount" name="total_amount" className="default-form-input" placeholder="Enter the total amount.."/>
            <InputField type="text" id="paid" name="paid" className="default-form-input" placeholder="Enter the paid amount.."/>
            <InputButton className="default-form-submit" onSubmit={this.handleSubmit} value="Submit"/>
        </form>
        <div className="table-responsive">
            <table className="table table-dark table-striped w-75 container">
                <thead>
                    <tr>
                        <th>Trip ID</th>
                        <th>Bus ID</th>
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
                    
            <td>
                <ModifyTableButton/>
            </td>
        </tr>
        <tr>
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
        </div>
    );
};
}

export default OperatorUpdate