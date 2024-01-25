import { connect } from 'react-redux';

import User from './user';

import { showUser,postUser,deleteActionUser } from '../../Redux/Actions';

import { SelectState } from './Selector';

function mapStateToProps(state) {
  return { ...SelectState(state) };
}

function mapDispatchToProps(dispatch) {
  return {
    showUser: (params) => {
      dispatch(showUser(params));
    },
    postUser: (params)=>{
      dispatch(postUser(params))
    },
    deleteActionUser: (params)=>{
      dispatch(deleteActionUser(params))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
