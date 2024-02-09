import React, { Component } from 'react';

import DynamicTable from '../../Components/TableComponent'
import DropDown from '../../Components/DropDown';
import SideBar from '../../Components/SideBar';
import InputButton from '../../Components/InputButton';
import InputField from '../../Components/InputField';
class Home extends Component {
  // state = {
  //   loading: false,
  //   error: false,
  //   userList: []
  // }
  // componentDidMount() {
  //   this.fetchUsers();
  // }
  // fetchUsers = () => {
  //   try {
  //     this.setState({ loading: true }, async () => {
  //       const data = await users();
  //       this.setState({ loading: false, error: false, userList: data.data.data });
  //     });
  //   } catch (error) {
  //     /* Derive proper parse error logic based on context */
  //     this.setState({ loading: false, error: JSON.stringify(error) });
  //   }
  // }
  state = {
    loading: false,
    error: false,
    showTrip: [],

  }
  handleSubmit = (event)=> {
     event.preventDefault();
    const showOneTripData = this.props.showOneTripData
    const form_pnr = event.target.trip_id.value !== '' ? event.target.trip_id.value : showOneTripData.trip_id;
    const form_bus_id = event.target.bus_id.value !== '' ? event.target.bus_id.value : showOneTripData.bus_id;
    const form_operator_id = event.target.operator_id.value !== '' ? event.target.operator_id.value : showOneTripData.operator_id;
    const form_customer_name = event.target.customer_name.value !== '' ? event.target.customer_name.value : showOneTripData.customer_name;
const form_contact = event.target.contact.value !== '' ? event.target.contact.value : showOneTripData.contact;
const form_alternate_contact = event.target.alternate_contact.value !== '' ? event.target.alternate_contact.value : showOneTripData.alternate_contact;
const form_age = event.target.age.value !== '' ? event.target.age.value : showOneTripData.age;
const form_address = event.target.address.value !== '' ? event.target.address.value : showOneTripData.address;
const form_date_of_journey = event.target.date_of_journey.value !== '' ? event.target.date_of_journey.value : showOneTripData.date_of_journey;
const form_starting_point = event.target.starting_point.value !== '' ? event.target.starting_point.value : showOneTripData.starting_point;
const form_destination_point = event.target.destination_point.value !== '' ? event.target.destination_point.value : showOneTripData.destination_point;
const form_boarding_point = event.target.boarding_point.value !== '' ? event.target.boarding_point.value : showOneTripData.boarding_point;
const form_number_of_tickets = event.target.number_of_tickets.value !== '' ? event.target.number_of_tickets.value : showOneTripData.number_of_tickets;
const form_seat_numbers = event.target.seat_numbers.value !== '' ? event.target.seat_numbers.value : showOneTripData.seat_numbers;
const form_total_amount = event.target.total_amount.value !== '' ? event.target.total_amount.value : showOneTripData.total_amount;
const form_paid = event.target.paid.value !== '' ? event.target.paid.value : showOneTripData.paid;
const form_remarks = event.target.remarks.value !== '' ? event.target.remarks.value : showOneTripData.remarks;
const form_agents = event.target.agents.value !== '' ? event.target.agents.value : showOneTripData.agents;
// if(form_total_amount===form_paid)
// {
//   const form_payment_status = "completed"
// }
// else{
//   const form_payment_status = `remaining ${form_total_amount-form_paid}`
// }
const formData = {
  trip_id:form_pnr,
  bus_id:form_bus_id,
  bus_operator_id:form_operator_id,
  customer_name: form_customer_name,
  contact: form_contact,
  alternate_contact: form_alternate_contact,
  age: form_age,
  address: form_address,
  date_of_journey: form_date_of_journey,
  starting_point: form_starting_point,
  destination_point: form_destination_point,
  boarding_point: form_boarding_point,
  number_of_tickets: form_number_of_tickets,
  seat_numbers: form_seat_numbers,
  total_amount: form_total_amount,
  paid: form_paid,
  payment_status:(parseInt(form_total_amount)==parseInt(form_paid))?"completed":`remaining ${form_total_amount-form_paid}`,
  remarks: form_remarks,
  agents: form_agents
};
console.log("formdata",formData)
if (this.props.showOneTripData) {
  // If there is editData in props, dispatch updateBusOperator action
  const id = this.props.showOneTripData.id;
  const updatedFormData = {
    ...formData,
    id: id,
  };
  this.props.updateTrip(updatedFormData);
} else {
  // If no editData, dispatch postBusOperator action
  this.props.postTrip(formData);
}

// Clear the form after submission
this.clearForm();
  }

  clearForm = () => {
    // Clear the form fields
    document.getElementById('operator_id').value = '';
  document.getElementById('bus_id').value = '';
  document.getElementById('trip_id').value = '';
  document.getElementById('customer_name').value = '';
  document.getElementById('contact').value = '';
  document.getElementById('alternate_contact').value = '';
  document.getElementById('starting_point').value = '';
  document.getElementById('boarding_point').value = '';
  document.getElementById('destination_point').value = '';
  document.getElementById('seat_numbers').value = '';
  document.getElementById('address').value = '';
  document.getElementById('date_of_journey').value = '';
  document.getElementById('age').value = '';
  document.getElementById('number_of_tickets').value = '';
  document.getElementById('total_amount').value = '';
  document.getElementById('paid').value = '';
  document.getElementById('remarks').value = '';
  document.getElementById('agents').value = '';

    this.props.clearTrip();
    console.log("clear form ", this.props.showOneTripData)
  };
  
