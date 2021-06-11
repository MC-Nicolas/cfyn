import DataReducer, { INITIAL_STATE } from './data.reducer';
import DataActionTypes from './data.types';
import { setAreDataVisible } from './data.actions';

describe('Data Reducer -> Show data', () => {
  it('Should set Action with visibile data', () => {
    let areDataVisible = true;
    const expectedAction = {
      type: DataActionTypes.SET_ARE_DATA_VISIBLE,
      payload: areDataVisible,
    };
    expect(setAreDataVisible(true)).toEqual(expectedAction);
  });

  it('Sould return intial state', () => {
    expect(DataReducer(undefined, {})).toEqual(INITIAL_STATE);
  });
  it('Should handle setDataAreVisible to true', () => {
    expect(
      DataReducer([], {
        type: DataActionTypes.SET_ARE_DATA_VISIBLE,
        payload: true,
      })
    ).toEqual({ areDataVisible: true });
  });
  it('Should handle setDataAreVisible to false', () => {
    expect(
      DataReducer([], {
        type: DataActionTypes.SET_ARE_DATA_VISIBLE,
        payload: true,
      })
    ).toEqual({ areDataVisible: true });
  });
});
