import { connect } from 'react-redux';

import Bus from './Bus';

import { showBus,postBus,showBusOperator, deleteActionBus,setSearchTermBus,setTableDataBus,clearBus,showOneActionBus,updateActionBus, signOut,setCurrentPageBus,showAllActionBus} from '../../Redux/Actions';

import { SelectState } from './Selector';

function mapStateToProps(state) {
  console.log("mapstatetoprops bus", state.ShowAllBus)
  return {
    busData: SelectState(state).showBus.data,
    showBusOperatorData: SelectState(state).showBusOperator.data, // Add this line
    searchData: SelectState(state).searchTerm,
    tableData: SelectState(state).tableData,
    showOneBusData:SelectState(state).showOneBus.data,
    currentPageReducerBus:SelectState(state).currentPageReducerBus,
    busAllData: SelectState(state).showAllBus.data,
    busCount:SelectState(state).showBus.count,
  };
}
 

function mapDispatchToProps(dispatch) {
  return {
    showBus: (page,size,keyword) => {
      console.log("dispatch showBus",page,size,keyword)

      dispatch(showBus(page,size,keyword))
    },
    postBus: (params) => dispatch(postBus(params)),
    showBusOperator: (page,size) => dispatch(showBusOperator(page,size)),
    deleteBus: (params) => dispatch(deleteActionBus(params)),
    showOneBus:(params) => dispatch(showOneActionBus(params)),
    clearBus:(params)=>dispatch(clearBus(params)),
    setSearchTermBus:(params) => dispatch(setSearchTermBus(params)),
    setTableDataBus:(params) => dispatch(setTableDataBus(params)),
    updateBus: (params) => dispatch(updateActionBus(params)),
    logout:(params)=>dispatch(signOut(params)),
    setCurrentPageBus:(params)=>dispatch(setCurrentPageBus(params)),
    showAllActionBus:()=>{
      dispatch(showAllActionBus())
    }

  
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Bus);