  // constructor (props){
  //   super(props);
  //   this.fetchBus=this.fetchBus.bind(this);
  //   this.handleSubmit=this.handleSubmit.bind(this);
  // }
  componentDidMount() {
    console.log("this.state componentDId",this.state)

    this.fetchTrip();
  }
  async fetchTrip() {
    try {
        await this.props.showTrip();
        await this.props.showBus();
        await this.props.showBusOperator();
        this.props.setTableDataTrip(this.props.data)
            this.props.setSearchTermTrip('')
            
        // const tripData = this.props.showTrip.data; // Access data correctly
        // console.log(tripData);
    } catch (error) {
        console.error(error);
        // Handle error here
    }
}
handleOperatorChange = (event) => {
  const selectedOperatorId = event.target.value;
  console.log("this.props handle",this.props)
  this.props.updateSelectedOperator(selectedOperatorId);
  // Fetch buses based on the selected operator (you may need to implement this)
  // this.props.fetchBusesByOperator(selectedOperatorId);
};
  render() {


    const testData = this.props.tripData

        const data = Array.isArray(testData) ? testData : [];
    const allColumns = data.length > 0 ? Object.keys(data[0]) : [];
    const columns = allColumns.map(column => ({
      Header: column.charAt(0).toUpperCase() + column.slice(1).replace(/_/g, ' '), // Convert underscore to space and capitalize
      accessor: column,
    }));
    console.log("data,columns",columns)
    // const { userList, loading, error } = this.state;
    const { showOneTripData } = this.props;
        const isEditMode = !!showOneTripData && !!showOneTripData.trip_id
        console.log("buss",isEditMode)
        console.log("this.props",this.props)
        const { busOperatorData, busData, selectedOperatorId } = this.props || [];
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
                placeholder={isEditMode ? showOneTripData.trip_id : "Enter the PNR Number"}
              />
            </div>

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
                {Array.isArray(busOperatorData) &&
                  busOperatorData.map((operator) => (
                    <option key={operator.bus_operator_id} value={operator.bus_operator_id}>
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
                {Array.isArray(busData) &&
                  busData
                    .filter((bus) => bus.operator_id === selectedOperatorId)
                    .map((bus) => (
                      <option key={bus.bus_id} value={bus.bus_id}>
                        {bus.name}
                      </option>
                    ))}
              </select>
            </div>
            </div>

<div className="form-row">
            <div className="form-group">
              <label htmlFor="customer_name">Customer Name</label>
              <InputField
                type="text"
                id="customer_name"
                name="customer_name"
                className="trip-form-input"
                placeholder={isEditMode ? showOneTripData.customer_name : "Enter the Customer Name"}
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
                placeholder={isEditMode ? showOneTripData.contact : "Enter the contact"}
                required={isEditMode ? false : true}
              />
            </div>
            <div className="form-group">
              <label htmlFor="alternate_contact">Alternate Contact</label>
              <InputField
                type="text"
                id="alternate_contact"
                name="alternate_contact"
                className="trip-form-input"
                placeholder={isEditMode ? showOneTripData.alternate_contact : "Enter the alternate contact"}
              />
              </div>
              </div>

<div className="form-row">
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <InputField
                type="text"
                id="age"
                name="age"
                className="trip-form-input"
                placeholder={isEditMode ? showOneTripData.age : "Enter the age"}
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
                placeholder={isEditMode ? showOneTripData.address : "Enter the Address"}
                required={isEditMode?false:true}
              />
              </div>

            <div className="form-group">
              <label htmlFor="date_of_journey">Date of Journey</label>
              <InputField
                type="date"
                id="date_of_journey"
                name="date_of_journey"
                className="trip-form-input"
                placeholder={isEditMode ? showOneTripData.date_of_journey : "Enter journey date"}
                required={isEditMode?false:true}
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
                placeholder={isEditMode ? showOneTripData.starting_point : "Enter the starting point..."}
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
                placeholder={isEditMode ? showOneTripData.destination_point : "Enter the Destination..."}
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
                placeholder={isEditMode ? showOneTripData.boarding_point : "Enter the Bording Point"}
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
                placeholder={isEditMode ? showOneTripData.number_of_tickets : "Enter the Number of Tickets"}
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
                placeholder={isEditMode ? showOneTripData.seat_numbers : "Enter the Seat Number"}
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
                placeholder={isEditMode ? showOneTripData.total_amount : "Enter the total amount.."}
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
      placeholder={isEditMode ? showOneTripData.paid : "Enter the paid amount.."}
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
      placeholder={isEditMode ? showOneTripData.remarks : "Any Remarks.."}
    />
  </div>

  <div className="form-group">
    <label htmlFor="agents">Agents</label>
    <InputField
      type="text"
      id="agents"
      name="agents"
      className="trip-form-input"
      placeholder={isEditMode ? showOneTripData.agents : "Enter if any agents present.."}
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
            <DynamicTable columns={columns} data={data} deleteAction={this.props.deleteTrip} searchData = {this.props.searchData}setSearchTerm ={this.props.setSearchTermTrip} showOneRowData = {this.props.showOneTripData} showOneRow = {this.props.showOneTrip}/>
      </div>
    </div>
    );
  }
}
export default Home;
