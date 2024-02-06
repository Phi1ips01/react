import { connect } from 'react-redux';

import User from './user';

import { showUser,postUser,deleteActionUser,setSearchTermUser,setTableDataUser, showOneActionUser,clearUser, updateActionUser,} from '../../Redux/Actions';

import { SelectState } from './Selector';

function mapStateToProps(state) {
  return {
    data: SelectState(state).showUser.data,
    searchData: SelectState(state).searchTerm,
    tableData: SelectState(state).tableData,
    showOneUserData: SelectState(state).showOneUser.data,
  };
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
    },
    setSearchTermUser:(params) => dispatch(setSearchTermUser(params)),
    setTableDataUser:(params) => dispatch(setTableDataUser(params)),
    clearUser:(params) =>dispatch(clearUser(params)),
    showOneUser: (params) => dispatch(showOneActionUser(params)),
    updateUser: (params) => dispatch(updateActionUser(params))

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
