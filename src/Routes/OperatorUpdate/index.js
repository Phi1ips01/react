import { connect } from 'react-redux';

import OperatorUpdate from './Operator_Update';

import { showOperatorUpdate } from '../../Redux/Actions';

import { SelectState } from './Selector';

function mapStateToProps(state) {
  return { ...SelectState(state) };
}

function mapDispatchToProps(dispatch) {
  return {
    showOperatorUpdate: (params) => {
      dispatch(showOperatorUpdate(params));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OperatorUpdate);
