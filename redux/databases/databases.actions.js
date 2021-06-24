import { firestore } from '../../lib/firebase';
import { extractMonthDataFromDB } from '../../lib/databases';
import DatabasesActionTypes from './databases.types';

// ------- ACTIONS -------- //
export const fetchBalanceDataStart = () => ({
  type: DatabasesActionTypes.FETCH_BALANCE_DATA,
});
export const fetchBalanceDataSuccess = (balanceData) => ({
  type: DatabasesActionTypes.FETCH_BALANCE_DATA_SUCCESS,
  payload: balanceData,
});

export const fetchSavingsDataStart = () => ({
  type: DatabasesActionTypes.FETCH_SAVINGS_DATA,
});
export const fetchSavingsDataSuccess = (savingData) => ({
  type: DatabasesActionTypes.FETCH_SAVINGS_DATA_SUCCESS,
  payload: savingData,
});

export const addNewRecordToDatabase = () => ({
  type: DatabasesActionTypes.ADD_NEW_RECORD_TO_DB,
});

// -------- ASYNC --------- //
export const fetchBalanceDataStartAsync = (userId) => {
  return async (dispatch) => {
    dispatch(fetchBalanceDataStart());
    if (userId) {
      const balanceData = await extractMonthDataFromDB(userId, 'balance');
      setTimeout(async () => {
        dispatch(fetchBalanceDataSuccess(balanceData));
      }, 1000);
    }
  };
};
export const fetchSavingsDataStartAsync = (userId) => {
  return async (dispatch) => {
    dispatch(fetchSavingsDataStart());
    if (userId) {
      const savingsData = await extractMonthDataFromDB(userId, 'savings');
      setTimeout(async () => {
        dispatch(fetchSavingsDataSuccess(savingsData));
      }, 1000);
    }
  };
};
