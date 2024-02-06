import { connect } from 'react-redux';

import Bus from './Bus';

import { showBus,postBus,showBusOperator, deleteActionBus,setSearchTermBus,setTableDataBus,clearBus,showOneActionBus,updateActionBus} from '../../Redux/Actions';

import { SelectState } from './Selector';

function mapStateToProps(state) {
  return {
    busData: SelectState(state).showBus.data,
    showBusOperatorData: SelectState(state).showBusOperator.data, // Add this line
    searchData: SelectState(state).searchTerm,
    tableData: SelectState(state).tableData,
    showOneBusData:SelectState(state).showOneBus.data
  };
}
 

function mapDispatchToProps(dispatch) {
  return {
    showBus: (params) => dispatch(showBus(params)),
    postBus: (params) => dispatch(postBus(params)),
    showBusOperator: (params) => dispatch(showBusOperator(params)),
    deleteBus: (params) => dispatch(deleteActionBus(params)),
    showOneBus:(params) => dispatch(showOneActionBus(params)),
    clearBus:(params)=>dispatch(clearBus(params)),
    setSearchTermBus:(params) => dispatch(setSearchTermBus(params)),
    setTableDataBus:(params) => dispatch(setTableDataBus(params)),
    updateBus: (params) => dispatch(updateActionBus(params)),

  
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Bus);
