import { connect } from 'react-redux';

import BusOperator from './Bus_Operator';

import { showBusOperator,postBusOperator } from '../../Redux/Actions';

import { SelectState } from './Selector';

function mapStateToProps(state) {
  return { ...SelectState(state) };
}

function mapDispatchToProps(dispatch) {
  return {
    showBusOperator: (params) => dispatch(showBusOperator(params)),
    postBusOperator: (params) => dispatch(postBusOperator(params))
  
  }
  };

export default connect(mapStateToProps, mapDispatchToProps)(BusOperator);
 