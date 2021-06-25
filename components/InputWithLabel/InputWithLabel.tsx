import React from 'react';

interface Props {
  title: string;
  typeOfInput: 'number' | 'string' | 'email' | 'password' | 'date';
  onChange: () => void;
}

export const InputWithLabel = ({ title, typeOfInput, onChange }: Props) => {
  return (
    <div className='flex-container-col' style={{ width: '100%' }}>
      <label>{title.replace(/^\w/, (c) => c.toUpperCase())}</label>

      <input type={typeOfInput} className='date-input' onChange={onChange} />
    </div>
  );
};
