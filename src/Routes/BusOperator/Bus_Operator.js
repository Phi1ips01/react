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
            this.props.setTableDataBusOperator(this.props.data)
            this.props.setSearchTermBusOperator('')
            
            // const busOperatorData = this.props.data.data.response; // Access data correctly
            // console.log("busOperatorData",busOperatorData);

        } catch (error) {
            console.error(error);
            // Handle error here
        }
    }
    handleSubmit=(event)=> {
        event.preventDefault();
        
        const showOneBusOperatorData = this.props.showOneBusOperatorData
        const formBusOperatorId = event.target.operator_id.value!==''?event.target.operator_id.value:showOneBusOperatorData.bus_operator_id
        const formName = event.target.name.value!==''?event.target.name.value:showOneBusOperatorData.name
        const formContact = event.target.contact.value!==''?event.target.contact.value:showOneBusOperatorData.contact
        const formData = {
          bus_operator_id:formBusOperatorId,
          name:formName,
          contact:formContact,
          
        }
        console.log("hands",formData)
        if (this.props.showOneBusOperatorData) {
          // If there is editData in props, dispatch updateBusOperator action
          const id = this.props.showOneBusOperatorData.id
          const updatedFormData = {
            ...formData,
            id: id,
          }
          this.props.updateBusOperator(updatedFormData);
        } else {
          // If no editData, dispatch postBusOperator action
          this.props.postBusOperator(formData);
        }
    
        // Clear the form after submission
        this.clearForm();
      };
    
      clearForm = () => {
        // Clear the form fields
        document.getElementById('operator_id').value = '';
        document.getElementById('name').value = '';
        document.getElementById('contact').value = '';
        this.props.clearBusOperator();
        console.log("clear form ", this.props.showOneBusOperatorData)
      };
    render(){
      console.log("render",this.props)
            const testData = this.props.data
        const data = Array.isArray(testData) ? testData : [];
        const allColumns = data.length > 0 ? Object.keys(data[0]) : [];
    
        const columns = allColumns.map(column => ({
          Header: column.charAt(0).toUpperCase() + column.slice(1).replace(/_/g, ' '), // Convert underscore to space and capitalize
          accessor: column,
        }));
        const { showOneBusOperatorData } = this.props;
        const isEditMode = !!showOneBusOperatorData && !!showOneBusOperatorData.bus_operator_id;
        console.log("editmode render",isEditMode)
    return (
        <div>
            <DropDown logout={this.props.logout}/>
            <SideBar/>
           <div className="default-main">
        <form onSubmit={this.handleSubmit} className="default-form">
          <h3>Enter the Bus Operator details here</h3>
          <InputField
              type="text"
              id="operator_id"
              name="operator_id"
              className="default-form-input"
              placeholder={isEditMode?showOneBusOperatorData.bus_operator_id:"Enter the bus operator ID.."}
              required={isEditMode?false:true}
            />
            <InputField
              type="text"
              id="name"
              name="name"
              className="default-form-input"
              placeholder={isEditMode?showOneBusOperatorData.name:"Enter the Name"}
              required={isEditMode?false:true}             
            />
            <InputField
              type="text"
              id="contact"
              name="contact"
              className="default-form-input"
              placeholder={isEditMode?showOneBusOperatorData.contact:"Enter the contact"}
              required={isEditMode?false:true}              
            />            {/* <InputField type="text" id="bus_operator_total_payment" name="bus_operator_total_payment" className="default-form-input" placeholder="Total bus operator amount disabled"  />
            <InputField type="text" id="bus_operator_profit" name="bus_operator_profit" className="default-form-input" placeholder="Profit recieved disabled" />
            <InputField type="text" id="bus_operator_paid" name="bus_operator_paid" className="default-form-input" placeholder="Amount paid disabled" />
            <InputField type="text" id="remaining_payment" name="remaining_payment" className="default-form-input" placeholder="remaining payment disabled" /> */}

            <InputButton type="submit" id="inputButton" className="default-form-submit" value={!isEditMode ? 'Submit' : 'Update'}/>
            {isEditMode && (
              <button type="button" className="default-form-clear" onClick={this.clearForm}>
                
                Clear
              </button>
            )}
        </form>
        <DynamicTable columns={columns} data={data} deleteAction={this.props.deleteBusOperator} searchData = {this.props.searchData} setSearchTerm ={this.props.setSearchTermBusOperator} showOneRowData = {this.props.showOneBusOperatorData} showOneRow = {this.props.showOneBusOperator}/>
        </div>
        </div>
    );
};
}
export default BusOperator