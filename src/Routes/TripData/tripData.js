import React, { Component } from 'react';

import DynamicTable from '../../Components/TableComponent'
import DropDown from '../../Components/DropDown';
import SideBar from '../../Components/SideBar'

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
  render() {


    const testData = this.props.tripData
        const data = Array.isArray(testData) ? testData : [];
    const allColumns = data.length > 0 ? Object.keys(data[0]) : [];
    const columns = allColumns.map(column => ({
      Header: column.charAt(0).toUpperCase() + column.slice(1).replace(/_/g, ' '), // Convert underscore to space and capitalize
      accessor: column,
    }));
    console.log("data,columns",columns)
    // const { userList, loading, error } = this.state;
    return (
      <div>
        <DropDown/>
            <SideBar/>
            <div className="default-main">
        <DynamicTable columns={columns} data={data} deleteAction={this.props.deleteTrip} className="trip-table"/>
      </div>
      </div>
    );
  }
}
export default Home;
