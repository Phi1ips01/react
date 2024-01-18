import { connect } from 'react-redux';

import Bus from './Bus';

import { showBus,postBus } from '../../Redux/Actions';

import { SelectState } from './Selector';

function mapStateToProps(state) {
  return { ...SelectState(state) };
}

function mapDispatchToProps(dispatch) {
  return {
    showBus: (params) => {
      dispatch(showBus(params));
    },
    postBus: (params) =>{
      dispatch(postBus(params))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Bus);
