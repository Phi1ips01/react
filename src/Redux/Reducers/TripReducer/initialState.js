export const INITIAL_STATE = {
  showTrip: {
    loading: false,
    error: false,
    data: {}
  },
  postTrip: {
    loading: false,
    error: false,
    data: {}
  },
  selectedOperatorID: null,
  deleteTrip:{
    loading:false,
    error:false,
    data:{}
  },
  updateTrip:{
    loading:false,
    error:false,
    data:{}
  },
  searchTerm: '',
  tableData: [],
  editData:null,
  showOneTrip: {
    loading: false,
    error: false,
    data: {}
  },
  showAllTrip: {
    loading: false,
    error: false,
    data: {}
  },
  currentPage:1
};
