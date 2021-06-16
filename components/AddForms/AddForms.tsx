import React from 'react';
import { Button01 } from '../buttons/Buttons';
import { InputWithLabel } from '../InputWithLabel/InputWithLabel';

interface Props {}

export const BalanceAddForm = (props: Props) => {
  return (
    <>
      <InputWithLabel title='date' typeOfInput='date' />
      <InputWithLabel title='record' typeOfInput='number' />
      <Button01
        title='Add record'
        backgroundCol='black'
        textColor='white'
        onClick={() => console.log('test')}
      />
    </>
  );
};
