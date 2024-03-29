import React from 'react';
import InputField from '../../Components/InputField';
import InputButton from '../../Components/InputButton';
import SideBar from '../../Components/SideBar'
import DropDown from '../../Components/DropDown'
import { Component } from 'react';
import DynamicTable from '../../Components/TableComponent'
import CsvLink from '../../Components/CsvLink'
import FormInput from '../../Components/FormInputComponent';
class BusOperator extends Component  {
      componentDidMount() {
        this.fetchBusOperator();
      }
      async fetchBusOperator() {
        try {
            await this.props.showBusOperator(0,10);
            await this.props.setTotalAmountAndProfit()
        } catch (error) {
            console.error(error);
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
        const formName = event.target.name.value!==''?event.target.name.value:showOneBusOperatorData.name
        const formContact = event.target.contact.value!==''?event.target.contact.value:showOneBusOperatorData.contact
        if (this.props.showOneBusOperatorData && this.props.showOneBusOperatorData.id) {
          const formPaid = event.target.paid.value!==''?event.target.paid.value:showOneBusOperatorData.paid
          const formData = {
            name:formName,
            contact:formContact,
            paid:formPaid
          }
          const id = this.props.showOneBusOperatorData.id
          const updatedFormData = {
            ...formData,
            id: id,
          }
          this.props.updateBusOperator(updatedFormData);
          document.getElementById('success').innerText = 'Details updated successfully';

        } else {
          const formData = {
            name:formName,
            contact:formContact,
            paid:0            
          }
          this.props.postBusOperator(formData);
          document.getElementById('success').innerText = 'Details entered successfully';

        }
        this.clearForm();
      };
      clearForm = () => {
        document.querySelectorAll('form input').forEach(input => input.value = '');
        this.props.clearBusOperator();
        console.log("clear form ", this.props.showOneBusOperatorData)
        setTimeout(() => {
          document.getElementById('success').innerText = '';
        }, 5000);
      };
      tableColumns = ()=>{
        const data = Array.isArray(this.props.data) ? this.props.data : [];
        const allColumns = data.length > 0 ? Object.keys(data[0]) : [];
        const columns = allColumns.map(column => ({
          Header: column.charAt(0).toUpperCase() + column.slice(1).replace(/_/g, ' '), // Convert underscore to space and capitalize
          accessor: column,
        }));
        return columns
      }
      searchColumns = ()=>{
        const data = Array.isArray(this.props.data)
        ? this.props.data.map(({ name, ...rest }) => ({ name }))
        : [];
      
        console.log("bus darta" ,this.props.data)
        const allColumns = data.length > 0 ? Object.keys(data[0]) : [];
        const columns = allColumns.map(column => ({
          Header: column.charAt(0).toUpperCase() + column.slice(1).replace(/_/g, ' '), // Convert underscore to space and capitalize
          accessor: column,
        }));
        return columns
      }
      handleSearch = (e) => {
        e.preventDefault();
        const searchCol = e.target.searchCol.value;
        const searchKey = e.target.searchKey.value;
        console.log("handlesearch",searchCol,searchKey)        
        this.props.setSearchTermBusOperator(searchCol, searchKey);
      }
      handleClear = () => {
        this.props.setSearchTermBusOperator("", "");
      };
    render(){
        const isEditMode = !!this.props.showOneBusOperatorData && !!this.props.showOneBusOperatorData.id;
        console.log("busoperatordarta", this.props.busOperatorData)
    return (
        <div>
            <DropDown logout={this.props.logout}/>
            <SideBar/>
           <div className="default-main">
        <form onSubmit={this.handleSubmit}>
        <div class="text">
            Bus Operator Details
            </div>
        <h3 id='success'></h3>
          <div class="default-form-row">
          <FormInput
              id="name"
              name="name"
              className="default-form-input"
              placeholder={isEditMode?this.props.showOneBusOperatorData.name:"Enter the Name"}
              required={isEditMode?false:true}
              />
            <FormInput
              id="contact"
              name="contact"
              className="default-form-input"
              placeholder={isEditMode?this.props.showOneBusOperatorData.contact:"Enter the contact"}
              required={isEditMode?false:true}              
            />

          </div> 
          <div class="default-form-row">
          <FormInput
               id="paid"
               name="paid"
               className="default-form-input"
               placeholder={isEditMode?this.props.showOneBusOperatorData.paid:"amount paid(disabled for new entry)"}
               disabled={isEditMode?false:true}              
            />
          </div>  

            <InputButton type="submit" id="inputButton" className="default-form-submit" value={!isEditMode ? 'Submit' : 'Update'}/>
            {isEditMode && (
              <button type="button" className="default-form-clear" onClick={this.clearForm}>
                Clear
              </button>
            )}  
        </form>
        </div>

        <DynamicTable 
        columns={this.tableColumns()} 
        data={this.props.data} 
        deleteAction={this.props.deleteBusOperator} 
        searchColumns = {this.searchColumns()} 
        handleSearch ={this.handleSearch} 
        handleClear = {this.handleClear}
        showOneRowData = {this.props.showOneBusOperatorData} 
        showOneRow = {this.props.showOneBusOperator}
        setCurrentPage = {this.props.setCurrentPageBusOperator}
        currentPageReducer = {this.props.currentPageReducerBusOperator}
        count= {this.props.busOperatorCount}
        showAll={this.props.showBusOperator}
        />
        <div className='csv-totalbox'>
      
        <div className="totals-box">
            <div>Total Amount: {this.props.total_ta}</div>
            <div>Total Profit: {this.props.total_profit}</div>
          </div>
          <button className="csv-button" onClick={this.handleCSVDownload}>
            Download
                {this.props.busOperatorAllData && (
          <CsvLink data={this.props.busOperatorAllData} columns={this.tableColumns()}/>
        )}
  </button>
          </div>
        </div>
    );
};
}
export default BusOperator