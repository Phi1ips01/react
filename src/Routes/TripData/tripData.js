import React, { Component } from 'react';
import CsvLink from '../../Components/CsvLink'
import DynamicTable from '../../Components/TableComponent'
import DropDown from '../../Components/DropDown';
import SideBar from '../../Components/SideBar';
import InputButton from '../../Components/InputButton';
import InputField from '../../Components/InputField';
class TripData extends Component {
  handleSubmit = (event)=> {
     event.preventDefault();
     const showOneTripData = this.props.showOneTripData;
     const getFormFieldValue = (fieldName) => {
      console.log("event",event.target[fieldName].value)

      return event.target[fieldName].value !== '' ? event.target[fieldName].value : showOneTripData[fieldName];
  };
  const formFields = [
    'trip_id','bus_id',
    'operator_id','customer_name',
    'contact','alternate_contact',
    'age','address',
    'date_of_journey','starting_point',
    'destination_point','boarding_point',
    'number_of_tickets','seat_numbers',
    'total_amount','paid',
    'remarks','agents'
  ];
  const formData = {};
  formFields.forEach(fieldName => {
    formData[fieldName] = getFormFieldValue(fieldName);
  });
  formData.payment_status = parseInt(formData.total_amount) === parseInt(formData.paid)
    ? 'completed'
    : `pending ${formData.total_amount - formData.paid}`;
  
if (this.props.showOneTripData) {
  const id = this.props.showOneTripData.id;
  const updatedFormData = {
    ...formData,
    id: id,
  };
  console.log("update trip",this.props.showOneTripData)
  this.props.updateTrip(updatedFormData);
} else {
  this.props.postTrip(formData);
}
this.clearForm();
  }
  clearForm = () => {
      //  document.querySelectorAll('form input').forEach(input => input.value = '');
      // document.querySelectorAll('form select').forEach(select =>select.value = '')
    this.props.clearTrip();
    console.log("clear form ", this.props.showOneTripData)
  };
  handleCSVDownload =  async ()=>{
     await this.props.showAllActionTrip()
  }
  componentDidMount() {
    console.log("this.state componentDId",this.state)
    this.fetchTrip();
  }
  async fetchTrip() {
    try {
        await this.props.showTrip(0,10);
        await this.props.showBus();
        await this.props.showBusOperator();
    } catch (error) {
        console.error(error);
    }
}
handleOperatorChange = (event) => {
  const selectedOperatorId = event.target.value;
  this.props.updateSelectedOperator(selectedOperatorId);
};
tableColumns = ()=>{
  const data = Array.isArray(this.props.tripData)
  ? this.props.tripData.map(({ operator_id,bus_id, ...rest }) => rest)
  : [];
  
  const allColumns = data.length > 0 ? Object.keys(data[0]) : [];
  const columns = allColumns.map(column => ({
    Header: column === 'trip_id' ? 'PNR Number' : column.charAt(0).toUpperCase() + column.slice(1).replace(/_/g, ' '),
    accessor: column,
  }));
  return columns
}
searchColumns = ()=>{
  const data = Array.isArray(this.props.tripData)
  ? this.props.tripData.map(({ operator_name,bus_name,date_of_journey,customer_name,payment_status, ...rest }) => ({ operator_name,bus_name,date_of_journey,customer_name,payment_status }))
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
  let searchCol = e.target.searchCol.value;
  let searchKey = e.target.searchKey.value;
  let operatorId = ''
  if(searchCol === "operator_name")
  {
     operatorId = "operator_id"
  }
  else if(searchCol === "bus_name")
  {
    operatorId = "bus_id"
  }
  
  else{
    operatorId = searchCol
  }
  console.log("handlesearch",operatorId,searchKey)        
  this.props.setSearchTermTrip(operatorId, searchKey);
}
 handleClear = (e) => {
this.props.setSearchTermTrip('','')
  // Clear the input field value
  document.getElementById('searchKey').value = '';
  // Reset the select element to its default value
  document.getElementById('searchCol').value = '';
};

