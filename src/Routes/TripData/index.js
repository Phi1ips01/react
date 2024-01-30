import { connect } from 'react-redux';

import Trip from './tripData';

import { showTrip,deleteActionTrip} from '../../Redux/Actions';

import { SelectState } from './Selector';

function mapStateToProps(state) {
  return { 
    tripData: SelectState(state).showTrip.data,
    
    
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showTrip: (params) => {
      dispatch(showTrip(params));
    },
    deleteTrip: (params) =>{dispatch(deleteActionTrip(params))}
  }; 
}

export default connect(mapStateToProps, mapDispatchToProps)(Trip);
