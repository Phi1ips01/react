import React from 'react';
import InputField from '../../Components/InputField';
import InputButton from '../../Components/InputButton';
import SideBar from '../../Components/SideBar'
import DropDown from '../../Components/DropDown'
import { Component } from 'react';
import DynamicTable from '../../Components/TableComponent'
class BusOperator extends Component  {
    state = {
        loading: false,
        error: false,
        showBusOperator: []
      }
    //   constructor (props){
    //     super(props);
    //     this.fetchBus=this.fetchBus.bind(this);
    //     this.handleSubmit=this.handleSubmit.bind(this);
    //   }
      componentDidMount() {
        this.fetchBusOperator();
      }
      async fetchBusOperator() {
        try {
            await this.props.showBusOperator();
            console.log("this.props",this.props)
            // const busOperatorData = this.props.data.data.response; // Access data correctly
            // console.log("busOperatorData",busOperatorData);

        } catch (error) {
            console.error(error);
            // Handle error here
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        const formData = {
          bus_operator_id:event.target.bus_operator_id.value,
          name:event.target.name.value,
          contact:event.target.type.value,
        }
        this.props.postBus(formData); // Dispatch the action
        console.log(formData,".,.,.,.,")
    }
    render(){
      console.log("render",this.props)
            const testData = this.props.data
        const data = Array.isArray(testData) ? testData : [];
    const allColumns = data.length > 0 ? Object.keys(data[0]).map(key => ({ Header: key, accessor: key })) : [];
    console.log("data,columns",data,allColumns)
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
        <DynamicTable columns={allColumns} data={data}/>
        </div>
        </div>
    );
};
}
export default BusOperator