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
        showBus:[]
      }
    //   constructor (props){
    //     super(props);
    //     this.fetchBus=this.fetchBus.bind(this);
    //     this.handleSubmit=this.handleSubmit.bind(this);
    //   }
      componentDidMount() {
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
        // bus_operator_id:event.target.bus_operator_id.value,
        bus_operator_id:1,
        bus_id:event.target.bus_id.value,//bus name should be converted to bus id
        name:event.target.name.value,
        type:event.target.type.value,
        share:event.target.share.value,
        total_amount: event.target.bus_total_payment.value,
        share_deducted_amount: event.target.share_deduced_amount.value,
        
        }
        this.props.postBus(formData); // Dispatch the action
        console.log(formData,".,.,.,.,")
    }
    
        render() {
            // const { loading, error } = this.props;
            // console.log("render",this.props)
            const testData = this.props.data
            const data = Array.isArray(testData) ? testData : [];
        const allColumns = data.length > 0 ? Object.keys(data[0]).map(key => ({ Header: key, accessor: key })) : [];
        console.log("data,columns",data,allColumns)
    //         const data = Array.isArray(this.props.data) ? this.props.data : [];
    //   const allColumns = data.length > 0 ? Object.keys(data[0]).map(key => ({ Header: key, accessor: key })) : [];
    //   const columns = allColumns.slice(1, -2);
      // const { userList, loading, error } = this.state;
            // const { loading, error, data } = this.props.showBus;
    return (
        <div>
            
            <SideBar/>
            <DropDown/>
           <div className="default-main">
        <form  onSubmit={this.handleSubmit} className="default-form">
          <h3>Enter the Bus details here</h3>
          {/* <InputField type="text" id="operator_id" name="operator_id"  className="default-form-input" placeholder="Enter the bus operator ID.."/> */}
          <InputField type="text" id="bus_id" name="bus_id" className="default-form-input" placeholder="Enter the bus ID.." required/>
          <select className='default-select' id="operator_id" required>
                <option value=""  disabled>
                  Enter the Operator
                  </option>
                  <option>
                    bus operator name
                  </option>
                </select>
          <InputField type="text" id="name" name="name" className="default-form-input" placeholder="Enter the Name" required/>
          <select name="type" id="type" className="default-select">
                <option value="volvo">Volvo</option>
                <option value="Full AC">FUll AC</option>
                <option value="Second Seater">Second Seater</option>
            </select>
            <InputField type="text" id="share" name="share" className="default-form-input" placeholder="Enter the share in %" required/>
            <InputField type="text" id="bus_total_payment" name="bus_total_payment" className="default-form-input" placeholder="Enter the Total amount disbaled" />
            <InputField type="text" id="share_deduced_amount" name="share_deduced_amount" className="default-form-input" placeholder="Share deduced amount disbaled" />

            <InputButton className="default-form-submit" value="Submit"/>
        </form>
            
            

        <DynamicTable columns={allColumns} data={data}/>
</div>
        </div>
        
    );
};
}
export default Bus
 