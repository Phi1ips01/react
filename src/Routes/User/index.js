import { connect } from 'react-redux';

import User from './user';

import { showUser } from '../../Redux/Actions';

import { SelectState } from './Selector';

function mapStateToProps(state) {
  return { ...SelectState(state) };
}

function mapDispatchToProps(dispatch) {
  return {
    showUser: (params) => {
      dispatch(showUser(params));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
