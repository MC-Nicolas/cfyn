import UserReducer, { INITIAL_STATE } from './user.reducer';
import { setUserData } from './user.actions';
import UserActionTypes from './user.types';

describe('User Reducer -> setUserData', () => {
  it('Should add userEmail and userId', () => {
    let userEmail = 'testEmail@gmail.com';
    let userId = 'xUserIdx';
    let payload = { userEmail, userId };
    const expectedAction = {
      type: UserActionTypes.USER_LOGIN_SUCCESS,
      payload: {
        userEmail,
        userId,
      },
    };
    expect(setUserData(payload)).toEqual(expectedAction);
  });
});

describe('User Reducer', () => {
  it('Should return initial state', () => {
    expect(UserReducer(undefined, {})).toEqual(INITIAL_STATE);
  });
  it('Should handle User login success', () => {
    expect(
      UserReducer([], {
        type: UserActionTypes.USER_LOGIN_SUCCESS,
        payload: { userEmail: 'mailtest', userId: 'IdTest' },
      })
    ).toEqual({ userEmail: 'mailtest', userId: 'IdTest' });

    expect(
      UserReducer([], {
        type: UserActionTypes.USER_LOGIN_SUCCESS,
        payload: { userEmail: 'test@gmail.com', userId: 'xxD2' },
      })
    ).toEqual({ userEmail: 'test@gmail.com', userId: 'xxD2' });
  });
});
