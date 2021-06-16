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
import { Button01 } from './Buttons';

test('<Button1 />', () => {
  const title = 'Log in';
  const func = jest.fn();

  const { debug, getByTestId } = render(
    <Button01
      title={title}
      backgroundCol='#FFF'
      textColor='#000'
      onClick={func}
    />
  );

  const buttonOnDOM = getByTestId('button01');
  fireEvent(buttonOnDOM, new MouseEvent('click'));
  expect(buttonOnDOM).toMatchSnapshot();
});
