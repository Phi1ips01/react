import React from 'react';
import InputField from '../../Components/InputField';
import InputButton from '../../Components/InputButton';
import SideBar from '../../Components/SideBar'
import DropDown from '../../Components/DropDown'
import { Component } from 'react';
import DynamicTable from '../../Components/TableComponent'
import CsvLink from '../../Components/CsvLink'
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
            await this.props.showBusOperator(0,10);
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
    handleCSVDownload = ()=>{
      this.props.showAllActionBusOperator()
      
    }
    handleOperatorChange = (event) => {
      const selectedOperatorId = event.target.value;
      console.log("this.props handle",this.props)
      this.props.updateSelectedOperator(selectedOperatorId);
    }
    handleSubmit=(event)=> {
        event.preventDefault();
        
        const showOneBusOperatorData = this.props.showOneBusOperatorData
        // const formBusOperatorId = event.target.operator_id.value!==''?event.target.operator_id.value:showOneBusOperatorData.bus_operator_id
        const formName = event.target.name.value!==''?event.target.name.value:showOneBusOperatorData.name
        const formContact = event.target.contact.value!==''?event.target.contact.value:showOneBusOperatorData.contact
        // const formData = {
        //   // bus_operator_id:formBusOperatorId,
        //   name:formName,
        //   contact:formContact,
        //   paid:formPaid
          
        // }
        // console.log("hands",formData)
        if (this.props.showOneBusOperatorData && this.props.showOneBusOperatorData.id) {
          const formPaid = event.target.paid.value!==''?event.target.paid.value:showOneBusOperatorData.paid

          const formData = {
            // bus_operator_id:formBusOperatorId,
            name:formName,
            contact:formContact,
            paid:formPaid
            
          }
          // If there is editData in props, dispatch updateBusOperator action
          const id = this.props.showOneBusOperatorData.id
          const updatedFormData = {
            ...formData,
            id: id,
          }
          this.props.updateBusOperator(updatedFormData);
        } else {
          const formData = {
            // bus_operator_id:formBusOperatorId,
            name:formName,
            contact:formContact,
            paid:0            
          }
          // If no editData, dispatch postBusOperator action
          this.props.postBusOperator(formData);
        }
    
        // Clear the form after submission
        this.clearForm();
      };
    
      clearForm = () => {
        // Clear the form fields
        // document.getElementById('operator_id').value = '';
        document.getElementById('name').value = '';
        document.getElementById('contact').value = '';
        document.getElementById('paid').value = '';
        this.props.clearBusOperator();
        console.log("clear form ", this.props.showOneBusOperatorData)
        setTimeout(() => {
          document.getElementById('success').innerText = '';
        }, 5000);
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
        const isEditMode = !!showOneBusOperatorData && !!showOneBusOperatorData.id;
        console.log("editmode render",isEditMode)
    return (
        <div>
            <DropDown logout={this.props.logout}/>
            <SideBar/>
           <div className="default-main">
          
        <form onSubmit={this.handleSubmit} className="default-form">
        <h3 id='success'></h3>

          <h3>Enter the Bus Operator details here</h3>

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
            />
            <InputField
              type="text"
              id="paid"
              name="paid"
              className="default-form-input"
              placeholder={isEditMode?showOneBusOperatorData.paid:"amount paid(disabled for new entry)"}
              disabled={isEditMode?false:true}              
            />

            <InputButton type="submit" id="inputButton" className="default-form-submit" value={!isEditMode ? 'Submit' : 'Update'}/>
            {isEditMode && (
              <button type="button" className="default-form-clear" onClick={this.clearForm}>
                
                Clear
              </button>
            )}
        </form>
        {console.log("busopertator table",this.props.busOperatorAllData,this.props.showAllActionBusOperator)}
        <DynamicTable 
        columns={columns} 
        data={data} 
        deleteAction={this.props.deleteBusOperator} 
        searchData = {this.props.searchData} 
        setSearchTerm ={this.props.setSearchTermBusOperator} 
        showOneRowData = {this.props.showOneBusOperatorData} 
        showOneRow = {this.props.showOneBusOperator}
        setCurrentPage = {this.props.setCurrentPageBusOperator}
        currentPageReducer = {this.props.currentPageReducerBusOperator}
        count= {this.props.busOperatorCount}
        showAll={this.props.showBusOperator}
        />
          <button className="csv-button" onClick={this.handleCSVDownload}>
            Download
                {this.props.busOperatorAllData && (
          <CsvLink data={this.props.busOperatorAllData} columns={columns}/>
        )}
  </button>
        </div>
        </div>
    );
};
}
export default BusOperator