import React, { Component } from 'react';
import InputButton from '../../Components/InputButton';
import InputField from '../../Components/InputField';
import TopNav from '../../Components/TopNav'
import MyModal from '../../Components/Modal';
class Home extends Component {
  state = {
    showModal: false,
  };
  componentDidMount() {
    this.props.showBusOperator()
    this.props.showBus()
  }
handleOperatorChange = (event) => {
  const selectedOperatorId = event.target.value;
  const busData = this.props.busData
  console.log("this.props handle",this.props)
  console.log("hanleOpeator",selectedOperatorId)
  this.props.updateSelectedOperator(selectedOperatorId);
  return busData
};
handleSubmit = (event) => {
  event.preventDefault();
  const formData = {
      operator_id: this.getFieldValue(event, 'operator_id'),
      bus_id: this.getFieldValue(event, 'bus_id'),
      trip_id: this.getFieldValue(event, 'trip_id'),
      customer_name: this.getFieldValue(event, 'customer_name'),
      contact: this.getFieldValue(event, 'contact'),
      alternate_contact: this.getFieldValue(event, 'alternate_contact'),
      starting_point: this.getFieldValue(event, 'starting_point'),
      boarding_point: this.getFieldValue(event, 'boarding_point'),
      destination_point: this.getFieldValue(event, 'destination_point'),
      seat_numbers: this.getFieldValue(event, 'seat_numbers'),
      address: this.getFieldValue(event, 'address'),
      date_of_journey: this.getFieldValue(event, 'date_of_journey'),
      age: this.getFieldValue(event, 'age'),
      number_of_tickets: this.getFieldValue(event, 'number_of_tickets'),
      total_amount: this.getFieldValue(event, 'total_amount'),
      payment_status: this.getPaymentStatus(event),
      paid: this.getFieldValue(event, 'paid'),
      boarding_time: this.getFieldValue(event, 'boarding_time'),
      agents: this.getFieldValue(event, 'agents'),
  };
  this.props.postTrip(formData); // Dispatch the action
  // this.clearForm();
  this.setState({ formData, showModal: true }); // Show the modal
};
getFieldValue = (event, fieldName) => {
  const value = event.target[fieldName]?.value;
  return value !== undefined && value !== null ? value : this.props.showOneTripData[fieldName] || '';
};

getPaymentStatus = (event) => {
  const totalAmount = parseInt(event.target.total_amount.value);
  const paidAmount = parseInt(event.target.paid.value);
  return totalAmount === paidAmount ? 'completed' : `pending ${totalAmount - paidAmount}`;
};
clearForm = () => {
  ['operator_id', 'bus_id', 'trip_id', 'customer_name', 'contact', 'alternate_contact',
   'starting_point', 'boarding_point', 'destination_point', 'seat_numbers', 'address',
   'date_of_journey', 'age', 'number_of_tickets', 'total_amount', 'paid', 'remarks', 'agents']
  .forEach(fieldName => {
      document.getElementById(fieldName).value = '';
  });
  setTimeout(() => {
      document.getElementById('success').innerText = '';
  }, 5000);
};
handleCloseModal = () => {
  this.setState({ showModal: false }); // Close the modal
};
handlePrintBill = () => {
  const { customer_name, contact, date_of_journey, starting_point, destination_point, boarding_point, boarding_time, number_of_tickets, total_amount, paid, age, address, trip_id, seat_numbers } = this.state.formData;

  const bus = this.props.busData.find(bus => bus.id === this.state.formData.bus_id);

  const billContent = `
      Customer Name: ${customer_name}
      Contact: ${contact}
      Date of Journey: ${date_of_journey}
      Number of Tickets: ${number_of_tickets}
      Age: ${age}
      Address: ${address}
      PNR Number: ${trip_id}
      ${seat_numbers ? `Seat Numbers: ${seat_numbers}` : ''}
      
      Route: ${starting_point} - ${destination_point}
      Boarding Point: ${boarding_point}
      Boarding Time: ${boarding_time}
      Bus Name: ${bus ? bus.name : ''}
      
      Total Amount: ${total_amount}
      Paid: ${paid}
  `;


  console.log(billContent);

  // Open a new window to print the bill content
  const printWindow = window.open('', '_blank');
  printWindow.document.open();
  printWindow.document.write(`
    <html>
      <head>
        <title>Print Bill</title>
        <style>
          body {
            padding:30px;
            font-family: Arial, sans-serif;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <pre>${billContent}</pre>
        <script>
          // Automatically close the print window after printing
          window.onload = function() {
            window.print();
            
          };
        </script>
      </body>
    </html>
  `);
  printWindow.document.close();
};


handleSendWhatsAppMessage = ()=>{
  console.log("send whatsapp message")
}
  render() {
    return (
      <div>
        <TopNav logout={this.props.logout}/>
        <div className="trip-main">
            <form className="trip-form" onSubmit={this.handleSubmit}>
            <h3 id='success'></h3>

              <h3>Enter the Trip details here</h3>
                <InputField type="text" id="trip_id" name="trip_id" className="trip-form-input" placeholder={`PNR Number`}/>
                
                <InputField type="text" id="customer_name" name="customer_name" className="trip-form-input" placeholder="Enter the Customer Name" required/>
                <InputField type="text" id="contact" name="contact" className="trip-form-input" placeholder="Enter the contact" required/>
                <InputField type="text" id="alternate_contact" name="alternate_contact" className="trip-form-input" placeholder="Enter the alternate contact"/>
                <select id="age" name="age" className="trip-select" required>
                  <option value="">Select Age</option>
                  {[...Array(100)].map((_, index) => (
                    <option key={index + 1} value={index + 1}>{index + 1}</option>
                  ))}
                </select>             
                   <InputField type="text" id="address" name="address" className="trip-form-input" placeholder="Enter the Address" required/>
                <select
                    className='trip-select'
                    id='operator_id'
                    name='operator_id'
                    onChange={this.handleOperatorChange}
                    required
                >
                  <option value='' disabled selected>
                    Enter the Operator*
                  </option>
                      {Array.isArray(this.props.busOperatorData) &&
                        this.props.busOperatorData.map((operator) => (
                        <option key={operator.id} value={operator.id}>
                            {operator.name}
                        </option>
                        ))}
                 </select>
                <select className='trip-select' id='bus_id' name='bus_id' required>
                  <option value='' disabled selected>
                    Enter the Bus*
                  </option>
                  {console.log("busdata",this.props.busData)}
                  {Array.isArray(this.props.busData) &&
                    this.props.busData
                      .filter((bus) => bus.bus_operator_id == this.props.selectedOperatorId)
                      .map((bus) => (
                        
                        <option key={bus.id} value={bus.id}>
                          {bus.name}
                        </option>
                      ))}
                </select>
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
                <InputField type="text" id="boarding_time" name="boarding_time" className="trip-form-input" placeholder="Enter the Boarding Time.."/>
                <select id="number_of_tickets" name="number_of_tickets" className="trip-form-input" >
                <option value='' disabled selected>
                    Enter the Number of Tickets*
                  </option>
                  {[...Array(50)].map((_, index) => (

                    <option key={index + 1} value={index + 1}>{index + 1}</option>
                  ))}
                </select>
                <InputField type="text" id="seat_numbers" name="seat_numbers" className="trip-form-input" placeholder="Enter the Seat Number"/>
                <InputField type="text" id="total_amount" name="total_amount" className="trip-form-input" placeholder="Enter the total amount.." required/>
                <InputField type="text" id="paid" name="paid" className="trip-form-input" placeholder="Enter the paid amount.." required/>
                <InputField type="text" id="agents" name="agents" className="trip-form-input" placeholder="Enter if any agents present.."/>
                <InputButton className="trip-form-submit" value="Submit"/>
            </form>
            <MyModal
            show={this.state.showModal}
            handleClose={this.handleCloseModal}
            handlePrintBill={this.handlePrintBill}
            handleSendWhatsAppMessage={this.handleSendWhatsAppMessage}
          />
        </div>
      </div>
    );
  }
}
export default Home;
