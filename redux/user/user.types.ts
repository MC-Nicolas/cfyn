const UserActionTypes = {
  USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
};

export type ACTIONTYPE = {
  type: 'USER_LOGIN_SUCCESS';
  payload: { userEmail: string; userId: string };
};

export default UserActionTypes;
