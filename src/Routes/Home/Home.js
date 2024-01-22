import React, { Component } from 'react';

// import { users } from '../../api/users';
import DynamicTable from '../../Components/TableComponent'
import ModifyTableButton from '../../Components/ModifyTableButton';
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
    showTrip: []
  }
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
        // const tripData = this.props.showTrip.data; // Access data correctly
        // console.log(tripData);
    } catch (error) {
        console.error(error);
        // Handle error here
    }
}
handleSubmit(event) {
    event.preventDefault();
    const formData = {
      operator_id:event.target.bus_operator_id.value ,
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
            paid: event.target.paid.value,
            remarks: event.target.remarks.value,
            agents: event.target.agents.value,
    }
    this.props.postTrip(formData); // Dispatch the action
    console.log(formData,".,.,.,.,")
}
handleDate(){
  const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}/${month}/${day}`;
}
  render() {
    console.log("thisprops",this.props)
    
    const testData = this.props.data
        const data = Array.isArray(testData) ? testData : [];
    const allColumns = data.length > 0 ? Object.keys(data[0]).map(key => ({ Header: key, accessor: key })) : [];
    console.log("data,columns",data,allColumns)
    // const { userList, loading, error } = this.state;
    return (
      <div>
        <TopNav/>
        <div className="trip-main">
            <form action="/" className="trip-form">
              <h3>Enter the Trip details here</h3>
                <InputField type="text" id="PNR" name="PNR" className="trip-form-input" placeholder="Enter the PNR Number"/>
                <select className='trip-select' id="operator_id">
                  <option value=""  defaultValue>
                  Enter the Operator
                  </option>
                  <option>
                    bus operator name
                  </option>
                </select>
                {/* <InputField type="text" id="operator_id" name="operator_id"  className="trip-form-input" placeholder="Enter the bus operator ID.."/> */}
                <select className='trip-select' id="bus_id">
                <option value=""  defaultValue>
                  Enter the Bus
                  </option>
                  <option>
                    bus name
                  </option>
                </select>
                {/* <InputField type="text" id="bus_id" name="bus_id" className="trip-form-input" placeholder="Enter the bus ID.."/> */}
                <InputField type="text" id="CName" name="CName" className="trip-form-input" placeholder="Enter the Customer Name"/>
                <InputField type="text" id="contact" name="contact" className="trip-form-input" placeholder="Enter the contact"/>
                <InputField type="text" id="acontact" name="acontact" className="trip-form-input" placeholder="Enter the alternate contact"/>
                <InputField type="text" id="age" name="age" className="trip-form-input" placeholder="Enter the age"/>
                <InputField type="text" id="address" name="address" className="trip-form-input" placeholder="Enter the Address"/>
                <InputField type="date" id="bookingDate" name="bookingDate" className="trip-form-input"  placeholder="Enter todays date" required="required"/>
                <InputField type="date" id="journeyDate" name="journeyDate" className="trip-form-input" placeholder="Enter journey date" required="required"/>
                {/* value={} */}
              <InputField type="text" id="starting_point" name="starting_point" className="trip-form-input" placeholder="Enter the starting point..."/>
              <InputField type="text" id="destination" name="destination" className="trip-form-input" placeholder="Enter the Destination..."/>
              <InputField type="text" id="bording_point" name="bording_point" className="trip-form-input" placeholder="Enter the Bording Point"/>
              <InputField type="text" id="seat_number" name="seat_number" className="trip-form-input" placeholder="Enter the Seat Number"/>
                <InputField type="text" id="num_tickets" name="num_tickets" className="trip-form-input" placeholder="Enter the Number of Tickets"/>
                <InputField type="text" id="total_amount" name="total_amount" className="trip-form-input" placeholder="Enter the total amount.."/>
                <InputField type="text" id="paid" name="paid" className="trip-form-input" placeholder="Enter the paid amount.."/>
                <InputField type="text" id="remarks" name="remarks" className="trip-form-input" placeholder="Any Remarks.."/>
                <InputField type="text" id="agent" name="agent" className="trip-form-input" placeholder="Enter if any agents present.."/>
                <InputButton className="trip-form-submit" onSubmit={this.handleSubmit} value="Submit"/>
            </form>
        </div>
        <DynamicTable columns={allColumns} data={data} className="trip-table"/>
      </div>
    );
  }
}
export default Home;
