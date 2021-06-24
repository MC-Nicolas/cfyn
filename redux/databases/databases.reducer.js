import DatabasesActionTypes from './databases.types';

export const INITIAL_STATE = {
  balanceData: [],
  savingData: [],
};

const DatabasesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DatabasesActionTypes.FETCH_BALANCE_DATA_SUCCESS:
      return {
        ...state,
        balanceData: action.payload,
      };
    case DatabasesActionTypes.FETCH_SAVINGS_DATA_SUCCESS:
      return {
        ...state,
        savingData: action.payload,
      };
    default:
      return state;
  }
};
export default DatabasesReducer;
