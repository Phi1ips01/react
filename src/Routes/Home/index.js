import { connect } from 'react-redux';

import Trip from './Home';

import { showTrip,postTrip } from '../../Redux/Actions';

import { SelectState } from './Selector';

function mapStateToProps(state) {
  return { ...SelectState(state) };
}

function mapDispatchToProps(dispatch) {
  return {
    showTrip: (params) => {
      dispatch(showTrip(params));
    },
    postTrip: (params)=>{
      dispatch(postTrip(params))
    }
  }; 
}

export default connect(mapStateToProps, mapDispatchToProps)(Trip);
