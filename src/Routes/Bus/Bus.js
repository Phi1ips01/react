import React, { Component } from 'react';
import InputField from '../../Components/InputField';
import InputButton from '../../Components/InputButton';
import DynamicTable from '../../Components/TableComponent';
import SideBar from '../../Components/SideBar'
import DropDown from '../../Components/DropDown'
import CsvLink from '../../Components/CsvLink'

class Bus extends Component {
    componentDidMount() {
        this.props.showBusOperator();
      this.fetchBus();
    }
       async fetchBus() {
        try {
            await this.props.showBus(0,10);
            this.props.setSearchTermBus('')
        } catch (error) {
            console.error(error);
            // Handle error here
        }
    }
    handleOperatorChange = (event) => {
      const selectedOperatorId = event.target.value;
      console.log("this.props handle",this.props)
      this.props.updateSelectedOperator(selectedOperatorId);
    }
    handleCSVDownload = ()=>{
      this.props.showAllActionBus()
      
    }
    handleSubmit=(event) => {
        event.preventDefault();
        const showOneBusData = this.props.showOneBusData
        const getFormData = (event, defaultValue, prop) => {
          return event.target[prop].value !== '' ? event.target[prop].value : defaultValue[prop];
        };
        const form_bus_operator_id = getFormData(event, showOneBusData, 'operator_id');
        const form_name = getFormData(event, showOneBusData, 'name');
        const form_type = getFormData(event, showOneBusData, 'type');
        const form_share = getFormData(event, showOneBusData, 'share');
        const formData = {
        bus_operator_id:form_bus_operator_id,
        name:form_name,
        type:form_type,
        share:form_share,
        }
        if (this.props.showOneBusData && this.props.showOneBusData.id) {
          const id = this.props.showOneBusData.id
          const updatedFormData = {
            ...formData,
            id: id,
          }
          this.props.updateBus(updatedFormData);
          document.getElementById('success').innerText = 'Details updated successfully';

        } else {
          this.props.postBus(formData);
          document.getElementById('success').innerText = 'Details entered successfully';

        }
        this.clearForm();
      };
    
      clearForm = () => {
        document.querySelectorAll('form input').forEach(input => input.value = '');
        this.props.clearBus();
        setTimeout(() => {
          document.getElementById('success').innerText = '';
        }, 5000);
      };    
      tableColumns = ()=>{
        const data = Array.isArray(this.props.busData)
  ? this.props.busData.map(({ bus_operator_id, ...rest }) => rest)
  : [];

        const allColumns = data.length > 0 ? Object.keys(data[0]) : [];
        const columns = allColumns.map(column => ({
          Header: column.charAt(0).toUpperCase() + column.slice(1).replace(/_/g, ' '), // Convert underscore to space and capitalize
          accessor: column,
        }));
        return columns
      }
      searchColumns = ()=>{
        const data = Array.isArray(this.props.busData)
        ? this.props.busData.map(({ bus_operator_name, name, ...rest }) => ({ bus_operator_name, name }))
        : [];
      
        console.log("bus darta" ,data)
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
        let operatorId=''
        if(searchCol === "bus_operator_name")
        {
           operatorId = "bus_operator_id"
        }
        else{
          operatorId = 'name'
        }
        console.log("handlesearch",operatorId,searchKey)

        // Find the bus_operator_id corresponding to the selected bus_operator_name
        
        this.props.setSearchTermBus(operatorId, searchKey);
      }
        render() {

        const isEditMode = !!this.props.showOneBusData && !!this.props.showOneBusData.id
    return (
        <div>
            
            <SideBar/>
            <DropDown logout={this.props.logout}/>
           <div className="default-main">
        <form  onSubmit={this.handleSubmit} className="default-form">
        <h3 id='success'></h3>

          <h3>Enter the Bus details here</h3>
         
          <select 
          className='default-select' 
          id="operator_id" 
          required = {isEditMode ? false : true}>
          <option value="" disabled selected>{isEditMode?this.props.showOneBusData.bus_operator_id:'Select the Operator'}</option>
          {Array.isArray(this.props.showBusOperatorData) &&
              this.props.showBusOperatorData.map(operator => {
                return (
                  <option key={operator.id} value={operator.id}>
                    {operator.name}
                  </option>
                );
              })}
        </select>
        <InputField
            type="text"
            id="name"
            name="name"
            className="default-form-input"
            placeholder={isEditMode ? this.props.showOneBusData.name : "Enter the Name"}
            required = {isEditMode ? false : true}
          />
          <select 
          name="type" 
          id="type" 
          className="default-select"
          required = {isEditMode ? false : true}>
                      <option value="" disabled selected>Select the Bus</option>

                <option value="volvo">Volvo</option>
                <option value="Full AC">FUll AC</option>
                <option value="Second Seater">Second Seater</option>
            </select>
            <InputField
              type="text"
              id="share"
              name="share"
              className="default-form-input"
              placeholder={isEditMode ? this.props.showOneBusData.share : "Enter the share in %"}
              required = {isEditMode ? false : true}
            />        
           
            <InputButton type="submit" id="inputButton" className="default-form-submit" value={!isEditMode ? 'Submit' : 'Update'}/>
            {isEditMode && (
              <button type="button" className="default-form-clear" onClick={this.clearForm}>
                Clear
              </button>
            )}
        </form>
        <DynamicTable 
        columns={this.tableColumns()} 
        data={this.props.busData} 
        deleteAction={this.props.deleteBus} 
        searchColumns = {this.searchColumns()} 
        handleSearch ={this.handleSearch} 
        showOneRowData = {this.props.showOneBusData} 
        showOneRow = {this.props.showOneBus}
        setCurrentPage = {this.props.setCurrentPageBus}
        currentPageReducer = {this.props.currentPageReducerBus}
        count= {this.props.busCount}
        showAll={this.props.showBus}
        dataCsv = {this.props.busAllData}
        showAllCsv = {this.props.showAllActionBus}
        />
          <button className="csv-button" onClick={this.handleCSVDownload}>
            Download
                {this.props.busAllData && (
          <CsvLink data={this.props.busAllData} columns={this.tableColumns()}/>
        )}
  </button>
</div>
        </div>
    ); 
};
}
export default Bus
 