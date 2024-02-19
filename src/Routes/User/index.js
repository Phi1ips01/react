import { connect } from 'react-redux';

import User from './user';

import { showUser,postUser,deleteActionUser,setSearchTermUser,setTableDataUser, showOneActionUser,clearUser, updateActionUser,signOut,setCurrentPageUser,showAllActionUser,updateSelectedOperator} from '../../Redux/Actions';

import { SelectState } from './Selector';

function mapStateToProps(state) {
  console.log("stateuser",state.ShowUser.showUser.data)
  return {
    searchData: SelectState(state).searchTerm,
    tableData: SelectState(state).tableData,
    showOneUserData: SelectState(state).showOneUser.data,
    currentPageReducerUser:SelectState(state).currentPageReducerUser,
    userAllData: SelectState(state).showAllUser.data,
    data: SelectState(state).showUser.data,
    userCount:SelectState(state).showUser.count,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showUser: (page,size) => {
      console.log("dispatch showuser",page,size)
      dispatch(showUser(page,size));
    },
    postUser: (params)=>{
      dispatch(postUser(params))
    },
    deleteActionUser: (params)=>{
      dispatch(deleteActionUser(params))
    },
    updateSelectedOperator: (params)=>{dispatch(updateSelectedOperator(params))},
    setSearchTermUser:(params) => dispatch(setSearchTermUser(params)),
    setTableDataUser:(params) => dispatch(setTableDataUser(params)),
    clearUser:(params) =>dispatch(clearUser(params)),
    showOneUser: (params) => dispatch(showOneActionUser(params)),
    updateUser: (params) => dispatch(updateActionUser(params)),
    logout:(params)=>dispatch(signOut(params)),
    setCurrentPageUser:(params)=>dispatch(setCurrentPageUser(params)),
    showAllActionUser:(page,size)=>{
      console.log("dispatch showuser",page,size)
      dispatch(showAllActionUser(page,size))
    }



  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
