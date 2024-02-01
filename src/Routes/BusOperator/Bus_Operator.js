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
        showBusOperator: [],
        postBusOperator:[]
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
            this.props.setTableData(this.props.data)
            this.props.setSearchTerm('')
            
            // const busOperatorData = this.props.data.data.response; // Access data correctly
            // console.log("busOperatorData",busOperatorData);

        } catch (error) {
            console.error(error);
            // Handle error here
        }
    }
    handleSubmit=(event)=> {
        event.preventDefault();
        const formData = {
          bus_operator_id:event.target.operator_id.value,
          name:event.target.name.value,
          contact:event.target.contact.value,
          // total_amount: event.target.bus_operator_total_payment.value,
          // profit:event.target.bus_operator_profit.value,
          // paid:event.target.bus_operator_paid.value,
          // remaining_payment: event.target.remaining_payment.value,
        }
        console.log("this.props",this.props)
        this.props.postBusOperator(formData); // Dispatch the action
        console.log(formData,".,.,.,.,")
    }
    render(){
      console.log("render",this.props)
            const testData = this.props.data
        const data = Array.isArray(testData) ? testData : [];
        const allColumns = data.length > 0 ? Object.keys(data[0]) : [];
    
        const columns = allColumns.map(column => ({
          Header: column.charAt(0).toUpperCase() + column.slice(1).replace(/_/g, ' '), // Convert underscore to space and capitalize
          accessor: column,
        }));

    return (
        <div>
             <DropDown/>
            <SideBar/>
           <div className="default-main">
        <form onSubmit={this.handleSubmit} className="default-form">
          <h3>Enter the Bus Operator details here</h3>
            <InputField type="text" id="trip_id" name="operator_id"  className="default-form-input" placeholder="Enter the bus operator ID.." required/>
            <InputField type="text" id="name" name="name" className="default-form-input" placeholder="Enter the Name" required/>
            <InputField type="text" id="contact" name="contact" className="default-form-input" placeholder="Enter the contact" required/>
            {/* <InputField type="text" id="bus_operator_total_payment" name="bus_operator_total_payment" className="default-form-input" placeholder="Total bus operator amount disabled"  />
            <InputField type="text" id="bus_operator_profit" name="bus_operator_profit" className="default-form-input" placeholder="Profit recieved disabled" />
            <InputField type="text" id="bus_operator_paid" name="bus_operator_paid" className="default-form-input" placeholder="Amount paid disabled" />
            <InputField type="text" id="remaining_payment" name="remaining_payment" className="default-form-input" placeholder="remaining payment disabled" /> */}

            <InputButton type="submit" className="default-form-submit" value="Submit"/>
        </form>
        <DynamicTable columns={columns} data={data} deleteAction={this.props.deleteBusOperator} searchData = {this.props.searchData}setSearchTerm ={this.props.setSearchTerm} />
        </div>
        </div>
    );
};
}
export default BusOperator