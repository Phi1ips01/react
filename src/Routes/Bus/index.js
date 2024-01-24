import { connect } from 'react-redux';

import Bus from './Bus';

import { showBus,postBus,showBusOperator } from '../../Redux/Actions';

import { SelectState } from './Selector';

function mapStateToProps(state) {
  return {
    busData: SelectState(state).showBus.data,
    showBusOperatorData: SelectState(state).showBusOperator.data, // Add this line
  };
}


function mapDispatchToProps(dispatch) {
  return {
    showBus: (params) => dispatch(showBus(params)),
    postBus: (params) => dispatch(postBus(params)),
    showBusOperator: (params) => dispatch(showBusOperator(params))


    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Bus);
