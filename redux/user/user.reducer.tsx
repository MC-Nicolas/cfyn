import UserActionTypes, { ACTIONTYPE } from './user.types';

export const INITIAL_STATE = {
  userEmail: '',
  userId: '',
};

const UserReducer = (state = INITIAL_STATE, action: ACTIONTYPE) => {
  switch (action.type) {
    case UserActionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        userEmail: action.payload.userEmail,
        userId: action.payload.userId,
      };
    default:
      return state;
  }
};

export default UserReducer;
