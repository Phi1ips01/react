import { connect } from 'react-redux';

import Trip from './Home';

import { showTrip,postTrip,showBus,showBusOperator,updateSelectedOperator, deleteActionTrip,signOut} from '../../Redux/Actions';

import { SelectState } from './Selector';

function mapStateToProps(state) {
  console.log("state",state)
  return { 
    tripData: SelectState(state).showTrip.data,
    busData: SelectState(state).showBus.data,
    busOperatorData: SelectState(state).showBusOperator.data,
    selectedOperatorId: SelectState(state).selectedOperatorID,
    
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showTrip: (page,size) => {
      dispatch(showTrip(page,size));
    },
    postTrip: (params)=>{
      dispatch(postTrip(params))
    },
    updateSelectedOperator: (params)=>{dispatch(updateSelectedOperator(params))},
    showBus: (page,size) => dispatch(showBus(page,size)),
    showBusOperator: (page,size) => dispatch(showBusOperator(page,size)),
    deleteTrip: (params) =>{dispatch(deleteActionTrip(params))},
    logout:(params)=>dispatch(signOut(params))

  }; 
}

export default connect(mapStateToProps, mapDispatchToProps)(Trip);
