import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setUserData } from '../../redux/user/user.actions';

const DataManager = ({ userData, setUser }) => {
  useEffect(() => {
    if (userData) {
      setUser(userData);
    }
  }, [userData]);
  return null;
};
export const mapDispatchToProps = dispatch => ({
  setUser: ({ userEmail, userId }) =>
    dispatch(setUserData({ userEmail, userId })),
});

export default connect(null, mapDispatchToProps)(DataManager);
