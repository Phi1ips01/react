import React, { Component } from 'react';
import DynamicTable from '../../Components/TableComponent'
import SideBar from '../../Components/SideBar'
import DropDown from '../../Components/DropDown'
import InputField from '../../Components/InputField'
import InputButton from '../../Components/InputButton'
    class User extends Component{
        state = {
            loading: false,
            error: false,
            showUser: [],
            postUser: []
          }
          componentDidMount() {
            this.fetchUser();
          }
          async fetchUser() {
            try {
                await this.props.showUser();
                console.log("fetchuser ",this.props)
                // const userData = this.props.showUser.data; // Access data correctly
                // console.log(userData);
            } catch (error) {
                console.error(error);
                // Handle error here
            }
        }
        handleSubmit(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            this.props.postUser(formData); // Dispatch the action
            console.log(formData,".,.,.,.,")
        }
    render(){
        console.log("render",this.props)
            const testData = this.props.data
        const data = Array.isArray(testData) ? testData : [];
    const allColumns = data.length > 0 ? Object.keys(data[0]).map(key => ({ Header: key, accessor: key })) : [];
    console.log("data,columns",data,allColumns)
    return (
        
        <div>
            <DropDown/>
        <SideBar/>
            <div className="default-main">
        <form action="/" className="default-form">
          <h3>Enter the User details here</h3>
            <InputField type="text" id="username" name="username"  className="default-form-input" placeholder="Enter the username.."/>
            <InputField type="text" id="email" name="email" className="default-form-input" placeholder="Enter the Email.."/>
            
            <InputField type="text" id="password" name="password" className="default-form-input" placeholder="Enter the password"/><br/>
            <InputField type="text" id="role" name="role" className="default-form-input" placeholder="Enter the role"/>
            
            <InputButton type="submit" className="default-form-submit" onSubmit={this.handleSubmit} value="Submit"/>
        </form>
        <DynamicTable columns={allColumns} data={data}/>
    </div>
        </div>
    );
}
    }
    export default User
