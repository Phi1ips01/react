import React, { Component } from 'react';
import InputField from '../../Components/InputField';
import InputButton from '../../Components/InputButton';
import DynamicTable from '../../Components/TableComponent';
import SideBar from '../../Components/SideBar'
import DropDown from '../../Components/DropDown'
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
      
        this.props.showBusOperator();
      
      this.fetchBus();
    }

       async fetchBus() {
        try {
            await this.props.showBus();
            console.log("fetchbus",this.props)

            // const busData = this.props.showBus; // Access data correctly
            // console.log("fetchbus busadata",busData);
        } catch (error) {
            console.error(error);
            // Handle error here
        }
    }

    handleSubmit=(event) => {
        event.preventDefault();
        const formData = {
        bus_operator_id:event.target.operator_id.value,
        bus_id:event.target.bus_id.value,
        name:event.target.name.value,
        type:event.target.type.value,
        share:event.target.share.value,
        // total_amount: event.target.bus_total_payment.value,
        // share_deducted_amount: event.target.share_deduced_amount.value,
        
        }
        this.props.postBus(formData); // Dispatch the action
        console.log(".,.,.,.,",formData)
    }
    
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
console.log("deleteBus",this.props)
            // const { loading, error, data } = this.props.showBus;
    return (
        <div>
            
            <SideBar/>
            <DropDown/>
           <div className="default-main">
        <form  onSubmit={this.handleSubmit} className="default-form">
          <h3>Enter the Bus details here</h3>
          <InputField type="text" id="bus_id" name="bus_id" className="default-form-input" placeholder="Enter the bus ID.." required/>
          
          <select className='default-select' id="operator_id" required>
          <option value="" disabled selected>Select the Operator</option>
          {Array.isArray(showBusOperatorData) &&
  showBusOperatorData.map(operator => {
    console.log("Operator ID:", operator.bus_operator_id);
    console.log("Operator Name:", operator.name);

    return (
      <option key={operator.id} value={operator.id}>
        {operator.name}
      </option>
    );
  })}



        </select>
          <InputField type="text" id="name" name="name" className="default-form-input" placeholder="Enter the Name" required/>
          <select name="type" id="type" className="default-select">
                <option value="volvo">Volvo</option>
                <option value="Full AC">FUll AC</option>
                <option value="Second Seater">Second Seater</option>
            </select>
            <InputField type="text" id="share" name="share" className="default-form-input" placeholder="Enter the share in %" required/>
            {/* <InputField type="text" id="bus_total_payment" name="bus_total_payment" className="default-form-input" placeholder="Enter the Total amount disbaled" />
            <InputField type="text" id="share_deduced_amount" name="share_deduced_amount" className="default-form-input" placeholder="Share deduced amount disbaled" /> */}

            <InputButton className="default-form-submit" value="Submit"/>
        </form>
            
            

        <DynamicTable columns={columns} data={data} deleteAction={this.props.deleteBus} />
</div>
        </div>

    );
          }
};
}
export default Bus
 