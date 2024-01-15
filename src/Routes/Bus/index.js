import React, { Component } from 'react';
import InputField from '../../Components/InputField';
import InputButton from '../../Components/InputButton';
import ModifyTableButton from '../../Components/ModifyTableButton';
import SideBar from '../../Components/SideBar'
import DropDown from '../../Components/DropDown'
import { showAllBus } from '../../api/busAPI';
class Bus extends Component {
    state = {
        loading: false,
        error: false,
        showBus: []
      }
      componentDidMount() {
        this.fetchBus();
      }
      fetchBus = async () => {
        try {
          
            const data = await showAllBus();
           console.log(data)
          
        } catch (error) {
          /* Derive proper parse error logic based on context */
          
        }
      }
      render(){
    return (
        <div>
            
            <SideBar/>
            <DropDown/>
           <div className="default-main">
        <form action="/" className="default-form">
          <h3>Enter the Bus details here</h3>
          <InputField type="text" id="operator_id" name="operator_id"  className="default-form-input" placeholder="Enter the bus operator ID.."/>
          <InputField type="text" id="bus_id" name="bus_id" className="default-form-input" placeholder="Enter the bus ID.."/>
          <InputField type="text" id="name" name="name" className="default-form-input" placeholder="Enter the Name"/>
          <InputField type="text" id="share" name="share" className="default-form-input" placeholder="Enter the share in %"/>
          <select name="type" id="type" className="select">
                <option value="volvo">Volvo</option>
                <option value="Full AC">FUll AC</option>
                <option value="Second Seater">Second Seater</option>
            </select>
            <InputButton className="default-form-submit" value="Submit"/>
        </form>
            
            
            

        
        <div className="table-responsive">
            <table className="table table-dark table-striped w-75 container">
                <thead>
                    <tr>
                        <th>Operator ID</th>
                        <th>Bus ID</th>
                        <th>Name</th>
                        <th>Share</th>
                        <th>Type</th>
                        <th>Edit/Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
            <td>
                <ModifyTableButton/>
            </td>
        </tr>
        <tr>
            
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
        <td>
        <ModifyTableButton/>
        </td>
        </tr>
        </tbody>
        </table>
        </div>
    </div>
        </div>
        
    );
};
}
export default Bus
 