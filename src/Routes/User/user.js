import React, { Component } from 'react';
import DynamicTable from '../../Components/TableComponent';
import SideBar from '../../Components/SideBar';
import DropDown from '../../Components/DropDown';
import InputField from '../../Components/InputField';
import InputButton from '../../Components/InputButton';

class User extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this); // Bind handleSubmit in constructor
  }

  state = {
    loading: false,
    error: false,
    showUser: [],
    postUser: []
  }

  componentDidMount() {
    this.fetchUser();
  } // Removed unnecessary this.handleSubmit() call

  async fetchUser() {
    try {
      await this.props.showUser();
      console.log("fetchuser ", this.props);
      this.props.setTableDataUser(this.props.data)
      this.props.setSearchTermUser('')
    } catch (error) {
      console.error(error);
      // Handle error here
    }
  }

  handleSubmit = (event) => {
    console.log("handle submit",event.target);
    event.preventDefault();
    const formData = {
        username:event.target.username.value,
        email:event.target.email.value,
        password:event.target.password.value,
        role:event.target.role.value
    }
    console.log(".,.,.,.,",formData, );
    // const formData = new FormData(event.target);
    this.props.postUser(formData); // Dispatch the action
  }

  render() {
    console.log("render", this.props.data);
    const testData = this.props.data;
    const data = Array.isArray(testData) ? testData : [];
    const allColumns = data.length > 0 ? Object.keys(data[0]) : [];
    
    const columns = allColumns.map(column => ({
      Header: column.charAt(0).toUpperCase() + column.slice(1).replace(/_/g, ' '), // Convert underscore to space and capitalize
      accessor: column,
    }));
    return (
      <div>
        <DropDown />
        <SideBar />
        <div className="default-main">
          <form className="default-form" onSubmit={this.handleSubmit}>
            <h3>Enter the User details here</h3>
            <InputField type="text" id="username" name="username" className="default-form-input" placeholder="Enter the username.."/>
            <InputField type="text" id="email" name="email" className="default-form-input" placeholder="Enter the Email.."/>
            <InputField type="text" id="password" name="password" className="default-form-input" placeholder="Enter the password"/><br/>
            <InputField type="text" id="role" name="role" className="default-form-input" placeholder="Enter the role"/>
            <InputButton type="submit" className="default-form-submit"  value="Submit"/>
          </form>
          {
            console.log("userlog", this.props.deleteActionUser)
          }
          <DynamicTable columns={columns} data={data} deleteActionUser={this.props.deleteActionUser} searchData = {this.props.searchData} setSearchTerm ={this.props.setSearchTermUser}  />
        </div>
      </div>
    );
  }
}

export default User;
