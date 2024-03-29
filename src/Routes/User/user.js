import React, { Component } from 'react';
import DynamicTable from '../../Components/TableComponent';
import SideBar from '../../Components/SideBar';
import DropDown from '../../Components/DropDown';
import InputButton from '../../Components/InputButton';
import CsvLink from '../../Components/CsvLink'
import FormInput from '../../Components/FormInputComponent';

class User extends Component {
  componentDidMount() {
    this.fetchUser();
  }
  async fetchUser() {
    try {
       this.props.showUser(0,10);
    } catch (error) {
      console.error(error);
    }
  }
  handleOperatorChange = (event) => {
    const selectedOperatorId = event.target.value;
    console.log("this.props handle",this.props)
    this.props.updateSelectedOperator(selectedOperatorId);
  }
  handleSubmit = (event) => {
    console.log("handle submit",this.props.showOneUser);
    event.preventDefault();
    const handleFormField = (event, fieldName, defaultValue) => {
      return event.target[fieldName].value !== '' ? event.target[fieldName].value : defaultValue;
  };
  
  const showOneUserData = this.props.showOneUserData;
  const formData = {
      username: handleFormField(event, 'username', showOneUserData.username),
      email: handleFormField(event, 'email', showOneUserData.email),
      password: handleFormField(event, 'password', showOneUserData.password),
      role: handleFormField(event, 'role', showOneUserData.role)
  };
    if (!!this.props.showOneUserData) {
      const id = this.props.showOneUserData.id
      const updatedFormData = {
        ...formData,
        id: id,
      }
      this.props.updateUser(updatedFormData);
      document.getElementById('success').innerText = 'Details updated successfully';

    } else {
      this.props.postUser(formData);
      document.getElementById('success').innerText = 'Details entered successfully';

    }
    this.clearForm();
  };
  clearForm = () => {
    document.querySelectorAll('form input').forEach(input => input.value = '');
    this.props.clearUser();
    setTimeout(() => {
      document.getElementById('success').innerText = '';
    }, 5000);
  };
  handleCSVDownload = ()=>{
    this.props.showAllActionUser()
  }
  tableColumns = ()=>{
    const data = Array.isArray(this.props.data) ? this.props.data : [];
    const allColumns = data.length > 0 ? Object.keys(data[0]) : [];
    const columns = allColumns.map(column => ({
      Header: column.charAt(0).toUpperCase() + column.slice(1).replace(/_/g, ' '), // Convert underscore to space and capitalize
      accessor: column,
    }));
    return columns
  }
  searchColumns = ()=>{
    const data = Array.isArray(this.props.data)
    ? this.props.data.map(({ username,email,role, ...rest }) => ({ username,email,role }))
    : [];
  
    console.log("bus darta" ,this.props.data)
    const allColumns = data.length > 0 ? Object.keys(data[0]) : [];
    const columns = allColumns.map(column => ({
      Header: column.charAt(0).toUpperCase() + column.slice(1).replace(/_/g, ' '), // Convert underscore to space and capitalize
      accessor: column,
    }));
    return columns
  }
  handleSearch = (e) => {
    e.preventDefault();
    const searchCol = e.target.searchCol.value;
    const searchKey = e.target.searchKey.value;
    console.log("handlesearch",searchCol,searchKey)        
    this.props.setSearchTermUser(searchCol, searchKey);
  }
  handleClear = () => {
    this.props.setSearchTermUser("", "");
  };
  render() {
        const isEditMode = !!this.props.showOneUserData && !!this.props.showOneUserData.username
    return (
      <div>
            <DropDown logout={this.props.logout}/>
        <SideBar />

        <div className="default-main">
        <form onSubmit={this.handleSubmit}>
        <div class="text">
            User Details
            </div>
        <h3 id='success'></h3>
          <div class="default-form-row">
          <FormInput
               id="username"
               name="username"
               className="default-form-input"
               placeholder={isEditMode ? this.props.showOneUserData.username : "Enter the username.."}
               required={isEditMode ? false : true}
              />
            <FormInput
              id="email"
              name="email"
              className="default-form-input"
              placeholder={isEditMode ? this.props.showOneUserData.email : "Enter the Email.."}
              required={isEditMode ? false : true}       
            />
          </div> 
          <div class="default-form-row">
          <FormInput
               id="password"
               name="password"
               className="default-form-input"
               placeholder={isEditMode ? this.props.showOneUserData.password : "Enter the password"}
               required={isEditMode ? false : true}
              />
            <FormInput
              id="role"
              name="role"
              className="default-form-input"
              placeholder={isEditMode ? this.props.showOneUserData.role : "Enter the role"}
              required={isEditMode ? false : true}
            />
          </div> 
            <InputButton type="submit" id="inputButton" className="default-form-submit" value={!isEditMode ? 'Submit' : 'Update'}/>
            {isEditMode && (
              <button type="button" className="default-form-clear" onClick={this.clearForm}>    
                Clear
              </button>
            )}
          </form>
          </div>

          {console.log("suwe",this.props)}
          <DynamicTable 
          columns={this.tableColumns()} 
          data={this.props.data} 
          deleteAction={this.props.deleteActionUser} 
          searchColumns={this.searchColumns()} 
          handleSearch ={this.handleSearch} 
          handleClear = {this.handleClear}
          showOneRowData = {this.props.showOneUserData} 
          showOneRow = {this.props.showOneUser} 
          setCurrentPage = {this.props.setCurrentPageUser}
          currentPageReducer = {this.props.currentPageReducerUser}
          count= {this.props.userCount}
          showAll={this.props.showUser}
          />
           <button className="csv-button" onClick={this.handleCSVDownload}>
            Download
                {this.props.userAllData && (
          <CsvLink data={this.props.userAllData} columns={this.tableColumns()}/>
        )}
  </button>
      </div>
    );
  }
}

export default User;
