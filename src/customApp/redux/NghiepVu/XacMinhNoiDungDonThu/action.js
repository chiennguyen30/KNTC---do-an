const actions = {
  GET_DATA_XACMINHNOIDUNGDON: "GET_DATA_XACMINHNOIDUNGDON",
  GET_DATA_XACMINHNOIDUNGDON_SUCCESS: "GET_DATA_XACMINHNOIDUNGDON_SUCCESS",
  GET_DATA_XACMINHNOIDUNGDON_ERROR: "GET_DATA_XACMINHNOIDUNGDON_ERROR",


  getData: (filterData) => ({
    type: actions.GET_DATA_XACMINHNOIDUNGDON,
    payload: { filterData },
  }),
};

export default actions;