  render() {
      console.log("this.props.tripdatra",this.props.tripData)
        const isEditMode = !!this.props.showOneTripData && !!this.props.showOneTripData.trip_id
    return (
      <div>
      {isEditMode && (
      <div className='default-main'>
        <form className="default-form" onSubmit={this.handleSubmit}>
              <h3>Enter the Trip details to be Updated</h3>
{console.log("this.props",this.props)}
<div className="form-row">
              <div className="form-group">
              <label htmlFor="trip_id">PNR Number</label>
              <InputField
                type="text"
                id="trip_id"
                name="trip_id"
                className="trip-form-input"
                placeholder={isEditMode ? this.props.showOneTripData.trip_id : "Enter the PNR Number"}
              />
            </div>
            <div className="form-group">
              <label htmlFor="customer_name">Customer Name</label>
              <InputField
                type="text"
                id="customer_name"
                name="customer_name"
                className="trip-form-input"
                placeholder={isEditMode ? this.props.showOneTripData.customer_name : "Enter the Customer Name"}
                required={isEditMode ? false : true}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact">Contact</label>
              <InputField
                type="text"
                id="contact"
                name="contact"
                className="trip-form-input"
                placeholder={isEditMode ? this.props.showOneTripData.contact : "Enter the contact"}
                required={isEditMode ? false : true}
              />
            </div>
            </div>
<div className="form-row">
           
            <div className="form-group">
              <label htmlFor="alternate_contact">Alternate Contact</label>
              <InputField
                type="text"
                id="alternate_contact"
                name="alternate_contact"
                className="trip-form-input"
                placeholder={isEditMode ? this.props.showOneTripData.alternate_contact : "Enter the alternate contact"}
              />
              </div>
              <div className="form-group">
              <label htmlFor="age">Age</label>
              <InputField
                type="text"
                id="age"
                name="age"
                className="trip-form-input"
                placeholder={isEditMode ? this.props.showOneTripData.age : "Enter the age"}
                required={isEditMode?false:true}
              />
              </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <InputField
                type="text"
                id="address"
                name="address"
                className="trip-form-input"
                placeholder={isEditMode ? this.props.showOneTripData.address : "Enter the Address"}
                required={isEditMode?false:true}
              />
              </div>
              </div>
<div className="form-row">
             <div className="form-group">
              <label htmlFor="operator_id">Operator ID</label>
              <select
                className='trip-select'
                id='operator_id'
                name='operator_id'
                onChange={this.handleOperatorChange}
              >
                <option value='' disabled selected>
                  Enter the Operator
                </option>
                {console.log("busOperatorData",this.props.busOperatorData)}
                  {Array.isArray(this.props.busOperatorData) &&
                  this.props.busOperatorData.map((operator) => (                  
                    <option key={operator.id} value={operator.id}>
                      {operator.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="bus_id">Bus</label>
              <select className='trip-select' id='bus_id' name='bus_id'>
                <option value='' disabled selected>
                  Enter the Bus
                </option>
                  {console.log("busdara",this.props.selectedOperatorID)}
                  {console.log("busdata",this.props.busData)}
                {Array.isArray(this.props.busData) &&
                  this.props.busData   
                  .filter((bus) => bus.bus_operator_id == this.props.selectedOperatorID)
                    .map((bus) => (
                      <option key={bus.id} value={bus.id}>
                        {bus.name}
                      </option>
                    ))}
              </select>
            </div> 
            <div className="form-group">
              <label htmlFor="date_of_journey">Date of Journey</label>
              <InputField
                type="date"
                id="date_of_journey"
                name="date_of_journey"
                className="trip-form-input"
                placeholder={isEditMode ? this.props.showOneTripData.date_of_journey : "Enter journey date"}
                required={isEditMode?false:true}
                min={new Date().toISOString().split('T')[0]} 
              />
              </div>
              </div>
<div className="form-row">
              <div className="form-group">
                <label htmlFor="starting_point">Starting Point</label>
              <InputField
                type="text"
                id="starting_point"
                name="starting_point"
                className="trip-form-input"
                placeholder={isEditMode ? this.props.showOneTripData.starting_point : "Enter the starting point..."}
                required={isEditMode?false:true}
              />
              </div>
            <div className="form-group">
              <label htmlFor="destination_point">Destination Point</label>
              <InputField
                type="text"
                id="destination_point"
                name="destination_point"
                className="trip-form-input"
                placeholder={isEditMode ? this.props.showOneTripData.destination_point : "Enter the Destination..."}
                required={isEditMode?false:true}
              />
              </div>
            <div className="form-group">
              <label htmlFor="boarding_point">Boarding Point</label>
              <InputField
                type="text"
                id="boarding_point"
                name="boarding_point"
                className="trip-form-input"
                placeholder={isEditMode ? this.props.showOneTripData.boarding_point : "Enter the Bording Point"}
                required={isEditMode?false:true}
              />
              </div>
              </div>
<div className="form-row">
            <div className="form-group">
              <label htmlFor="number_of_tickets">Number of Tickets</label>
              <InputField
                type="text"
                id="number_of_tickets"
                name="number_of_tickets"
                className="trip-form-input"
                placeholder={isEditMode ? this.props.showOneTripData.number_of_tickets : "Enter the Number of Tickets"}
                required={isEditMode?false:true}
              />
              </div>
            <div className="form-group">
              <label htmlFor="seat_numbers">Seat Numbers</label>
              <InputField
                type="text"
                id="seat_numbers"
                name="seat_numbers"
                className="trip-form-input"
                placeholder={isEditMode ? this.props.showOneTripData.seat_numbers : "Enter the Seat Number"}
                required={isEditMode?false:true}
              />
              </div>
              <div className="form-group">
                <label htmlFor="total_amount">Total Amount</label>
              <InputField
                type="text"
                id="total_amount"
                name="total_amount"
                className="trip-form-input"
                placeholder={isEditMode ? this.props.showOneTripData.total_amount : "Enter the total amount.."}
                required={isEditMode?false:true}
              />
              </div>
              </div>
<div className="form-row">
  <div className="form-group">
    <label htmlFor="paid">Paid</label>
    <InputField
      type="text"
      id="paid"
      name="paid"
      className="trip-form-input"
      placeholder={isEditMode ? this.props.showOneTripData.paid : "Enter the paid amount.."}
      required={isEditMode ? false : true}
    />
  </div>
  <div className="form-group">
    <label htmlFor="remarks">Any Remarks</label>
    <InputField
      type="text"
      id="remarks"
      name="remarks"
      className="trip-form-input"
      placeholder={isEditMode ? this.props.showOneTripData.remarks : "Any Remarks.."}
    />
  </div>
  <div className="form-group">
    <label htmlFor="agents">Agents</label>
    <InputField
      type="text"
      id="agents"
      name="agents"
      className="trip-form-input"
      placeholder={isEditMode ? this.props.showOneTripData.agents : "Enter if any agents present.."}
    />
  </div>
</div>
              <InputButton type="submit" id="inputButton" className="default-form-submit" value={!isEditMode ? 'Submit' : 'Update'}/>
        {isEditMode && (
          <button type="button" className="default-form-clear" onClick={this.clearForm}>
            Clear
          </button>
            )}
            </form>
      </div>
      )}
       <DropDown logout={this.props.logout}/>
            <SideBar/>
            <div className="default-main">
            <DynamicTable 
              columns={this.tableColumns()} 
              data={this.props.tripData} 
              deleteAction={this.props.deleteTrip} 
              searchColumns = {this.searchColumns()}
              handleSearch ={this.handleSearch} 
              handleClear = {this.handleClear}
              showOneRowData = {this.props.showOneTripData} 
              showOneRow = {this.props.showOneTrip}
              setCurrentPage = {this.props.setCurrentPageTrip}
              currentPageReducer = {this.props.currentPageReducerTrip}
              count= {this.props.tripCount}
              showAll={this.props.showTrip}

              />
                <button className="csv-button" onClick={this.handleCSVDownload}>
                  Download
                {this.props.tripAllData && (
                  <>
                {console.log("this.props.tripdata",this.props.tripAllData)}
          <CsvLink data={this.props.tripAllData} name="customer" columns={this.tableColumns()}/>
          </>
        )}
  </button>
      </div>
    </div>
    );
  }
}
export default TripData;
