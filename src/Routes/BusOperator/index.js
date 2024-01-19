import { connect } from 'react-redux';

import BusOperator from './Bus_Operator';

import { showBusOperator } from '../../Redux/Actions';

import { SelectState } from './Selector';

function mapStateToProps(state) {
  return { ...SelectState(state) };
}

function mapDispatchToProps(dispatch) {
  return {
    showBusOperator: (params) => dispatch(showBusOperator(params))
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(BusOperator);
 