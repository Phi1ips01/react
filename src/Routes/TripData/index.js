import { connect } from 'react-redux';

import Trip from './tripData';

import { showTrip,deleteActionTrip,setSearchTermTrip,setTableDataTrip, showOneActionTrip, updateActionTrip, clearTrip} from '../../Redux/Actions';
import { showBus,showBusOperator,updateSelectedOperator } from '../../Redux/Actions';
import { SelectState } from './Selector';

function mapStateToProps(state) {
  return { 
    tripData: SelectState(state).showTrip.data,
    searchData: SelectState(state).searchTerm,
    tableData: SelectState(state).tableData,
    busData: SelectState(state).showBus.data,
    busOperatorData: SelectState(state).showBusOperator.data,
    selectedOperatorID: SelectState(state).selectedOperatorID,
    showOneTripData: SelectState(state).showOneTrip.data,
    
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showTrip: (params) => {
      dispatch(showTrip(params));
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
    clearTrip: (params) => dispatch(clearTrip(params))

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Trip);
