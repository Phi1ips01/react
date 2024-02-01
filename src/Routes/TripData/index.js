import { connect } from 'react-redux';

import Trip from './tripData';

import { showTrip,deleteActionTrip,setSearchTermTrip,setTableDataTrip} from '../../Redux/Actions';

import { SelectState } from './Selector';

function mapStateToProps(state) {
  return { 
    tripData: SelectState(state).showTrip.data,
    searchData: SelectState(state).searchTerm,
    tableData: SelectState(state).tableData,
    
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showTrip: (params) => {
      dispatch(showTrip(params));
    },
    deleteTrip: (params) =>{dispatch(deleteActionTrip(params))
    },
    setSearchTermTrip : (params) => dispatch(setSearchTermTrip(params)),
  setTableDataTrip:(params) => dispatch(setTableDataTrip(params))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Trip);
