import UserActionTypes from './user.types';

const INITIAL_STATE = {
  userEmail: '',
  userId: '',
};
type ACTIONTYPE = {
  type: 'USER_lOGIN_SUCCESS';
  payload: { userEmail: string; userId: string };
};

const UserReducer = (state = INITIAL_STATE, action) => {
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
