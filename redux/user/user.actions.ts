import UserActionTypes from './user.types';
import { firestore } from '../../lib/firebase';

// --------- ACTIONS  ---------- //
type userInfoProps = {
  userEmail: string;
  userId: string;
};
export const setUserData = ({ userEmail, userId }: userInfoProps) => ({
  type: UserActionTypes.USER_LOGIN_SUCCESS,
  payload: { userEmail, userId },
});
