import { connect } from 'react-redux';

import Trip from './tripData';

import { showTrip,deleteActionTrip,setSearchTermTrip,setTableDataTrip, showOneActionTrip, updateActionTrip, clearTrip,signOut,setDataTrip,setPageIndexTrip,setPageSizeTrip,setTotalPagesTrip} from '../../Redux/Actions';
import { showBus,showBusOperator,updateSelectedOperator } from '../../Redux/Actions';
import { SelectState } from './Selector';

function mapStateToProps(state) {
  console.log("mpastate",state)
  return { 
    tripData: SelectState(state).showTrip.data,
    tripCount:SelectState(state).showTrip.count,
    searchData: SelectState(state).searchTerm,
    tableData: SelectState(state).tableData,
    busData: SelectState(state).showBus.data,
    busOperatorData: SelectState(state).showBusOperator.data,
    selectedOperatorID: SelectState(state).selectedOperatorID,
    showOneTripData: SelectState(state).showOneTrip.data,
    dataTripReducer:state.dataTripReducer,
    pageIndexTripReducer:state.pageIndexTripReducer,
    pageSizeTripReducer:state.pageSizeTripReducer,
    totalPagesTripReducer:state.totalPagesTripReducer,
    
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showTrip: (page,size) => {
      dispatch(showTrip(page,size));
    },
    deleteTrip: (params) =>{dispatch(deleteActionTrip(params))
    },
    setSearchTermTrip : (params) => dispatch(setSearchTermTrip(params)),
    setTableDataTrip:(params) => dispatch(setTableDataTrip(params)),
    updateSelectedOperator: (params)=>{dispatch(updateSelectedOperator(params))},
    showBus: (params) => dispatch(showBus(params)),
    showBusOperator: (params) => dispatch(showBusOperator(params)),
    showOneTrip: (params) => dispatch(showOneActionTrip(params)),
    updateTrip: (params) => dispatch(updateActionTrip(params)),
    clearTrip: (params) => dispatch(clearTrip(params)),
    logout:(params)=>dispatch(signOut(params)),
    setDataTrip:(params)=>dispatch(setDataTrip(params)),
    setPageIndexTrip:(params)=>dispatch(setPageIndexTrip(params)),
    setPageSizeTrip:(params)=>dispatch(setPageSizeTrip(params)),
    setTotalPagesTrip:(params)=>dispatch(setTotalPagesTrip(params)),


  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Trip);
