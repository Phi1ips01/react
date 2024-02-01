import { connect } from 'react-redux';

import BusOperator from './Bus_Operator';

import { showBusOperator,postBusOperator, deleteActionBusOperator,setSearchTermBusOperator,setTableDataBusOperator } from '../../Redux/Actions';

import { SelectState } from './Selector';

function mapStateToProps(state) {
  return {
    data: SelectState(state).showBusOperator.data,
    searchData: SelectState(state).searchTerm,
    tableData: SelectState(state).tableData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showBusOperator: (params) => dispatch(showBusOperator(params)),
    postBusOperator: (params) => dispatch(postBusOperator(params)),
    deleteBusOperator: (params) => dispatch(deleteActionBusOperator(params)),
    setSearchTermBusOperator:(params) => dispatch(setSearchTermBusOperator(params)),
    setTableDataBusOperator:(params) => dispatch(setTableDataBusOperator(params))
  
  }
  };

export default connect(mapStateToProps, mapDispatchToProps)(BusOperator);
 