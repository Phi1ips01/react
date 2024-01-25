import { connect } from 'react-redux';

import Trip from './Home';

import { showTrip,postTrip,showBus,showBusOperator,updateSelectedOperator} from '../../Redux/Actions';

import { SelectState } from './Selector';

function mapStateToProps(state) {
  return { 
    tripData: SelectState(state).showTrip.data,
    busData: SelectState(state).showBus.data,
    busOperatorData: SelectState(state).showBusOperator.data,
    selectedOperatorID: SelectState(state).selectedOperatorID
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showTrip: (params) => {
      dispatch(showTrip(params));
    },
    postTrip: (params)=>{
      dispatch(postTrip(params))
    },
    updateSelectedOperator: (params)=>{dispatch(updateSelectedOperator(params))},
    showBus: (params) => dispatch(showBus(params)),
    showBusOperator: (params) => dispatch(showBusOperator(params))
  }; 
}

export default connect(mapStateToProps, mapDispatchToProps)(Trip);
