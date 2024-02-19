import React, { Component } from 'react';
import InputField from '../../Components/InputField';
import InputButton from '../../Components/InputButton';
import DynamicTable from '../../Components/TableComponent';
import SideBar from '../../Components/SideBar'
import DropDown from '../../Components/DropDown'
import CsvLink from '../../Components/CsvLink'

class Bus extends Component {
    state = {
        loading: false,
        error: false,
        showBus:[],
        postBus:[],
        showBusOperator:[]
      }
    //   constructor (props){
    //     super(props);
    //     this.fetchBus=this.fetchBus.bind(this);
    //     this.handleSubmit=this.handleSubmit.bind(this);
    //   }
    componentDidMount() {
      
        this.props.showBusOperator(0,20);
      
      this.fetchBus();
    }

       async fetchBus() {
        try {
            await this.props.showBus(0,10);
            console.log("fetchbus",this.props)
            this.props.setTableDataBus(this.props.data)
            this.props.setSearchTermBus('')

            // const busData = this.props.showBus; // Access data correctly
            // console.log("fetchbus busadata",busData);
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
        const form_bus_operator_id = event.target.operator_id.value!==''?event.target.operator_id.value:showOneBusData.bus_operator_id
        // const form_bus_id = event.target.bus_id.value!==''?event.target.bus_id.value:showOneBusData.bus_id
        const form_name = event.target.name.value!==''?event.target.name.value:showOneBusData.name
        const form_type = event.target.type.value!==''?event.target.type.value:showOneBusData.type
        const form_share = event.target.share.value!==''?event.target.share.value:showOneBusData.share
        const formData = {
        bus_operator_id:form_bus_operator_id,
        // bus_id:form_bus_id,
        name:form_name,
        type:form_type,
        share:form_share,
        // total_amount: event.target.bus_total_payment.value,
        // share_deducted_amount: event.target.share_deduced_amount.value,
        
        }
        if (this.props.showOneBusData && this.props.showOneBusData.id) {
          // If there is editData in props, dispatch updateBusOperator action
          const id = this.props.showOneBusData.id
          const updatedFormData = {
            ...formData,
            id: id,
          }
          this.props.updateBus(updatedFormData);
        } else {
          // If no editData, dispatch postBusOperator action
          this.props.postBus(formData);
        }
    
        // Clear the form after submission
        this.clearForm();
      };
    
      clearForm = () => {
        // Clear the form fields
        document.getElementById('operator_id').value = '';
        document.getElementById('name').value = '';
        document.getElementById('type').value = '';
        document.getElementById('share').value = '';
        // document.getElementById('bus_id').value = '';
        this.props.clearBus();
        console.log("clear form ", this.props.showOneBusData)
      };
  
    
        render() {
            // const { loading, error } = this.props;
            console.log("render1",this.props)
            const { showBusOperatorData } = this.props || [];
            console.log("showBUsOperaotrData",showBusOperatorData)
            const testData = this.props.busData
            
            if (!showBusOperatorData || !testData) {
              // Render a loading state or return null until the data is available
              return (
                <div>Loading...</div>
              );
            }
            else
            {
            const data = Array.isArray(testData) ? testData : [];
        const allColumns = data.length > 0 ? Object.keys(data[0]) : [];
    
        const columns = allColumns.map(column => ({
          Header: column.charAt(0).toUpperCase() + column.slice(1).replace(/_/g, ' '), // Convert underscore to space and capitalize
          accessor: column,
        }));
        console.log("data,columns",data,allColumns)
            // const { loading, error, data } = this.props.showBus;
            const { showOneBusData } = this.props;
        const isEditMode = !!showOneBusData && !!showOneBusData.id
        console.log("buss",isEditMode)
        // const update_bus_operator = showBusOperatorData.
    return (
        <div>
            
            <SideBar/>
            <DropDown logout={this.props.logout}/>
           <div className="default-main">
        <form  onSubmit={this.handleSubmit} className="default-form">
          <h3>Enter the Bus details here</h3>
         
          <select 
          className='default-select' 
          id="operator_id" 
          required = {isEditMode ? false : true}>
          <option value="" disabled selected>{isEditMode?showOneBusData.bus_operator_id:'Select the Operator'}</option>
          {Array.isArray(showBusOperatorData) &&
              showBusOperatorData.map(operator => {
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
            placeholder={isEditMode ? showOneBusData.name : "Enter the Name"}
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
              placeholder={isEditMode ? showOneBusData.share : "Enter the share in %"}
              required = {isEditMode ? false : true}
            />        
           
            <InputButton type="submit" id="inputButton" className="default-form-submit" value={!isEditMode ? 'Submit' : 'Update'}/>
            {isEditMode && (
              <button type="button" className="default-form-clear" onClick={this.clearForm}>
                
                Clear
              </button>
            )}
        </form>
            
            
              {console.log("bus table this.props",this.props)}
        <DynamicTable 
        columns={columns} 
        data={data} 
        deleteAction={this.props.deleteBus} 
        searchData = {this.props.searchData} 
        setSearchTerm ={this.props.setSearchTermBus} 
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
                {this.props.busAllData && (
          <CsvLink data={this.props.busAllData} />
        )}
  </button>
</div>
        </div>

    );
          }
};
}
export default Bus
 