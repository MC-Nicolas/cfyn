import DataActionTypes from './data.types';

// ------- ACTIONS -------- //

export const setAreDataVisible = (areDataVisible: boolean) => ({
  type: DataActionTypes.SET_ARE_DATA_VISIBLE,
  payload: areDataVisible,
});

// -------- ASYNC --------- //
