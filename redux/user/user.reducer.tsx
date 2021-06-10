import UserActionTypes, { ACTIONTYPE } from './user.types';

const INITIAL_STATE = {
  userEmail: '',
  userId: '',
};

const UserReducer = (state = INITIAL_STATE, action: ACTIONTYPE) => {
  switch (action.type) {
    case UserActionTypes.USER_lOGIN_SUCCESS:
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
