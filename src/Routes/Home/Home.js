import React, { Component } from 'react';

// import { users } from '../../api/users';
// import DynamicTable from '../../Components/TableComponent'
import InputButton from '../../Components/InputButton';
import InputField from '../../Components/InputField';
import TopNav from '../../Components/TopNav'
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
    postTrip:[],
    showBus:[],
    showBusOperator:[]
  }
  // constructor (props){
  //   super(props);
  //   this.fetchBus=this.fetchBus.bind(this);
  //   this.handleSubmit=this.handleSubmit.bind(this);
  // }
  componentDidMount() {
    console.log("this.state componentDId",this.state)
    this.props.showBusOperator()
    this.props.showBus()

    // this.fetchTrip();
  }
//   async fetchTrip() {
//     try {
//         await this.props.showTrip();
//         // const tripData = this.props.showTrip.data; // Access data correctly
//         // console.log(tripData);
//     } catch (error) {
//         console.error(error);
//         // Handle error here
//     }
// }
handleOperatorChange = (event) => {
  const selectedOperatorId = event.target.value;
  console.log("this.props handle",this.props)
  console.log("hanleOpeator",selectedOperatorId)
  this.props.updateSelectedOperator(selectedOperatorId);
  // Fetch buses based on the selected operator (you may need to implement this)
  // this.props.fetchBusesByOperator(selectedOperatorId);
};
handleSubmit = (event)=> {
    event.preventDefault();
    const formData = {
            operator_id:event.target.operator_id.value ,
            bus_id:event.target.bus_id.value ,
            trip_id: event.target.trip_id.value,
            customer_name:event.target.customer_name.value,
            contact:event.target.contact.value,
            alternate_contact: event.target.alternate_contact.value,
            starting_point:event.target.starting_point.value ,
            boarding_point:event.target.boarding_point.value,
            destination_point: event.target.destination_point.value,
            seat_numbers:event.target.seat_numbers.value,
            address:event.target.address.value,
            date_of_journey:event.target.date_of_journey.value,
            age: event.target.age.value,
            number_of_tickets:event.target.number_of_tickets.value ,
            total_amount: event.target.total_amount.value,
            payment_status:(parseInt(event.target.total_amount.value)==parseInt(event.target.paid.value))?"completed":`remaining ${event.target.total_amount.value-event.target.paid.value}`,
            paid: event.target.paid.value,
            remarks: event.target.remarks.value,
            agents: event.target.agents.value,
    }
    // console.log("this.props",this.props)
    this.props.postTrip(formData); // Dispatch the action
    console.log(formData,".,.,.,.,")
    document.getElementById('success').innerText = 'Details entered successfully';
}
clearForm = ()=>{
    // Clear the form fields
  //   document.getElementById('operator_id').value = '';
  // document.getElementById('bus_id').value = '';
  // document.getElementById('trip_id').value = '';
  // document.getElementById('customer_name').value = '';
  // document.getElementById('contact').value = '';
  // document.getElementById('alternate_contact').value = '';
  // document.getElementById('starting_point').value = '';
  // document.getElementById('boarding_point').value = '';
  // document.getElementById('destination_point').value = '';
  // document.getElementById('seat_numbers').value = '';
  // document.getElementById('address').value = '';
  // document.getElementById('date_of_journey').value = '';
  // document.getElementById('age').value = '';
  // document.getElementById('number_of_tickets').value = '';
  // document.getElementById('total_amount').value = '';
  // document.getElementById('paid').value = '';
  // document.getElementById('remarks').value = '';
  // document.getElementById('agents').value = '';
  // document.getElementById('success').innerText = '';

  }

// handleDate(){
//   const today = new Date();
//     const year = today.getFullYear();
//     let month = today.getMonth() + 1;
//     let day = today.getDate();
//     month = month < 10 ? `0${month}` : month;
//     day = day < 10 ? `0${day}` : day;

