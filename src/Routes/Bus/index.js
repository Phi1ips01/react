import { connect } from 'react-redux';

import Bus from './Bus';

import { showBus } from '../../Redux/Actions';

import { SelectState } from './Selector';

function mapStateToProps(state) {
  return { ...SelectState(state) };
}

function mapDispatchToProps(dispatch) {
  return {
    showBus: (params) => {
      dispatch(showBus(params));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Bus);
