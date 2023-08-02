const actions = {
  DANHMUCNHOMFILE_GET_LIST_REQUEST : 'DANHMUCNHOMFILE_GET_LIST_REQUEST',
  DANHMUCNHOMFILE_GET_LIST_REQUEST_SUCCESS : 'DANHMUCNHOMFILE_GET_LIST_REQUEST_SUCCESS',
  DANHMUCNHOMFILE_GET_LIST_REQUEST_ERROR : 'DANHMUCNHOMFILE_GET_LIST_REQUEST_ERROR',
  getList : (filterData) => (
    {
    type : actions.DANHMUCNHOMFILE_GET_LIST_REQUEST,
    payload : {filterData}
  })
}

export default actions