//     return `${year}/${month}/${day}`;
// }
  render() {
    console.log("thisprops",this.props)
    const { busOperatorData, busData, selectedOperatorId } = this.props || [];


    // const testData = this.props.tripData
    //     const data = Array.isArray(testData) ? testData : [];
    // const allColumns = data.length > 0 ? Object.keys(data[0]) : [];
    // const columns = allColumns.map(column => ({
    //   Header: column.charAt(0).toUpperCase() + column.slice(1).replace(/_/g, ' '), // Convert underscore to space and capitalize
    //   accessor: column,
    // }));
    // console.log("data,columns",columns)
    // const { userList, loading, error } = this.state;
    return (
      <div>
        <TopNav logout={this.props.logout}/>
        <h3 id='success'></h3>
        <div className="trip-main">
            <form className="trip-form" onSubmit={this.handleSubmit}>
              <h3>Enter the Trip details here</h3>
                <InputField type="text" id="trip_id" name="trip_id" className="trip-form-input" placeholder="Enter the PNR Number"/>
                <select
                    className='trip-select'
                    id='operator_id'
                    name='operator_id'
                    onChange={this.handleOperatorChange}
                    required
                >
                  <option value='' disabled selected>
                    Enter the Operator
                  </option>
                      {Array.isArray(busOperatorData) &&
                        busOperatorData.map((operator) => (
                        <option key={operator.id} value={operator.id}>
                            {operator.name}
                        </option>
                        ))}
                 </select>
                {/* <InputField type="text" id="operator_id" name="operator_id"  className="trip-form-input" placeholder="Enter the bus operator ID.."/> */}
                <select className='trip-select' id='bus_id' name='bus_id' required>
                  <option value='' disabled selected>
                    Enter the Bus
                  </option>
                  {console.log("busData",busData)}
                  {console.log("busdara",selectedOperatorId)}
                  {Array.isArray(busData) &&
                  
                    busData
                      .filter((bus) => bus.bus_operator_id == selectedOperatorId)
                      .map((bus) => (
                        
                        <option key={bus.id} value={bus.id}>
                          {bus.name}
                        </option>
                      ))}
                </select>
                {/* <InputField type="text" id="bus_id" name="bus_id" className="trip-form-input" placeholder="Enter the bus ID.."/> */}
                <InputField type="text" id="customer_name" name="customer_name" className="trip-form-input" placeholder="Enter the Customer Name" required/>
                <InputField type="text" id="contact" name="contact" className="trip-form-input" placeholder="Enter the contact" required/>
                <InputField type="text" id="alternate_contact" name="alternate_contact" className="trip-form-input" placeholder="Enter the alternate contact"/>
                <InputField type="text" id="age" name="age" className="trip-form-input" placeholder="Enter the age" required/>
                <InputField type="text" id="address" name="address" className="trip-form-input" placeholder="Enter the Address" required/>
                <InputField
                 type="date" 
                 id="date_of_journey"
                 name="date_of_journey" 
                 className="trip-form-input" 
                 placeholder="Enter journey date" 
                 required="required"
                 min={new Date().toISOString().split('T')[0]} 
                 />
                <InputField type="text" id="starting_point" name="starting_point" className="trip-form-input" placeholder="Enter the starting point..." required/>
                <InputField type="text" id="destination_point" name="destination_point" className="trip-form-input" placeholder="Enter the Destination..." required/>
                <InputField type="text" id="boarding_point" name="boarding_point" className="trip-form-input" placeholder="Enter the Bording Point" required/>
                <InputField type="text" id="number_of_tickets" name="number_of_tickets" className="trip-form-input" placeholder="Enter the Number of Tickets" required/>
                <InputField type="text" id="seat_numbers" name="seat_numbers" className="trip-form-input" placeholder="Enter the Seat Number" required/>
                <InputField type="text" id="total_amount" name="total_amount" className="trip-form-input" placeholder="Enter the total amount.." required/>
                <InputField type="text" id="paid" name="paid" className="trip-form-input" placeholder="Enter the paid amount.." required/>
                <InputField type="text" id="remarks" name="remarks" className="trip-form-input" placeholder="Any Remarks.."/>
                <InputField type="text" id="agents" name="agents" className="trip-form-input" placeholder="Enter if any agents present.."/>
                <InputButton className="trip-form-submit" value="Submit"/>
            </form>
            
        </div>
        {/* <DynamicTable columns={columns} data={data} deleteAction={this.props.deleteTrip} className="trip-table"/> */}
      </div>
    );
  }
}
export default Home;
