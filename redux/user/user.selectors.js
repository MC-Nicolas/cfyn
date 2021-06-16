import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectUserEmail = createSelector(
  [selectUser],
  user => user.userEmail
);
export const selectUserId = createSelector([selectUser], user => user.userId);
