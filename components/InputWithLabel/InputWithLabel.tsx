import React from 'react';

interface Props {
  title: string;
  typeOfInput: 'number' | 'string' | 'email' | 'password' | 'date';
}

export const InputWithLabel = ({ title, typeOfInput }: Props) => {
  return (
    <div className='col-container'>
      <label>{title.replace(/^\w/, (c) => c.toUpperCase())}</label>
      <input type={typeOfInput} className='date-input' />
    </div>
  );
};
