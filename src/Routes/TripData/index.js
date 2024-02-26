import { connect } from 'react-redux';

import TripData from './tripData';

import { showTrip,deleteActionTrip,setSearchTermTrip,setTableDataTrip, showOneActionTrip, updateActionTrip, clearTrip,signOut,} from '../../Redux/Actions';
import { showAllActionBus,showAllActionBusOperator,updateSelectedOperator,setCurrentPageTrip,showAllActionTrip } from '../../Redux/Actions';
import { SelectState } from './Selector';

function mapStateToProps(state) {
  console.log("mpastate",state.UpdateSelectedOperatorID.selectedOperatorId)
  return { 
    tripData: SelectState(state).showTrip.data,
    tripCount:SelectState(state).showTrip.count,
    searchData: SelectState(state).searchTerm,
    tableData: SelectState(state).tableData,
    busData: SelectState(state).showBus.data,
    busOperatorData: SelectState(state).showBusOperator.data,
    selectedOperatorID: state.UpdateSelectedOperatorID.selectedOperatorId,
    showOneTripData: SelectState(state).showOneTrip.data,
    currentPageReducerTrip:SelectState(state).currentPageReducerTrip,
    tripAllData: SelectState(state).showAllTrip.data,

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
    showBus: () => dispatch(showAllActionBus()),
    showBusOperator: () => dispatch(showAllActionBusOperator()),
    showOneTrip: (params) => dispatch(showOneActionTrip(params)),
    updateTrip: (params) => dispatch(updateActionTrip(params)),
    clearTrip: (params) => dispatch(clearTrip(params)),
    logout:(params)=>dispatch(signOut(params)),
    setCurrentPageTrip:(params)=>dispatch(setCurrentPageTrip(params)),
    showAllActionTrip:()=>{dispatch(showAllActionTrip())}



  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TripData);
