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
import { InputWithIcon } from './Input';

test('<InputWithIcon />', () => {
  const func = jest.fn();

  const { debug, getByTestId } = render(
    <InputWithIcon icon='at' typeOfInput='email' placeholder='email' />
  );

  const inputInDOM = getByTestId('inputWithIcon');
  expect(inputInDOM).toMatchSnapshot();
});
