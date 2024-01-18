import { connect } from 'react-redux';

import Trip from './Home';

import { showTrip } from '../../Redux/Actions';

import { SelectState } from './Selector';

function mapStateToProps(state) {
  return { ...SelectState(state) };
}

function mapDispatchToProps(dispatch) {
  return {
    showTrip: (params) => {
      dispatch(showTrip(params));
    }
  }; 
}

export default connect(mapStateToProps, mapDispatchToProps)(Trip);
