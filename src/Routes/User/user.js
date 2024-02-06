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
    console.log("handle submit",this.props.showOneUser);
    event.preventDefault();
    const showOneUserData = this.props.showOneUserData

    const form_username= event.target.username.value!==''?event.target.username.value:showOneUserData.username
    const form_email= event.target.email.value!==''?event.target.email.value:showOneUserData.email
    const form_password=event.target.password.value!==''?event.target.password.value:showOneUserData.password
    const form_role = event.target.role.value!==''?event.target.role.value:showOneUserData.role
    const formData = {
        username:form_username,
        email:form_email,
        password:form_password,
        role:form_role
    }

    if (this.props.showOneUserData) {
      // If there is editData in props, dispatch updateBusOperator action
      const id = this.props.showOneUserData.id
      const updatedFormData = {
        ...formData,
        id: id,
      }
      this.props.updateUser(updatedFormData);
    } else {
      // If no editData, dispatch postBusOperator action
      this.props.postUser(formData);
    }

    // Clear the form after submission
    this.clearForm();
  };

  clearForm = () => {
    // Clear the form fields
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('role').value = '';
    this.props.clearUser();
    console.log("clear form ", this.props.showOneBusData)
  };
  render() {
    console.log("render", this.props.data);
    const testData = this.props.data;
    const data = Array.isArray(testData) ? testData : [];
    const allColumns = data.length > 0 ? Object.keys(data[0]) : [];
    
    const columns = allColumns.map(column => ({
      Header: column.charAt(0).toUpperCase() + column.slice(1).replace(/_/g, ' '), // Convert underscore to space and capitalize
      accessor: column,

    }));
    const { showOneUserData } = this.props;
        const isEditMode = !!showOneUserData && !!showOneUserData.username
        console.log("buss",isEditMode)
    return (
      <div>
        <DropDown />
        <SideBar />
        <div className="default-main">
          <form className="default-form" onSubmit={this.handleSubmit}>
            <h3>Enter the User details here</h3>
            <InputField
              type="text"
              id="username"
              name="username"
              className="default-form-input"
              placeholder={isEditMode ? showOneUserData.username : "Enter the username.."}
              required={isEditMode ? false : true}
            />
            <InputField
              type="text"
              id="email"
              name="email"
              className="default-form-input"
              placeholder={isEditMode ? showOneUserData.email : "Enter the Email.."}
              required={isEditMode ? false : true}
            />
            <InputField
              type="password"
              id="password"
              name="password"
              className="default-form-input"
              placeholder={isEditMode ? showOneUserData.password : "Enter the password"}
              required={isEditMode ? false : true}
            /><br/>
            <InputField
              type="text"
              id="role"
              name="role"
              className="default-form-input"
              placeholder={isEditMode ? showOneUserData.role : "Enter the role"}
              required={isEditMode ? false : true}
            />
            <InputButton type="submit" id="inputButton" className="default-form-submit" value={!isEditMode ? 'Submit' : 'Update'}/>
            {isEditMode && (
              <button type="button" className="default-form-clear" onClick={this.clearForm}>
                
                Clear
              </button>
            )}
          </form>
          {
            console.log("userlog", this.props)
          }
          <DynamicTable columns={columns} data={data} deleteAction={this.props.deleteActionUser} searchData = {this.props.searchData} setSearchTerm ={this.props.setSearchTermUser} showOneRowData = {this.props.showOneUserData} showOneRow = {this.props.showOneUser} />
        </div>
      </div>
    );
  }
}

export default User;
