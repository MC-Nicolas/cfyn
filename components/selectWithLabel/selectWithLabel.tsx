import React from 'react';
import { Select } from 'evergreen-ui';

interface Props {
  title: string;
  onChange: (val: string) => void;
  selectOptions: string[];
}

const SelectWithLabel = ({ title, onChange, selectOptions }: Props) => {
  return (
    <div className='flex-container-col'>
      <label>{title}</label>
      <div className='col-container'>
        <Select
          width={260}
          height={40}
          defaultValue='balance'
          onChange={(e) => onChange(e.target.value)}
        >
          {selectOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt.replace(/^\w/, (c) => c.toUpperCase())}
            </option>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default SelectWithLabel;
