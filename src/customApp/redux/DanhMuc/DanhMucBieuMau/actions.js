const actions = {
  DANHMUCBIEUMAU_GET_LIST_REQUEST: "DANHMUCBIEUMAU_GET_LIST_REQUEST",
  DANHMUCBIEUMAU_GET_LIST_REQUEST_SUCCESS: "DANHMUCBIEUMAU_GET_LIST_REQUEST_SUCCESS",
  DANHMUCBIEUMAU_GET_LIST_REQUEST_ERROR: "DANHMUCBIEUMAU_GET_LIST_REQUEST_ERROR",
  getList: (filterData) => ({
    type: actions.DANHMUCBIEUMAU_GET_LIST_REQUEST,
    payload: { filterData },
  }),
};

export default actions;
