import { connect } from 'react-redux';

import BusOperator from './Bus_Operator';

import { showBusOperator,postBusOperator, deleteActionBusOperator,setSearchTermBusOperator,showOneActionBusOperator, updateActionBusOperator,clearBusOperator,signOut,setCurrentPageBusOperator,showAllActionBusOperator,setTotalAmountAndProfit } from '../../Redux/Actions';

import { SelectState } from './Selector';

function mapStateToProps(state) {
  console.log("mapstatetoprops",state.ShowAllBusOperator.showAllBusOperator)
  return {
    data: SelectState(state).showBusOperator.data,
    searchData: SelectState(state).searchTerm,
    tableData: SelectState(state).tableData,
    showOneBusOperatorData:SelectState(state).showOneBusOperator.data,
    currentPageReducerBusOperator:SelectState(state).currentPageReducerBusOperator,
    busOperatorAllData: SelectState(state).showAllBusOperator.data,
    busOperatorCount:SelectState(state).showBusOperator.count,
    total_ta:SelectState(state).total_ta,
    total_profit:SelectState(state).total_profit
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showBusOperator: (page,size) => dispatch(showBusOperator(page,size)),
    postBusOperator: (params) => dispatch(postBusOperator(params)),
    deleteBusOperator: (params) => dispatch(deleteActionBusOperator(params)),
    showOneBusOperator: (params) => dispatch(showOneActionBusOperator(params)),
    updateBusOperator: (params) => dispatch(updateActionBusOperator(params)),
    setSearchTermBusOperator:(search,keyword) => dispatch(setSearchTermBusOperator(search,keyword)),
    clearBusOperator:(params) =>dispatch(clearBusOperator(params)),
    logout:(params)=>dispatch(signOut(params)),
    setCurrentPageBusOperator:(params)=>dispatch(setCurrentPageBusOperator(params)),
    showAllActionBusOperator:()=>{
      console.log("dispatch showBus")
      dispatch(showAllActionBusOperator())
    },
    setTotalAmountAndProfit:()=>dispatch(setTotalAmountAndProfit())

  }
  };

export default connect(mapStateToProps, mapDispatchToProps)(BusOperator);
 