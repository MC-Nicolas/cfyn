import UserActionTypes from './user.types';

const INITIAL_STATE = {
  userEmail: '',
  userId: '',
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.ADMIN_lOGIN_SUCCESS:
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
