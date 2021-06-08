import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setUserData } from '../../redux/user/user.actions';

const DataManager = ({ userData, setUser }) => {
  useEffect(() => {
    if (userData) {
      setUser(userData);
    }
  }, [userData]);
  return <></>;
};
export const mapDispatchToProps = dispatch => ({
  setUser: ({ userEmail, userId }: { userEmail: string; userId: string }) =>
    dispatch(setUserData({ userEmail, userId })),
});

export default connect(null, mapDispatchToProps)(DataManager);
