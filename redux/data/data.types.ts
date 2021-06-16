const DataActionTypes = {
  SET_ARE_DATA_VISIBLE: 'SET_ARE_DATA_VISIBLE',
};

export type ACTIONTYPE = {
  type: 'SET_ARE_DATA_VISIBLE';
  payload: { areDataVisible: boolean };
};

export default DataActionTypes;
