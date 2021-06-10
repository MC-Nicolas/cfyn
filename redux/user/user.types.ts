const UserActionTypes = {
  USER_lOGIN_SUCCESS: 'USER_lOGIN_SUCCESS',
};

export type ACTIONTYPE = {
  type: 'USER_lOGIN_SUCCESS',
  payload: { userEmail: string, userId: string },
};

export default UserActionTypes;
