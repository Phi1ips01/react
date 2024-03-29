import { connect } from 'react-redux';

import Trip from './Home';

import { showTrip,postTrip,showAllActionBus,showAllActionBusOperator,updateSelectedOperator, deleteActionTrip,signOut, showOneActionTrip} from '../../Redux/Actions';

import { SelectState } from './Selector';

function mapStateToProps(state) {
  console.log("state",state.ShowBus.showBus.data)
  return { 
    tripData: SelectState(state).showTrip.data,
    busData: SelectState(state).showBus.data,
    busOperatorData: SelectState(state).showBusOperator.data,
    selectedOperatorId: SelectState(state).selectedOperatorID,
    
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showOneTrip:(params)=>{
      dispatch(showOneActionTrip(params))
    },
    showTrip: () => {
      dispatch(showTrip());
    },
    postTrip: (params)=>{
      dispatch(postTrip(params))
    },
    updateSelectedOperator: (params)=>{dispatch(updateSelectedOperator(params))},
    showBus: () => dispatch(showAllActionBus()),
    showBusOperator: () => dispatch(showAllActionBusOperator()),
    deleteTrip: (params) =>{dispatch(deleteActionTrip(params))},
    logout:(params)=>dispatch(signOut(params))

  }; 
}

export default connect(mapStateToProps, mapDispatchToProps)(Trip);
