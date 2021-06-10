import DataActionTypes, { ACTIONTYPE } from './data.types';

const INITIAL_STATE = {
  areDataVisible: true,
};

const DataReducer = (state = INITIAL_STATE, action: ACTIONTYPE) => {
  switch (action.type) {
    case DataActionTypes.SET_ARE_DATA_VISIBLE:
      return {
        ...state,
        areDataVisible: action.payload,
      };
    default:
      return state;
  }
};
export default DataReducer;
