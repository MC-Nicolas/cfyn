import React from 'react';
import { ButtonLogin } from './Buttons';

test('<ButtonLogin />', () => {
  const { debug, getByTestId } = render(
    <ButtonLogin
      title='Log in'
      backgroundCol='#000'
      textColor='#FFF'
      onClick={() => console.log('Has been clicked')}
    />
  );
  debug();
});
