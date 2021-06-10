import DataActionTypes from './data.types';

// ------- ACTIONS -------- //
type setDataAreVisibleProps = {
  areDataVisible: boolean;
};
export const setAreDataVisible = (areDataVisible: setDataAreVisibleProps) => ({
  type: DataActionTypes.SET_ARE_DATA_VISIBLE,
  payload: areDataVisible,
});
