/**
 * @jest-environment jsdom
 */

import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  getNodeText,
} from '@testing-library/react';

import { mapDispatchToProps } from './DataManager';
import { mapStateToProps } from '../navbar/Navbar';

afterEach(cleanup);

test('<DataManager /> Sending userData', async () => {
  const dispatch = jest.fn();
  const userData = {
    userEmail: 'test@gmail.com',
    userId: 'IdTest01',
  };

  await mapDispatchToProps(dispatch).setUser(userData);
  const dispatchFunc = await dispatch.mock.calls[0][0];
  expect(dispatchFunc.type).toBe('USER_lOGIN_SUCCESS');

  expect(dispatchFunc.payload).toStrictEqual({
    userEmail: 'test@gmail.com',
    userId: 'IdTest01',
  });
});
test('<DataManager /> Check if user is set in state', () => {
  const initialState = {
    user: {
      userEmail: 'testMail',
    },
  };

  expect(mapStateToProps(initialState).userEmail).toBe(
    initialState.user.userEmail
  );
});
